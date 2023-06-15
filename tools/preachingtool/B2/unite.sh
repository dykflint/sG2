#!/bin/bash
for i in {1..67}
do
	cat solutions/${i}Quotes emptyline triggers/${i}Triggers > ${i}full
done
