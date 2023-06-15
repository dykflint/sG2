let allTriggerAnswersJSON = `[
{"wichtig sein + Kinder lernen teilen" : ["Ist es wichtig, dass Kinder teilen lernen?", "Es ist wichtig, dass Kinder teilen lernen.", "Warum ist es wichtig, dass Kinder teilen lernen?", "Weil es wichtig ist, dass Kinder teilen lernen."],
"leid tun + zu spät kommen" : ["Tut es dir leid, dass du zu spät kommst?", "Es tut mir leid, dass ich zu spät komme.", "Warum tut es dir leid, dass du zu spät kommst?", "Weil es mir leid tut, dass ich zu spät komme."],
"bereuen + Architektur studieren" : ["Bereust du es, dass du Architektur studierst?", "Ich bereue es, dass ich Architektur studiere.", "Warum bereust du es, dass du Architektur studierst?", "Weil ich es bereue, dass ich Architektur studiere."],
"möglich sein + Zug schon abfahren" : ["Ist es möglich, dass der Zug schon abfährt?", "Es ist möglich, dass der Zug schon abfährt.", "Warum ist es möglich, dass der Zug schon abfährt?", "Weil es möglich ist, dass der Zug abfährt."],
"nicht sicher sein + rechtzeitig ins Kino schaffen" : ["Bist du dir nicht sicher, ob du es rechtzeitig ins Kino schaffst?", "Ich bin mir nicht sicher, ob ich es rechtzeitig ins Kino schaffe.", "Warum bist du dir nicht sicher, ob du es rechtzeitig ins Kino schaffst?", "Weil ich mir nicht sicher bin, ob ich es rechtzeitig ins Kino schaffe."],
"sich freuen + dir das Buch gefallen" : ["Freut es dich, dass mir das Buch gefällt?", "Es freut mich, dass dir das Buch gefällt.", "Warum freut es  dich, dass mir das Buch gefällt?", "Weil es mich freut, dass dir das Buch gefällt."],
"schwer fallen + die Geschichte glauben" : ["Fällt es dir schwer, die Geschichte zu glauben?", "Es fällt mir schwer, die Geschichte zu glauben.", "Warum fällt es dir schwer, die Geschichte zu glauben?", "Weil es mir schwer fällt, die Geschichte zu glauben."],
"nicht erstaunlich sein + die Partei so wenige Stimmen bekommen" : ["Ist es nicht erstaunlich, dass die Partei so wenige Stimmen bekommen hat?", "Es ist nicht erstaunlich, dass die Partei so wenige Stimmen bekommen hat.", "Warum ist es nicht erstaunlich, dass die Partei so wenige Stimmen bekommen hat?", "Weil es nicht erstaunlich ist, dass die Partei so wenige Stimmen bekommen hat."],
"bedauerlich sein + die Mieten steigen" : ["Ist es bedauerlich, dass die Mieten steigen?", "Es ist bedauerlich, dass die Mieten steigen.", "Warum ist es bedauerlich, dass die Mieten steigen?", "Weil es bedauerlich ist, dass die Mieten steigen."],
"noch zu früh sein + zum Bahnhof aufbrechen" : ["Ist es noch zu früh, zum Bahnhof aufzubrechen?", "Es ist noch zu früh, zum Bahnhof aufzubrechen.", "Warum ist es noch zu früh, zum Bahnhof aufzubrechen?", "Weil es noch zu früh ist, zum Bahnhof aufzubrechen."],
"verstehen wie (here: know how to) + leckeres Essen kochen" : ["Verstehst du es, leckeres Essen zu kochen?", "Ich verstehe es, leckeres Essen zu kochen.", "Warum verstehst du es, leckeres Essen zu kochen?", "Weil ich es verstehe, leckeres Essen zu kochen."],
"unterlassen + jeden Tag eine Schachtel Zigaretten rauchen" : ["Schaffst du es, jeden Tag eine Schachtel Zigaretten zu rauchen?", "Ich schaffe es nicht, jeden Tag eine Schachtel Zigaretten zu rauchen.", "Warum schaffst du es nicht, jeden Tag eine Schachtel Zigaretten zu rauchen?", "Weil ich es nicht schaffe, jeden Tag eine Schachtel Zigaretten zu rauchen."],
"nicht genießen + im überfülltem Zug stehen" : ["Genießt du es nicht, im überfüllten Zug zu stehen?", "Ich genieße es nicht, im überfüllten Zug zu stehen.", "Warum genießt du es nicht, im überfüllten Zug zu stehen?", "Weil ich es nicht genieße, im überfüllten Zug zu stehen."],
"vermeiden + in vollen Geschäften einkaufen" : ["Vermeidest du es, in vollen Geschäften einzukaufen?", "Ich vermeide es, in vollen Geschäften einzukaufen.", "Warum vermeidest du es, in vollen Geschäften einzukaufen?", "Weil ich es vermeide, in vollen Geschäften einzukaufen."],
"nicht eilig haben + nach Hause kommen" : ["Hast du es nicht eilig, nach Hause zu kommen?", "Ich habe es nicht eilig, nach Hause zu kommen.", "Warum hast du es nicht eilig, nach Hause zu kommen?", "Weil ich es nicht eilig habe, nach Hause zu kommen."]}
]`;

const triggers = ['wichtig sein + Kinder lernen teilen', 'leid tun + zu spät kommen', 'bereuen + Architektur studieren', 'möglich sein + Zug schon abfahren', 'nicht sicher sein + rechtzeitig ins Kino schaffen', 'sich freuen + dir das Buch gefallen', 'schwer fallen + die Geschichte glauben', 'nicht erstaunlich sein + die Partei so wenige Stimmen bekommen', 'bedauerlich sein + die Mieten steigen', 'noch zu früh sein + zum Bahnhof aufbrechen', 'verstehen wie (here: know how to) + leckeres Essen kochen', 'unterlassen + jeden Tag eine Schachtel Zigaretten rauchen', 'nicht genießen + im überfülltem Zug stehen', 'vermeiden + in vollen Geschäften einkaufen', 'nicht eilig haben + nach Hause kommen'];