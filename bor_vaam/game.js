// רשימת המקומות במשחק
const PLACES = [
    // ערים גדולות
    "תל אביב",
    "ירושלים",
    "חיפה",
    "באר שבע",
    "אשדוד",
    "אשקלון",
    "רמת גן",
    "בני ברק",
    "רחובות",
    "בת ים",
    "חולון",
    "פתח תקווה",
    "נתניה",
    "עכו",
    "צפת",
    "טבריה",
    "עפולה",
    "חדרה",
    "נצרת",
    "כרמיאל",
    "אילת",
    "רמלה",
    "לוד",
    "הרצליה",
    "רעננה",
    "כפר סבא",
    "נהריה",
    "קריית גת",
    "קריית מלאכי",
    "ראש העין",
    "מודיעין",
    "קריית ביאליק",
    "קריית ים",
    "קריית מוצקין",
    "קריית אתא",
    "קריית טבעון",
    "נשר",
    "טירת כרמל",
    "אור עקיבא",
    
    "מגדל העמק",
    "יקנעם",
    "זכרון יעקב",
    "בנימינה",
    "גבעת עדה",
    "פרדס חנה",
    "כרכור",

    // צפון
    "מטולה",
    "קריית שמונה",
    "ראש פינה",
    "יסוד המעלה",
    "חצור הגלילית",
    "מגדל",
    "נהריה",
    "שלומי",
    "מעלות",
    "כפר ורדים",
    "מעונה",
    "שומרה",
    "חניתה",
    "יראון",
    "דישון",
    "צפת",
    "מירון",
    "עמוקה",
    "צבעון",
    "מתת",
    "אביבים",
    "דלתון",
    "ברעם",
    "סאסא",
    "גורן",
    "מצובה",
    "שתולה",
    "אדמית",
    "יפתח",
    "מנרה",
    "מרגליות",
    "דפנה",
    "שניר",
    "דן",
    "כפר תבור",
    "עין הנציב",
    "שדה נחמיה",
    "כפר גלעדי",
    "כפר בלום",
    "להבות הבשן",
    "עמיר",
    "כפר סאלד",
    "משגב עם",
    "רמות נפתלי",
    "צוריאל",
    "פקיעין",
    "בית גן",
    "כרם בן זמרה",
    "עלמה",
    "ריחאניה",
    "פרוד",
    "עין אל אסד",
    "כפר חנניה",
   
    "בית גן",
    "שדה אליעזר",
    "שדה אליהו",
    "מסדה",
    "שער הגולן",
    "בית זרע",
    "אשדות יעקב",
    "כנרת מושבה",
    "מנחמיה",
    "גשר",
    "נווה אור",
    "חמדיה",
    "מעוז חיים",
    "כפר רופין",
    "טירת צבי",
    "רשפים",
    "מסילות",
    "מעלה גלבוע",
    "בית יצחק",
    "כפר ויתקין",
    "חרות",
    "בית חרות",
    "בית ינאי",
    "מכמורת",
    "חופית",
    "שפיים",
    "געש",
    "רשפון",
    "בית עובד",
    "בית חנן",
    "גאליה",
    "פלמחים",
    "בית אלעזרי",
    "קבוצת יבנה",
    "בן זכאי",
    "ניר גלים",
    "רביבים",
    "שדה בוקר",
    "משמר הנגב",
    "בית קמה",
    "ברוש",
    "תדהר",
    "תאשור",
    "רנן",
    "שרשרת",
    "מעגלים",
    "גילת",
    "פדויים",
    "פטיש",
    "תפרח",
    "אשבול",
    "ניר משה",
    "ניר עקיבא",
    "קלחים",
    "שדה צבי",
    "תלמי בילו",
    "אורות",
    "שדה דוד",
    "נועם",
    "ניר חן",
    "זוהר",
    "שחר",
    "אמונים",
    "עין צורים",
    "שפיר",
    "זבדיאל",
    "רווחה",
    "איתן",
    "שלווה",
    // עמק הירדן
    "דגניה א",
    "דגניה ב",
    "כנרת",
    "מעגן",
    "עין גב",
    "האון",
    // יהודה ושומרון נוספים
    "עלי",
    "קריית ארבע",
    "גבעת זאב",
    "נעלה",
    "עטרת",
    "ברוכין",
    "הר אדר",
    "חרשה",
    "טלמון",
    "כפר אדומים",
    "נופי פרת",
    "נחליאל",
    "עץ אפרים",
    // בקעת הירדן
    "אלמוג",
    "בית הערבה",
    "ורד יריחו",
    "מצפה יריחו",
    "נערן",
    "נתיב הגדוד",
    "פצאל",
    "קליה",
    "רועי",
    "תומר",
    "יטב",
    "משכיות",
    "חמדת",
    "רותם",
    "בקעות",
    "חמרה",
    "מחולה",
    "שדמות מחולה",
    "גיתית",
    "מכורה",
    // מושבים וקיבוצים בצפון
    "מעיין ברוך",
    "כפר גלעדי",
    "מטולה",
    "משגב עם",
    "מנרה",
    "מרגליות",
    "דישון",
    "רמות נפתלי",
    "יראון",
    "ברעם",
    "צבעון",
    "דלתון",
    "ריחנית",
    "אביבים",
    "דובב",
    "כרם בן זמרה",
    "אור הגנוז",
    "בר יוחאי",
    "מירון",
    "ספסופה",
    "כלנית",
    "קדרים",
    "אמירים",
    "שפר",
    "שזור",
    "פרוד",
    "עלמה",
    "הררית",
    "יובלים",
    "מורשת",
    "מכמנים",
    "מעלה צביה",
    // מושבים וקיבוצים במרכז
    "בית חרות",
    "בית ינאי",
    "חרוצים",
    "רשפון",
    "בני ציון",
    "בצרה",
    "חגור",
    "ירחיב",
    "גן חיים",
    "עדנים",
    "צור נתן",
    "ניר אליהו",
    "גבעת חן",
    "שדה ורבורג",
    "צופית",
    "גני עם",
    "כפר מלל",
    "רמות השבים",
    "עינת",
    "גבעת השלושה",
    "חמד",
    "צפריה",
    "זיתן",
    "גנות",
    "כפר חבד",
    // מושבים וקיבוצים בדרום
    "נחל עוז",
    "גברעם",
    "יד מרדכי",
    "כרמיה",
    "זיקים",
    "ברור חיל",
    "דורות",
    "רוחמה",
    "שובל",
    "משמר הנגב",
    "דביר",
    "להב",
    "כרמים",
    // התיישבות חדשה בנגב
    "כרמית",
    "חירן",
    "עיר אובות",
    "כחל",
    "נווה גוריון",
    // התנחלויות נוספות
    "כרמי צור",
    "מעלה חבר",
    "נגוהות",
    "טנא",
    "מצדות יהודה",
    "סוסיא",
    "אספר",
    "מעון",
    "עתניאל",
    "שמעה",
    "אדורה",
    "תלם",
    "אשכולות",
    "נחל נגוהות",
    "שני",
    "חגי",
    "בית חגי",
    "אמציה",
    // עוד יישובים קהילתיים
    "נופית",
    "צור הדסה",
    "מיתר",
    "עומר",
    "להבים",
    "אלון הגליל",
    "גבעת אלה",
    "תמרת",
    "נהלל",
    "שריד",
    "גניגר",
    "כפר יהושע",
    "בית שערים",
    "שדה יעקב",
    "אבו גוש",
    "מגדל עוז",
    "מעגן מיכאל",
    "גבעת עדה",
    // מקומות קצרים
    "בית אל",
    "רמות",
    "מצפה",
    "נווה",
    "אלון",
    "בארי",
    "מעגן",
    "מגדל",
    "גבע",
    "שדה יעקב",
    // יישובי כוכב
    "כוכב השחר",
    "כוכב יאיר",
    "כוכב יעקב",
    "כוכב מיכאל",
    // יישובים נוספים
    "צור הדסה",
    "צור יצחק",
    "צור משה",
    "צור נתן",
    "גבעת זאב",
    "גבעת חן",
    "גבעת ברנר",
    "גבעת עוז",
    "גבעת יערים",
    "גבעת ישעיהו",
    "גבעת כח",
    "גבעת שפירא",
    "מבוא חורון",
    "מבוא ביתר",
    "מבוא דותן",
    "מבוא מודיעים",
    "מבוא חמה",
    "שער אפרים",
    "שער הגולן",
    "שער העמקים",
    "שער מנשה",
    "כפר אדומים",
    "כפר אוריה",
    "כפר ביאליק",
    "כפר גלעדי",
    "כפר דניאל",
    "כפר הרואה",
    "כפר ורדים",
    "כפר זיתים",
    "כפר חסידים",
    "כפר טרומן",
    "כפר יונה",
    "כפר מל״ל",
    "כפר מנחם",
    "כפר מרדכי",
    "כפר נטר",
    "כפר סבא",
    "כפר עציון",
    "כפר פינס",
    "כפר קאסם",
    "כפר קיש",
    "כפר רות",
    "כפר שמאי",
    "כפר שמואל",
    "כפר שמריהו",
    "כפר תבור",
    "כפר תפוח",
    "אבו גוש",
    "שבות רחל",
    "שבי שומרון",
    "מצפה מדרג",
    "שומריה",
    "שבי ציון",
    "שבי דרום",
    "מצפה יריחו",
    "מצפה שלם",
    "מצפה נטופה",
    "מצפה אביב",
    "מצפה רמון",
    "מצפה נבו",
    "מצפה רמות",
    "מצפה הושעיה",
    "מצפה אילן",
    "מעלה אדומים",
    "מעלה אפרים",
    "מעלה גלבוע",
    "מעלה גמלא",
    "מעלה החמישה",
    "מעלה לבונה",
    "מעלה מכמש",
    "מעלה עירון",
    "מעלה עמוס",
    "מעלה שומרון",
    "מעלה יוסף",
    "מעלה עוז",
    "מעלה רחבעם",
    "מעלות תרשיחא",
    "נווה דניאל",
    "נווה זוהר",
    "נווה זיו",
    "נווה חריף",
    "נווה ים",
    "נווה ימין",
    "נווה ירק",
    "נווה מבטח",
    "נווה מיכאל",
    "נווה שלום",
    "נווה צוף",
    "נווה אטי״ב",
    "נווה אילן",
    "נווה אור",
    "נווה איתן",
    "נווה דקלים",
    "נווה הרצוג",
    "רמות השבים",
    "רמות מאיר",
    "רמות מנשה",
    "רמות נפתלי",
    "רמות ספיר",
    "אלון מורה",
    "אלון שבות",
    "אלוני אבא",
    "אלוני הבשן",
    "אלוני יצחק",
    "בארי",
    "באר אורה",
    "באר טוביה",
    "באר יעקב",
    "באר מילכה",
    "באר שבע",
    "שדה יעקב",
    // יישובים נוספים מהרשימה
    "שחרות",
    "גרופית",
    "נאות סמדר",
    "עיר אובות",
    "ניצני סיני",
    "נאות הכיכר",
    "טללים",
    "רתמים",
    "צוחר",
    "מסלול",
    "בטחה",
    "הר עמשא",
    "מצדות יהודה",
    "טנא",
    "מלילות",
    "אשכולות",
    "שיבולים",
    "גבעולים",
    "תושייה",
    "יזרעם",
    "זרועה",
    "פני חבר",
    "חגי",
    "נגוהות",
    "שקף",
    "אמציה",
    "אדורה",
    "אחוזם",
    "ניסנית",
    "אספר",
    "גברעם",
    "עוזה",
    "נהורה",
    "נוגה",
    "גיאה",
    "נחושה",
    "גלאון",
    "עוצם",
    "שדה יואב",
    "בית ניר",
    "אלומה",
    "יד נתן",
    "מנוחה",
    "אדרת",
    "צפרירים",
    "ורדון",
    "גבעת ישעיהו",
    "סגולה",
    "שריגים",
    "אביעזר",
    "לוזית",
    "עגור",
    "זכריה",
    "צור הדסה",
    "מטע",
    "בר גיורא",
    "ערוגות",
    "גפן",
    "ינון",
    "אחווה",
    "נס הרים",
    "מחסיה",
    "תירוש",
    "ישעי",
    "עמינדב",
    "אורה",
    "אבן ספיר",
    "נחם",
    "כסלון",
    "רינתיה",
    "פצאל",
    "מגשימים",
    "מזור",
    "נחלים",
    "גת רימון",
    "גיתית",
    "משואה",
    "קריית נטפים",
    "מכורה",
    "ארגמן",
    "חמרה",
    "רועי",
    "חמדת",
    "משכיות",
    "רותם",
    "שא נור",
    "שדמות מחולה",
    "מחולה",
    "גאולי תימן",
    "בכורה",
    "רוויה",
    "כדים",
    "מירב",
    "מי עמי",
    "חפצי בה",
    "מגן שאול",
    "רם און",
    "חבר",
    "מלאה",
    "דלייה",
    "סולם",
    "אחוזת ברק",
    "כפר מצר",
    "דברת",
    "מזרע",
    "גיניגר",
    "כפר החורש",
    "בית זיד",
    "כדורי",
    "מנשית זבדה",
    "שמשית",
    "הזורעים",
    "אילנייה",
    "הושעיה",
    "אבטין",
    "הרדוף",
    "גבעת אבני",
    "רומאנה",
    "עוזייר",
    "אלי עד",
    "כפר חיטים",
    "ארבל",
    "מורשת",
    "יודפת",
    "אבטליון",
    "קורנית",
    "הררית",
    "שכניה",
    "רביד",
    "מנוף",
    "רקפת",
    "לבנים",
    "שגב",
    "טפחות",
    "כלנית",
    "יעד",
    "חוקוק",
    "יובל",
    "לוטם",
    "אשחר",
    "כחל",
    "שורשים",
    "קדרים",
    "אמנון",
    "חזון",
    "מכמנים",
    "כורזים",
    "כמון",
    "מורן",
    "טל אל",
    "תובל",
    "כרכום",
    "שזור",
    "פלך",
    "נחף",
    "לבון",
    "שפר",
    "כישור",
    "אליפלט",
    "חלוץ",
    "גיתה",
    "כליל",
    "פקיעין חדשה",
    "בר יוחאי",
    "אור הגנוז",
    "חוסן",
    "געתון",
    "כפר חושן",
    "עין יעקב",
    "נווה זיו",
    "הילה",
    "מנות",
    "עבדון",
    "גורן",
    "גורנות הגליל",
    "לימן",
    "נטועה",
    "יערה",
    "אבן מנחם",
    "כפר ראש הנקרה",
    "מלכייה",
    "זרעית",
    "גונן",
    "נאות מרדכי",
    "שמיר",
    "אל רום",
    "בית הלל",
    "הגושרים",
    "שאר ישוב",
    "מעיין ברוך",
    "יובל",
    "נחל נמרוד",
    "מגדל שמס",
    "נווה אטיב",
    "מטולה",
    "אילות",
    "אליפז",
    "סמר",
    "יטבתה",
    "קטורה",
    "לוטן",
    "נווה חריף",
    "יהל",
    "פארן",
    "צופר",
    "ספיר",
    "עין יהב",
    "חצבה",
    "עידן",
    "שדה בוקר",
    "כמהין",
    "אשלים",
    "ירוחם",
    "משאבי שדה",
    "נאות סמדר",
    "עיר אובות",
    "ניצני סיני",
    "נאות הכיכר",
    "טללים",
    "רתמים",
    "צוחר",
    "מסלול",
    "בטחה",
    "הר עמשא",
    "מצדות יהודה",
    "טנא",
    "מלילות",
    "אשכולות",
    "שיבולים",
    "גבעולים",
    "תושייה",
    "יזרעם",
    "זרועה",
    "פני חבר",
    "חגי",
    "נגוהות",
    "שקף",
    "אמציה",
    "אדורה",
    "אחוזם",
    "ניסנית",
    "אספר",
    "גברעם",
    "עוזה",
    "נהורה",
    "נוגה",
    "גיאה",
    "נחושה",
    "גלאון",
    "עוצם",
    "שדה יואב",
    "בית ניר",
    "אלומה",
    "יד נתן",
    "מנוחה",
    "אדרת",
    "צפרירים",
    "ורדון",
    "גבעת ישעיהו",
    "סגולה",
    "שריגים",
    "אביעזר",
    "לוזית",
    "עגור",
    "זכריה",
    "צור הדסה",
    "מטע",
    "בר גיורא",
    "ערוגות",
    "גפן",
    "ינון",
    "אחווה",
    "נס הרים",
    "מחסיה",
    "תירוש",
    "ישעי",
    "עמינדב",
    "אורה",
    "אבן ספיר",
    "נחם",
    "כסלון",
    "רינתיה",
    "פצאל",
    "מגשימים",
    "מזור",
    "נחלים",
    "גת רימון",
    "גיתית",
    "משואה",
    "קריית נטפים",
    "מכורה",
    "ארגמן",
    "חמרה",
    "רועי",
    "חמדת",
    "משכיות",
    "רותם",
    "שא נור",
    "שדמות מחולה",
    "מחולה",
    "גאולי תימן",
    "בכורה",
    "רוויה",
    "כדים",
    "מירב",
    "מי עמי",
    "חפצי בה",
    "מגן שאול",
    "רם און",
    "חבר",
    "מלאה",
    "דלייה",
    "סולם",
    "אחוזת ברק",
    "כפר מצר",
    "דברת",
    "מזרע",
    "גיניגר",
    "כפר החורש",
    "בית זיד",
    "כדורי",
    "מנשית זבדה",
    "שמשית",
    "הזורעים",
    "אילנייה",
    "הושעיה",
    "אבטין",
    "הרדוף",
    "גבעת אבני",
    "רומאנה",
    "עוזייר",
    "אלי עד",
    "כפר חיטים",
    "ארבל",
    "מורשת",
    "יודפת",
    "אבטליון",
    "קורנית",
    "הררית",
    "שכניה",
    "רביד",
    "מנוף",
    "רקפת",
    "לבנים",
    "שגב",
    "טפחות",
    "כלנית",
    "יעד",
    "חוקוק",
    "יובל",
    "לוטם",
    "אשחר",
    "כחל",
    "שורשים",
    "קדרים",
    "אמנון",
    "חזון",
    "מכמנים",
    "כורזים",
    "כמון",
    "מורן",
    "טל אל",
    "תובל",
    "כרכום",
    "שזור",
    "פלך",
    "נחף",
    "לבון",
    "שפר",
    "כישור",
    "אליפלט",
    "חלוץ",
    "גיתה",
    "כליל",
    "פקיעין חדשה",
    "בר יוחאי",
    "עמוקה",
    "אור הגנוז",
    "חוסן",
    "געתון",
    "כפר חושן",
    "עין יעקב",
    "נווה זיו",
    "הילה",
    "מנות",
    "עבדון",
    "גורן",
    "גורנות הגליל",
    "לימן",
    "נטועה",
    "יערה",
    "אבן מנחם",
    "כפר ראש הנקרה",
    "מלכייה",
    "זרעית",
    "גונן",
    "נאות מרדכי",
    "שמיר",
    "אל רום",
    "בית הלל",
    "הגושרים",
    "שאר ישוב",
    "מעיין ברוך",
    "יובל",
    "נחל נמרוד",
    "מגדל שמס",
    "נווה אטיב",
    "מטולה",
];

