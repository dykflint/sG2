#!/bin/bash
for i in {1..32}
do
cat $i/lesson$i >> all_lessons
done
