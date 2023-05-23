#!/bin/bash
for i in {1..50}
do
	cd $i
	rm words$i
	cd ..
done
