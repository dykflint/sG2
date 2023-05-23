import sys
import os

from numpy import number

if len(sys.argv) != 5:
    print("USAGE: python3 a2_create_tables.py [quesiton file] [output html] [starting question] [number of questions]")
    exit(1)

questionfile = str(sys.argv[1])
output_html = str(sys.argv[2])
starting_number = int(sys.argv[3])
number_of_questions = int(sys.argv[4])
questions = []
counter = 0
with open(questionfile, 'r') as qfile:
    for line in qfile:
        line_tmp = [elt.strip() for elt in line.split('\n') if line != '\n']
        #! skip iteration if array is empty
        if len(line_tmp) == 0: continue
        line_tmp = line_tmp[0].replace("—", "")
        line_tmp = line_tmp.replace("-", "")
        line_tmp = line_tmp.replace("✓", "&#10004;")
        questions.append(line_tmp)


try:
    os.remove(output_html)
except:
    pass

#! write output html file
question_counter = 0
with open(output_html, 'a') as file:
    file.write("<!DOCTYPE html>\n")
    file.write("<html>\n")
    file.write("<head>\n")
    file.write("    <meta charset=\"utf8\">\n")
    file.write("    <style>\n")
    file.write("        table.lid, tr.lid, td.lid {\n")
    file.write("            border: 2px solid #817f7ffd;\n")
    file.write("            border-radius: 10px;\n")
    file.write("            background-color: rgba(250, 250, 250, 0.562);")
    file.write("        }\n")
    file.write("        table.lid {\n")
    file.write("            border: 5px solid #7c7b7b;\n")
    file.write("        }\n")
    file.write("        #correct_answer span {\n")
    file.write("            background-color: #80f8da8c;\n")
    file.write("        }\n")
    file.write("        td.lid {\n")
    file.write("            margin: auto;\n")
    file.write("            padding: 10px;\n")
    file.write("            padding-left: 15px;\n")
    file.write("        }\n")
    file.write("        #lidquestionnumber {\n")
    file.write("            font-size: 30px;\n")
    file.write("        }\n")
    file.write("        div.lid {\n")
    file.write("            width: 50%;\n")
    file.write("            margin: auto;\n")
    file.write("        }\n")
    file.write("    </style>\n")
    file.write("</head>\n")
    file.write("<body class=\"lid\">\n")
    file.write("    <div class=\"lid\">\n")
    file.write("        <table class=\"lid\">\n")
    file.write("            <colgroup>\n")
    file.write("                <col>\n")
    file.write("                <col>\n")
    file.write("            </colgroup>\n")
    file.write("            <body class=\"lid\">\n")
    for row in range(number_of_questions):
        file.write("                <tr class=\"lid\">\n")
        file.write("                    <td class=\"lid\">\n")
        file.write("                        <p class=\"lid\" id=\"lidquestionnumber\">"+str(row+starting_number))
        file.write("                        </p>\n")
        file.write("                    </td>\n")
        file.write("                    <td class=\"lid\">\n")
        file.write("                        <p>"+str(questions[row*10])+"</p>\n")
        file.write("                        <ul>\n")
        #! German questions and answers
        if "&#10004;" in str(questions[row*10+1]):
            file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*10+1])+" </span></li><br>\n")
        # else:
        #     file.write("                            <li>"+str(questions[row*10+1])+"</li><br>\n")
        if "&#10004;" in str(questions[row*10+2]):
            file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*10+2])+" </span></li><br>\n")
        # else:
        #     file.write("                            <li>"+str(questions[row*10+2])+"</li><br>\n")
        if "&#10004;" in str(questions[row*10+3]):
            file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*10+3])+" </span></li><br>\n")
        # else:
        #     file.write("                            <li>"+str(questions[row*10+3])+"</li><br>\n")
        if "&#10004;" in str(questions[row*10+4]):
            file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*10+4])+" </span></li><br>\n")
        # else:
        #     file.write("                            <li>"+str(questions[row*10+4])+"</li><br>\n")
        file.write("                        </ul><br>\n")
        file.write("                    </td>\n")
        # #! English questions and answers
        # file.write("                    <td class=\"lid\">\n")
        # file.write("                        <p>"+str(questions[row*10+5])+"</p>\n")
        # file.write("                        <ul>\n")
        # if "&#10004;" in str(questions[row*10+6]):
        #     file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*10+6])+" </span></li><br>\n")
        # # else:
        # #     file.write("                            <li>"+str(questions[row*10+6])+"</li><br>\n")
        # if "&#10004;" in str(questions[row*10+7]):
        #     file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*10+7])+" </span></li><br>\n")
        # # else:
        # #     file.write("                            <li>"+str(questions[row*10+7])+"</li><br>\n")
        # if "&#10004;" in str(questions[row*10+8]):
        #     file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*10+8])+" </span></li><br>\n")
        # # else:
        # #     file.write("                            <li>"+str(questions[row*10+8])+"</li><br>\n")
        # if "&#10004;" in str(questions[row*10+9]):
        #     file.write("<li id=\"correct_answer\"> <span>"+str(questions[row*10+9])+" </span></li><br>\n")
        # # else:
        # #     file.write("                            <li>"+str(questions[row*10+9])+"</li><br>\n")
        file.write("                        </ul><br>\n")
        file.write("                    </td>\n")
        file.write("                </tr>\n")
    file.write("            </body>\n")
    file.write("        </table>\n")
    file.write("    </div>\n")
    file.write("</body>\n")
    file.write("</html>\n")
print(questions[9])

