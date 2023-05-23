#!/bin/bash
for i in {20..23}
do
	#sed 's/'\''/"/g' ${i}Solutions > ${i}Solutions
	sed "s/'/\"/g" ${i}Solutions >  ${i}Quotes
done
