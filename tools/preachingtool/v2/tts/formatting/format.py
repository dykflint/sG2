import json
import os



# Create a new file to write the sentences to
def formatJSON(jsonFile, lessonNumber):
    # Load the JSON data from the file
    with open(jsonFile, 'r') as f:
        data = json.load(f)
    with open('formatted/a2/' + lessonNumber, 'w') as f:
        # Loop through each key-value pair in the JSON data
        for key, value in data.items():
            # Loop through each sentence in the array and write it to the file
            for sentence in value:
                f.write(sentence + '\n')

for i in range(1,51):
    formatJSON('a2/' + str(i) + '.json', str(i))