// רשימת מקומות מיוחדים שיש להם המשך
const specialPlaces = [
    'בית אל', 
    'רמות', 
    'מצפה', 
    'נווה', 
    'אלון', 
    'בארי',
    'מעגן',
    'מגדל',
    'גבע'
];

// המרת שמות המקומות לפורמט המשחק (ללא רווחים)
function convertToGameFormat(place) {
    return place
        .replace(/ך/g, 'כ')
        .replace(/ם/g, 'מ')
        .replace(/ן/g, 'נ')
        .replace(/ף/g, 'פ')
        .replace(/ץ/g, 'צ')
        .replace(/\s+/g, '');
}

// המרה חזרה לפורמט תצוגה
function convertToDisplayFormat(gamePlace) {
    // מחפש את המקום המקורי שמתאים לפורמט המשחק
    return PLACES.find(place => convertToGameFormat(place) === gamePlace) || gamePlace;
}

let gamePlaces;        // רשימת המקומות בפורמט משחק
let usedPlaces;        // מקומות שכבר היו במשחק
let currentLetters = [];  // האותיות הנוכחיות בלוגיקה של המשחק
let displayLetters = [];  // האותיות שמוצגות למשתמש
let score;            // ניקוד השחקן

// אתחול המשחק
function initGame() {
    // הסרת כפילויות בעת יצירת רשימת המקומות למשחק
    gamePlaces = [...new Set(PLACES)].map(convertToGameFormat);
    usedPlaces = new Set();
    currentLetters = [];  
    displayLetters = [];  
    score = 0;
    updateScore();
    
    // בחירת אות ראשונה אקראית
    const firstLetter = gamePlaces[Math.floor(Math.random() * gamePlaces.length)][0];
    addLetter(firstLetter, 'computer');
}

