	  // Questions will be asked
const Questions = [{
    id: 0,
    q: "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …",
    a: [{ text: " hier Religionsfreiheit gilt.", isCorrect: false},
        { text: " die Menschen Steuern zahlen.", isCorrect: false},
        { text: " die Menschen das Wahlrecht haben.", isCorrect: false},
        { text: "  hier Meinungsfreiheit gilt.", isCorrect: true},
]
},
{
    id: 1,
    q: "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am …",
    a: [{ text: " Geschichtsunterricht teilnimmt.", isCorrect: false},
        { text: "  Religionsunterricht teilnimmt.", isCorrect: true},
        { text: " Politikunterricht teilnimmt.", isCorrect: false},
        { text: " Sprachunterricht teilnimmt.", isCorrect: false},
]
},
{
    id: 2,
    q: "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
    a: [{ text: "  Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.", isCorrect: true},
        { text: " Der Staat muss sich nicht an die Gesetze halten.", isCorrect: false},
        { text: " Nur Deutsche müssen die Gesetze befolgen.", isCorrect: false},
        { text: " Die Gerichte machen die Gesetze.", isCorrect: false},
]
},
{
    id: 3,
    q: "Welches Recht gehört zu den Grundrechten in Deutschland?",
    a: [{ text: " Waffenbesitz", isCorrect: false},
        { text: " Faustrecht", isCorrect: false},
        { text: "  Meinungsfreiheit", isCorrect: true},
        { text: " Selbstjustiz", isCorrect: false},
]
},
{
    id: 4,
    q: "Wahlen in Deutschland sind frei. Was bedeutet das?",
    a: [{ text: " Man darf Geld annehmen, wenn man dafür einen bestimmten Kandidaten / eine bestimmte Kandidatin wählt.", isCorrect: false},
        { text: "  Der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.", isCorrect: true},
        { text: " Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.", isCorrect: false},
        { text: " Alle wahlberechtigten Personen müssen wählen.", isCorrect: false},
]
},
{
    id: 5,
    q: "Wie heißt die deutsche Verfassung?",
    a: [{ text: " Volksgesetz", isCorrect: false},
        { text: " Bundesgesetz", isCorrect: false},
        { text: " Deutsches Gesetz", isCorrect: false},
        { text: "  Grundgesetz", isCorrect: true},
]
},
{
    id: 6,
    q: "Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf …",
    a: [{ text: "  Glaubens und Gewissensfreiheit", isCorrect: true},
        { text: " Unterhaltung", isCorrect: false},
        { text: " Arbeit", isCorrect: false},
        { text: " Wohnung", isCorrect: false},
]
},
{
    id: 7,
    q: "Was steht nicht im Grundgesetz von Deutschland?",
    a: [{ text: " Die Würde des Menschen ist unantastbar.", isCorrect: false},
        { text: "  Alle sollen gleich viel Geld haben.", isCorrect: true},
        { text: " Jeder Mensch darf seine Meinung sagen.", isCorrect: false},
        { text: " Alle sind vor dem Gesetz gleich.", isCorrect: false},
]
},
{
    id: 8,
    q: "Welches Grundrecht gilt in Deutschland nur für Ausländer / Ausländerinnen? Das Grundrecht auf …",
    a: [{ text: " Schutz der Familie", isCorrect: false},
        { text: " Menschenwürde", isCorrect: false},
        { text: "  Asyl", isCorrect: true},
        { text: " Meinungsfreiheit", isCorrect: false},
]
},
{
    id: 9,
    q: "Was ist mit dem deutschen Grundgesetz vereinbar?",
    a: [{ text: " die Prügelstrafe", isCorrect: false},
        { text: " die Folter", isCorrect: false},
        { text: " die Todesstrafe", isCorrect: false},
        { text: "  die Geldstrafe", isCorrect: true},
]
}
]

// TRANSLATIONS

const Translations = [{
    id: 0,
    q: "In Germany, people are allowed to say something openly against the government because...",
    a: [{ text: " Freedom of religion applies here.", isCorrect: false},
        { text: " people pay taxes.", isCorrect: false},
        { text: " people have the right to vote.", isCorrect: false},
        { text: "  Freedom of opinion applies here.", isCorrect: true},
]
},
{
    id: 1,
    q: "In Germany, parents up to the age of 14 can decide whether at school their child should  ...",
    a: [{ text: " attend history classes.", isCorrect: false},
        { text: "  participate in religious education.", isCorrect: true},
        { text: " attend political classes.", isCorrect: false},
        { text: " participate in language classes.", isCorrect: false},
]
},
{
    id: 2,
    q: "Germany is a constitutional state. What does that mean?",
    a: [{ text: "  All residents and the state must obey the law.", isCorrect: true},
        { text: " The state does not have to obey the law.", isCorrect: false},
        { text: " Only Germans have to obey the law.", isCorrect: false},
        { text: " The courts make the laws.", isCorrect: false},
]
},
{
    id: 3,
    q: "Which right is one of the fundamental rights in Germany?",
    a: [{ text: " Gun ownership", isCorrect: false},
        { text: " right of fight", isCorrect: false},
        { text: "  Freedom of expression", isCorrect: true},
        { text: " vigilante justice", isCorrect: false},
]
},
{
    id: 4,
    q: "Elections in Germany are free. What does that mean?",
    a: [{ text: " You can accept money if you choose a specific candidate for it.", isCorrect: false},
        { text: "  The voter must not be influenced during the election, nor forced to cast a particular vote, and must not suffer any disadvantages as a result of the election.", isCorrect: true},
        { text: " Only people who have never been in prison are allowed to vote.", isCorrect: false},
        { text: " All eligible voters must vote.", isCorrect: false},
]
},
{
    id: 5,
    q: "What is the german constitution called?",
    a: [{ text: " People's Law", isCorrect: false},
        { text: " federal law", isCorrect: false},
        { text: " German law", isCorrect: false},
        { text: "  Basic Law", isCorrect: true},
]
},
{
    id: 6,
    q: "Which right is one of the basic rights guaranteed by the German constitution? The right to …",
    a: [{ text: "  have freedom of belief and conscience", isCorrect: true},
        { text: " have entertainment", isCorrect: false},
        { text: " work", isCorrect: false},
        { text: " to have an apartment", isCorrect: false},
]
},
{
    id: 7,
    q: "What is not in the Basic Law of Germany?",
    a: [{ text: " Human dignity is inviolable.", isCorrect: false},
        { text: "  Everyone should have the same amount of money.", isCorrect: true},
        { text: " Everyone is allowed to express their opinion.", isCorrect: false},
        { text: " All are equal before the law.", isCorrect: false},
]
},
{
    id: 8,
    q: "Which basic right only applies to foreigners in Germany? The fundamental right to...",
    a: [{ text: " Protection of the family", isCorrect: false},
        { text: " Human dignity", isCorrect: false},
        { text: "  Asylum", isCorrect: true},
        { text: " Freedom of speech", isCorrect: false},
]
},
{
    id: 9,
    q: "What is compatible with the German Basic Law?",
    a: [{ text: " the corporal punishment", isCorrect: false},
        { text: " the torture", isCorrect: false},
        { text: " the death penalty", isCorrect: false},
        { text: "  the fine", isCorrect: true},
]
}
]
