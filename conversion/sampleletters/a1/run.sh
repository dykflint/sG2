#!/bin/bash
for i in {16..50}
do
	python3 sampleletter.py lesson$i html_lesson$i 
	cat html_lesson$i >> output
done
