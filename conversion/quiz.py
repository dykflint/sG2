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
        #print(str_list[0])
        #str_list = list(filter(None, str_list))
print(str_list)

#? Number of words:
number_of_words = str_list[-1][0]
print(number_of_words)
#str_list = str_list[:-2]
#? Remove the first 4 characters of the string:
#for i in range(len(str_list)):
#    str_list[i][0] = str_list[i][0][4:]

print(str_list)

# write list to html file:
try:
    os.remove(output)
except OSError:
    pass
with open(output, 'a') as file:
    file.write('<?xml version="1.0" encoding="UTF-8"?>')
    file.write('\n')
    file.write('  <question type="category">')
    file.write('\n')
    file.write('    <category>')
    file.write('\n')
    file.write('      <text>__Category Name__</text>')
    file.write('\n')
    file.write('    </category>')
    file.write('\n')
    file.write('  </question>')
    for i in range(len(str_list)):
        if (i == 0 or i == 4 or i == 8 or i == 12):
            file.write('\n')
            file.write('<!-- Question entry ' + str(i/4+1) + '-->')
            file.write('\n')
            file.write('  <question type="multichoice">')
            file.write('\n')
            file.write('    <name>')
            file.write('\n')
            file.write('      <text>')
            file.write('\n')
            file.write('<![DATA[' + str(str_list[i][0]) + ']]>')
            file.write('\n')
            file.write('      </text>')
            file.write('\n')
            file.write('    </name>')
            file.write('\n')
            file.write('    <questiontext format="html">')
            file.write('\n')
            file.write('      <text>')
            file.write('\n')
            file.write('<![DATA[' + str(str_list[i][0]) + ']]>')
            file.write('\n')
            file.write('      </text>')
            file.write('\n')
            file.write('    </questiontext>')
            file.write('\n')
        elif (i == 1 or i == 5 or i == 9 or i == 13):
            file.write('    <answer fraction="100.000">')
            file.write('\n')
            file.write('      <text>')
            file.write('\n')
            file.write('<![DATA[' + str(str_list[i][0]) + ']]>')
            file.write('\n')
            file.write('      </text>')
            file.write('\n')
            file.write('    </answer>')
            file.write('\n')
        elif (i == 2 or i == 6 or i == 10 or i == 14):
            file.write('    <answer fraction="0">')
            file.write('\n')
            file.write('      <text>')
            file.write('\n')
            file.write('<![DATA[' + str(str_list[i][0]) + ']]>')
            file.write('\n')
            file.write('      </text>')
            file.write('\n')
            file.write('    </answer>')
            file.write('\n')
        elif (i == 3 or i == 7 or i ==  11 or i == 15):
            file.write('    <answer fraction="0">')
            file.write('\n')
            file.write('      <text>')
            file.write('\n')
            file.write('<![DATA[' + str(str_list[i][0]) + ']]>')
            file.write('\n')
            file.write('      </text>')
            file.write('\n')
            file.write('    </answer>')
            file.write('\n')
        file.write('    <shuffleanswers>1</shuffleanswers>')
        file.write('\n')
        file.write('    <single>true</single>')
        file.write('\n')
        file.write('    <answernumbering>123</answernumbering>')
        file.write('\n')
        file.write('  </question>')
        file.write('\n')
        file.write('<\quiz>')


