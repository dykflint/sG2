#!/bin/bash
for i in {1..54}
do
cat $i/lesson$i >> all_lessons
done
