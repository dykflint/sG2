#!/bin/bash
for i in 17
do
	#sed 's/'\''/"/g' ${i}Solutions > ${i}Solutions
	sed "s/'/\"/g" ${i}Solutions >  ${i}Quotes
done
