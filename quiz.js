// נתוני הערים
let citiesData = {
    northToSouth: [],
    westToEast: []
};

let currentQuestion = 0;
let score = 0;
let currentMode = 'north';
const TOTAL_QUESTIONS = 10;  // מספר השאלות במשחק

// קריאת קובץ טקסט
async function loadTextFile(filename) {
    try {
        console.log(`מנסה לטעון את הקובץ: ${filename}`);
        const response = await fetch(filename);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        return text;
    } catch (error) {
        console.error(`שגיאה בטעינת הקובץ ${filename}:`, error);
        throw error;
    }
}

// טעינת הנתונים מהקבצים
async function loadData() {
    try {
        // טעינת הקבצים
        const northSouthText = await loadTextFile('1.txt');
        const westEastText = await loadTextFile('2.txt');

        // עיבוד הנתונים
        citiesData.northToSouth = parseTextData(northSouthText);
        citiesData.westToEast = parseTextData(westEastText);

        // הסרת כפילויות
        citiesData.northToSouth = removeDuplicates(citiesData.northToSouth);
        citiesData.westToEast = removeDuplicates(citiesData.westToEast);

        console.log('נתוני צפון-דרום:', citiesData.northToSouth.length, 'ערים');
        console.log('נתוני מזרח-מערב:', citiesData.westToEast.length, 'ערים');

        if (citiesData.northToSouth.length < 3 || citiesData.westToEast.length < 3) {
            throw new Error('לא נמצאו מספיק נתונים תקינים בקבצים');
        }

        // התחלת המשחק
        currentQuestion = 0;
        score = 0;
        currentMode = 'north';
        loadQuestion();
    } catch (error) {
        console.error('שגיאה:', error);
        alert('שגיאה בטעינת הקבצים: ' + error.message);
    }
}

// הסרת כפילויות
function removeDuplicates(cities) {
    const seen = new Set();
    return cities.filter(city => {
        if (seen.has(city.name)) {
            return false;
        }
        seen.add(city.name);
        return true;
    });
}

function parseTextData(text) {
    const cities = [];
    const lines = text.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;  // דלג על שורות ריקות
        
        const parts = line.split('\t');
        if (parts.length >= 2) {
            const coordinate = parseFloat(parts[0]);
            const name = parts[1].trim();
            
            if (name && !isNaN(coordinate) && name !== '[StartOfDocument .]' && name !== '[EndOfDocument .]') {
                cities.push({ name, coordinate });
            }
        }
    }
    
    return cities;
}

function generateQuestion() {
    const cities = currentMode === 'north' ? citiesData.northToSouth : citiesData.westToEast;
    if (!cities || cities.length < 3) {
        alert('לא נמצאו מספיק נתונים');
        return null;
    }
    
    // בחר 3 ערים אקראיות
    const selectedCities = [];
    const usedIndices = new Set();
    
    while (selectedCities.length < 3 && usedIndices.size < cities.length) {
        const randomIndex = Math.floor(Math.random() * cities.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            selectedCities.push(cities[randomIndex]);
        }
    }
    
    // מיון הערים לפי הקואורדינטה
    const sortedCities = [...selectedCities].sort((a, b) => b.coordinate - a.coordinate);
    const correctCity = sortedCities[0];
    const secondCity = sortedCities[1];
    const difference = Math.abs(correctCity.coordinate - secondCity.coordinate);
    
    return {
        cities: selectedCities.map(city => city.name),
        correctAnswer: correctCity.name,
        secondPlace: secondCity.name,
        difference: difference
    };
}

function loadQuestion() {
    // בדיקה אם המשחק הסתיים
    if (currentQuestion >= TOTAL_QUESTIONS) {
        alert(`המשחק הסתיים! הצלחת לענות נכון על ${score} שאלות מתוך ${TOTAL_QUESTIONS}`);
        if (confirm('האם תרצה להתחיל משחק חדש?')) {
            currentQuestion = 0;
            score = 0;
            currentMode = 'north';
        } else {
            return;
        }
    }

    const questionData = generateQuestion();
    if (!questionData) return;
    
    currentQuestion++;
    
    // הצג את מספר השאלה הנוכחית
    document.getElementById('score').textContent = 
        `שאלה ${currentQuestion} מתוך ${TOTAL_QUESTIONS} | ניקוד: ${score}`;
    
    // הצג את השאלה
    const questionEl = document.getElementById('question');
    questionEl.textContent = currentMode === 'north' ? 
        'איזה יישוב צפוני יותר?' :
        'איזה יישוב מזרחי יותר?';
    
    // הצג את האפשרויות
    const optionsEl = document.getElementById('options');
    optionsEl.innerHTML = questionData.cities
        .map(city => `<button class="option">${city}</button>`)
        .join('');
    
    // הוסף מאזיני לחיצה
    document.querySelectorAll('.option').forEach(button => {
        button.addEventListener('click', () => checkAnswer(button.textContent, questionData));
    });
    
    // נקה את המשוב הקודם
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.className = 'feedback';
    feedbackEl.textContent = '';
}

function checkAnswer(selectedCity, questionData) {
    const feedbackEl = document.getElementById('feedback');
    const difference = Math.round(questionData.difference / 1000); // המרה לקילומטרים
    
    if (selectedCity === questionData.correctAnswer) {
        score++;
        feedbackEl.className = 'feedback correct';
        feedbackEl.textContent = `נכון! ${questionData.correctAnswer} ${currentMode === 'north' ? 'צפונית' : 'מזרחית'} ב-${difference} ק"מ מ${questionData.secondPlace}`;
    } else {
        feedbackEl.className = 'feedback incorrect';
        feedbackEl.textContent = `לא נכון. ${questionData.correctAnswer} ${currentMode === 'north' ? 'צפונית' : 'מזרחית'} ב-${difference} ק"מ מ${questionData.secondPlace}`;
    }
    
    document.getElementById('score').textContent = 
        `שאלה ${currentQuestion} מתוך ${TOTAL_QUESTIONS} | ניקוד: ${score}`;
    
    // עבור לשאלה הבאה אחרי 3 שניות
    setTimeout(() => {
        currentMode = currentMode === 'north' ? 'east' : 'north';
        loadQuestion();
    }, 3000);
}

// התחל את המשחק כשהדף נטען
document.addEventListener('DOMContentLoaded', loadData);
