import os
import sys

inputfile = str(sys.argv[1])
output = str(sys.argv[2])
str_list = []

with open(inputfile) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split('\n')]
        str_list.append(list_tmp)
        #str_list[0][0] = str_list[0][0][4:]
        print(str_list[0])
        #str_list = list(filter(None, str_list))
print(str_list)

#? Number of words:
number_of_words = str_list[-1][0]
print(number_of_words)
str_list = str_list[:-2]
#? Remove the first 4 characters of the string:
for i in range(len(str_list)):
    str_list[i][0] = str_list[i][0][4:]

print(str_list)

# write list to html file:
try:
    os.remove(output)
except OSError:
    pass
with open(output, 'a') as file:
    file.write('\n----------------------------------' + inputfile + '----------------------------------\n')
    file.write('<ol>\n')
    for i in range(len(str_list)):
            file.write('<li>')
            file.write('<strong>'+str_list[i][0]+'</strong>'+' ')
            file.write('\n')
            if i == (len(str_list) - 1):
                file.write('<br /><br />')
                file.write(number_of_words)
                file.write('</li>')
            else:
                file.write('</li>')
    file.write('</ol>\n')    
    file.write('------------------------- END OF '+ inputfile + '--------------------------------------\n')

