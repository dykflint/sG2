import sys

sheet_file = str(sys.argv[1])
sentences_file = str(sys.argv[2])
words = []
#? PUT THE WORDS FROM THE LESSON FILE INTO AN ARRAY
with open(sheet_file) as f:
    for line in f:
        list_tmp = [elt.strip().replace(":","") for elt in line.split('\t')]
        words.append(list_tmp)

sentences_list = []
with open(sentences_file) as s:
    for line in s:
        list_tmp = [elt.strip()+"." for elt in line.split('.')]
        sentences_list.extend(list_tmp)

print(sentences_list)