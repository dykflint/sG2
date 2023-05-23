import os
from google.cloud import texttospeech
def get_sentences(file_path):
    sentences = []
    with open(file_path, 'r') as file:
        for line in file:
            sentence = line.strip()
            # remove special characters from sentence
            sentence = ''.join(char for char in sentence if char.isalnum() or char.isspace())
            sentences.append(sentence)
    return sentences

def synthesize_text(text):
    client = texttospeech.TextToSpeechClient()

    input_text = texttospeech.SynthesisInput(text=text)

    voice = texttospeech.VoiceSelectionParams(
        language_code="de-DE",
        # name="de-DE-Wavenet-A"
        name="de-DE-Neural2-B"
    )

    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.LINEAR16,
        speaking_rate=1.0,
        pitch=0.0,
        volume_gain_db=0.0
    )

    response = client.synthesize_speech(
        input=input_text,
        voice=voice,
        audio_config=audio_config
    )

    with open("audio/b1/"+ text + ".wav", "wb") as out:
        out.write(response.audio_content)
        print('Audio content written to file ' + text + '.wav')

if __name__ == '__main__':
    sentences_arr = get_sentences("b1sentences")
    # text = "Es ist ein schöner Tag. Wie jeden Montagmorgen geht Simone spazieren."
    # synthesize_text(text)
    for el in sentences_arr:
        text = el
        synthesize_text(text)
