#!/bin/bash
for i in {1..50}
do
	python3 orderedlist.py lesson$i html_lesson$i 
	cat html_lesson$i >> output
done
