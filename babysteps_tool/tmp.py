import sys
import os

from numpy import number
# if len(sys.argv) != 4:
#     print("USAGE: python3 a1_create_tables.py [german quesiton file] [english question file] [output html]")
#     exit(1)

def create_array_from_file(file):
    tmp_arr = []
    with open(file, 'r') as qfile:
        for line in qfile:
            line_tmp = [elt.strip() for elt in line.split('\n') if line != '\n']
            #! skip iteration if array is empty
            if len(line_tmp) == 0: continue
            line_tmp = line_tmp[0].replace("—", "")
            line_tmp = line_tmp.replace("-", "")
            line_tmp = line_tmp.replace("✓", "&#10004;")
            tmp_arr.append(line_tmp)
    return tmp_arr

def create_array_from_input(user_input):
    tmp_arr = list()
    for line in user_input:
        line_tmp = [elt.strip() for elt in line.split('\n') if line != '\n']
        #! skip iteration if array is empty
        if len(line_tmp) == 0: continue
        tmp_arr.append(line_tmp)    


test_array = list()
counter = 0
test_input = input("Make a sentence out of: Sonne - scheinen\n")
test_array = list(map(str, test_input.split(' ')))
example_sentence = "Die Sonne scheint."
example_array = [elt.strip() for elt in example_sentence.split(" ") if elt != "\n"]
for i in range(len(example_array)):
    if example_array[i] == test_array[i]:
        print("The word in place " + str(i) + " is correct.")
    else:
        print("The word in place " + str(i) + " is incorrect.")
print(test_array)