from email.mime import base
import os
import sys

if len(sys.argv) != 2:
    print("USAGE: python3 words_extender.py [word file] [type of word e.g. adjective, verb, noun]")
    sys.exit(1)

word_file = str(sys.argv[1])
word_type = str(sys.argv[2])
words = []

#? Put the words from the word_file into an array
with open(word_file) as file:
    for line in file:
        # print(line)
        list_tmp = [elt.rstrip('\n') for elt in line.split(' ')]
        words.extend(list_tmp)
#? Extract the words ending with "en" from the words array
#? And fill the base form without the "en" into base_forms array
base_forms = []
with open(word_file+'_extended', 'a') as file:
    for word in words:
        if word[-2:] == "en":
            file.write(word+'\n')
            base_forms.append(word[:-2])

forms_dict = {}
endings = ["e", "st", "est", "t", "et", "te", "en", "end", "ete", "test", "etest", "etet", "tet", "eten", "ten"]
for base_form in base_forms:
    if base_form not in forms_dict.keys(): 
        forms_dict[str(base_form)] = [base_form]
        for ending in endings:
            forms_dict[str(base_form)].append(base_form+ending)

print(forms_dict)