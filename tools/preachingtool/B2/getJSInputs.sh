#!/bin/bash
for i in {1..67}
do
	python3 createPreachingToolInputs.py triggers/$i solutions/$i
done
