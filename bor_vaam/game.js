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
"אלון",
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
   "בית לחם",
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
    "גבעות",
    "גבעולים",
    "גבעון החדשה",
    "גבעות בר",
    "גבעות עדן",
    "גבעת אבני",
    "גבעת אלה",
    "גבעת ברנר",
    "גבעת הראל",
    "גבעת הרואה",
    "גבעת וושינגטון",
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
       "הר ברכה",
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
   "חוות גלעד",
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
   "חרשה",
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
"טל מנשה",
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
     "כפר מעש",
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
    "כרם רעים",
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
    "לשם",

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
       "מדרשת בן גוריון",
    "מדרך עוז",
    "מודיעין",
    "מודיעין עילית",
    "מולדת",
    "מוצא",
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
    "מכבים רעות",
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
       "מעלה צביה",
    "מעלה גמלא",
    "מעלה החמישה",
"מעלה חבר",
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
   "מצפה מדרג",
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
       "נופי נחמיה",
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
      "נריה",
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
    "סוסיא",
    "סוסיה",
    "סופה",
    "סלעית",
    "סמר",
    "סנסנה",
    "סעד",
    "סער",
       "ספסופה",
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
   "פני קדם",
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
    "צבייה",
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
    "קידה",
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
    "שבות רחל",
    "שבי דרום",
    "שבי ציון",
    "שבי שומרון",
    "שדה אילן",
    "שדה אליהו",
    "שדה אליעזר",
   "שדה בועז",
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

// [כאן תהיה רשימת היישובים - PLACES]
// רשימת מקומות מיוחדים שיש להם המשך
const specialPlaces = [
    'בית אל', 
    'רמות', 
    'מצפה', 
    'נווה',
    'אפיק',
    'אלון',
    'בארי',
    'מעגן',
    'חצב',
    'שני',
    'אחיה',
'להב',
    'אורה',
    'מגדל',
    'בית לחם',
    'גבע',
'מתת',
'נטע',
'תלם', 
    'שלומי'
];

// מיפוי מקומות קצרים למקומות ארוכים
const longPlacesMap = {
    'בית אל': ['בית אלעזרי', 'בית אלפא'],
    'רמות': ['רמות השבים', 'רמות מאיר', 'רמות מנשה', 'רמות נפתלי'],
    'מצפה': ['מצפה רמון', 'מצפה דני', 'מצפה אביב', 'מצפה יריחו', 'מצפה נטופה', 'מצפה מדרג', 'מצפה שלם'],
    'נווה': ['נווה אילן', 'נווה איתן', 'נווה ים', 'נווה ימין', 'נווה ירק', 'נווה מבטח', 'נווה מיכאל'],
    'אלון': ['אלון הגליל', 'אלון מורה', 'אלון שבות', 'אלוני אבא', 'אלוני הבשן', 'אלוני יצחק', 'אלונים'],
    'בארי': ['באר יעקב'],
'נטע': ['נטעים'],
'אפיק': ['אפיקים'],
    'בית לחם': ['בית לחם הגלילית'],
    'מעגן': ['מעגן מיכאל'],
'תלם': ['תלמים', 'תלמי אליהו', 'תלמי אלעזר', 'תלמי בילו', 'תלמי יוסף', 'תלמי יחיאל', 'תלמי יפה'],
'להב': ['להבים'],
    'חצב': ['חצבה'],
    'שני': ['שניר'],
    'אחיה': ['אחיהוד'],
    'אורה': ['אור הנר'],
'מתת': ['מתתיהו'],
    'מגדל': ['מגדל העמק', 'מגדל עוז', 'מגדלים'],
    'גבע': ['גבעת אבני', 'גבעות', 'גבעתיים', 'גבעת שמואל', 'גבעת אלה', 'גבעת ברנר', 'גבעת זאב', 'גבעת חן', 'גבעת עדה', 'גבעת עוז'],
    'שלומי': ['שלומית']
};
// משתני המשחק
let gamePlaces;        // רשימת המקומות בפורמט משחק
let usedPlaces;        // מקומות שהיו בפועל במשחק
let currentLetters;    // האותיות הנוכחיות
let displayLetters;    // האותיות המוצגות
let score;            // ניקוד
let computerCompletedShortPlace = null;  // מקום קצר שהמחשב השלים

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
    return PLACES.find(place => convertToGameFormat(place) === gamePlace) || gamePlace;
}

