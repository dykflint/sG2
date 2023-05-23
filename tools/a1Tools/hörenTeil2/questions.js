// Create data structure of questions with the correct answer highlighted 
const title = "Hören - Teil 02 "
const Questions = [
{
    id: 0,
    q: 'Herr Müller soll sofort zum Gate 52 kommen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 1,
    q: 'Peter geht gerne auf die Weihnachtsfeier seiner Firma.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 2,
    q: 'Die beiden Freunde wollen sich im Restaurant treffen.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 3,
    q: 'Der Zug hat eine Verspätung von 60 Minuten.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 4,
    q: 'Frau Keller soll sofort zur Chefin Frau Eisenbein kommen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 5,
    q: 'Das Auto ist schon verkauft.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 6,
    q: 'Claudia hat noch viel Urlaub.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 7,
    q: 'Das Spiel beginnt um acht Uhr.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 8,
    q: 'Karl ist eine halbe Stunde zu spät. ', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 9,
    q: 'Herr Schlüter ist im Moment arbeitslos.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 10,
    q: 'Die Uhr wird an einem Sonntag zurückgestellt.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 11,
    q: 'Die Geschäfte sind noch geöffnet.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 12,
    q: 'Das Auto ist viel zu teuer.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 13,
    q: 'Peter braucht morgens immer einen Kaffee.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 14,
    q: 'Karl geht gerne zur Schule.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 15,
    q: 'Am Abend ist das Geschäft nicht mehr geöffnet.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 16,
    q: 'Der Anrufer hat eine Nachricht auf der Mailbox  hinterlassen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 17,
    q: 'Der Anruf kostet kein Geld.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 18,
    q: 'Marions Handy ist kaput. Sie möchte ein neues Smartphone kaufen.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 19,
    q: 'Der Zug fährt heute auf Gleis 12 ab.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 20,
    q: 'Die Passagiere Müller und Fischer sollen zum Check-In Schalter kommen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 21,
    q: 'Der Zug endet hier.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 22,
    q: 'Die Tram fährt zum Hauptbahnhof.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 23,
    q: 'Die Freunde wollen sich zum Abendessen im Restaurant treffen.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 24,
    q: 'Die Klasse fährt nach Norderney auf Klassenfahrt.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 25,
    q: 'Am Wochenende findet ein Konzert statt.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 26,
    q: 'Boris holt seine Freundin Lena am Bahnhof ab.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 27,
    q: 'Der Vater ist (Donnerstag) gestorben. Die Beerdigung ist am Montag.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 28,
    q: 'Der Unterricht fällt aus. Die Lehrerin ist krank.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 29,
    q: 'Der Winter ist besonders kalt. Deswegen steigen die Gaspreise um 250%.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
}
];
