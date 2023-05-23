import os
from google.cloud import texttospeech
from pydub import AudioSegment

# Set up Google TTS client
client = texttospeech.TextToSpeechClient()

# Set up audio configuration
audio_config = texttospeech.AudioConfig(
    audio_encoding=texttospeech.AudioEncoding.MP3,
    speaking_rate=1.0,
    pitch=0,
    volume_gain_db=0,
)

# Set up voice selection
voice = texttospeech.VoiceSelectionParams(
    language_code="de-DE",
    name="de-DE-Wavenet-A",
    ssml_gender=texttospeech.SsmlVoiceGender.FEMALE,
)

# Set up input and output paths
input_file = "sentences.txt"
output_dir = "output/"

# Create output directory if it doesn't exist
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Read input file
with open(input_file, "r", encoding="utf-8") as f:
    sentences = f.readlines()

# Generate audio for each sentence
for i, sentence in enumerate(sentences):
    # Remove newline character at the end of the sentence
    sentence = sentence.rstrip("\n")

    # Set up input text
    synthesis_input = texttospeech.SynthesisInput(text=sentence)

    # Generate speech
    response = client.synthesize_speech(
        input=synthesis_input, voice=voice, audio_config=audio_config
    )

    # Write audio to file
    output
