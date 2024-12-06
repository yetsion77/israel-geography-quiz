// רשימת המקומות במשחק
const PLACES = [
"אבטליון",
    "אביאל",
    "אביבים",
    "אביגדור",
    "אביגיל",
    "אביחיל",
    "אביטל",
    "אביעזר",
    "אבירים",
    "אבן יהודה",
    "אבן מנחם",
    "אבן ספיר",
    "אבן שמואל",
    "אבני איתן",
    "אבני חפץ",
    "אבנת",
    "אבשלום",
    "אדורה",
    "אדירים",
    "אדם",
    "אדמית",
    "אדרת",
    "אודים",
    "אודם",
    "אוהד",
    "אומן",
    "אומץ",
    "אופקים",
    "אור הגנוז",
    "אור הנר",
    "אור יהודה",
    "אור עקיבא",
    "אורה",
    "אורות",
    "אורטל",
    "אורים",
    "אורנית",
    "אושה",
    "אזור",
    "אחווה",
    "אחוזם",
    "אחוזת ברק",
    "אחיה",
    "אחיהוד",
    "אחיטוב",
    "אחיסמך",
    "אחיעזר",
    "איבים",
    "אייל",
    "איילת השחר",
    "אילון",
    "אילות",
    "אילניה",
    "אילת",
    "אירוס",
    "איתמר",
    "איתן",
    "אלומה",
    "אלומות",
    "אלון הגליל",
    "אלון מורה",
    "אלון שבות",
    "אלוני אבא",
    "אלוני הבשן",
    "אלוני יצחק",
    "אלונים",
    "אליאב",
    "אליכין",
    "אליעד",
    "אליפז",
    "אליפלט",
    "אליקים",
    "אלישיב",
    "אלישמע",
    "אלמגור",
    "אלמוג",
    "אלעד",
    "אלעזר",
    "אלפי מנשה",
    "אלקוש",
    "אלקנה",
    "אלרום",
    "אמונים",
    "אמירים",
    "אמנון",
    "אמציה",
    "אניעם",
    "אספר",
    "אפיק",
    "אפיקים",
    "אפק",
    "אפרת",
    "ארבל",
    "ארגמן",
    "ארז",
    "אריאל",
    "ארסוף",
    "אשבול",
    "אשבל",
    "אשדוד",
    "אשדות יעקב",
    "אשחר",
    "אשכולות",
    "אשל הנשיא",
    "אשלים",
    "אשקלון",
    "אשרת",
    "אשתאול",
    "אתגר",

    // ב
    "באר אורה",
    "באר גנים",
    "באר טוביה",
    "באר יעקב",
    "באר מילכה",
    "באר שבע",
    "בארות יצחק",
    "בארותיים",
    "בארי",
    "בוסתן הגליל",
    "בורגתה",
    "בחן",
    "בטחה",
    "ביצרון",
    "ביריה",
    "בית אורן",
    "בית אל",
    "בית אלעזרי",
    "בית אלפא",
    "בית אריה",
    "בית ברל",
    "בית גוברין",
    "בית גמליאל",
    "בית דגן",
    "בית הגדי",
    "בית הלוי",
    "בית הלל",
    "בית העמק",
    "בית הערבה",
    "בית השיטה",
    "בית זיד",
    "בית זית",
    "בית זרע",
    "בית חגי",
    "בית חוגלה",
    "בית חורון",
    "בית חירות",
    "בית חלקיה",
    "בית חנן",
    "בית חנניה",
    "בית חשמונאי",
    "בית יהושע",
    "בית יוסף",
    "בית ינאי",
    "בית יצחק",
    "בית יתיר",
    "בית לחם הגלילית",
    "בית מאיר",
    "בית נחמיה",
    "בית ניר",
    "בית נקופה",
    "בית עובד",
    "בית עוזיאל",
    "בית עזרא",
    "בית עריף",
    "בית צבי",
    "בית קמה",
    "בית קשת",
    "בית רבן",
    "בית רימון",
    "בית שאן",
    "בית שמש",
    "בית שערים",
    "בית שקמה",
    "ביתן אהרן",
    "ביתר עילית",
    "בלפוריה",
    "בן זכאי",
    "בן עמי",
    "בן שמן",
    "בני ברק",
    "בני דקלים",
    "בני דרום",
    "בני דרור",
    "בני יהודה",
    "בני נצרים",
    "בני עטרות",
    "בני עיש",
    "בני ציון",
    "בני ראם",
    "בניה",
    "בנימינה",
    "בצרה",
    "בצת",
    "בקוע",
    "בקעות",
    "בר גיורא",
    "בר יוחאי",
    "ברוכין",
    "ברור חיל",
    "ברוש",
    "ברכה",
    "ברכיה",
    "ברעם",
    "ברק",
    "ברקאי",
    "ברקן",
    "ברקת",
    "בת הדר",
    "בת חן",
    "בת חפר",
    "בת ים",
    "בת עין",
    "בת שלמה",

    // ג
    "גאולי תימן",
    "גאולים",
    "גאליה",
    "גבולות",
    "גבים",
    "גבע",
    "גבע כרמל",
    "גבעולים",
    "גבעון החדשה",
    "גבעות בר",
    "גבעות עדן",
    "גבעת אבני",
    "גבעת אלה",
    "גבעת ברנר",
    "גבעת הראל",
    "גבעת הרואה",
    "גבעת השלושה",
    "גבעת זאב",
    "גבעת חיים",
    "גבעת חן",
    "גבעת יואב",
    "גבעת ישעיהו",
    "גבעת כוח",
    "גבעת נילי",
    "גבעת עדה",
    "גבעת עוז",
    "גבעת שמואל",
    "גבעת שמש",
    "גבעת שפירא",
    "גבעתי",
    "גבעתיים",
    "גברעם",
    "גבת",
    "גדות",
    "גדיש",
    "גדעונה",
    "גדרה",
    "גונן",
    "גורן",
    "גורנות הגליל",
    "גזית",
    "גזר",
    "גיאה",
    "גיבתון",
    "גיזו",
    "גילון",
    "גילת",
    "גינוסר",
    "גינתון",
    "גיתה",
    "גיתית",
    "גלאון",
    "גלגל",
    "גליל ים",
    "גלעד",
    "גמזו",
    "גן הדרום",
    "גן השומרון",
    "גן חיים",
    "גן יאשיה",
    "גן יבנה",
    "גן נר",
    "גן שורק",
    "גן שלמה",
    "גן שמואל",
    "גנות",
    "גנות הדר",
    "גני הדר",
    "גני טל",
    "גני יוחנן",
    "גני מודיעין",
    "גני עם",
    "גני תקווה",
    "גניגר",
    "געש",
    "געתון",
    "גפן",
    "גרופית",
    "גשור",
    "גשר",
    "גשר הזיו",
    "גת",
    "גת רימון",
// ד
    "דבורה",
    "דביר",
    "דברת",
    "דגניה",
    "דובב",
    "דולב",
    "דור",
    "דורות",
    "דימונה",
    "דישון",
    "דליה",
    "דלתון",
    "דן",
    "דפנה",
    "דקל",

    // ה
    "האון",
    "הבונים",
    "הגושרים",
    "הדר עם",
    "הוד השרון",
    "הודיה",
    "הושעיה",
    "הזורע",
    "הזורעים",
    "החותרים",
    "היוגב",
    "הילה",
    "המעפיל",
    "הסוללים",
    "העוגן",
    "הר אדר",
    "הר גילה",
    "הר עמשא",
    "הראל",
    "הרדוף",
    "הרצליה",
    "הררית",

    // ו
    "ורד יריחו",
    "ורדון",

    // ז
    "זבדיאל",
    "זוהר",
    "זיקים",
    "זיתן",
    "זכרון יעקב",
    "זכריה",
    "זמר",
    "זמרת",
    "זנוח",
    "זרועה",
    "זרחיה",
    "זרעית",

    // ח
    "חבצלת השרון",
    "חבר",
    "חברון",
    "חגור",
    "חד נס",
    "חדיד",
    "חדרה",
    "חוגלה",
    "חולדה",
    "חולון",
    "חולית",
    "חולתה",
    "חוסן",
    "חופית",
    "חוקוק",
    "חורשים",
    "חזון",
    "חיבת ציון",
    "חיננית",
    "חיפה",
    "חירן",
    "חירות",
    "חלוץ",
    "חלץ",
    "חמד",
    "חמדת",
    "חמדיה",
    "חמרה",
    "חניאל",
    "חניתה",
    "חנתון",
    "חספין",
    "חפץ חיים",
    "חפציבה",
    "חצב",
    "חצבה",
    "חצור",
    "חצור הגלילית",
    "חצרים",
    "חרב לאת",
    "חרוצים",
    "חריש",
    "חרמש",
    "חרשים",
    "חשמונאים",

    // ט
    "טבריה",
    "טירת יהודה",
    "טירת כרמל",
    "טירת צבי",
    "טל שחר",
    "טל אל",
    "טללים",
    "טלמון",
    "טנא",
    "טפחות",

    // י
    "יבול",
    "יבנאל",
    "יבנה",
    "יגור",
    "יגל",
    "יד בנימין",
    "יד השמונה",
    "יד חנה",
    "יד מרדכי",
    "יד נתן",
    "יד רמבם",
    "יהוד",
    "יהל",
    "יובל",
    "יובלים",
    "יודפת",
    "יונתן",
    "יושיביה",
    "יזרעאל",
    "יחיעם",
    "יטבתה",
    "ייטב",
    "יכיני",
    "ינוב",
    "ינון",
    "יסוד המעלה",
    "יסודות",
    "יסעור",
    "יעד",
    "יעל",
    "יעף",
    "יערה",
    "יפו",
    "יפית",
    "יפעת",
    "יפתח",
    "יצהר",
    "יציץ",
    "יקום",
    "יקיר",
    "יקנעם",
    "יראון",
    "ירדנה",
    "ירוחם",
    "ירושלים",
    "ירחיב",
    "ירקונה",
    "ישע",
    "ישעי",
    "ישרש",
    "יתד",
    "יתיר",

    // כ
    "כברי",
    "כדורי",
    "כדיתה",
    "כוכב השחר",
    "כוכב יאיר",
    "כוכב יעקב",
    "כוכב מיכאל",
    "כורזים",
    "כחל",
    "כיסופים",
    "כישור",
    "כליל",
    "כלנית",
    "כמהין",
    "כמון",
    "כנות",
    "כנף",
    "כנרת",
    "כסלון",
    "כפר אביב",
    "כפר אדומים",
    "כפר אוריה",
    "כפר אחים",
    "כפר ביאליק",
    "כפר בילו",
    "כפר בלום",
    "כפר בן נון",
    "כפר ברוך",
    "כפר גדעון",
    "כפר גלים",
    "כפר גליקסון",
    "כפר גלעדי",
    "כפר דניאל",
    "כפר האורנים",
    "כפר החורש",
    "כפר המכבי",
    "כפר הנגיד",
    "כפר הנשיא",
    "כפר הס",
    "כפר הראה",
    "כפר הריף",
    "כפר ויתקין",
    "כפר ורבורג",
    "כפר ורדים",
    "כפר זיתים",
    "כפר חבד",
    "כפר חושן",
    "כפר חיטים",
    "כפר חיים",
    "כפר חנניה",
    "כפר חסידים",
    "כפר חרוב",
    "כפר טרומן",
    "כפר ידידיה",
    "כפר יהושע",
    "כפר יונה",
    "כפר יחזקאל",
    "כפר יעבץ",
    "כפר מונש",
    "כפר מימון",
    "כפר מלל",
    "כפר מנחם",
    "כפר מסריק",
    "כפר מרדכי",
    "כפר נטר",
    "כפר סאלד",
    "כפר סבא",
    "כפר סילבר",
    "כפר סירקין",
    "כפר עבודה",
    "כפר עזה",
    "כפר עציון",
    "כפר פינס",
    "כפר קיש",
    "כפר רופין",
    "כפר רות",
    "כפר שמאי",
    "כפר שמואל",
    "כפר שמריהו",
    "כפר תבור",
    "כפר תפוח",
    "כרי דשא",
    "כרכום",
    "כרכור",
    "כרם בן זמרה",
    "כרם בן שמן",
    "כרם מהרל",
    "כרם שלום",
    "כרמי יוסף",
    "כרמי צור",
    "כרמי קטיף",
    "כרמיאל",
    "כרמיה",
    "כרמים",
    "כרמל",
 "לבון",
    "לביא",
    "לבנים",
    "להב",
    "להבים",
    "להבות הבשן",
    "להבות חביבה",
    "לוד",
    "לוזית",
    "לוחמי הגיטאות",
    "לוטם",
    "לוטן",
    "לימן",
    "לכיש",
    "לפיד",
    "לפידות",

    // מ
    "מאור",
    "מבוא ביתר",
    "מבוא דותן",
    "מבוא חורון",
    "מבוא חמה",
    "מבוא מודיעים",
    "מבואות ים",
    "מבואות יריחו",
    "מבועים",
    "מבטחים",
    "מבקיעים",
    "מבשרת ציון",
    "מגדים",
    "מגדל",
    "מגדל העמק",
    "מגדל עוז",
    "מגדלים",
    "מגידו",
    "מגל",
    "מגן",
    "מגן שאול",
    "מגשימים",
    "מדרך עוז",
    "מודיעין",
    "מודיעין עילית",
    "מולדת",
    "מוצא עילית",
    "מורן",
    "מורשת",
    "מזור",
    "מזכרת בתיה",
    "מזרע",
    "מחולה",
    "מחניים",
    "מחסיה",
    "מטולה",
    "מטע",
    "מי עמי",
    "מיטב",
    "מיטל",
    "מיצר",
    "מירב",
    "מירון",
    "מישר",
    "מיתר",
    "מכבים-רעות",
    "מכורה",
    "מכמורת",
    "מכמנים",
    "מלאה",
    "מלילות",
    "מלכיה",
    "מנוחה",
    "מנוף",
    "מנות",
    "מנחמיה",
    "מנרה",
    "מסד",
    "מסדה",
    "מסילות",
    "מסילת ציון",
    "מסלול",
    "מעברות",
    "מעגלים",
    "מעגן",
    "מעגן מיכאל",
    "מעוז חיים",
    "מעון",
    "מעונה",
    "מעיין ברוך",
    "מעיין צבי",
    "מעלה אדומים",
    "מעלה אפרים",
    "מעלה גלבוע",
    "מעלה גמלא",
    "מעלה החמישה",
    "מעלה לבונה",
    "מעלה מכמש",
    "מעלה עירון",
    "מעלה עמוס",
    "מעלות",
    "מענית",
    "מעש",
    "מפלסים",
    "מצדות יהודה",
    "מצובה",
    "מצליח",
    "מצפה",
    "מצפה אביב",
    "מצפה דני",
    "מצפה יאיר",
    "מצפה יריחו",
    "מצפה נטופה",
    "מצפה רמון",
    "מצפה שלם",
    "מצר",
    "מקווה ישראל",
    "מרגליות",
    "מרום גולן",
    "מרחב עם",
    "מרחביה",
    "מרכז שפירא",
    "משאבי שדה",
    "משגב דב",
    "משגב עם",
    "משואה",
    "משואות יצחק",
    "משכיות",
    "משמר איילון",
    "משמר דוד",
    "משמר הירדן",
    "משמר הנגב",
    "משמר העמק",
    "משמר השבעה",
    "משמר השרון",
    "משמרות",
    "משמרת",
    "משען",
    "מתן",
    "מתת",

    // נ
    "נאות גולן",
    "נאות הכיכר",
    "נאות מרדכי",
    "נאות סמדר",
    "נבטים",
    "נגבה",
    "נגוהות",
    "נהורה",
    "נהלל",
    "נהריה",
    "נוב",
    "נוגה",
    "נווה",
    "נווה אור",
    "נווה אטיב",
    "נווה אילן",
    "נווה איתן",
    "נווה דניאל",
    "נווה זוהר",
    "נווה זיו",
    "נווה חריף",
    "נווה ים",
    "נווה ימין",
    "נווה ירק",
    "נווה מבטח",
    "נווה מיכאל",
    "נווה צוף",
    "נווה שלום",
    "נועם",
    "נוף איילון",
    "נוף הגליל",
    "נופים",
    "נופית",
    "נופך",
    "נוקדים",
    "נורדיה",
    "נורית",
    "נחושה",
    "נחל עוז",
    "נחלה",
    "נחליאל",
    "נחלים",
    "נחם",
    "נחף",
    "נחשולים",
    "נחשון",
    "נחשונים",
    "נטועה",
    "נטור",
    "נטע",
    "נטעים",
    "נטף",
    "נילי",
    "ניצן",
    "ניצנה",
    "ניצני סיני",
    "ניצני עוז",
    "ניצנים",
    "ניר אליהו",
    "ניר בנים",
    "ניר גלים",
    "ניר דוד",
    "ניר חן",
    "ניר יפה",
    "ניר יצחק",
    "ניר ישראל",
    "ניר משה",
    "ניר עוז",
    "ניר עם",
    "ניר עציון",
    "ניר עקיבא",
    "ניר צבי",
    "נירים",
    "נירית",
    "נמרוד",
    "נס הרים",
    "נס עמים",
    "נס ציונה",
    "נעורים",
    "נעלה",
    "נעמה",
    "נען",
    "נערן",
    "נצר חזני",
    "נצר סרני",
    "נצרת",
    "נשר",
    "נתיב הגדוד",
    "נתיב הלה",
    "נתיב העשרה",
    "נתיב השיירה",
    "נתיבות",
    "נתניה",
 // ס
    "סאסא",
    "סביון",
    "סגולה",
    "סולם",
    "סוסיה",
    "סופה",
    "סלעית",
    "סמר",
    "סנסנה",
    "סעד",
    "סער",
    "ספיר",
    "סתריה",

    // ע
    "עבדון",
    "עברון",
    "עגור",
    "עדי",
    "עדנים",
    "עוזה",
    "עולש",
    "עומר",
    "עופר",
    "עופרה",
    "עוצם",
    "עזוז",
    "עזר",
    "עזריאל",
    "עזריה",
    "עזריקם",
    "עטרת",
    "עידן",
    "עין איילה",
    "עין גב",
    "עין גדי",
    "עין דור",
    "עין הבשור",
    "עין הוד",
    "עין החורש",
    "עין המפרץ",
    "עין הנציב",
    "עין העמק",
    "עין השופט",
    "עין השלושה",
    "עין ורד",
    "עין זיוון",
    "עין חצבה",
    "עין חרוד",
    "עין יהב",
    "עין יעקב",
    "עין כרמל",
    "עין עירון",
    "עין צורים",
    "עין שמר",
    "עין שריד",
    "עין תמר",
    "עינת",
    "עיר אובות",
    "עכו",
    "עלומים",
    "עלי",
    "עלי זהב",
    "עלמה",
    "עלמון",
    "עמוקה",
    "עמיחי",
    "עמינדב",
    "עמיעד",
    "עמיעוז",
    "עמיקם",
    "עמיר",
    "עמנואל",
    "עמקה",
    "ענב",
    "עפולה",
    "עצמון",
    "ערד",
    "ערוגות",
    "עשהאל",
    "עשרת",
    "עתלית",
    "עתניאל",

    // פ
    "פארן",
    "פדואל",
    "פדויים",
    "פדיה",
    "פוריה",
    "פורת",
    "פטיש",
    "פלך",
    "פלמחים",
    "פני חבר",
    "פסגות",
    "פעמי תשז",
    "פצאל",
    "פקיעין",
    "פרדס חנה",
    "פרדסיה",
    "פרוד",
    "פרזון",
    "פרי גן",
    "פתח תקווה",
    "פתחיה",

    // צ
    "צאלים",
    "צביה",
    "צובה",
    "צוחר",
    "צופים",
    "צופית",
    "צופר",
    "צוקי ים",
    "צוקים",
    "צור יגאל",
    "צור הדסה",
    "צור יצחק",
    "צור משה",
    "צור נתן",
    "צוריאל",
    "צורית",
    "צורן",
    "ציפורי",
    "צלפון",
    "צפריה",
    "צפרירים",
    "צפת",
    "צרופה",
    "צרעה",

    // ק
    "קדומים",
    "קדימה",
    "קדמה",
    "קדמת צבי",
    "קדר",
    "קדרון",
    "קדרים",
    "קוממיות",
    "קורנית",
    "קטורה",
    "קיסריה",
    "קלחים",
    "קליה",
    "קלע",
    "קציר",
    "קצרין",
    "קריית אונו",
    "קריית ארבע",
    "קריית אתא",
    "קריית ביאליק",
    "קריית גת",
    "קריית טבעון",
    "קריית ים",
    "קריית יערים",
    "קריית מוצקין",
    "קריית מלאכי",
    "קריית נטפים",
    "קריית ענבים",
    "קריית עקרון",
    "קריית שמונה",
    "קרני שומרון",
    "קשת",

    // ר
    "ראש הנקרה",
    "ראש העין",
    "ראש פינה",
    "ראש צורים",
    "ראשון לציון",
    "רבבה",
    "רבדים",
    "רביבים",
    "רביד",
    "רגבה",
    "רגבים",
    "רווחה",
    "רוויה",
    "רוחמה",
    "רועי",
    "רותם",
    "רחוב",
    "רחובות",
    "רחלים",
    "ריחן",
    "רימונים",
    "רינתיה",
    "רכסים",
    "רם און",
    "רמות",
    "רמות השבים",
    "רמות מאיר",
    "רמות מנשה",
    "רמות נפתלי",
    "רמלה",
    "רמת גן",
    "רמת דוד",
    "רמת הכובש",
    "רמת השופט",
    "רמת השרון",
    "רמת טראמפ",
    "רמת יוחנן",
    "רמת ישי",
    "רמת מגשימים",
    "רמת צבי",
    "רמת רזיאל",
    "רמת רחל",
    "רנן",
    "רעים",
    "רעננה",
    "רקפת",
    "רשפון",
    "רשפים",
    "רתמים",

    // ש
    "שאר ישוב",
    "שבי דרום",
    "שבי ציון",
    "שבי שומרון",
    "שגב-שלום",
    "שדה אילן",
    "שדה אליהו",
    "שדה אליעזר",
    "שדה בוקר",
    "שדה דוד",
    "שדה ורבורג",
    "שדה יואב",
    "שדה יעקב",
    "שדה יצחק",
    "שדה משה",
    "שדה נחום",
    "שדה נחמיה",
    "שדה ניצן",
    "שדה עוזיהו",
    "שדה צבי",
    "שדות ים",
    "שדות מיכה",
    "שדי אברהם",
    "שדי חמד",
    "שדי תרומות",
    "שדמה",
    "שדמות דבורה",
    "שדמות מחולה",
    "שדרות",
    "שואבה",
    "שובה",
    "שובל",
    "שוהם",
    "שומרה",
    "שומריה",
    "שוקדה",
    "שורש",
    "שורשים",
    "שושנת העמקים",
    "שזור",
    "שחר",
    "שחרות",
    "שיבולים",
    "שיזף",
    "שיטים",
    "שילה",
    "שילת",
    "שכניה",
    "שלווה",
    "שלוחות",
    "שלומי",
    "שלומית",
    "שמיר",
    "שמעה",
    "שמרת",
    "שמשית",
    "שני",
    "שניר",
    "שעל",
    "שעלבים",
    "שער אפרים",
    "שער הגולן",
    "שער העמקים",
    "שער מנשה",
    "שער שומרון",
    "שערי תקווה",
    "שפיים",
    "שפיר",
    "שפר",
    "שפרעם",
    "שקד",
    "שקף",
    "שרונה",
    "שריגים",
    "שריד",
    "שרשרת",
    "שתולה",
    "שתולים",

    // ת
    "תאשור",
    "תדהר",
    "תובל",
    "תומר",
    "תושיה",
    "תימורים",
    "תירוש",
    "תל אביב",
    "תל יוסף",
    "תל יצחק",
    "תל מונד",
    "תל עדשים",
    "תל ציון",
    "תל קציר",
    "תל שבע",
    "תל תאומים",
    "תלם",
    "תלמים",
    "תלמי אליהו",
    "תלמי אלעזר",
    "תלמי בילו",
    "תלמי יוסף",
    "תלמי יחיאל",
    "תלמי יפה",
    "תמרת",
    "תנובות",
    "תעוז",
    "תפרח",
    "תקומה",
    "תקוע",
    "תרום",
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
    'חצב',
    'שני',
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
