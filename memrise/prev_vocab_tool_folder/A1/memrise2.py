from asyncio.constants import LOG_THRESHOLD_FOR_CONNLOST_WRITES
import os
import sys
import re



if len(sys.argv) != 5:
    print("USAGE: python3 memrise.py [chapter] [output for chapter] [list of exceptions] [course: A, B or C")
    sys.exit(1)

lesson = str(sys.argv[1])
words = str(sys.argv[2])
exceptions = str(sys.argv[3])
course = str(sys.argv[4])
sentences_file = "sentences_file"
#lesson_number = str(sys.argv[4])
vocab_list = []
exceptions_list = []
sentences_list = []

#? put the words from the lesson file into an array
with open(lesson) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split(' ')]
        vocab_list.extend(list_tmp)
        #sample_list[0][0] = sample_list[0][0][4:]
        #print(sample_list[0])
        #sample_list = list(filter(None, sample_list))
#print(vocab_list)

#? create an array where the entries are the full sentences
try:
    os.remove(sentences_file)
except OSError:
    pass
list_of_sentences = []
delimiter1 = "."
delimiter2 = "!"
delimiter3 = "?"
#TODO: Write a different reading algorithm for the texts of C1 because they 
#TODO: contain multiple sentences per line.   
if course == "A" or course == "B":  
    with open(lesson) as g:
        with open(sentences_file, "a") as sf:
            for line in g:
                sf.write(line.rstrip("\n"))
                if (delimiter1 in line) or (delimiter2 in line) or (delimiter3 in line):
                    sf.write("\n")

if course == "C":
    with open(lesson) as g:
        for line in g:
            list_tmp = [elt.strip()+"." for elt in line.split('.')]
            print(list_tmp)
            with open(sentences_file, "a") as sf:
                for entry in list_tmp:
                    sf.write(entry.rstrip("\n"))
                    if (delimiter1 in entry) or (delimiter2 in entry) or (delimiter3 in entry):
                        sf.write("\n")

with open(sentences_file) as s:
    for line in s:
        list_tmp = [elt.strip()+"." for elt in line.split('.')]
        sentences_list.extend(list_tmp)

#print(sentences_list)


#TODO: create dicitionary for all the words accumulated after the exceptions 
#TODO: and attach the first n sentences in which these words occur

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

#? Get the words from the words file into an array 
words_array = []
with open(words) as file:
    for line in file:
        list_tmp = [elt.strip() for elt in line.split('\n')]
        words_array.extend(list_tmp)
#print(words_array)

#? print out the sentences that contain the test_string
test_dict = {}
groups = {}
for sentence in sentences_list:
    #print(sentence)
    for word in words_array:
        if str(word) in sentence: 
            if str(word) not in groups.keys():
                groups[str(word)] = [sentence]
                #print("if statement")
            elif len(groups[str(word)])<5 and sentence not in groups[str(word)]:
                groups[str(word)].append(sentence)
                #print(sentence + "elif statement")
#print(groups)
#? Print the groups dictionary into a file:
with open("dictionary_file", "a") as dict_file:
    for key, value in groups.items():
        dict_file.write(key)
        for elt in value:
            dict_file.write("," + elt )
        dict_file.write("\n")

#? put the currrent vocab_list to the exceptions:
exceptions_list.extend(vocab_list)
#? overwrite the exceptions file:
#try:
#    os.remove(exceptions)
#except OSError:
#    pass
#? add the new exceptions to the current exceptions file
#with open(exceptions, 'a') as file:
#    for word in exceptions_list:
#        file.write(word+'\n')


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

