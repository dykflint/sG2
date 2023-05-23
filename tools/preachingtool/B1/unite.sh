#!/bin/bash
for i in 38
do
	cat solutions/${i}Quotes emptyline triggers/${i}Triggers > ${i}full
done
