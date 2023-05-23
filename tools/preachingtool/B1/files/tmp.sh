#!/bin/bash
for i in {1..53}
do 
	#mkdir $i
	cp  files/${i}full $i/triggers.js
	#cp base/index.html $i/index.html
	#cp base/public/script.js $i/public/script.js
	#cp base/public/style.css $i/public/style.css
	#rm -r ${i}/public/img/
	#sed -i -e 's/  */ /g' $i/public/triggers.js
	#cp $i/public/triggers.js $i/triggers.js
	#rm -r $i/public
	#cp base/index.html $i/
	#cp files/index.html $i/index.html
done	
