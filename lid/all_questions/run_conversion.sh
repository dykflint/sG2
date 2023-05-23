#!/bin/bash
rm test/*
let start_question=222
let number_of_questions=5
folder="borders"
for i in 222 223 227 229 233
do
	python3 convert_questions.py ${folder}_german/$i ${folder}_english/$i $start_question $i $number_of_questions
done
