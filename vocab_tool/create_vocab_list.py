import sys
import os

if len(sys.argv) != 7:
    print("USAGE: python3 memrise.py [sheet_file] [all_verbs] [sentences_file] [exceptions] [format: either sheet or csv] [remainder words]")
    sys.exit(1)

sheet_file = str(sys.argv[1])
all_verbs = str(sys.argv[2])
sentences_file = str(sys.argv[3])
exceptions = str(sys.argv[4])
output_format = str(sys.argv[5])
remainder = str(sys.argv[6])
#? Special Char Map `
special_char_map = {ord('ä'):'a',ord('Ä'):'A', ord('ü'):'u',ord('Ü'):'U', ord('ö'):'o',ord('Ö'):'O'}

#? REMAIDNER OF THE LIST
remainder_arr = []
with open(remainder) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split('\n')]
        while '' in list_tmp:
            list_tmp.remove('')
        remainder_arr.extend(list_tmp)
# print(remainder_arr)
#? PUT THE WORDS FROM THE GOOGLE SHEETS INTO AN ARRAY
sheet_input = []
with open(sheet_file) as f:
    for line in f:
        list_tmp = [elt.strip().replace(":","") for elt in line.split('\t')]
        sheet_input.append(list_tmp)

#? PUT SENTENCES FILE INTO AN ARRAY 
sentences_list = []
with open(sentences_file) as s:
    for line in s:
        list_tmp = [elt.strip() for elt in line.split('\t') if elt]
        while '' in list_tmp: # remove empty strings from the list 
            list_tmp.remove('')
        sentences_list.append(list_tmp)
only_sentences = []
with open(sentences_file) as os:
    for line in os:
        list_tmp = [elt.strip() for elt in line.split('\t') if elt]
        while '' in list_tmp: # remove empty strings from the list 
            list_tmp.remove('')
        only_sentences.extend(list_tmp[1:])

sentences_dict = {}
for arr in sentences_list:
    if str(arr[0]) not in sentences_dict.keys():
        sentences_dict[arr[0]] = []
        for elt in arr[1:]:
            sentences_dict[arr[0]].append(elt)
    else:
        for elt in arr[1:]:
            sentences_dict[arr[0]].append(elt)
# for remain in remainder_arr:
#     for arr in sentences_list:
#         sentences_dict[remain] = []
#         for elt in arr[1:]:
#             if remain in elt and len(sentences_dict[remain])<6:
#                 sentences_dict[remain].append(elt)

# print(sentences_dict)
# print(sentences_dict)
#? verbs from cooljugator into array 
verbs_array = []
with open(all_verbs) as v:
    for line in v:
        list_tmp = [elt.strip() for elt in line.split('\t')]
        verbs_array.append(list_tmp) 
#### create a verbs dict 
verbs_dict = {}
for arr in verbs_array:
    if str(arr[0]) not in verbs_dict.keys():
        verbs_dict[arr[0]] = []
        list_tmp = [elt.strip() for elt in arr[1].split(",")]
        while '' in list_tmp:
            list_tmp.remove('')
        verbs_dict[arr[0]].extend(list_tmp)
# print(sentences_list)

#? PUT THE WORDS THAT SHOULD NOT BE INCLUDED INTO AN EXCEPTIONS ARRAY
#? I'M USING EXTEND HERE TO ADD THE INDIVIDUAL EXCEPTIONS AS STRINGS AND NOT 
#? INDIVIDUAL ARRAYS
exceptions_list = []
with open(exceptions) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split(' ')]
        exceptions_list.extend(list_tmp)

#TODO Extend nouns with the endings:
forms_dict = {}
noun_endings = ["e", "n", "en", "s", "es", "er", "erin", "erinnen", "in", "innen", "se", "ses", "sen"]
adj_endings = ["e", "r", "er", "s", "es", "n", "en", "m", "em", "ste", "este", "ster", "ester", "sten",
 "esten", "stem", "estem", "stes", "estes", "ere", "eren", "erem", "eres", "te", "ten", "ter", "tem", "tes"]
#? The Dict for all the words works. Nouns and adjectives got their respective endings 
#? and verbs got their variations from cooljugator. Some verbs were not available on cooljugator (e.g. "zwitschern") 
#? and in these cases the value of that key was set to empty. Either Michael or I can fill these out. 
for i in range(len(sheet_input)):
    if str(sheet_input[i][4]) == "noun":
        if str(sheet_input[i][4]) not in forms_dict.keys():
            forms_dict[str(sheet_input[i][1])] = []
            for noun_ending in noun_endings:
                forms_dict[str(sheet_input[i][1])].append(str(sheet_input[i][1])+noun_ending)
                while '' in forms_dict[str(sheet_input[i][1])]:
                    forms_dict[str(sheet_input[i][1])].remove('') 
    if (str(sheet_input[i][4]) == "adj") or (str(sheet_input[i][4]) == "pp") or (str(sheet_input[i][4]) == "past participle") or (str(sheet_input[i][4]) == "presp"):
        if str(sheet_input[i][4]) not in forms_dict.keys():
            forms_dict[str(sheet_input[i][1])] = []
            for adj_ending in adj_endings:
                forms_dict[str(sheet_input[i][1])].append(str(sheet_input[i][1])+adj_ending)
                while '' in forms_dict[str(sheet_input[i][1])]:
                    forms_dict[str(sheet_input[i][1])].remove('') 
    if str(sheet_input[i][4]) == "verb":
        if (str(sheet_input[i][4]) not in forms_dict.keys()) and (str(sheet_input[i][1]) in verbs_dict.keys()):
            forms_dict[str(sheet_input[i][1])] = []
            forms_dict[str(sheet_input[i][1])].extend(verbs_dict[str(sheet_input[i][1])])
            while '' in forms_dict[str(sheet_input[i][1])]:
                    forms_dict[str(sheet_input[i][1])].remove('') 
        elif str(sheet_input[i][4]) not in forms_dict.keys():
            forms_dict[str(sheet_input[i][1])] = [] 
