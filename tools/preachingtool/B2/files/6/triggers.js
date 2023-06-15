let allTriggerAnswersJSON = `[
{"gehen - am Samstag - in ein Restaurant" : ["Ich gehe am Samstag in ein Restaurant.", "Warum gehst du am Samstag nicht in eine Imbissbude?", "Weil ich Geburtstag habe und ein Restaurant schöner ist.", "Das ergibt Sinn."],
"fahren - nächste Woche - in die Berge (pl)" : ["Ich fahre nächste Woche in die Berge.", "Warum fährst du nächste Woche nicht an die See?", "Weil ich Urlaub habe und lieber in die Berge fahre.", "Das ergibt Sinn."],
"fliegen - übermorgen - in die USA (pl)" : ["Ich fliege übermorgen in die USA.", "Warum fliegst du übermorgen nicht in die Türkei?", "Weil ich kein Türkisch spreche.", "Das ergibt Sinn."],
"arbeiten - am Abend - von zu Hause aus" : ["Ich arbeite am Abend von zu Hause aus.", "Warum arbeitest du am Abend nicht in der Firma?", "Weil ich lieber von zu Hause aus arbeite.", "Das ergibt Sinn."],
"schlafen - morgen - bei meinem Freund" : ["Ich schlafe morgen bei meinem Freund.", "Warum schläfst du morgen nicht zu Hause?", "Weil ich mit meinem Freund sprechen möchte.", "Das ergibt Sinn."],
"kaufen - übermorgen - Fleisch - beim Metzger" : ["Ich kaufe übermorgen Fleisch beim Metzger.", "Warum kaufst du übermorgen dein Fleisch nicht im Supermarkt?", "Weil ich lieber Fleisch beim Metzger kaufe.", "Das ergibt Sinn."],
"verkaufen - nächstes Wochenende - Kram - auf dem Flohmarkt" : ["Ich verkaufe nächstes Wochenende meinen Kram auf dem Flohmarkt.", "Warum verkaufst du nächstes Wochenende deinen Kram nicht im Internet?", "Weil ich meinen Kram lieber auf dem Flohmarkt verkaufe.", "Das ergibt Sinn."],
"abholen - meine Kinder (pl) - heute Nachmittag - vom Kindergarten" : ["Ich hole heute Nachmittag meine Kinder vom Kindergarten ab.", "Warum holst du heute Nachmittag deine Kinder nicht von der Schule ab?", "Weil sie noch zu jung sind und noch in den Kindergarten gehen.", "Das ergibt Sinn."],
"warten - nachher - am Ausgang Hasenheide* - auf dich" : ["Ich warte nachher am Ausgang Hasenheide auf dich.", "Warum wartest Du nachher nicht am Ausgang Südstern auf mich?", "Weil wir gesagt haben, dass wir uns am Ausgang Hasenheide treffen.", "Das ergibt Sinn."],
"hängen - vorher - meine Klamotten (pl) - in den Schrank" : ["Ich hänge vorher meine Klamotten in den Schrank.", "Warum hängst du vorher deine Klamotten nicht an die Garderobe?", "Weil ich zu viele Klamotten habe.", "Das ergibt Sinn."]}
]`;

const triggers = ['gehen - am Samstag - in ein Restaurant', 'fahren - nächste Woche - in die Berge (pl)', 'fliegen - übermorgen - in die USA (pl)', 'arbeiten - am Abend - von zu Hause aus', 'schlafen - morgen - bei meinem Freund', 'kaufen - übermorgen - Fleisch - beim Metzger', 'verkaufen - nächstes Wochenende - Kram - auf dem Flohmarkt', 'abholen - meine Kinder (pl) - heute Nachmittag - vom Kindergarten', 'warten - nachher - am Ausgang Hasenheide* - auf dich', 'hängen - vorher - meine Klamotten (pl) - in den Schrank'];