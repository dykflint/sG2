// Create data structure of questions with the correct answer highlighted 
const title = "Lesen - Teil 01 "
const Questions = [
{
    id: 0,
    q: 'Samsons Zug kommt vor zwei Uhr in Hannover an.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 1,
    q: 'Lilo kann Samson nicht abholen. Sie findet ihn nicht.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 2,
    q: 'Sie treffen sich auf Gleis 1.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 3,
    q: 'Lilo kann Samson anrufen, falls sie sich nicht finden.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 4,
    q: 'Karl hatte am letzten Wochenende Geburtstag.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 5,
    q: 'Die Feier ist am Sonntag.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 6,
    q: 'Die Party beginnt um acht Uhr abends.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 7,
    q: 'Carmen kennt niemanden auf der Party.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 8,
    q: 'Carmens Salat ist lecker.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 9,
    q: 'Im Garten ist es kalt. Also feiert Karl im Haus.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 10,
    q: 'Frau Sauer und Frau Wagner sind alte Freunde.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 11,
    q: 'Frau Sauer und Frau Wagner spielen zusammen auf einem Konzert.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 12,
    q: 'Es ist ein Jazz-Konzert.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 13,
    q: 'Gerlinde Sauer schläft bei Frau Wagner im Gästezimmer.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 14,
    q: 'Das Hotel ist billig.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 15,
    q: 'Frau Sauer fährt nach dem Konzert noch 2 Stunden mit dem Zug.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 16,
    q: 'Frau Sauer kommt schon viele Stunden vor dem Konzert in Berlin an.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 17,
    q: 'Frau Sauer weiß nicht, wo sie gut essen kann.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 18,
    q: 'Frau Jemand möchte Herrn Aytogmus treffen.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 19,
    q: 'Montag ist ein guter Tag für Frau Jemand.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 20,
    q: 'Dienstag Morgen ist eine gute Zeit für Frau Jemand.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 21,
    q: 'Der Termin steht schon im Kalender.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 22,
    q: 'Vera wohnt in Frankfurt.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 23,
    q: 'Rosa arbeitet auf der Konferenz.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 24,
    q: 'Vera möchte sich am Donnerstag Nachmittag treffen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 25,
    q: 'Rosa hat eine Gluten-Allergie.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 26,
    q: 'Sie treffen sich in einem Cafe in der Nähe der Konstabler Wache.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 27,
    q: 'Der Verein macht den Ausflug jedes Jahr.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 28,
    q: 'Die Mitglieder fahren an einen See bei Berlin.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 29,
    q: 'Ihre Hobbies sind Sitzen und Essen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 30,
    q: 'Sie fahren am Abend zurück nach Berlin.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 31,
    q: 'Sie fahren mit dem Zug zurück nach Bernau.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 32,
    q: 'Die Fahrt beginnt am Nachmittag des 14. Juni.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 33,
    q: 'Der Bus wartet auf die Mitglieder vor einer Grundschule.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 34,
    q: 'Die Hinfahrt kostet 10 EUR. Die Rückfahrt auch.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 35,
    q: 'Essen und Getränke zahlt der Verein.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 36,
    q: 'Die Mitglieder müssen sich für den Ausflug anmelden.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 37,
    q: 'Konstantin ist letztes Wochenende umgezogen.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 38,
    q: 'Die neue Wohnung ist perfekt.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 39,
    q: 'Konstantin gefällt das Wohnzimmer.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 40,
    q: 'Das Schlafzimmer ist leise.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 41,
    q: 'Am Wochenende treffen sich Konstantin und Maria.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 42,
    q: 'Frank besucht Konstantin und Elvis am Wochenende.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 43,
    q: 'Bernd hat ein Problem.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 44,
    q: 'Bernd und Frank treffen sich am Montag.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 45,
    q: 'Bernd kommt zwei Stunden früher zum Alexanderplatz.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 46,
    q: 'Sie treffen sich dort am Fernsehturm.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 47,
    q: 'Frank kann Bernd jetzt auf dem Handy anrufen.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 48,
    q: 'Die Wohnung von Hans und Peter ist sehr groß.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 49,
    q: 'Die Miete ist sehr billig für die Münchner Innenstadt.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
},
{
    id: 50,
    q: 'Das Haus hat einen Aufzug.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 51,
    q: 'Hans und Peter sind noch jung.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 52,
    q: 'Hans und Peter hören gerne Techno.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 53,
    q: 'Hans und Peter haben Kinder.', 
    a: [{ text: 'Richtig', isCorrect: false},
        { text: 'Falsch', isCorrect: true}]
},
{
    id: 54,
    q: 'Hans und Peter sind glücklich in der Wohnung.', 
    a: [{ text: 'Richtig', isCorrect: true},
        { text: 'Falsch', isCorrect: false}]
}
];
