import pandas as pd
import json

# קריאת קובץ צפון-דרום
df1 = pd.read_excel('1.xlsx', header=None, names=['city', 'coordinate'])
north_south = [{"name": row['city'], "coordinate": float(row['coordinate'])} 
               for _, row in df1.iterrows() if pd.notna(row['city'])]

# קריאת קובץ מזרח-מערב
df2 = pd.read_excel('2.xlsx', header=None, names=['city', 'coordinate'])
west_east = [{"name": row['city'], "coordinate": float(row['coordinate'])} 
             for _, row in df2.iterrows() if pd.notna(row['city'])]

# יצירת מבנה הנתונים הסופי
data = {
    "northToSouth": north_south,
    "westToEast": west_east
}

# שמירה לקובץ JSON
with open('cities_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
