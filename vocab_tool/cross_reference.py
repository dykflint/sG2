from asyncio.constants import LOG_THRESHOLD_FOR_CONNLOST_WRITES
import os
import sys
import re
import collections


if len(sys.argv) != 5:
    print("USAGE: python3 memrise.py [database] [course vocabulary] [outputname for dict_file of the database] [crfile]")
    sys.exit(1)

database = str(sys.argv[1])
course_words = str(sys.argv[2])
dict_file = str(sys.argv[3])
crfile = str(sys.argv[4])
# course_vocabulary = str(sys.argv[2])
# exceptions = str(sys.argv[3])
# course = str(sys.argv[4])
# format = str(sys.argv[5])
# sentences_file = "sentences_file"
#lesson_number = str(sys.argv[4])
database_words = []
words = []

#? PUT THE WORDS FROM THE DATABASE FILE INTO AN ARRAY
with open(database) as f:
    for line in f:
        list_tmp = [elt.strip('\n') for elt in line.split('\t') if elt]
        database_words.append(list_tmp)
        #sample_list[0][0] = sample_list[0][0][4:]
        #print(sample_list[0])
        #sample_list = list(filter(None, sample_list))
# print(database_words)

#? PUT THE WORDS FROM THE COURSE VOCABS INTO AN ARRAY
with open(course_words) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split('\n') if elt]
        words.append(list_tmp)   
# print(words)
vocab_dict = {}
for i in range(len(database_words)):
    if database_words[i][0] not in vocab_dict.keys():
        try:
            vocab_dict[database_words[i][0]] = [database_words[i][1]]
        except:
            pass
    else:
        try:
            vocab_dict[database_words[i][0]].append(database_words[i][1])
        except:
            pass
# print(vocab_dict)

#? CREATE THE CROSSREFERENCE FILE WITTH THE UNION OF THE ELEMENTS
cross_reference = {}
for element in words:
    if element[0] in vocab_dict.keys():
        cross_reference[element[0]] = vocab_dict[element[0]]
try:
    os.remove(crfile)
except:
    pass
with open(crfile, "w") as file:
    for key, value in cross_reference.items():
        file.write(str(key)+"\t")
        for string in value:
            file.write(str(string)+" ")
        file.write("\n")
# print(cross_reference)
#? Remove the dict_file if it exists
try:
    os.remove(dict_file)
except:
    pass
#? Print the vocab dict 
with open(dict_file, "a") as file:
    for key, value in vocab_dict.items():
        file.write(str(key)+"\t")
        for string in value:
            file.write(str(string)+" ")
        file.write("\n")


# #? CREATE AN ARRAY WHERE THE ENTRIES ARE THE FULL SENTENCES
# try:
#     os.remove(sentences_file)
# except OSError:
#     pass
# list_of_sentences = []
# delimiter1 = "."
# delimiter2 = "!"
# delimiter3 = "?"
# #TODO: WRITE A DIFFERENT READING ALGORITHM FOR THE TEXTS OF C1 BECAUSE THEY 
# #TODO: CONTAIN MULTIPLE SENTENCES PER LINE.   
# if course == "A" or course == "B":  
#     with open(database) as g:
#         with open(sentences_file, "a") as sf:
#             for line in g:
#                 sf.write(line.rstrip("\n")+" ")
#                 if (delimiter1 in line) or (delimiter2 in line) or (delimiter3 in line):
#                     sf.write("\n")

# if course == "C":
#     with open(database) as g:
#         for line in g:
#             list_tmp = [elt.strip()+"." for elt in line.split('.')]
#             #print(list_tmp)
#             with open(sentences_file, "a") as sf:
#                 for entry in list_tmp:
#                     sf.write(entry.rstrip("\n")+" ")
#                     if (delimiter1 in entry) or (delimiter2 in entry) or (delimiter3 in entry):
#                         sf.write("\n")

# with open(sentences_file) as s:
#     for line in s:
#         list_tmp = [elt.strip()+"." for elt in line.split('.')]
#         sentences_list.extend(list_tmp)

# #print(sentences_list)


