import tensorflow as tf
import numpy as np
import argparse
import os
import librosa
from scipy.io.wavfile import write

# Define command line arguments
parser = argparse.ArgumentParser(description='Generate speech from text using Tacotron 2')
parser.add_argument('--text', type=str, required=True, help='Input text to generate speech from')
parser.add_argument('--model_path', type=str, required=True, help='Path to Tacotron 2 checkpoint')
parser.add_argument('--output_path', type=str, default='output.mp3', help='Path to save generated speech')
parser.add_argument('--sample_rate', type=int, default=22050, help='Audio sample rate')

# Parse command line arguments
args = parser.parse_args()

# Load Tacotron 2 model
model = tf.saved_model.load(args.model_path)

# Preprocess input text
input_text = args.text.lower().strip()
input_ids = np.array([model.preprocessor.text_to_sequence(input_text)])

# Generate mel spectrogram
mel_outputs, _ = model.inference(input_ids)

# Convert mel spectrogram to linear spectrogram
linear_outputs = tf.squeeze(model.postnet(mel_outputs))

# Convert linear spectrogram to waveform
waveform = model.wavernn.inference(linear_outputs)

# Normalize waveform
waveform /= np.max(np.abs(waveform))

# Save waveform as MP3 file
write(args.output_path, args.sample_rate, librosa.resample(waveform, model.hparams.sample_rate, args.sample_rate))

print('Speech generated and saved to', args.output_path)
