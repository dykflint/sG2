import sys
import os

from numpy import number
if len(sys.argv) != 3:
    print("USAGE: python3 a1_create_tables.py [german quesiton file] [output html]")
    exit(1)

def create_array_from_file(file):
    tmp_arr = []
    with open(file, 'r') as qfile:
        for line in qfile:
            line_tmp = [elt.strip() for elt in line.split('\n') if line != '\n']
            #! skip iteration if array is empty
            if len(line_tmp) == 0: continue
            line_tmp = line_tmp[0].replace("—", "")
            line_tmp = line_tmp.replace("-", "")
            line_tmp = line_tmp.replace("✓", "&#10004;")
            tmp_arr.append(line_tmp)
    return tmp_arr

german_questionfile = str(sys.argv[1])
output_html = str(sys.argv[2])
german_questions = []
english_questions = []

counter = 0
#! Create array for german questions
german_questions = create_array_from_file(german_questionfile)

try:
    os.remove(output_html)
except:
    pass

#! write output html file
question_counter = 0
with open(output_html, 'a') as file:
    file.write("<div id=\"lid-question-block\">\n")
    #! Question part
    file.write("<p id=\"lid-question\">\n")
    file.write(german_questions[0]+"\n")
    file.write("<br></p>\n")
    #! Answer
    file.write("<ul id=\"lid-answers\">\n")
    for i in range(1, len(german_questions)):
        if "&#10004;" in german_questions[i]:
            german_questions[i] = german_questions[i].replace("&#10004;","") #remove the tick mark
            file.write("    <li><span id=\"lid-correct-answer\">"+german_questions[i]+"</span><br>\n")
            file.write("    </li>\n")          
    file.write("</ul>\n")
    file.write("</div>\n")