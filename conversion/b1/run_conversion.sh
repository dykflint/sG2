#!/bin/bash
for i in {1..54}
do
	python3 conversion.py vocab$i sample$i html_$i $i
done
