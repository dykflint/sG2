#!/bin/bash
for i in 38
do
	python3 createPreachingToolInputs.py triggers/$i solutions/$i
done
