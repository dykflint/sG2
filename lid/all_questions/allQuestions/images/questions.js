const Questions = [{
    id: 0,
    q: 'Welches ist das Wappen der Bundesrepublik Deutschland?',
    a: [{ text: '  1', isCorrect: true},
        { text: ' 2', isCorrect: false},
        { text: ' 3', isCorrect: false},
        { text: ' 4', isCorrect: false},
]
},
{
    id: 34,
    q: 'Was zeigt dieses Bild?',
    a: [{ text: 'Gebäude mit zwei Türmen rechts und links der Fassade, und einer Glaskuppel auf dem Dach mittig', isCorrect: false},
        { text: '  den Bundestagssitz in Berlin', isCorrect: true},
        { text: ' das Bundesverfassungsgericht in Karlsruhe', isCorrect: false},
        { text: ' das Bundesratsgebäude in Berlin', isCorrect: false},
]
},
{
    id: 49,
    q: 'Der deutsche Bundespräsident Gustav Heinemann gibt Helmut Schmidt 1974 die Ernennungsurkunde zum deutschen Bundeskanzler. Was gehört zu den Aufgaben des deutschen Bundespräsidenten / der deutschen Bundespräsidentin?',
    a: [{ text: ' Er / Sie führt die Regierungsgeschäfte.', isCorrect: false},
        { text: ' Er / Sie kontrolliert die Regierungspartei.', isCorrect: false},
        { text: ' Er / Sie wählt die Minister / Ministerinnen aus.', isCorrect: false},
        { text: '  Er / Sie schlägt den Kanzler / die Kanzlerin zur Wahl vor.', isCorrect: true},
]
},
{
    id: 109,
    q: 'Welcher Stimmzettel wäre bei einer Bundestagswahl gültig?',
    a: [{ text: '  1', isCorrect: true},
        { text: ' 2', isCorrect: false},
        { text: ' 3', isCorrect: false},
        { text: ' 4', isCorrect: false},
]
},
{
    id: 155,
    q: 'How were the occupation zones of Germany distributed after 1945?',
    a: [{ text: ' 1=Great Britain, 2=Soviet Union, 3=France, 4=USA', isCorrect: false},
        { text: ' 1=Soviet Union, 2=Great Britain, 3=USA, 4=France', isCorrect: false},
        { text: '  1=Great Britain, 2=Soviet Union, 3=USA, 4=France', isCorrect: true},
        { text: ' 1=Great Britain, 2=USA, 3=Soviet Union, 4=France', isCorrect: false},
]
},
{
    id: 160,
    q: 'Was wollte Willy Brandt mit seinem Kniefall 1970 im ehemaligen jüdischen Ghetto in Warschau ausdrücken?',
    a: [{ text: ' Er hat sich den ehemaligen Alliierten unterworfen.', isCorrect: false},
        { text: '  Er bat Polen und die polnischen Juden um Vergebung.', isCorrect: true},
        { text: ' Er zeigte seine Demut vor dem Warschauer Pakt.', isCorrect: false},
        { text: ' Er sprach ein Gebet am Grab des Unbekannten Soldaten.', isCorrect: false},
]
},
{
    id: 166,
    q: 'Welcher deutsche Staat hatte eine schwarzrotgoldene Flagge mit Hammer, Zirkel und Ährenkranz?',
    a: [{ text: ' Preußen', isCorrect: false},
        { text: ' Bundesrepublik Deutschland', isCorrect: false},
        { text: '  DDR', isCorrect: true},
        { text: ' „Drittes Reich“', isCorrect: false},
]
},
{
    id: 188,
    q: 'Welches war das Wappen der Deutschen Demokratischen Republik?',
    a: [{ text: ' 1', isCorrect: false},
        { text: ' 2', isCorrect: false},
        { text: ' 3', isCorrect: false},
        { text: '  4', isCorrect: true},
]
},
{
    id: 195,
    q: 'Welches Symbol ist im Plenarsaal des Deutschen Bundestages zu sehen?',
    a: [{ text: ' die Fahne der Stadt Berlin.', isCorrect: false},
        { text: '  der Bundesadler.', isCorrect: true},
        { text: ' der Reichsadler.', isCorrect: false},
        { text: ' die Reichskrone.', isCorrect: false},
]
},
{
    id: 205,
    q: 'Welche ist die Flagge der Europäischen Union?',
    a: [{ text: '  2', isCorrect: true},
        { text: ' 1', isCorrect: false},
        { text: ' 4', isCorrect: false},
        { text: ' 3', isCorrect: false},
]
},
{
    id: 214,
    q: 'Der französische Staatspräsident François Mitterrand und der deutsche Bundeskanzler Helmut Kohl gedenken in Verdun gemeinsam der Toten beider Weltkriege. Welches Ziel der Europäischen Union wird bei diesem Treffen deutlich?',
    a: [{ text: ' Freundschaft zwischen England und Deutschland', isCorrect: false},
        { text: ' Reisefreiheit in alle Länder der EU', isCorrect: false},
        { text: '  Frieden und Sicherheit in den Ländern der EU', isCorrect: true},
        { text: ' einheitliche Feiertage in den Ländern der EU', isCorrect: false},
]
}];


