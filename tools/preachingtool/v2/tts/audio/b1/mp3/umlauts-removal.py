import os
import shutil

folder_path = "/Users/konstantin/Documents/sG/tools/preachingtool/v2/tts/audio/b1/mp3"
old_chars = ["ä", "Ä", "ö", "Ö", "ü", "Ü", "ß"]
new_chars = ["ae", "Ae", "oe", "Oe", "ue", "Ue", "ss"]

for filename in os.listdir(folder_path):
    new_filename = filename
    for i in range(len(old_chars)):
        old_char = old_chars[i]
        new_char = new_chars[i]
        if old_char in new_filename:
            new_filename = new_filename.replace(old_char, new_char)
    if new_filename != filename:
        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_filename)
        shutil.move(old_path, new_path)

