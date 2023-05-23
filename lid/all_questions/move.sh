#!/bin/bash
folder="borders"
for i in 222 223 227 229 233
do 
	cp english/$i ${folder}_english/
	cp german/$i ${folder}_german/
done
