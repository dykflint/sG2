#!/bin/bash
for i in {1..50}
do
	cat $i | awk -F '\\-' '{print $1}' > formatted$i
done
