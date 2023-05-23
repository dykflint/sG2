// Create data structure of questions with the correct answer highlighted 
const title = "Reality Check | Hören - Teil 01 "
const Questions = [
{
    id: 0,
    q: 'Was kostet die Jacke?', 
    a: [{ text: 'Hundertzwanzig EUR', isCorrect: true},
        { text: 'Zwölfhundert EUR', isCorrect: false},
        { text: 'Hundertzwei EUR', isCorrect: false}]
},
{
    id: 1,
    q: 'Wie viel Uhr ist es?', 
    a: [{ text: 'Viertel nach sechs', isCorrect: true},
        { text: 'Vierzig Minuten nach sechs', isCorrect: false},
        { text: 'halb sieben', isCorrect: false}]
},
{
    id: 2,
    q: 'Was ebstellt der Mann im Restaurant?', 
    a: [{ text: 'Lachs', isCorrect: false},
        { text: 'ein Steak', isCorrect: true},
        { text: 'ein Stück Kuchen', isCorrect: false}]
},
{
    id: 3,
    q: 'In welcher Klasse ist Frau Müllers Tochter?', 
    a: [{ text: 'in der dritten Klasse', isCorrect: false},
        { text: 'in der siebten Klasse', isCorrect: true},
        { text: 'in der dreizehnten Klasse', isCorrect: false}]
},
{
    id: 4,
    q: 'In welchem Stock wohnt Frau Güler?', 
    a: [{ text: 'im zweiten Stock', isCorrect: false},
        { text: 'im Dachgeschoss', isCorrect: true},
        { text: 'im Erdgeschoss', isCorrect: false}]
},
{
    id: 5,
    q: 'Wohin fährt Herr Müller mit seiner Familie?', 
    a: [{ text: 'in die Berge', isCorrect: false},
        { text: 'ans Meer', isCorrect: true},
        { text: 'auf eine Insel', isCorrect: false}]
},
{
    id: 6,
    q: 'Was kostet der Pullover?', 
    a: [{ text: 'Sechzig EUR', isCorrect: true},
        { text: 'Sechzehn EUR', isCorrect: false},
        { text: 'Sechshundert EUR', isCorrect: false}]
},
{
    id: 7,
    q: 'Wie spät ist es?', 
    a: [{ text: 'Halb neun', isCorrect: true},
        { text: 'Halb acht', isCorrect: false},
        { text: 'Neun Uhr', isCorrect: false}]
},
{
    id: 8,
    q: 'Was hat die Frau bei Amazon bestellt?', 
    a: [{ text: 'ein Buch', isCorrect: true},
        { text: 'eine DVD', isCorrect: false},
        { text: 'einen Computer', isCorrect: false}]
},
{
    id: 9,
    q: 'Wie heißt die Lehrerin von Marina?', 
    a: [{ text: 'Frau Müller', isCorrect: false},
        { text: 'Frau Meier', isCorrect: true},
        { text: 'Frau Schmitz', isCorrect: false}]
},
{
    id: 10,
    q: 'In welchem Stock wohnt die Frau?', 
    a: [{ text: 'im vierten Stock', isCorrect: true},
        { text: 'im Souterrain', isCorrect: false},
        { text: 'im Erdgeschoss', isCorrect: false}]
},
{
    id: 11,
    q: 'Wohin fährt Frau Müller mit ihrer Familie?', 
    a: [{ text: 'in die Berge', isCorrect: false},
        { text: 'an die Nordsee', isCorrect: false},
        { text: 'auf eine Insel', isCorrect: true}]
},
{
    id: 12,
    q: 'Wie viel kostet die Hose?', 
    a: [{ text: 'Neunundzwanzig Euro Neunzig', isCorrect: false},
        { text: 'Neunzehn Euro Neunzig', isCorrect: false},
        { text: 'Neunundneunzig EUR', isCorrect: true}]
},
{
    id: 13,
    q: 'Wie spät ist es?', 
    a: [{ text: 'Zwölf Uhr', isCorrect: false},
        { text: 'Fünf Uhr zwölf', isCorrect: false},
        { text: 'Zwölf Uhr fünf', isCorrect: true}]
},
{
    id: 14,
    q: 'Was bestellt der Junge bei McDoof?', 
    a: [{ text: 'einen Veggie-Burger', isCorrect: false},
        { text: 'eine kleine Pommes', isCorrect: true},
        { text: 'ein Happy Meal', isCorrect: false}]
},
{
    id: 15,
    q: 'Welchen Sport macht Herr Meier heute noch?', 
    a: [{ text: 'Er spielt Fußball', isCorrect: false},
        { text: 'Er geht joggen', isCorrect: true},
        { text: 'Er spielt Eishockey', isCorrect: false}]
},
{
    id: 16,
    q: 'In welcher Straße wohnt Frau Mettger?', 
    a: [{ text: 'in der Friedrichstraße', isCorrect: false},
        { text: 'in der Falckensteinstraße', isCorrect: true},
        { text: 'in der Oppelner Straße', isCorrect: false}]
},
{
    id: 17,
    q: 'Woher kommt Frank gerade?', 
    a: [{ text: 'von der Arbeit', isCorrect: true},
        { text: 'aus dem Fitnessstudio', isCorrect: false},
        { text: 'aus dem Kino', isCorrect: false}]
},
{
    id: 18,
    q: 'Was kostet das Hemd?', 
    a: [{ text: '12,99 Euro', isCorrect: false},
        { text: 'Genau 20 Euro', isCorrect: false},
        { text: '19,99 Euro', isCorrect: true}]
},
{
    id: 19,
    q: 'Um wieviel Uhr treffen sich Elvis und Jonathan?', 
    a: [{ text: 'pünktlich um 15:00 Uhr', isCorrect: true},
        { text: '15:20 Uhr', isCorrect: false},
        { text: '17:20 Uhr', isCorrect: false}]
},
{
    id: 20,
    q: 'Was gibt es heute bei Familie Meier zu essen?', 
    a: [{ text: 'Reste von gestern', isCorrect: false},
        { text: 'Grießklößchenssuppe', isCorrect: true},
        { text: 'Nudelauflauf', isCorrect: false}]
},
{
    id: 21,
    q: 'Auf welche Schule geht Herr Gündogans Tochter?', 
    a: [{ text: 'auf die Silvio Meier Gesamtschule', isCorrect: false},
        { text: 'aufs Pippi Langstrumpf Gymnasium', isCorrect: true},
        { text: 'auf die Angela Merkel Realschule', isCorrect: false}]
},
{
    id: 22,
    q: 'Wie heißt Hildegards Nachbarin?', 
    a: [{ text: 'Müller', isCorrect: false},
        { text: 'Meier', isCorrect: true},
        { text: 'Winter', isCorrect: false}]
},
{
    id: 23,
    q: 'Wo macht Familie Schmid dieses Jahr Urlaub?', 
    a: [{ text: 'auf Mallorca', isCorrect: false},
        { text: 'an der Nordsee', isCorrect: true},
        { text: 'auf auf Balkonien', isCorrect: false}]
},
{
    id: 24,
    q: 'Wie teuer sind die Süßigkeiten am Anfang?', 
    a: [{ text: 'einen Euro neunzig', isCorrect: true},
        { text: 'zehn Cent', isCorrect: false},
        { text: 'genau zwei Euro', isCorrect: false}]
},
{
    id: 25,
    q: 'Um wie viel Uhr fängt das Fußballspiel an?', 
    a: [{ text: 'Um Viertel nach acht', isCorrect: false},
        { text: 'Um zweiundzwanzig Uhr', isCorrect: true},
        { text: 'Um zwei Uhr zwanzig', isCorrect: false}]
},
{
    id: 26,
    q: 'Wo hat Frank das ferngesteuerte Auto gekauft?', 
    a: [{ text: 'beim Autohändler', isCorrect: false},
        { text: 'bei Ebay', isCorrect: false},
        { text: 'auf dem Flohmarkt', isCorrect: true}]
},
{
    id: 27,
    q: 'Wie heißt die Chefin von Lara?', 
    a: [{ text: 'Martha Hari', isCorrect: false},
        { text: 'Frauke Pauke', isCorrect: true},
        { text: 'Lara Zara', isCorrect: false}]
},
{
    id: 28,
    q: 'In welcher Etage gibt es Küchengeräte?', 
    a: [{ text: 'in der fünften Etage', isCorrect: false},
        { text: 'im Untergeschoss', isCorrect: true},
        { text: 'in der obersten Etage', isCorrect: false}]
},
{
    id: 29,
    q: 'Wie lange war Elke im Urlaub?', 
    a: [{ text: 'vier Wochen', isCorrect: true},
        { text: 'vierzehn Tage', isCorrect: false},
        { text: 'eine Woche', isCorrect: false}]
}
];