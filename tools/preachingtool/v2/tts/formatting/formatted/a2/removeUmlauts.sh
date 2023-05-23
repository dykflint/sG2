#!/bin/bash 
sed -i '' 's/Ä/Ae/g' $1
sed -i '' 's/ä/ae/g' $1
sed -i '' 's/Ö/Oe/g' $1
sed -i '' 's/ö/oe/g' $1
sed -i '' 's/Ü/Ue/g' $1
sed -i '' 's/ß/ss/g' $1
