#!/bin/bash
for i in {"$2".."${3}"}
do
	cp ${1}_questions_english${i} ../english/
done
