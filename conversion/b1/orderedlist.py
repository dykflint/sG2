import os
import sys

vocab = str(sys.argv[1])
out_vocab = str(sys.argv[2])
vocab_list = []

with open(vocab) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split('\n')]
        vocab_list.append(list_tmp)
        #str_list = list(filter(None, str_list))
#print(str_list)

# write list to html file:
try:
    os.remove(out_vocab)
except OSError:
    pass
with open(out_vocab, 'a') as file:
    file.write('\n----------------------------------' + vocab + '----------------------------------\n')
    file.write('<ul>\n')
    for i in range(len(vocab_list)):
        if(i%2==0):
            file.write('<li>')
            file.write('<strong>')
            file.write(vocab_list[i][0]+' ')
            file.write('</strong>')
        elif(i%2 == 1):
            file.write(vocab_list[i][0])
            file.write('\n')
            file.write('</li>') 
    file.write('</ul>\n')    
    file.write('------------------------- END OF '+ vocab + '--------------------------------------\n')

