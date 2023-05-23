import os
import sys
import re

if len(sys.argv) != 4:
    print("USAGE: python3 memrise.py [chapter] [output for chapter] [list of exceptions]")
    sys.exit(1)

lesson = str(sys.argv[1])
words = str(sys.argv[2])
exceptions = str(sys.argv[3])

#lesson_number = str(sys.argv[4])
vocab_list = []
exceptions_list = []

#? put the words from the lesson file into an array
with open(lesson) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split(' ')]
        vocab_list.extend(list_tmp)
        #sample_list[0][0] = sample_list[0][0][4:]
        #print(sample_list[0])
        #sample_list = list(filter(None, sample_list))
#print(vocab_list)

#? put the words that should not be included into an exceptions array
#? I'm using extend here to add the individual exceptions as strings and not 
#? individual arrays
with open(exceptions) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split(' ')]
        exceptions_list.extend(list_tmp)

#print(exceptions_list)
#? remove special characters from the strings in the vocab_list array:
for element in range(len(vocab_list)):
    #print(element)
    vocab_list[element] = re.sub('[^A-Za-z0-9äÄöÖüÜß]+', '', vocab_list[element])

#print(vocab_list)

#? Print the words of vocab_list into file, one word per line
with open(words, 'a') as file:
    for element in vocab_list:
        if element not in exceptions_list:
            file.write(element+'\n')

#? put the currrent vocab_list to the exceptions:
exceptions_list.extend(vocab_list)
#? overwrite the exceptions file:
try:
    os.remove(exceptions)
except OSError:
    pass

with open(exceptions, 'a') as file:
    for word in exceptions_list:
        file.write(word+'\n')


#? Number of words:
#number_of_words = sample_list[-1][0]
#print(number_of_words)
#sample_list = sample_list[:-2]
#? Remove the first 4 characters of the string:
#for i in range(len(sample_list)):
#    sample_list[i][0] = sample_list[i][0][4:]

#print(sample_list)

# write list to html file:
#try:
#    os.remove(words)
#except OSError:
#    pass
#with open(output, 'a') as file:

