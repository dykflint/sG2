#!/bin/bash
for i in {20..23}
do
	python3 createPreachingToolInputs.py triggers/formatted$i solutions/$i
done
