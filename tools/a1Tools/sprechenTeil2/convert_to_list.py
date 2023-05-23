import sys 

file = sys.argv[1]

def create_array_from_file(f):
    tmp_arr = []
    with open(f, 'r') as qfile:
        for line in qfile:
            line_tmp = [elt.strip() for elt in line.split('\n') if line != '\n' and elt != '']
            #? skip iteration if array is empty 
            if len(line_tmp) == 0: continue
            #? Place to do further formatting of the lines in the file
            #? if not just append to the array 
            tmp_arr.extend(line_tmp)
    return tmp_arr

words_arr = create_array_from_file(file)
print(words_arr)

with open('output', 'a') as ofile:
    ofile.write('const questions = [')
    for i in range(len(words_arr)):
        ofile.write('"' + str(words_arr[i]) + '"')
        if i != len(words_arr) - 1:
            ofile.write(',')
    ofile.write('];')
