#!/bin/bash 
# remove everything fter X
sed -i '' 's/X.*//' questions 

# remove empty lines
sed -i '' '/^$/d' answers 