// הוספת אות למשחק
function addLetter(letter, source) {
    const letterObj = { letter, source };
    currentLetters.push(letterObj);
    displayLetters.push(letterObj);
    
    // עדכון התצוגה - רק 5 אותיות אחרונות
    const lettersDiv = document.getElementById('letters');
    lettersDiv.innerHTML = '';
    
    // לוקח את 5 האותיות האחרונות
    const lastFiveLetters = displayLetters.slice(-5);
    
    lastFiveLetters.forEach(l => {
        const span = document.createElement('span');
        span.textContent = l.letter;
        span.className = l.source;
        lettersDiv.appendChild(span);
    });
}

// עדכון תצוגת האותיות
function updateLettersDisplay() {
    const display = document.getElementById('letters-display');
    display.innerHTML = '';
    
    // הצג רק את 5 האותיות האחרונות
    const lettersToShow = currentLetters.slice(-5);
    
    lettersToShow.forEach(({ letter, source }) => {
        const letterDiv = document.createElement('div');
        letterDiv.className = `letter ${source}-letter`;
        letterDiv.textContent = letter;
        display.appendChild(letterDiv);
    });
}

// בדיקה האם האות מתאימה למהלך
function isValidLetter(letter) {
    if (!letter || letter.length !== 1) return false;
    
    const currentWord = currentLetters.map(l => l.letter).join('');
    
    // אם אין מילה נוכחית, כל אות חוקית
    if (currentWord === '') return true;
    
    // בודקים אם המילה הנוכחית היא מקום שלם
    const isCompletePlace = gamePlaces.some(place => place === currentWord && !usedPlaces.has(place));
    
    // בודקים אם האות האחרונה היא מהמחשב
    const lastLetter = currentLetters[currentLetters.length - 1];
    const isLastLetterFromComputer = lastLetter && lastLetter.source === 'computer';
    
    // אם זה מקום מיוחד והאות האחרונה מהמחשב
    if (isCompletePlace && specialPlaces.includes(currentWord) && isLastLetterFromComputer) {
        // מאפשרים או להמשיך את המקום הארוך או להתחיל מקום חדש עם האות של המחשב
        const lastComputerLetter = lastLetter.letter;
        return gamePlaces.some(place => 
            !usedPlaces.has(place) && (
                // או להמשיך את המקום הארוך
                place.startsWith(currentWord + letter) ||
                // או להתחיל מקום חדש עם האות של המחשב
                place.startsWith(lastComputerLetter + letter)
            )
        );
    }
    
    // אחרת, בודקים אם יש מקום שמתחיל במה שיש + האות החדשה
    return gamePlaces.some(place => 
        !usedPlaces.has(place) && 
        place.startsWith(currentWord + letter)
    );
}

