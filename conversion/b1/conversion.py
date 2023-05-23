import os
import sys

vocab = str(sys.argv[1])
sample = str(sys.argv[2])
output = str(sys.argv[3])
lesson_number = str(sys.argv[4])
vocab_list = []
sample_list = []

with open(sample) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split('\n')]
        sample_list.append(list_tmp)
        #sample_list[0][0] = sample_list[0][0][4:]
        print(sample_list[0])
        #sample_list = list(filter(None, sample_list))
print(sample_list)

with open(vocab) as f:
    for line in f:
        list_tmp = [elt.strip() for elt in line.split('\n')]
        vocab_list.append(list_tmp)

#? Number of words:
number_of_words = sample_list[-1][0]
print(number_of_words)
sample_list = sample_list[:-2]
#? Remove the first 4 characters of the string:
for i in range(len(sample_list)):
    sample_list[i][0] = sample_list[i][0][4:]

print(sample_list)

# write list to html file:
try:
    os.remove(output)
except OSError:
    pass
with open(output, 'a') as file:
    file.write('-------------------- LESSON ' + lesson_number + '-------------------------------------\n')
    file.write('<script>// <!--[CDATA[\n')
    file.write('function myFunction(myDIV) {\n')
    file.write(' var x = document.getElementById(myDIV);\n')
    file.write(' if (x.style.display === "none") {\n')
    file.write('  x.style.display = "block";\n')
    file.write(' } else {\n')
    file.write('  x.style.display = "none";\n')
    file.write(' }\n')
    file.write('}\n')
    file.write('// ]]-->\n')
    file.write('</script>\n')
    file.write('<p>INSERT INTRO TEXT HERE</p>\n')
    file.write('<p><button class="post-body-btn" onclick="myFunction(\'myDIV3\')">View Vocabulary</button>\n')
    file.write('</p>\n')
    file.write('<div id="myDIV3" style="display: none;">\n')
    file.write('<ul>\n')
    for i in range(len(vocab_list)):
        if(i%2==0):
            file.write('<li>')
            file.write('<strong>')
            file.write(vocab_list[i][0]+' ')
            file.write('</strong>')
        elif(i%2 == 1):
            file.write(vocab_list[i][0])
            file.write('\n')
            file.write('</li>') 
    file.write('</ul>\n')  
    file.write('</div>\n')
    file.write('<hr>\n')
    file.write('<h2><strong>Improve your letter</strong></h2>\n')
    file.write('<p>Now go through the text a couple of times. There are a few easily avoidable mistakes:\n')
    file.write('</p>\n')
    file.write('<p><button class="post-body-btn" onclick="myFunction(\'myDIV2\')">View Instructions</button>\n')
    file.write('</p>\n')
    file.write('<div id="myDIV2" style="display: none;">\n')
    file.write('	<ul>\n')
    file.write('		<li>Check for verb positions and -endings.</li>\n')
    file.write('		<li>Copy and paste your own text into Deepl. </li>\n')
    file.write('		<li>Swap languages to see Deepl\'s German translation.</li>\n')
    file.write('		<li>Compare your text with Deepl\'s German translation.</li>\n')
    file.write('	</ul>\n')
    file.write('</div>\n')
    file.write('<hr>\n')
    file.write('<h2><strong>Performance Check</strong></h2>\n')
    file.write('<p>Compare your work with the sample letter below:\n')
    file.write('</p>\n')
    file.write('<p><button class="post-body-btn" onclick="myFunction(\'myDIV1\')">View Sample Letter</button>\n')
    file.write('</p>\n')
    file.write('<div id="myDIV1" style="display: none;">\n')
    file.write('<ol>\n')
    for i in range(len(sample_list)):
            file.write('<li>')
            file.write(sample_list[i][0]+' ')
            file.write('\n')
            if i == (len(sample_list) - 1):
                file.write('<br /><br />')
                file.write(number_of_words)
                file.write('</li>')
            else:
                file.write('</li>')
    file.write('</ol>\n')    
    file.write('	</p>')
    file.write('\n')
    file.write('</div>\n')
    file.write('-------------------- END OF LESSON ' + lesson_number + '-----------------------------\n')