# print(forms_dict)
#TODO Create a new dictionary/file where both the words dict and the sentences are combined. DON'T forget to also 
#TODO add the genders
# print(forms_dict)
#! NEW SENTENCES LIST BECAUSE THE OTHER WASN'T BASED ON BASEFORMS 
#? NOTE: I am using set(B).issubset(A) formalism which works very well here to test
#? whether a subarray is within another array (even if it's only some elements)
new_sentences_dict = {}
# for fkey, fvalue in forms_dict.items():
#     if str(fkey) not in new_sentences_dict.keys():
#         new_sentences_dict[str(fkey)] = []
#         for elt in fvalue:
#             if str(elt) in sentences_dict.keys() and len(new_sentences_dict[str(fkey)])<6:
#                 if not set(sentences_dict[str(elt)]).issubset(new_sentences_dict[str(fkey)]):
#                     new_sentences_dict[str(fkey)].extend(sentences_dict[str(elt)])
#             elif str(fkey) in sentences_dict.keys() and len(new_sentences_dict[str(fkey)])<6:
#                 if not set(sentences_dict[str(fkey)]).issubset(new_sentences_dict[str(fkey)]):
#                     # print(sentences_dict[str(fkey)])
#                     # print(new_sentences_dict[str(fkey)])
#                     new_sentences_dict[str(fkey)].extend(sentences_dict[str(fkey)])
# for i in range(len(sheet_input)):
#     if str(sheet_input[i][1]) not in new_sentences_dict.keys():
#         new_sentences_dict[str(sheet_input[i][1])] = []
#         if str(sheet_input[i][1]) in sentences_dict.keys() and len(new_sentences_dict[str(sheet_input[i][1])])<6:
#             for sent in new_sentences_dict[str(sheet_input[i][1])]:
#                 if not set(sentences_dict[str(sheet_input[i][1])]).issubset(new_sentences_dict[str(sheet_input[i][1])]):
#                     new_sentences_dict[str(sheet_input[i][1])].extend(sentences_dict[str(sheet_input[i][1])]) 
#########################################################################################################
for fkey, fvalue in forms_dict.items():
    if fkey not in new_sentences_dict.keys():
        new_sentences_dict[fkey] = []
    for sent in only_sentences:
        for elt in fvalue:
            if (" "+elt+" ") in sent.translate(special_char_map) and len(elt)>0 and len(new_sentences_dict[fkey])<6 and sent not in new_sentences_dict[fkey]:
                new_sentences_dict[fkey].append(sent)
                print("fkey")
                print(sent)
            if len(new_sentences_dict[fkey])>5:
                break 
    for i in range(len(sheet_input)):
        if sheet_input[i][1] not in new_sentences_dict.keys():
            new_sentences_dict[sheet_input[i][1]] = []
        for sent in only_sentences:
            if (" "+sheet_input[i][1]+" ") in sent.translate(special_char_map) and len(sheet_input[i][1]) and len(new_sentences_dict[sheet_input[i][1]])<6 :
                new_sentences_dict[sheet_input[i][1]].append(sent)
                print("sheet")
                print(sent)
                # print(new_sentences_dict[sheet_input[i][1]])
            if len(new_sentences_dict[sheet_input[i][1]])>5: 
                break

# print(new_sentences_dict)


##########################################################################################################




# print(new_sentences_dict)
#? USE SHEET INPUT AS THE INGREDIENT TO WRITE DOWN ALL THE VOCABS
############### CSV #####################################
try:
    os.remove("sheet_output")
    os.remove("csv_input")
except: 
    pass
if output_format == "csv":
    with open("csv_output", "a") as fo:
        for i in range(len(sheet_input)):
            fo.write(str(sheet_input[i][0])+",")
            fo.write(str(sheet_input[i][1])+",")
            fo.write(str(sheet_input[i][2])+",")
            if str(sheet_input[i][1]) in forms_dict.keys():
                for elt in forms_dict[str(sheet_input[i][1])]:
                    fo.write(elt+" ")
                fo.write(",")
                fo.write(str(sheet_input[i][4]))
            else:
                fo.write(str(sheet_input[i][2])+",")
                fo.write(str(sheet_input[i][3])+",")
                fo.write(str(sheet_input[i][4])+",")
            fo.write("\n")

############# GSHEETS ###################################
if output_format == "sheet":
    with open("sheet_output", "a") as fo:
        for i in range(len(sheet_input)):
            fo.write(str(sheet_input[i][0])+"\t")
            fo.write(str(sheet_input[i][1])+"\t")
            fo.write(str(sheet_input[i][2])+"\t")
            #printing the word forms
            if str(sheet_input[i][1]) in forms_dict.keys():
                for elt in forms_dict[str(sheet_input[i][1])]:
                    fo.write(elt+",")
                fo.write("\t"+str(sheet_input[i][4]))
                fo.write("\t")
                counter = 1
                for sent in new_sentences_dict[sheet_input[i][1]]:
                    print(sent)
                    fo.write(str(counter)+"." + str(sent) + " ")
                    counter += 1
            else:
                fo.write(str(sheet_input[i][3])+"\t")
                fo.write(str(sheet_input[i][4])+"\t")
                counter = 1
                for sent in new_sentences_dict[sheet_input[i][1]]:
                    fo.write(str(counter)+"." + str(sent) + " ")
                    counter += 1
            fo.write("\n") 



