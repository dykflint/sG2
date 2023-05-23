import sys
from tracemalloc import start

if len(sys.argv) != 6:
    print("USAGE: python3 convert_questions.py [german question file] [english question file] [starting question] [current question] [number of questions]")
    exit(1)


def create_array_from_file(file):
    tmp_arr = []
    with open(file, "r") as qfile:
        for line in qfile:
            line_tmp = [elt.strip() for elt in line.split("\n") if line != "\n"]
            #! skip iteration if array is empty
            if len(line_tmp) == 0: continue
            line_tmp = line_tmp[0].replace("—", "")
            line_tmp = line_tmp.replace("-", "")
            line_tmp = line_tmp.replace("✓", "&#10004;")
            tmp_arr.append(line_tmp)
    return tmp_arr

german_question_file = str(sys.argv[1])
english_question_file = str(sys.argv[2])
start_question = int(sys.argv[3])
question_number = int(sys.argv[4])
number_of_questions = int(sys.argv[5])

german_question_arr = []
english_question_arr = []
counter = 0
german_question_arr = create_array_from_file(german_question_file)
english_question_arr = create_array_from_file(english_question_file)


for i in range(len(german_question_arr)):
    with open("test/questions", "a") as out:
        if i == 0:
            if question_number == start_question:
                out.write("const Questions = [{\n")
            else: 
                out.write("{\n")
            out.write("    id: "+str(question_number-start_question)+",\n")
            out.write("    q: "+"\'"+str(german_question_arr[0])+"\',\n")
        if i == 1:
            if "&#10004;" in german_question_arr[i]:
                out.write("    a: [{ text: \'"+str(german_question_arr[i]).replace("&#10004;","")+"\', isCorrect: true},\n")
            else:
                out.write("    a: [{ text: \'"+str(german_question_arr[i]).replace("&#10004;","")+"\', isCorrect: false},\n")
        if i == 2:
            if "&#10004;" in german_question_arr[i]:
                out.write("        { text: \'"+str(german_question_arr[i]).replace("&#10004;","")+"\', isCorrect: true},\n")    
            else:
                out.write("        { text: \'"+str(german_question_arr[i]).replace("&#10004;","")+"\', isCorrect: false},\n")
        if i == 3:
            if "&#10004;" in german_question_arr[i]:
                out.write("        { text: \'"+str(german_question_arr[i]).replace("&#10004;","")+"\', isCorrect: true},\n")    
            else:
                out.write("        { text: \'"+str(german_question_arr[i]).replace("&#10004;","")+"\', isCorrect: false},\n")
        if i == 4:
            if "&#10004;" in german_question_arr[i]:
                out.write("        { text: \'"+str(german_question_arr[i]).replace("&#10004;","")+"\', isCorrect: true},\n")    
            else:
                out.write("        { text: \'"+str(german_question_arr[i]).replace("&#10004;","")+"\', isCorrect: false},\n")
            out.write("]\n")
            if (question_number-start_question+1) == number_of_questions:
                out.write("}\n")
                out.write("]\n")
            else:
                out.write("},\n")

for i in range(len(english_question_arr)):
    with open("test/translations", "a") as out:
        if i == 0:
            if question_number == start_question:
                out.write("const Translations = [{\n")
            else: 
                out.write("{\n")
            out.write("    id: "+str(question_number-start_question)+",\n")
            out.write("    q: "+"\'"+str(english_question_arr[0])+"\',\n")
        if i == 1:
            if "&#10004;" in english_question_arr[i]:
                out.write("    a: [{ text: \'"+str(english_question_arr[i]).replace("&#10004;","")+"\', isCorrect: true},\n")
            else:
                out.write("    a: [{ text: \'"+str(english_question_arr[i]).replace("&#10004;","")+"\', isCorrect: false},\n")
        if i == 2:
            if "&#10004;" in english_question_arr[i]:
                out.write("        { text: \'"+str(english_question_arr[i]).replace("&#10004;","")+"\', isCorrect: true},\n")    
            else:
                out.write("        { text: \'"+str(english_question_arr[i]).replace("&#10004;","")+"\', isCorrect: false},\n")
        if i == 3:
            if "&#10004;" in english_question_arr[i]:
                out.write("        { text: \'"+str(english_question_arr[i]).replace("&#10004;","")+"\', isCorrect: true},\n")    
            else:
                out.write("        { text: \'"+str(english_question_arr[i]).replace("&#10004;","")+"\', isCorrect: false},\n")
        if i == 4:
            if "&#10004;" in english_question_arr[i]:
                out.write("        { text: \'"+str(english_question_arr[i]).replace("&#10004;","")+"\', isCorrect: true},\n")    
            else:
                out.write("        { text: \'"+str(english_question_arr[i]).replace("&#10004;","")+"\', isCorrect: false},\n")
            out.write("]\n")
            if (question_number-start_question+1) == number_of_questions:
                out.write("}\n")
                out.write("]\n")
            else:
                out.write("},\n")

