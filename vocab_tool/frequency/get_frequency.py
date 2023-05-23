import sys
import os

if len(sys.argv) != 4:
    print("USAGE: python3 get_frequency.py [course_words] [course_lessons] [output_file]")
    sys.exit(1)

course_words = str(sys.argv[1])
course_lessons = str(sys.argv[2])
output_file = str(sys.argv[3])

course_words_arr = []
with open(course_words) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split('\n')]
        while '' in list_tmp:
            list_tmp.remove('')
        course_words_arr.extend(list_tmp)

course_lessons_arr = []
with open(course_lessons) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split(' ')]
        while '' in list_tmp:
            list_tmp.remove('')
        course_lessons_arr.extend(list_tmp)

counting_dict = {}
for word in course_words_arr:
    if word not in counting_dict.keys():
        counting_dict[word] = 0
        for elt in course_lessons_arr:
            if (str(elt).capitalize == str(word)) or (str(elt) == str(word)):
                counting_dict[word] += 1

print(counting_dict)

with open(output_file, "a") as of:
    for key, value in counting_dict.items():
        of.write(str(key) + "\t" + str(value) +"\n")