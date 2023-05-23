// Create data structure of questions with the correct answer highlighted 
const title = "Hören - Teil 01 "
const Questions = [
{
    id: 0,
    q: 'Die Nummer ist...', 
    a: [{ text: '0151 673 188 95', isCorrect: false},
        { text: '0161 573 188 94', isCorrect: false},
        { text: '0115 673 188 95', isCorrect: true}]
},
{
    id: 1,
    q: 'Wo treffen sich die beiden Mädchen später?', 
    a: [{ text: 'in der Aula', isCorrect: false},
        { text: 'in der Toilette', isCorrect: false},
        { text: 'in der Shopping Mall', isCorrect: true}]
},
{
    id: 2,
    q: 'Wie lange warten die Schüler schon auf die Lehrerin?', 
    a: [{ text: '30mins', isCorrect: true},
        { text: 'eine Stunde', isCorrect: false},
        { text: 'eine Viertelstunde', isCorrect: false}]
},
{
    id: 3,
    q: 'An welchem Tag will die Freundin nach Berlin?', 
    a: [{ text: 'am Dienstag', isCorrect: false},
        { text: 'am Samstag', isCorrect: false},
        { text: 'am Donnerstag', isCorrect: true}]
},
{
    id: 4,
    q: 'Was ist kaputt?', 
    a: [{ text: 'Markus Brille', isCorrect: false},
        { text: 'Markus Auto', isCorrect: true},
        { text: 'Markus Computer', isCorrect: false}]
},
{
    id: 5,
    q: 'Wem gehört das Auto?', 
    a: [{ text: 'der Nachbarin	', isCorrect: false},
        { text: 'dem Nachbarn', isCorrect: false},
        { text: 'den Eltern der Nachbarin', isCorrect: true}]
},
{
    id: 6,
    q: 'Wie viel kostet der Kaffee?', 
    a: [{ text: '2,80 EUR', isCorrect: true},
        { text: '3 EUR', isCorrect: false},
        { text: '3,20 EUR', isCorrect: false}]
},
{
    id: 7,
    q: 'Wann beginnt die Feier?', 
    a: [{ text: 'Um 15:00 Uhr', isCorrect: true},
        { text: 'Um 15:15 Uhr', isCorrect: false},
        { text: 'Um 14:45 Uhr', isCorrect: false}]
},
{
    id: 8,
    q: 'Was möchte Karl haben?', 
    a: [{ text: 'ein Android Phone', isCorrect: false},
        { text: 'ein Fair Phone', isCorrect: false},
        { text: 'ein iPhone', isCorrect: true}]
},
{
    id: 9,
    q: 'Wohin geht die Klassenfahrt?', 
    a: [{ text: 'nach Bremen', isCorrect: false},
        { text: 'nach Polen ', isCorrect: true},
        { text: 'nach Fehmarn', isCorrect: false}]
},
{
    id: 10,
    q: 'Wen sucht die Polizei?', 
    a: [{ text: 'eine Miss Rheinland', isCorrect: false},
        { text: 'eine vermisste Person', isCorrect: false},
        { text: 'eine/n Mörder/in', isCorrect: true}]
},
{
    id: 11,
    q: 'Um wie viel Uhr geht Klaus normalerweise schlafen?', 
    a: [{ text: 'Um Mitternacht', isCorrect: true},
        { text: 'Um 22 Uhr', isCorrect: false},
        { text: 'Um 00:10 Uhr', isCorrect: false}]
},
{
    id: 12,
    q: 'In welchem Monat schreibt Klara ihr Abitur?', 
    a: [{ text: 'Im Mai', isCorrect: false},
        { text: 'Im Juni', isCorrect: true},
        { text: 'Im Juli', isCorrect: false}]
},
{
    id: 13,
    q: 'Was muss repariert werden?', 
    a: [{ text: 'die Waschmaschine', isCorrect: false},
        { text: 'der Geschirrspüler ', isCorrect: false},
        { text: 'der Kühlschrank', isCorrect: true}]
},
{
    id: 14,
    q: 'Welchen Sport macht der Handballlehrer noch in seiner Freizeit?', 
    a: [{ text: 'Er fährt Fahrrad.', isCorrect: false},
        { text: 'Er spielt Basketball.', isCorrect: false},
        { text: 'Er spielt Schach.', isCorrect: true}]
},
{
    id: 15,
    q: 'Was muss man operieren?', 
    a: [{ text: 'das Knie', isCorrect: false},
        { text: 'die Hüfte', isCorrect: true},
        { text: 'den Blinddarm', isCorrect: false}]
},
{
    id: 16,
    q: 'Womit muss Elke aufhören?', 
    a: [{ text: 'mit dem Rauchen', isCorrect: false},
        { text: 'mit dem Trinken', isCorrect: true},
        { text: 'mit dem Cola Trinken', isCorrect: false}]
},
{
    id: 17,
    q: 'Wo findet die Querdenker-Demo statt?', 
    a: [{ text: 'auf dem Alexanderplatz', isCorrect: true},
        { text: 'am großen Stern', isCorrect: false},
        { text: 'am Potsdamer Platz', isCorrect: false}]
},
{
    id: 18,
    q: 'Wie oft wurde die Frau gegen Corona geimpft?', 
    a: [{ text: '99 Mal', isCorrect: true},
        { text: '9 Mal', isCorrect: false},
        { text: '19 Mal', isCorrect: false}]
},
{
    id: 19,
    q: 'Welche Krankheit hat Micha?', 
    a: [{ text: 'Er hat Covid.', isCorrect: false},
        { text: 'Er hat eine Grippe.', isCorrect: true},
        { text: 'Er hat eine Erkältung.', isCorrect: false}]
},
{
    id: 20,
    q: 'Die Telefonnummer der Polizei in Deutschland ist…', 
    a: [{ text: '112', isCorrect: false},
        { text: '110', isCorrect: true},
        { text: '911', isCorrect: false}]
},
{
    id: 21,
    q: 'In welcher Straße wohnt der Mann?', 
    a: [{ text: 'in der Friedensstraße', isCorrect: false},
        { text: 'in der Friedelstraße', isCorrect: true},
        { text: 'in der Friedrichstraße', isCorrect: false}]
},
{
    id: 22,
    q: 'In welchem Stock wohnt der Junge?', 
    a: [{ text: 'im ersten Stock', isCorrect: false},
        { text: 'im Erdgeschoss', isCorrect: true},
        { text: 'im Kellergeschoss', isCorrect: false}]
},
{
    id: 23,
    q: 'Wann wollen die Eltern wieder nach Hause fahren?', 
    a: [{ text: 'in drei Monaten', isCorrect: true},
        { text: 'in drei Wochen', isCorrect: false},
        { text: 'in drei Tagen', isCorrect: false}]
},
{
    id: 24,
    q: 'Wie viele Gäste waren auf die Hochzeit eingeladen?', 
    a: [{ text: 'mehr als dreihundert', isCorrect: true},
        { text: 'weniger als dreihundert', isCorrect: false},
        { text: 'gar keine Gäste', isCorrect: false}]
},
{
    id: 25,
    q: 'Was für ein Problem hat Klaus?', 
    a: [{ text: 'Er findet seine Autoschlüssel nicht.', isCorrect: false},
        { text: 'Er findet sein Auto nicht.', isCorrect: false},
        { text: 'Er darf sein Auto nicht mehr  fahren.', isCorrect: true}]
},
{
    id: 26,
    q: 'Um wie viel Uhr gehen die Freunde in die Sauna?', 
    a: [{ text: 'Um 13 Uhr', isCorrect: false},
        { text: 'Um 15 Uhr', isCorrect: false},
        { text: 'Um 14:30 ', isCorrect: true}]
},
{
    id: 27,
    q: 'Was ist jetzt schon wieder kaputt?', 
    a: [{ text: 'ihr Computer', isCorrect: false},
        { text: 'ihre Hosentasche', isCorrect: false},
        { text: 'ihr Handy', isCorrect: true}]
},
{
    id: 28,
    q: 'Wann arbeitet Hans?', 
    a: [{ text: 'morgens', isCorrect: false},
        { text: 'nachts', isCorrect: false},
        { text: 'nur am Wochenende', isCorrect: true}]
},
{
    id: 29,
    q: 'Wohin geht Claudia um 6 Uhr morgens?', 
    a: [{ text: 'in einen Club', isCorrect: false},
        { text: 'nach Hause', isCorrect: true},
        { text: 'zur Arbeit', isCorrect: false}]
}
];