// מציאת אות המחשב
function findComputerLetter() {
    const currentWord = currentLetters.map(l => l.letter).join('');
    
    // אם זה מקום מיוחד שיש לו המשך, תמיד נבחר להמשיך אותו
    if (specialPlaces.includes(currentWord)) {
        const longerPlaces = gamePlaces.filter(place => 
            !usedPlaces.has(place) && 
            place.startsWith(currentWord) && 
            place.length > currentWord.length
        );
        
        if (longerPlaces.length > 0) {
            const randomPlace = longerPlaces[Math.floor(Math.random() * longerPlaces.length)];
            return {
                letter: randomPlace[currentWord.length],
                source: 'computer'
            };
        }
    }
    
    // מציאת כל המקומות האפשריים שמתחילים במילה הנוכחית
    const possiblePlaces = gamePlaces.filter(place => 
        !usedPlaces.has(place) && 
        place.startsWith(currentWord) && 
        place.length > currentWord.length
    );
    
    if (possiblePlaces.length === 0) return null;
    
    // בחירה אקראית של מקום מהאפשריים
    const randomPlace = possiblePlaces[Math.floor(Math.random() * possiblePlaces.length)];
    return {
        letter: randomPlace[currentWord.length],
        source: 'computer'
    };
}

// בדיקה האם הושלם מקום
function checkCompletedPlace() {
    const currentWord = currentLetters.map(l => l.letter).join('');
    let completedPlace = null;
    
    // בדיקה האם יש מקום שהושלם
    for (const place of gamePlaces) {
        if (!usedPlaces.has(place) && place === currentWord) {
            completedPlace = place;
            break;
        }
    }
    
    if (completedPlace) {
        // אם זה מקום מיוחד, לא נסמן אותו כבשימוש עדיין
        if (specialPlaces.includes(completedPlace)) {
            return false;
        }
        
        // אם זה מקום רגיל, מסמנים אותו כבשימוש
        usedPlaces.add(completedPlace);
        currentLetters = [];
        return true;
    }
    
    return false;
}