// אתחול המשחק
function initGame() {
    gamePlaces = [...new Set(PLACES)].map(convertToGameFormat);
    usedPlaces = new Set();
    currentLetters = [];
    displayLetters = [];
    score = 0;
    computerCompletedShortPlace = null;
    updateScore();
    
    const firstLetter = gamePlaces[Math.floor(Math.random() * gamePlaces.length)][0];
    addLetter(firstLetter, 'computer');
}

// הוספת אות למשחק
function addLetter(letter, source) {
    const letterObj = { letter, source };
    currentLetters.push(letterObj);
    displayLetters.push(letterObj);
    
    const lettersDiv = document.getElementById('letters');
    lettersDiv.innerHTML = '';
    
    const lastFourLetters = displayLetters.slice(-4);
    lastFourLetters.forEach(l => {
        const span = document.createElement('span');
        span.textContent = l.letter;
        span.className = l.source;
        lettersDiv.appendChild(span);
    });
}

function findComputerLetter() {
    const currentWord = currentLetters.map(l => l.letter).join('');
    
    // אם המשתמש זה עתה השלים מקום קצר
    if (specialPlaces.includes(currentWord) && !usedPlaces.has(currentWord)) {
        // מחפשים מקום חדש לגמרי
        const possibleNewPlaces = [];
        
        // עוברים על כל המקומות האפשריים
        for (const place of gamePlaces) {
            if (!usedPlaces.has(place)) {
                const firstLetter = place[0];
                
                // בודקים האם יש מקום ארוך שמתחיל באות הזו
                const isLetterUsedInLongPlace = longPlacesMap[currentWord].some(longPlace => {
                    const longPlaceFormatted = convertToGameFormat(longPlace);
                    return longPlaceFormatted.startsWith(currentWord + firstLetter);
                });
                
                // אם האות לא משמשת באף מקום ארוך, היא בטוחה לשימוש
                if (!isLetterUsedInLongPlace) {
                    possibleNewPlaces.push(place);
                }
            }
        }
        
        if (possibleNewPlaces.length > 0) {
            // בוחרים מקום אקראי ולוקחים את האות הראשונה שלו
            const randomPlace = possibleNewPlaces[Math.floor(Math.random() * possibleNewPlaces.length)];
            usedPlaces.add(currentWord);
            currentLetters = [];
            return {
                letter: randomPlace[0],
                source: 'computer'
            };
        }
    }
    
    // אם המחשב השלים מקום קצר והמשתמש נתן אות
    if (computerCompletedShortPlace && currentWord.length === 1) {
        const possibleSecondLetters = new Set();
        
        // עוברים על כל המקומות שמתחילים באות של המשתמש
        for (const place of gamePlaces) {
            if (!usedPlaces.has(place) && place.startsWith(currentWord)) {
                const secondLetter = place[1];
                if (!secondLetter) continue;
                
                // בודקים שהאות השנייה לא יכולה להיות המשך של המקום הקצר
                const cannotBeContinuation = !longPlacesMap[computerCompletedShortPlace].some(longPlace => 
                    convertToGameFormat(longPlace).startsWith(computerCompletedShortPlace + currentWord + secondLetter)
                );
                
                if (cannotBeContinuation) {
                    possibleSecondLetters.add(secondLetter);
                }
            }
        }
        
        if (possibleSecondLetters.size > 0) {
            const letters = Array.from(possibleSecondLetters);
            const randomLetter = letters[Math.floor(Math.random() * letters.length)];
            usedPlaces.add(computerCompletedShortPlace);
            computerCompletedShortPlace = null;
            return {
                letter: randomLetter,
                source: 'computer'
            };
        }
    }
    
    // חיפוש רגיל
    const possiblePlaces = gamePlaces.filter(place => 
        !usedPlaces.has(place) && 
        place.startsWith(currentWord) && 
        place.length > currentWord.length
    );
    
    if (possiblePlaces.length === 0) return null;
    
    const randomPlace = possiblePlaces[Math.floor(Math.random() * possiblePlaces.length)];
    return {
        letter: randomPlace[currentWord.length],
        source: 'computer'
    };
}

