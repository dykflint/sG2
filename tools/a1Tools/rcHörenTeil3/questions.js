// Create data structure of questions with the correct answer highlighted 
const title = "Reality Check | Hören - Teil 03 "
const Questions = [
{
    id: 0,
    q: 'Wie heißt das Restaurant?', 
    a: [{ text: 'Monsieur Croque', isCorrect: false},
        { text: 'Albert´s Küche', isCorrect: true},
        { text: 'Frischer Fisch', isCorrect: false}]
},
{
    id: 1,
    q: 'Für wann ist die Tischreservierung?', 
    a: [{ text: 'Für 19:00 Uhr.', isCorrect: true},
        { text: 'Für 9:00 Uhr.', isCorrect: false},
        { text: 'Für 10:00 Uhr.', isCorrect: false}]
},
{
    id: 2,
    q: 'Für wieviele Personen muss ein Tisch reserviert werden?', 
    a: [{ text: '5 Personen.', isCorrect: false},
        { text: '6 Personen.', isCorrect: true},
        { text: '4 Personen.', isCorrect: false}]
},
{
    id: 3,
    q: 'Wo möchte sich Robert mit Danielle treffen?', 
    a: [{ text: 'Am Hermannplatz.', isCorrect: false},
        { text: 'An der Hauptstraße.', isCorrect: false},
        { text: 'Am Hans-Peter-Platz.', isCorrect: true}]
},
{
    id: 4,
    q: 'Unter welcher Nummer soll Frau Misch zurückrufen?', 
    a: [{ text: '68 25 11.', isCorrect: true},
        { text: '60 53 44.', isCorrect: false},
        { text: '68 11 12.', isCorrect: false}]
}
];