// מציאת אות התחלה חדשה
function findNewStartingLetter() {
    const availablePlaces = gamePlaces.filter(place => !usedPlaces.has(place));
    if (availablePlaces.length === 0) return null;
    
    const randomPlace = availablePlaces[Math.floor(Math.random() * availablePlaces.length)];
    return randomPlace[0];
}

// עדכון הניקוד
function updateScore() {
    document.getElementById('score').textContent = `ניקוד: ${score}`;
}

// מציאת כל האותיות האפשריות למהלך
function findPossibleLetters() {
    const currentWord = currentLetters.map(l => l.letter).join('');
    const possibleLetters = new Set();
    
    // מציאת כל האותיות האפשריות להמשך
    gamePlaces.forEach(place => {
        if (!usedPlaces.has(place) && place.startsWith(currentWord) && currentWord.length < place.length) {
            const nextLetter = place[currentWord.length];
            if (nextLetter) possibleLetters.add(nextLetter);
        }
    });
    
    return Array.from(possibleLetters);
}

// מציאת מקומות אפשריים להמשך
function findPossiblePlaces() {
    const currentWord = currentLetters.map(l => l.letter).join('');
    const possiblePlaces = [];
    
    gamePlaces.forEach(place => {
        if (!usedPlaces.has(place) && place.startsWith(currentWord) && currentWord.length < place.length) {
            possiblePlaces.push(place);
        }
    });
    
    return possiblePlaces;
}