function isValidLetter(letter) {
    if (!letter || letter.length !== 1) return false;
    
    const currentWord = currentLetters.map(l => l.letter).join('');
    
    if (currentWord === '') {
        return gamePlaces.some(place => 
            !usedPlaces.has(place) && 
            place.startsWith(letter)
        );
    }

    // אם המחשב השלים מקום קצר
    if (computerCompletedShortPlace) {
        // מאפשרים או להתחיל מקום חדש או להמשיך למקום ארוך
        const canStartNewPlace = gamePlaces.some(place => 
            !usedPlaces.has(place) && 
            place.startsWith(letter)
        );
        
        const canContinueLongPlace = gamePlaces.some(place => 
            !usedPlaces.has(place) && 
            place.startsWith(currentWord + letter)
        );
        
        return canStartNewPlace || canContinueLongPlace;
    }

    // בדיקה רגילה
    return gamePlaces.some(place => 
        !usedPlaces.has(place) && 
        place.startsWith(currentWord + letter)
    );
}

function handleCompletedPlace(byComputer = false) {
    const currentWord = currentLetters.map(l => l.letter).join('');
    
    if (gamePlaces.includes(currentWord) && !usedPlaces.has(currentWord)) {
        if (specialPlaces.includes(currentWord)) {
            if (byComputer) {
                computerCompletedShortPlace = currentWord;
            }
            return true;
        } else {
            usedPlaces.add(currentWord);
            currentLetters = [];
            computerCompletedShortPlace = null;
            return true;
        }
    }
    return false;
}

async function submitLetter() {
    const input = document.getElementById('letter-input');
    const letter = input.value.trim();
    input.value = '';
    
    if (!letter) return;
    
    if (isValidLetter(letter)) {
        if (computerCompletedShortPlace) {
            // בודקים אם המשתמש מתחיל מקום חדש
            const startingNewPlace = gamePlaces.some(place => 
                !usedPlaces.has(place) && 
                place.startsWith(letter)
            );
            
            if (startingNewPlace) {
                usedPlaces.add(computerCompletedShortPlace);
                currentLetters = [];
                computerCompletedShortPlace = null;
            }
        }
        
        addLetter(letter, 'player');
        score++;
        updateScore();
        
        const completedPlace = handleCompletedPlace(false);
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const computerLetter = findComputerLetter();
        if (computerLetter) {
            addLetter(computerLetter.letter, 'computer');
            handleCompletedPlace(true);
        } else {
            endGame("invalid_letter");
        }
    } else {
        endGame("invalid_letter");
    }
}

function updateScore() {
    document.getElementById('score').textContent = `ניקוד: ${score}`;
}

document.getElementById('letter-input').addEventListener('input', async function(e) {
    const letter = e.target.value.trim();
    if (letter) {
        await submitLetter();
    }
});

function createVirtualKeyboard() {
    const keyboard = document.getElementById('virtual-keyboard');
    const rows = [
        ['ק', 'ר', 'א', 'ט', 'ו', 'פ'],
        ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח'],
        ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ'],
        ['ת', 'ל', 'י']
    ];

    rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        
        row.forEach(letter => {
            const button = document.createElement('button');
            button.className = 'key';
            button.textContent = letter;
            button.onclick = () => handleVirtualKeyPress(letter);
            rowDiv.appendChild(button);
        });
        
        keyboard.appendChild(rowDiv);
    });
}

async function handleVirtualKeyPress(letter) {
    if (!document.getElementById('letter-input').disabled) {
        document.getElementById('letter-input').value = letter;
        await submitLetter();
    }
}

