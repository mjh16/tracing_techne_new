# Keyterms Parser and Explorer
This program opens the combined meta-data and textual data files for the corups, uses the keyterms file to search the dataset for instances of those words, and then saves the word-document name to a new CSV file that lists each keyterm and the article names.


```python
import json
import os
from pathlib import Path
import csv
from extract import json_extract
```


```python
# Setup working folder and initialize list variables
working_folder = Path.home() / ("syncthing/Dissertation/dissertation_data/dissertation_data_working_folder")
data_folder = Path.home() / ("syncthing/Dissertation/dissertation_data/dissertation_data_working_folder/text_meta_json_combined/")

# Read json file of keyterms and save to new python list
with open (working_folder / "keyterms.json", 'r') as f:
    json_terms = json.load(f)
    keyterms_list = json_terms['keyterms']

# check that json loaded correctly
print(keyterms_list)

# Setup list with json file names
all_json_files = []

# Read each file in the data folder and write its name and filepath to list
for file in data_folder.glob("*.json"):
    all_json_files.append(file.parent / file.name)

# Check that file list works
print(all_json_files[5])
```


```python
for keyterm in keyterms_list:
    with open(working_folder / str(keyterm + ".csv"), 'w+', encoding='utf-8') as csvfile:
        csv_columns = ['title', 'file']
        writer = csv.DictWriter(csvfile, fieldnames=csv_columns)
        writer.writeheader()
    for file in all_json_files:
        with open(file, 'r') as f:
            working_file = json.load(f, strict=False)
            if working_file.get('text') is not None:
                text = working_file['text']
            else:
                continue
            match = text.find(keyterm)
            if match > 0:
                if 'title' in working_file:
                    title = working_file['title']
                elif json_extract(working_file, 'article-title'):
                    title = json_extract(working_file, 'article-title')
                else:
                    title = "No Title"
                article_data = {"title": title, "file": str(file)}
                with open(working_folder / str(keyterm + ".csv"), 'a', encoding='utf-8', newline='') as output:
                    writer = csv.DictWriter(output, fieldnames=csv_columns)
                    writer.writerow(article_data)
```
