#!/bin/bash
for i in {1..50}
do 
	#cp  files/${i}full $i/public/triggers.js
	cp base/index.html $i/index.html
	cp base/public/script.js $i/public/script.js
	cp base/public/style.css $i/public/style.css
	#rm -r ${i}/public/img/
done
