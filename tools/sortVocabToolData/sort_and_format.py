import sys 
import re

sentences_file = str(sys.argv[1])
sentences_array = []
# Convert file to array and remove empty lines 
with open(sentences_file) as file:
    for line in file:
        list_tmp = [elt.rstrip('\n') for elt in line.split('\n') if elt != '']
        if len(list_tmp) == 0: continue
        sentences_array.extend(list_tmp)

tmp_array = []
for elt in sentences_array: 
    sp = re.split(r'\d.', elt.strip('').replace('"',''))
    # print(sp)
    sp = list(filter(None, sp))
    tmp_array.append(sp)
print(tmp_array)

with open('output.csv', 'a') as file:
    for arr in tmp_array:
        for i in range(len(arr)):
            if i == 0:
                file.write("\"")
            file.write(str(i+1) + '.' + arr[i])
            if i == len(arr) - 1 or i == 4:
                file.write("\"\n")
                if i == 4: break
            else:
                file.write("\n")