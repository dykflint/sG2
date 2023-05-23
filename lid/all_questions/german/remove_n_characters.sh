#!/bin/bash
for i in {2..90}
do
	sed -i.bak -r '1s/^.{5}//' $i
	mv $i.bak bak_backups
done
