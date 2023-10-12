#!/bin/bash
for i in {1..49} 
do 
python3 create_babysteps.py $1/$i out_$i
cp out_$i a2/$i/sentences.js
rm out_$i
done
