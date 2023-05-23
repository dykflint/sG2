from gtts import gTTS
import os

#text = "Ich spreche Deutsch. Und du? Kannst du auch Deutsch sprechen?"
#text = "Ich sehe einen Stuhl. Was siehst du?"
text = "Es ist ein schöner Montagmorgen. Die Vögel zwitschern in den Bäumen."
tts = gTTS(text=text, lang='de', slow=False)
tts.speed = 0.5;
tts.save("input.mp3")

# os.system("mpg321 output.mp3") # This command plays the generated mp3 file using the mpg321 player