# #TODO: CREATE DICITIONARY FOR ALL THE WORDS ACCUMULATED AFTER THE EXCEPTIONS 
# #TODO: AND ATTACH THE FIRST N SENTENCES IN WHICH THESE WORDS OCCUR

# #? PUT THE WORDS THAT SHOULD NOT BE INCLUDED INTO AN EXCEPTIONS ARRAY
# #? I'M USING EXTEND HERE TO ADD THE INDIVIDUAL EXCEPTIONS AS STRINGS AND NOT 
# #? INDIVIDUAL ARRAYS
# with open(exceptions) as f:
#     for line in f:
#         list_tmp = [elt.strip() for elt in line.split(' ')]
#         exceptions_list.extend(list_tmp)

# #print(exceptions_list)
# #? REMOVE SPECIAL CHARACTERS FROM THE STRINGS IN THE VOCAB_LIST ARRAY:
# for element in range(len(vocab_list)):
#     #print(element)
#     vocab_list[element] = re.sub('[^A-Za-z0-9äÄöÖüÜß]+', '', vocab_list[element])

# #print(vocab_list)

# #? PRINT THE WORDS OF VOCAB_LIST INTO FILE, ONE WORD PER LINE
# with open(course_vocabulary, 'a') as file:
#     for element in vocab_list:
#         if element not in exceptions_list:
#             file.write(element+'\n')

# #? GET THE WORDS FROM THE WORDS FILE INTO AN ARRAY 
# words_array = []
# with open(course_vocabulary) as file:
#     for line in file:
#         list_tmp = [elt.strip() for elt in line.split('\n')]
#         words_array.extend(list_tmp)

# #? PRINT OUT THE SENTENCES THAT CONTAIN THE TEST_STRING
# test_dict = {}
# groups = {}
# for sentence in sentences_list:
#     #print(sentence)
#     for word in words_array:
#         if str(word+" ") in sentence: 
#             if str(word) not in groups.keys():
#                 groups[str(word)] = [sentence]
#                 #print("if statement")
#             elif len(groups[str(word)])<5 and sentence not in groups[str(word)]:
#                 groups[str(word)].append(sentence)
#                 #print(sentence + "elif statement")
# groups = collections.OrderedDict(sorted(groups.items(), key=lambda i: i[0].lower()))
# #? PRINT THE GROUPS DICTIONARY INTO A FILE:
# if format == "csv":
#     with open("dictionary_file", "a") as dict_file:
#         for key, value in groups.items():
#             dict_file.write(key)
#             for elt in value:
#                 dict_file.write("," + elt )
#             dict_file.write("\n")
# else:
#    with open("dictionary_file", "a") as dict_file:
#         for key, value in groups.items():
#             dict_file.write(key+":")
#             for elt in value:
#                 dict_file.write(" \n\t " + elt )
#             dict_file.write("\n")
     
# #? PUT THE CURRRENT VOCAB_LIST TO THE EXCEPTIONS:
# exceptions_list.extend(vocab_list)
# #? OVERWRITE THE EXCEPTIONS FILE:
# #try:
# #    os.remove(exceptions)
# #except OSError:
# #    pass
# #? ADD THE NEW EXCEPTIONS TO THE CURRENT EXCEPTIONS FILE
# with open('non-separable', 'a') as file:
#     for word in words_array:
#         if not('bring' in word or 'bracht' in word or 'ab' in word):
#             file.write(word+'\n')

# with open('separable', 'a') as file:
#     for word in words_array:
#         if ('bring' in word or 'bracht' in word and 'ab' in word):
#             file.write(word+'\n')    

# #? NUMBER OF WORDS:
# #number_of_words = sample_list[-1][0]
# #print(number_of_words)
# #sample_list = sample_list[:-2]
# # ? REMOVE THE FIRST 4 CHARACTERS OF THE STRING:
# #for i in range(len(sample_list)):
# #    sample_list[i][0] = sample_list[i][0][4:]

# #print(sample_list)

# # write list to html file:
# #try:
# #    os.remove(words)
# #except OSError:
# #    pass
# #with open(output, 'a') as file:

