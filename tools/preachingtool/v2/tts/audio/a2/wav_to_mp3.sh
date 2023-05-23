#!/bin/bash

for file in *.wav; do
    ffmpeg -i "$file" -codec:a libmp3lame -qscale:a 2 "mp3/${file%.wav}.mp3"
done

