# Simply run 'python transform_data.py' from the data directory to generate json file

import pandas as pd
import json

data = pd.read_csv('protest_data.csv')

column_rename = {
    "Company": "companyName",
    "Event / Reason": "event",
    "Date": "date",
    "Theme": "theme",
    "How": "how",
    "Who did the Action": "actionDoneBy",
    "# of People": "numberOfPeople",
    "Where": "location",
    "Source": "source"
}
data.rename(columns=column_rename, inplace=True)
pretty_data = json.dumps(json.loads(data.to_json(orient='records')), indent=2)

with open('protest_data.json', 'w') as f:
    f.write(pretty_data)
