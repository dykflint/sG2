import sys

lesson = str(sys.argv[1])
output_writing = str(sys.argv[2])

lesson_arr = []
with open(lesson) as l:
    for line in l:
        list_tmp = [elt.strip() for elt in line.split('\t')]
        while '' in list_tmp:
            list_tmp.remove('')
        if list_tmp is None: continue
        lesson_arr.append(list_tmp)

print(lesson_arr)
with open(output_writing, "a") as ow:
    ow.write("#################### BEGINNING OF " + lesson + " #########################\n")
    ow.write("<p>Write the following sentences until you get bored.</p>\n")
    ow.write("<br><br>\n")
    ow.write("<div id=\"konstantin-tips-div-v2\">\n")
    ow.write("<table class=\"k-dot-table-v2\" id=\"k-table-border\">\n")
    for arr in lesson_arr:
        if arr:
            ow.write("  <tr>\n")
            ow.write("      <td><strong>"+str(arr[0])+"</strong></td>\n")
            ow.write("      <td>"+str(arr[1])+"</td>\n")
            ow.write("  </tr>\n")
        else:
            ow.write("  <tr id=\"k-dot-no-content\">\n")
            ow.write("      <td></td>\n")
            ow.write("      <td></td>\n")
            ow.write("  </tr>\n")
    ow.write("</table>\n")
    ow.write("</div>\n")
    ow.write("#################### END #########################\n")