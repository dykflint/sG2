#!/bin/bash
for i in {20..23}
do
	cat $i | awk -F '\\-' '{print $1}' > formatted$i
done
