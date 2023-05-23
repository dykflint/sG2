#!/bin/bash
for i in {1..50}
do 
	#cp  files/${i}full $i/public/triggers.js
	#cp base/index.html $i/index.html
	#cp base/public/script.js $i/public/script.js
	#cp base/public/style.css $i/public/style.css
	#rm -r ${i}/public/img/
	#sed -i -e 's/  */ /g' $i/public/triggers.js
	#cp $i/public/triggers.js $i/triggers.js
	#rm -r $i/public
	#cp base/index.html $i/
	sed -i.bak -e 's/gern[ ?!.,]\{1\}/gerne/g' $i/triggers.js
done
