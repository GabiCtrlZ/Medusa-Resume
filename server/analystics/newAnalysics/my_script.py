import sys
import json
import pyresparser
import en_core_web_sm
nlp = en_core_web_sm.load()
data = json.dumps(pyresparser.ResumeParser(input()).get_extracted_data())
print(data)
