# TODO: A1 L01 and L02 only have 3 sentences for each trigger. Afterwards we have 4 each

import sys
import math

triggers = str(sys.argv[1])
content = str(sys.argv[2])

# Create the triggers array 
triggersArr = []
with open(triggers) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split('\n') if elt != ""]
        list_tmp = list(filter(None, list_tmp))
        if list_tmp:
            triggersArr.extend(list_tmp)

# Create the triggers content array 
contentArr = [[] for _ in range(10)]
counter = 0 
contentIndex = 0
print(triggersArr)
with open(content) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split('\n') if elt != ""]
        list_tmp = list(filter(None, list_tmp))
        if list_tmp:
            print(list_tmp)
            print(contentArr)
            contentArr[contentIndex].extend(list_tmp)
            counter += 1
            if counter > 3:
                contentIndex += 1
                counter = 0

print(contentArr)
with open(triggers+"Triggers", "a") as out:
    out.write("const triggers = " + str(triggersArr) + ";")

with open(content+"Solutions", "a") as out:
    out.write("let allTriggerAnswersJSON = `[\n")
    out.write("{")
    for i in range(len(triggersArr)):
        if i < len(triggersArr) - 1:
            out.write("\""+triggersArr[i] + "\" : " + str(contentArr[i]) + ",\n")
        else: 
            out.write("\""+triggersArr[i] + "\" : " + str(contentArr[i]) + "}\n")
            out.write("]`;")
# Create the array for the Normal Difficulty whose sentences are divided in two
# normal_sentences_arr_tmp = []
# normal_sentences_arr = []
# with open(babystep) as f:
#     for line in f:  
#         list_tmp = [elt.strip() for elt in line.split(' ') if elt != ""]
#         if len(list_tmp) > 3:
#             sublength = math.floor(len(list_tmp)/2.0)
#         else:
#             sublength = len(list_tmp)
#         if list_tmp:
#             if "" not in list_tmp:
#                 print(list_tmp)
#                 chunks = [list_tmp[x:x+sublength] for x in range(0, len(list_tmp), sublength)]
#                 normal_sentences_arr.extend(chunks)

# print(normal_sentences_arr)
# with open(output, "a") as out:
#     out.write("function easyGame() {\n")
#     out.write(" difficulty_level = 1;\n")
#     out.write(" tool_container.classList.remove(\"hide-konstantin\");\n")
#     out.write(" tmp_content = [")
#     for i in range(len(sentences_arr)):
#         if i < (len(sentences_arr) - 1):
#             out.write("\"" + str(sentences_arr[i][0])+"\",\n")
#         else: 
#             out.write("\"" + str(sentences_arr[i][0])+"\"];\n")
#     out.write(" difficulty_container.classList.add(\"hide-konstantin\");\n")
#     out.write(" startGame();\n")
#     out.write(" triggerFocus(input_box);\n")
#     out.write("}\n")

#     out.write("function normalGame() {\n")
#     out.write(" difficulty_level = 2;\n")
#     out.write(" tool_container.classList.remove(\"hide-konstantin\");\n")
#     out.write(" tmp_content = [")
#     for i in range(len(normal_sentences_arr)):
#         out.write("\"")
#         for j in range(len(normal_sentences_arr[i])):
#             if i < (len(normal_sentences_arr) - 1):
#                 if j < (len(normal_sentences_arr[i]) - 1):
#                     out.write(str(normal_sentences_arr[i][j]) + " ")
#                 else:
#                     out.write(str(normal_sentences_arr[i][j])+"\",\n") 
#         if i > (len(normal_sentences_arr) - 2):
#             for j in range(len(normal_sentences_arr[i])):
#                 if j < (len(normal_sentences_arr[i]) - 1):
#                     out.write(str(normal_sentences_arr[i][j]) + " ")
#                 else:
#                     out.write(str(normal_sentences_arr[i][j])+"\"];\n")
#     out.write(" difficulty_container.classList.add(\"hide-konstantin\");\n")
#     out.write(" startGame();\n")
#     out.write(" triggerFocus(input_box);\n")
#     out.write("}\n")

#     out.write("function hardGame() {\n")
#     out.write(" difficulty_level = 3;\n")
#     out.write(" tool_container.classList.remove(\"hide-konstantin\");\n")
#     out.write(" tmp_content = [")
#     for i in range(len(sentences_arr)):
#         if i < (len(sentences_arr) - 1):
#             out.write("\"" + str(sentences_arr[i][0])+"\",\n")
#         else: 
#             out.write("\"" + str(sentences_arr[i][0])+"\"];\n")
#     out.write(" difficulty_container.classList.add(\"hide-konstantin\");\n")
#     out.write(" startGame();\n")
#     out.write(" triggerFocus(input_box);\n")
#     out.write("}\n")