const Translations = [{
    id: 0,
    q: 'What is the coat of arms of the Federal Republic of Germany?',
    a: [{ text: '  1', isCorrect: true},
        { text: ' 2', isCorrect: false},
        { text: ' 3', isCorrect: false},
        { text: ' 4', isCorrect: false},
]
},
{
    id: 34,
    q: 'What does this picture show?',
    a: [{ text: 'Building with two towers on the right and left of the facade, and a glass dome on the roof in the middle', isCorrect: false},
        { text: '  the seat of the Bundestag in Berlin', isCorrect: true},
        { text: ' the Federal Constitutional Court in Karlsruhe', isCorrect: false},
        { text: ' the Bundesrat building in Berlin', isCorrect: false},
]
},
{
    id: 49,
    q: 'In 1974, German Federal President Gustav Heinemann gave Helmut Schmidt the certificate of appointment as German Federal Chancellor. What are the duties of the German Federal President?',
    a: [{ text: ' He/She runs the affairs of state.', isCorrect: false},
        { text: ' He/She controls the ruling party.', isCorrect: false},
        { text: ' He/She selects the ministers.', isCorrect: false},
        { text: '  He / She proposes the Chancellor for election.', isCorrect: true},
]
},
{
    id: 109,
    q: 'Which ballot paper would be valid in a federal election?',
    a: [{ text: '  1', isCorrect: true},
        { text: ' 2', isCorrect: false},
        { text: ' 3', isCorrect: false},
        { text: ' 4', isCorrect: false},
]
},
{
    id: 155,
    q: 'How were the occupation zones of Germany distributed after 1945?',
    a: [{ text: ' 1=Great Britain, 2=Soviet Union, 3=France, 4=USA', isCorrect: false},
        { text: ' 1=Soviet Union, 2=Great Britain, 3=USA, 4=France', isCorrect: false},
        { text: '  1=Great Britain, 2=Soviet Union, 3=USA, 4=France', isCorrect: true},
        { text: ' 1=Great Britain, 2=USA, 3=Soviet Union, 4=France', isCorrect: false},
]
},
{
    id: 160,
    q: 'What did Willy Brandt want to express when he fell on his knees in the former Jewish ghetto in Warsaw in 1970?',
    a: [{ text: ' He submitted to the former Allies.', isCorrect: false},
        { text: '  He asked Poland and the Polish Jews for forgiveness.', isCorrect: true},
        { text: ' He showed his humility before the Warsaw Pact.', isCorrect: false},
        { text: ' He said a prayer at the Tomb of the Unknown Soldier.', isCorrect: false},
]
},
{
    id: 166,
    q: 'Which German state had a black, red and gold flag with a hammer, compass and wreath of corn?',
    a: [{ text: ' Prussia', isCorrect: false},
        { text: ' Federal Republic of Germany', isCorrect: false},
        { text: '  GDR', isCorrect: true},
        { text: ' "Third Reich"', isCorrect: false},
]
},
{
    id: 188,
    q: 'What was the coat of arms of the German Democratic Republic?',
    a: [{ text: ' 1', isCorrect: false},
        { text: ' 2', isCorrect: false},
        { text: ' 3', isCorrect: false},
        { text: '  4', isCorrect: true},
]
},
{
    id: 195,
    q: 'Which symbol can be seen in the plenary hall of the German Bundestag?',
    a: [{ text: ' the flag of the city of Berlin.', isCorrect: false},
        { text: '  the federal eagle.', isCorrect: true},
        { text: ' the imperial eagle.', isCorrect: false},
        { text: ' the imperial crown.', isCorrect: false},
]
},
{
    id: 205,
    q: 'What is the flag of the European Union?',
    a: [{ text: '  2', isCorrect: true},
        { text: ' 1', isCorrect: false},
        { text: ' 4', isCorrect: false},
        { text: ' 3', isCorrect: false},
]
},
{
    id: 214,
    q: 'French President François Mitterrand and German Chancellor Helmut Kohl commemorate the dead of both world wars in Verdun. What objective of the European Union emerges from this meeting?',
    a: [{ text: ' Friendship between England and Germany', isCorrect: false},
        { text: ' Freedom to travel to all EU countries', isCorrect: false},
        { text: '  Peace and security in the countries of the EU', isCorrect: true},
        { text: ' uniform public holidays in the countries of the EU', isCorrect: false},
]
}];
