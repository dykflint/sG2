#!/bin/bash
for i in {1..50}
do
	cd $i
	rm exceptions
	rm words$i
	cd ..
done
