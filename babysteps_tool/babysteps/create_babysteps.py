import sys
import math

babystep = str(sys.argv[1])
output = str(sys.argv[2])

sentences_arr = []
counter = 0
# Create the array for the Easy and Hard Arrays (they are the same arrays)
with open(babystep) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split('\n') if elt != ""]
        if list_tmp:
            sentences_arr.append(list_tmp)
# Create the array for the Normal Difficulty whose sentences are divided in two
normal_sentences_arr_tmp = []
normal_sentences_arr = []
with open(babystep) as f:
    for line in f:  
        list_tmp = [elt.strip() for elt in line.split(' ') if elt != ""]
        if len(list_tmp) > 3:
            sublength = math.floor(len(list_tmp)/2.0)
        else:
            sublength = len(list_tmp)
        if list_tmp:
            if "" not in list_tmp:
                print(list_tmp)
                chunks = [list_tmp[x:x+sublength] for x in range(0, len(list_tmp), sublength)]
                normal_sentences_arr.extend(chunks)

print(normal_sentences_arr)
with open(output, "a") as out:
    out.write("function easyGame() {\n")
    out.write(" difficulty_level = 1;\n")
    out.write(" tool_container.classList.remove(\"hide-konstantin\");\n")
    out.write(" tmp_content = [")
    for i in range(len(sentences_arr)):
        if i < (len(sentences_arr) - 1):
            out.write("\"" + str(sentences_arr[i][0])+"\",\n")
        else: 
            out.write("\"" + str(sentences_arr[i][0])+"\"];\n")
    out.write(" difficulty_container.classList.add(\"hide-konstantin\");\n")
    out.write(" startGame();\n")
    out.write(" triggerFocus(input_box);\n")
    out.write("}\n")

    out.write("function normalGame() {\n")
    out.write(" difficulty_level = 2;\n")
    out.write(" tool_container.classList.remove(\"hide-konstantin\");\n")
    out.write(" tmp_content = [")
    for i in range(len(normal_sentences_arr)):
        out.write("\"")
        for j in range(len(normal_sentences_arr[i])):
            if i < (len(normal_sentences_arr) - 1):
                if j < (len(normal_sentences_arr[i]) - 1):
                    out.write(str(normal_sentences_arr[i][j]) + " ")
                else:
                    out.write(str(normal_sentences_arr[i][j])+"\",\n") 
        if i > (len(normal_sentences_arr) - 2):
            for j in range(len(normal_sentences_arr[i])):
                if j < (len(normal_sentences_arr[i]) - 1):
                    out.write(str(normal_sentences_arr[i][j]) + " ")
                else:
                    out.write(str(normal_sentences_arr[i][j])+"\"];\n")
    out.write(" difficulty_container.classList.add(\"hide-konstantin\");\n")
    out.write(" startGame();\n")
    out.write(" triggerFocus(input_box);\n")
    out.write("}\n")

    out.write("function hardGame() {\n")
    out.write(" difficulty_level = 3;\n")
    out.write(" tool_container.classList.remove(\"hide-konstantin\");\n")
    out.write(" tmp_content = [")
    for i in range(len(sentences_arr)):
        if i < (len(sentences_arr) - 1):
            out.write("\"" + str(sentences_arr[i][0])+"\",\n")
        else: 
            out.write("\"" + str(sentences_arr[i][0])+"\"];\n")
    out.write(" difficulty_container.classList.add(\"hide-konstantin\");\n")
    out.write(" startGame();\n")
    out.write(" triggerFocus(input_box);\n")
    out.write("}\n")
