#!/bin/bash
for i in 17
do
	cat solutions/${i}Quotes emptyline triggers/formatted${i}Triggers > ${i}full
done
