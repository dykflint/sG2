#!/bin/bash
for i in {1..50}
do
cat $i/lesson$i >> all_lessons
done
