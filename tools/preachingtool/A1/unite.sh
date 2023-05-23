#!/bin/bash
for i in {20..23}
do
	cat solutions/${i}Quotes emptyline triggers/formatted${i}Triggers > ${i}full
done