// פונקציה לסיום המשחק
function endGame(reason) {
    document.getElementById('game-over').style.display = 'block';
    const gameOverText = document.getElementById('game-over-text');
    
    // הצגת המקומות שהיו במשחק
    const usedPlacesList = Array.from(usedPlaces)
        .map(place => convertToDisplayFormat(place))
        .join(', ');
    
    const currentWord = currentLetters.map(l => l.letter).join('');
    
    let message = `המקומות שהיו במשחק: ${usedPlacesList}<br><br>`;
    
    if (reason === "invalid_letter") {
        message += `האות האחרונה שהקלדת לא מתאימה.<br>`;
        const possiblePlaces = findPossiblePlaces();
        if (possiblePlaces.length > 0) {
            // הסרת כפילויות מהרשימה
            const uniquePlaces = [...new Set(possiblePlaces)];
            const displayPlaces = uniquePlaces.map(place => convertToDisplayFormat(place));
            message += `היה אפשר להמשיך למקומות: ${displayPlaces.join(', ')}`;
        }
    } else if (reason === "no_continuation") {
        message += `לא נמצא המשך למילה "${convertToDisplayFormat(currentWord)}".<br>`;
        const possibleLetters = findPossibleLetters();
        if (possibleLetters.length > 0) {
            const possibleContinuations = new Map(); // שימוש ב-Map למניעת כפילויות
            for (const letter of possibleLetters) {
                const testWord = currentWord + letter;
                const matchingPlaces = gamePlaces.filter(place => 
                    !usedPlaces.has(place) && 
                    place.startsWith(testWord)
                );
                if (matchingPlaces.length > 0) {
                    possibleContinuations.set(letter, matchingPlaces.map(p => convertToDisplayFormat(p)));
                }
            }
            if (possibleContinuations.size > 0) {
                message += `היה אפשר להמשיך עם:<br>`;
                for (const [letter, places] of possibleContinuations) {
                    // הסרת כפילויות מרשימת המקומות
                    const uniquePlaces = [...new Set(places)];
                    message += `האות "${letter}" למקומות: ${uniquePlaces.join(', ')}<br>`;
                }
            }
        }
    }
    
    gameOverText.innerHTML = message;
    document.getElementById('letter-input').disabled = true;
}

// התחלת משחק חדש
function startNewGame() {
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('letter-input').disabled = false;
    document.getElementById('letters').innerHTML = '';
    initGame();
}

// מאזין ללחיצה על Enter
document.getElementById('letter-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitLetter();
    }
});

// טיפול בהגשת אות
function submitLetter() {
    const input = document.getElementById('letter-input');
    const letter = input.value.trim();
    input.value = '';
    
    if (!letter) return;
    
    if (isValidLetter(letter)) {
        addLetter(letter, 'player');
        score++;
        updateScore();
        
        const completedPlace = checkCompletedPlace();
        
        // תור המחשב
        const computerLetter = findComputerLetter();
        if (computerLetter) {
            addLetter(computerLetter.letter, 'computer');
            checkCompletedPlace();
        } else if (!completedPlace) {  // מסיימים רק אם לא הושלם מקום
            // המחשב לא מצא המשך - סיום המשחק
            endGame("no_continuation");
        }
    } else {
        // האות לא תקינה - סיום המשחק
        endGame("invalid_letter");
    }
}

// התחלת המשחק
initGame();
