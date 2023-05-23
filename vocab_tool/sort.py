import sys
import collections

if len(sys.argv) != 2:
    print("USAGE: python3 sort.py [file to be sorted] ")
    sys.exit(1)

file_to_be_sorted = str(sys.argv[1])

words = []
with open(file_to_be_sorted, "r+") as file:
    lines = file.readlines()
    lines.sort()
    file.seek(0)
    file.writelines(lines)

# with open(file_to_be_sorted) as file:
#     for line in file:
#         list_tmp = [elt.strip() for elt in line.split('\n')]
#         if len(list_tmp) == 0 or list_tmp[0] == '': continue
#         words.extend(list_tmp)

# words = sorted(words, key=lambda words:d[words[0]])
# print(words[:100])
# with open(file_to_be_sorted+'_sorted', 'a') as file:
#     for word in words:
#         file.write(word+'\n')
