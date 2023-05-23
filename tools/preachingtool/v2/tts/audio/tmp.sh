#!/bin/bash
for i in *.wav
do
	# "${i%.wav}"
	ffmpeg -i "${i}" mp3/${i%.wav}.mp3
done
