import os
import sys

preaching = str(sys.argv[1])
out_preaching = str(sys.argv[2])
preaching_list = []

with open(preaching) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split('\n') if elt != '']
        if(list_tmp != ['']):
            preaching_list.append(list_tmp)
        #str_list = list(filter(None, str_list))

print(preaching_list)
print(len(preaching_list))

number_of_sentences = len(preaching_list)/10
print(number_of_sentences)

# write list to html file:
try:
    os.remove(out_preaching)
except OSError:
    pass
with open(out_preaching, 'a') as file:
    file.write('\n----------------------------------' + preaching + '----------------------------------\n')
    file.write('<ol>\n')
    for i in range(10):
        file.write('<li>')
        for j in range(int(number_of_sentences)):
            file.write(preaching_list[i*int(number_of_sentences)+j][0])
            print(preaching_list[i*int(number_of_sentences)+j][0])
            file.write('<br>')
        file.write('</li>')
        file.write('\n') 
    file.write('</ol>\n')    
    file.write('------------------------- END OF '+ preaching + '--------------------------------------\n')

