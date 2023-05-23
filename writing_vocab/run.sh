#!/bin/bash
for i in {1..49}
do
	python3 writing_html_a1.py lesson$i output$i
	cat output$i >> final_output
	echo $i
	rm output$i
done
