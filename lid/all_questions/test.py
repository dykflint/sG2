import sys 


def createArrayFromFile(file):
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

germanQuestionFile = str(sys.argv[1])
englishQuestionFile = str(sys.argv[2])
startQuestion = int(sys.argv[3])
questionNumber = int(sys.argv[4])
numberOfQuestions = int(sys.argv[5])
germanQuestionArr = []
englishQuestionArr = []
germanQuestionArr = createArrayFromFile(germanQuestionFile)
englishQuestionArr = createArrayFromFile(englishQuestionFile)

for i in range(len(germanQuestionArr)):
    with open("test/questions", "a") as out:
        if i == 0:
            if questionNumber == startQuestion:
                out.write("const Questions = [{\n")
            else: 
                out.write("{\n")
            out.write("    id: "+str(questionNumber-startQuestion)+",\n")
            out.write("    q: "+"\'"+str(germanQuestionArr[0])+"\',\n")
        if i == 1:
            if "&#10004;" in germanQuestionArr[i]:
                out.write("    a: [{ text: \'"+str(germanQuestionArr[i]).replace("&#10004;","")+"\', isCorrect: true},\n")
            else:
                out.write("    a: [{ text: \'"+str(germanQuestionArr[i]).replace("&#10004;","")+"\', isCorrect: false},\n")
        if i == 2:
            if "&#10004;" in germanQuestionArr[i]:
                out.write("        { text: \'"+str(germanQuestionArr[i]).replace("&#10004;","")+"\', isCorrect: true},\n")    
            else:
                out.write("        { text: \'"+str(germanQuestionArr[i]).replace("&#10004;","")+"\', isCorrect: false},\n")
        if i == 3:
            if "&#10004;" in germanQuestionArr[i]:
                out.write("        { text: \'"+str(germanQuestionArr[i]).replace("&#10004;","")+"\', isCorrect: true},\n")    
            else:
                out.write("        { text: \'"+str(germanQuestionArr[i]).replace("&#10004;","")+"\', isCorrect: false},\n")
        if i == 4:
            if "&#10004;" in germanQuestionArr[i]:
                out.write("        { text: \'"+str(germanQuestionArr[i]).replace("&#10004;","")+"\', isCorrect: true},\n")    
            else:
                out.write("        { text: \'"+str(germanQuestionArr[i]).replace("&#10004;","")+"\', isCorrect: false},\n")
            out.write("]\n")
            if (questionNumber-startQuestion+1) == numberOfQuestions:
                out.write("}\n")
                out.write("]\n")
            else:
                out.write("},\n")
