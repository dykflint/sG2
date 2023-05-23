#!/bin/bash
for i in {1..50}
do
	python3 createPreachingToolInputs.py triggers/formatted$i solutions/$i
done
