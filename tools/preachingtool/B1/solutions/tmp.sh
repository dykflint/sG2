#!/bin/bash
for i in 38
do
	#sed 's/'\''/"/g' ${i}Solutions > ${i}Solutions
	sed "s/'/\"/g" ${i}Solutions >  ${i}Quotes
done
