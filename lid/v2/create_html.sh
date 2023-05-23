#!/bin/bash
for i in {61..90}
do
	python3 a1_create_tables.py ../all_questions/german/$i ../all_questions/english/$i output
	cat output >> a1_html
	python3 a2_create_tables.py ../all_questions/german/$i output
	cat output >> a2_html
done
