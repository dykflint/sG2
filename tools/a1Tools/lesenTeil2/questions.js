// Create data structure of questions with the correct answer highlighted 
const title = "Lesen - Teil 02 "
const Questions = [
{
    id: 0,
    q: 'Sie interessieren sich für das Wetter in Deutschland.', 
    a: [{ text: 'img/Lesen Teil 02 - 1.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 1.2.png', isCorrect: false}]
},
{
    id: 1,
    q: 'Sie sind Student/in und suchen eine Wohnung in Berlin.', 
    a: [{ text: 'img/Lesen Teil 02 - 2.1.png', isCorrect: false},
        { text: 'img/Lesen Teil 02 - 2.2.png', isCorrect: true}]
},
{
    id: 2,
    q: 'Sie suchen eine Bahnverbindung von Berlin nach Hannover.', 
    a: [{ text: 'img/Lesen Teil 02 - 3.1.png', isCorrect: false},
        { text: 'img/Lesen Teil 02 - 3.2.png', isCorrect: true}]
},
{
    id: 3,
    q: 'Sie wollen wissen, wann der nächste Flug von Berlin nach Italien geht.', 
    a: [{ text: 'img/Lesen Teil 02 - 4.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 4.2.png', isCorrect: false}]
},
{
    id: 4,
    q: 'Sie wollen mit Ihrer Partnerin/Ihrem Partner und Ihren Kindern im Ausland Urlaub machen.', 
    a: [{ text: 'img/Lesen Teil 02 - 5.1.png', isCorrect: false},
        { text: 'img/Lesen Teil 02 - 5.2.png', isCorrect: true}]
},
{
    id: 5,
    q: 'Sie suchen einen Tanzpartner/eine Tanzpartnerin.', 
    a: [{ text: 'img/Lesen Teil 02 - 6.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 6.2.png', isCorrect: false}]
},
{
    id: 6,
    q: 'Sie suchen eine Wohnung für drei Monate in Frankfurt am Main.', 
    a: [{ text: 'img/Lesen Teil 02 - 7.1.png', isCorrect: false},
        { text: 'img/Lesen Teil 02 - 7.2.png', isCorrect: true}]
},
{
    id: 7,
    q: 'Sie suchen einen Raum für Ihre Hochzeitsfeier.', 
    a: [{ text: 'img/Lesen Teil 02 - 8.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 8.2.png', isCorrect: false}]
},
{
    id: 8,
    q: 'Das Display Ihres Handy ist kaputt. Sie suchen jemanden, der es Ihnen repariert.', 
    a: [{ text: 'img/Lesen Teil 02 - 9.1.png', isCorrect: false},
        { text: 'img/Lesen Teil 02 - 9.2.png', isCorrect: true}]
},
{
    id: 9,
    q: 'Ihr Laptop ist runtergefallen und funktioniert nicht mehr. Sie suchen einen Reparaturservice.', 
    a: [{ text: 'img/Lesen Teil 02 - 10.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 10.2.png', isCorrect: false}]
},
{
    id: 10,
    q: 'Sie möchten heute Abend einen Actionfilm mit Wuce Brillis sehen.', 
    a: [{ text: 'img/Lesen Teil 02 - 11.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 11.2.png', isCorrect: false}]
},
{
    id: 11,
    q: 'Sie suchen einen Nebenjob für 2 Tage die Woche.', 
    a: [{ text: 'img/Lesen Teil 02 - 12.1.png', isCorrect: false},
        { text: 'img/Lesen Teil 02 - 12.2.png', isCorrect: true}]
},
{
    id: 12,
    q: 'Sie wollen besser kochen lernen brauchen aber menschliche Hilfe dabei.', 
    a: [{ text: 'img/Lesen Teil 02 - 13.1.png', isCorrect: false},
        { text: 'img/Lesen Teil 02 - 13.2.png', isCorrect: true}]
},
{
    id: 13,
    q: 'Sie wollen einen Deutschkurs machen aber bequem von zu Hause aus.', 
    a: [{ text: 'img/Lesen Teil 02 - 14.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 14.2.png', isCorrect: false}]
},
{
    id: 14,
    q: 'Ihre Katze ist plötzlich nicht mehr da. Sie wollen sie wiederfinden und suchen Hilfe.', 
    a: [{ text: 'img/Lesen Teil 02 - 15.1.png', isCorrect: false},
        { text: 'img/Lesen Teil 02 - 15.2.png', isCorrect: true}]
},
{
    id: 15,
    q: 'Sie haben kleine Kinder und hätten gerne einen ganz jungen Hund.', 
    a: [{ text: 'img/Lesen Teil 02 - 16.1.png', isCorrect: false},
        { text: 'img/Lesen Teil 02 - 16.2.png', isCorrect: true}]
},
{
    id: 16,
    q: 'Sie haben viel Zeit und brauchen kein Geld. Sie suchen ehrenamtliche Arbeit.', 
    a: [{ text: 'img/Lesen Teil 02 - 17.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 17.2.png', isCorrect: false}]
},
{
    id: 17,
    q: 'Sie brauchen einen neuen Handyvertrag.', 
    a: [{ text: 'img/Lesen Teil 02 - 18.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 18.2.png', isCorrect: false}]
},
{
    id: 18,
    q: 'Sie wollen ernsthaft aufhören zu rauchen und haben schon alle alternative Methoden ausprobiert. Jetzt suchen Sie professionelle Hilfe.', 
    a: [{ text: 'img/Lesen Teil 02 - 19.1.png', isCorrect: false},
        { text: 'img/Lesen Teil 02 - 19.2.png', isCorrect: true}]
},
{
    id: 19,
    q: 'Sie suchen eine Mitarbeiterin für Ihre Firma auf begrenzte Zeit.', 
    a: [{ text: 'img/Lesen Teil 02 - 20.1.png', isCorrect: false},
        { text: 'img/Lesen Teil 02 - 20.2.png', isCorrect: true}]
},
{
    id: 20,
    q: 'Sie suchen eine Putzkraft für ihr 200qm Penthaus in Neukölln. ', 
    a: [{ text: 'img/Lesen Teil 02 - 21.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 21.2.png', isCorrect: false}]
},
{
    id: 21,
    q: 'Sie möchten ein Paket nach Kolumbien verschicken und möchten. wissen, wie viel es kostet.', 
    a: [{ text: 'img/Lesen Teil 02 - 22.1.png', isCorrect: false},
        { text: 'img/Lesen Teil 02 - 22.2.png', isCorrect: true}]
},
{
    id: 22,
    q: 'Sie suchen einen guten Hundefrisör.', 
    a: [{ text: 'img/Lesen Teil 02 - 23.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 23.2.png', isCorrect: false}]
},
{
    id: 23,
    q: 'Sie suchen einen Ehemann/eine Ehefrau.', 
    a: [{ text: 'img/Lesen Teil 02 - 24.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 24.2.png', isCorrect: false}]
},
{
    id: 24,
    q: 'Sie möchten Ihre deutsche Grammatik verbessern und suchen Instruktionen auf Englisch. ', 
    a: [{ text: 'img/Lesen Teil 02 - 25.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 25.2.png', isCorrect: false}]
}
];