async function getHighScores() {
    return new Promise((resolve) => {
        const scoresRef = window.dbRef(window.firebaseDB, 'highScores');
        const scoresQuery = window.dbQuery(
            scoresRef,
            window.dbOrderByChild('score'),
            window.dbLimitToLast(10)
        );

        window.dbOnValue(scoresQuery, (snapshot) => {
            const scores = [];
            snapshot.forEach((childSnapshot) => {
                scores.push(childSnapshot.val());
            });
            resolve(scores.reverse());
        });
    });
}

async function saveScore() {
    const name = document.getElementById('name-input').value.trim();
    if (!name) return;

    const newScore = {
        name,
        score,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('he-IL')
    };

    const scoresRef = window.dbRef(window.firebaseDB, 'highScores');
    await window.dbPush(scoresRef, newScore);
    
    document.getElementById('name-input-container').style.display = 'none';
    updateHighScoresDisplay();
}

async function updateHighScoresDisplay() {
    const highScores = await getHighScores();
    const container = document.getElementById('high-scores-list');
    container.innerHTML = '';

    highScores.forEach((entry, index) => {
        const div = document.createElement('div');
        div.className = 'high-score-entry';
        div.innerHTML = `
            <span class="score-rank">${index + 1}.</span>
            <span class="score-name">${entry.name}</span>
            <span class="score-points">${entry.score} נקודות</span>
            <span class="score-date">${entry.date}</span>
        `;
        container.appendChild(div);
    });
}

function endGame(reason) {
    document.getElementById('game-over').style.display = 'block';
    const gameOverText = document.getElementById('game-over-text');
    
    const usedPlacesList = Array.from(usedPlaces)
        .map(place => convertToDisplayFormat(place))
        .join(', ');
    
    const currentWord = currentLetters.map(l => l.letter).join('');
    
    let message = `המקומות שהיו במשחק: ${usedPlacesList}<br><br>`;
    message += `הניקוד הסופי שלך: ${score}<br><br>`;
    
    if (reason === "invalid_letter") {
        message += `האות האחרונה שהקלדת לא מתאימה.<br>`;
        
        if (computerCompletedShortPlace) {
            const longPlaces = gamePlaces.filter(place => 
                !usedPlaces.has(place) && 
                place.startsWith(currentWord)
            ).map(convertToDisplayFormat);
            
            const newPlaces = gamePlaces.filter(place => 
                !usedPlaces.has(place)
            ).map(convertToDisplayFormat);
            
            if (longPlaces.length > 0) {
                message += `ניתן היה להמשיך ל: ${longPlaces.join(', ')}<br>`;
            }
            if (newPlaces.length > 0) {
                message += `או להתחיל מקום חדש`;
            }
        } else {
            const possiblePlaces = gamePlaces.filter(place => 
                !usedPlaces.has(place) && 
                place.startsWith(currentWord)
            ).map(convertToDisplayFormat);
            
            if (possiblePlaces.length > 0) {
                message += `ניתן היה להמשיך ל: ${possiblePlaces.join(', ')}`;
            }
        }
    }
    
    gameOverText.innerHTML = message;
    document.getElementById('letter-input').disabled = true;
    
    // בדיקה אם התו
// בדיקה אם התוצאה טובה מספיק לטבלת השיאים
    getHighScores().then(highScores => {
        if (highScores.length < 10 || score > highScores[highScores.length - 1].score) {
            document.getElementById('name-input-container').style.display = 'block';
        }
    });
}

function startNewGame() {
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('letter-input').disabled = false;
    document.getElementById('letters').innerHTML = '';
    document.getElementById('name-input-container').style.display = 'none';
    document.getElementById('name-input').value = '';
    initGame();
}

// איתחול המשחק והמקלדת הוירטואלית בטעינת העמוד
document.addEventListener('DOMContentLoaded', function() {
    createVirtualKeyboard();
    updateHighScoresDisplay();
    initGame();
});
