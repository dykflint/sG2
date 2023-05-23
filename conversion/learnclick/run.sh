#!/bin/bash
for i in {21..50}
do
	python3 quiz.py lesson$i ${i}.xml 
done
