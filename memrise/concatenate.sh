#!/bin/bash
for i in {1..54}
do
cat $i/words$i >> all_words
done
