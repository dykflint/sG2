import sys


import sys
import os


all_sentences_file = str(sys.argv[1])
sheet_remainder_file = str(sys.argv[2])

all_sentences_arr = []
with open(all_sentences_file) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split('\t')]
        while '' in list_tmp:
            list_tmp.remove('')
        if list_tmp: all_sentences_arr.append(list_tmp)

sheet_remainder_arr = []
with open(sheet_remainder_file) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split(',')]
        while '' in list_tmp:
            list_tmp.remove('')
        if list_tmp: sheet_remainder_arr.append(list_tmp)


tmp_dict = {}
for sarr in all_sentences_arr:
    for rarr in sheet_remainder_arr:
        for i in range(len(sarr[1:])):

for fkey, fvalue in forms_dict.items():
    if fkey not in new_sentences_dict.keys():
        new_sentences_dict[fkey] = []
    for sent in only_sentences:
        for elt in fvalue:
            if (" "+elt+" ") in sent.translate(special_char_map) and len(elt)>0 and len(new_sentences_dict[fkey])<2:
                new_sentences_dict[fkey].extend(sent)
                print(fkey)
                print(sent)