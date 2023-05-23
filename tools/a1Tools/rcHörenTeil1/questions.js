// Create data structure of questions with the correct answer highlighted 
const title = "Reality Check | Hören - Teil 01 "
const Questions = [
{
    id: 0,
    q: 'Was möchte Anette trinken?', 
    a: [{ text: 'Einen Eistee.', isCorrect: true},
        { text: 'Einen Kaffee.', isCorrect: false},
        { text: 'Einen Chardonnay.', isCorrect: false}]
},
{
    id: 1,
    q: 'Wann ist das Konzert?', 
    a: [{ text: 'Am Freitag', isCorrect: false},
        { text: 'Am Samstag', isCorrect: false},
        { text: 'Am Sonntag', isCorrect: true}]
},
{
    id: 2,
    q: 'Was möchte die Frau benutzen?', 
    a: [{ text: 'Die Waschmaschine.', isCorrect: false},
        { text: 'Den Kühlschrank.', isCorrect: true},
        { text: 'Den Kleiderschrank.', isCorrect: false}]
},
{
    id: 3,
    q: 'Was kochen die Personen heute?', 
    a: [{ text: 'Spaghetti.', isCorrect: false},
        { text: 'Suppe.', isCorrect: false},
        { text: 'Gemüsepfanne.', isCorrect: true}]
},
{
    id: 4,
    q: 'Womit fährt der Mann im Winter zur Arbeit?', 
    a: [{ text: 'Mit dem Fahrrad.', isCorrect: false},
        { text: 'Mit dem Bus.', isCorrect: true},
        { text: 'Mit dem Auto.', isCorrect: false}]
},
{
    id: 5,
    q: 'Wieviel Geld ist noch da?', 
    a: [{ text: '1,23€', isCorrect: false},
        { text: '5,35€', isCorrect: false},
        { text: '5,23€', isCorrect: true}]
}
];
