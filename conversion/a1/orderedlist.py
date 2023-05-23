import os
import sys

inputfile = str(sys.argv[1])
output = str(sys.argv[2])
str_list = []

with open(inputfile) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split('\n')]
        str_list.append(list_tmp)
        #str_list = list(filter(None, str_list))
#print(str_list)

# write list to html file:
try:
    os.remove(output)
except OSError:
    pass
with open(output, 'a') as file:
    file.write('\n----------------------------------' + inputfile + '----------------------------------\n')
    file.write('<ul>\n')
    for i in range(len(str_list)):
        if(i%2==0):
            file.write('<li>')
            file.write('<strong>')
            file.write(str_list[i][0]+' ')
            file.write('</strong>')
        elif(i%2 == 1):
            file.write(str_list[i][0])
            file.write('\n')
            file.write('</li>') 
    file.write('</ul>\n')    
    file.write('------------------------- END OF '+ inputfile + '--------------------------------------\n')

