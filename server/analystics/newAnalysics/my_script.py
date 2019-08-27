import sys
import json
import pyresparser
data = json.dumps(pyresparser.ResumeParser(input()).get_extracted_data())
print(data)
