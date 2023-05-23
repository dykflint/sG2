// Create data structure of questions with the correct answer highlighted 
const title = "Lesen - Teil 03 "
const Questions = [
{
    id: 0,
    q: 'Die Sprachschule ist jetzt in der Butenschönstraße 121.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 1,
    q: 'Hier kann man auch am Wochenende Blumen kaufen.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 2,
    q: 'Die Getränke kosten extra.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 3,
    q: 'Der Zug endet in Eberswalde. Bis Bernau muss man einen Ersatzbus nehmen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 4,
    q: 'An dieser Tür darf man nicht klingeln.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 5,
    q: 'Man darf ohne Fahrkarte fahren, wenn der Automat defekt ist.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 6,
    q: 'Das QuerDurchsLand Ticket: Am Wochenende darf man bis zu 4 Personen mitnehmen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 7,
    q: 'Nach 22 Uhr kommt man nicht mehr ins Hotel.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 8,
    q: 'Man muss die Tür selbst zumachen.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 9,
    q: 'Das Cafe hat am Sonntag geschlossen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 10,
    q: 'Für die Studie sucht man Raucher.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 11,
    q: 'Die Kaution beträgt 3 Monatsmieten.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 12,
    q: 'Man muss das Handy ausmachen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 13,
    q: 'In diesem Restaurant gibt es einen günstigen Mittagstisch.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 14,
    q: 'Man muss Hunde an die Leine nehmen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 15,
    q: 'Im Jugendzentrum: Jugendliche können dort heute Abend einen Film schauen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 16,
    q: 'Tickets ins Ausland gibt es nur an Schalter 3.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 17,
    q: 'Im Theater: Sie können in den Pausen etwas zu essen kaufen.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 18,
    q: 'Ende Oktober können Sie im Restaurant wieder essen gehen.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 19,
    q: 'Heute kann man sich nicht im Rathaus anmelden.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 20,
    q: 'Am Mittwoch hat die Bibliothek geschlossen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 21,
    q: 'An dieser Haltestelle hält morgens kein Bus.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 22,
    q: 'Nur diese Woche ist der Deutschkurs 30% günstiger. ', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 23,
    q: 'Es gibt keine Konzertkarten mehr.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 24,
    q: 'Heute gibt es hier keinen Fußball zu sehen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 25,
    q: 'Kinder dürfen mitkommen.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 26,
    q: 'Es gibt Deutschkurse am Morgen, am Nachmittag und am Abend.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 27,
    q: 'Hier darf man gar nicht parken.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 28,
    q: '', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 29,
    q: 'Hier darf man keine Werbung einwerfen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
}
];
