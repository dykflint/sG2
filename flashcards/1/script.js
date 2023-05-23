const Questions = [{
    id: 0,
    q: 'Wie wird die Verfassung der Bundesrepublik Deutschland genannt?',
    a: [{ text: '  Grundgesetz', isCorrect: true},
        { text: ' Bundesverfassung', isCorrect: false},
        { text: ' Gesetzbuch', isCorrect: false},
        { text: ' Verfassungsvertrag', isCorrect: false},
]
},
{
    id: 1,
    q: 'Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?',
    a: [{ text: ' Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.', isCorrect: false},
        { text: ' Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.', isCorrect: false},
        { text: '  Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.', isCorrect: true},
        { text: ' Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen.', isCorrect: false},
]
},
{
    id: 2,
    q: 'Im Parlament steht der Begriff „Opposition“ für…',
    a: [{ text: ' die regierenden Parteien.', isCorrect: false},
        { text: '  alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören.', isCorrect: true},
        { text: ' die Fraktion mit den meisten Abgeordneten.', isCorrect: false},
        { text: ' alle Parteien, die bei der letzten Wahl die 5%Hürde erreichen konnten.', isCorrect: false},
]
},
{
    id: 3,
    q: 'Meinungsfreiheit in Deutschland heißt, dass ich …',
    a: [{ text: ' auf Flugblättern falsche Tatsachen behaupten darf.', isCorrect: false},
        { text: '  meine Meinung in Leserbriefen äußern kann.', isCorrect: true},
        { text: ' NaziSymbole tragen darf.', isCorrect: false},
        { text: ' Meine Meinung sagen darf, solange ich der Regierung nicht widerspreche.', isCorrect: false},
]
},
{
    id: 4,
    q: 'Was verbietet das deutsche Grundgesetz?',
    a: [{ text: ' Militärdienst', isCorrect: false},
        { text: '  Zwangsarbeit', isCorrect: true},
        { text: ' freie Berufswahl', isCorrect: false},
        { text: ' Arbeit im Ausland', isCorrect: false},
]
}]

// TRANSLATIONS 
const Translations = [{
    id: 0,
    q: 'What is the constitution of the Federal Republic of Germany called?',
    a: [{ text: '  Basic Law', isCorrect: true},
        { text: ' Federal Constitution', isCorrect: false},
        { text: ' Code of Laws', isCorrect: false},
        { text: ' Constitutional Treaty', isCorrect: false},
]
},
{
    id: 1,
    q: 'A party in the German Bundestag wants to abolish freedom of the press. Is that possible?',
    a: [{ text: ' Yes, if more than half of the members of the Bundestag are in favor of it.', isCorrect: false},
        { text: ' Yes, but twothirds of the members of the Bundestag have to be in favor of that.', isCorrect: false},
        { text: '  No, because freedom of the press is a fundamental right. It cannot be abolished.', isCorrect: true},
        { text: ' No, because only the Federal Council can abolish freedom of the press.', isCorrect: false},
]
},
{
    id: 2,
    q: 'In Parliament, the term “opposition” stands for…',
    a: [{ text: ' the ruling parties.', isCorrect: false},
        { text: '  all member of parliaments not belonging to the governing party/parties.', isCorrect: true},
        { text: ' the group with the most member of parliaments.', isCorrect: false},
        { text: ' all parties that managed to reach the 5% threshold in the last election.', isCorrect: false},
]
},
{
    id: 3,
    q: 'Freedom of expression in Germany means that I...',
    a: [{ text: ' may claim false facts on leaflets.', isCorrect: false},
        { text: '  can express my opinion in letters to the editor.', isCorrect: true},
        { text: ' May wear Nazi symbols.', isCorrect: false},
        { text: ' May speak my mind as long as I don\'t contradict the government.', isCorrect: false},
]
},
{
    id: 4,
    q: 'What does the german constitution forbid?',
    a: [{ text: ' military service', isCorrect: false},
        { text: '  Forced labour', isCorrect: true},
        { text: ' free choice of employment', isCorrect: false},
        { text: ' Work abroad', isCorrect: false},
]
}]

const next = document.getElementsByClassName('next')[0];
const prev = document.getElementsByClassName('prev')[0];
const flip_card_front = document.getElementsByClassName("flip-card-front")[0];
const flip_card_back = document.getElementsByClassName("flip-card-back")[0];
var id = 0;

flip_card_front.innerHTML = "<h1>"+String(Questions[id].q)+"</h1>";
var correct_answer 
console.log(Questions[id].a.length);
for (let i = 0; i < Questions[id].a.length;i++){
    if (Questions[id].a[i].isCorrect) {
        correct_answer = Questions[id].a[i].text;
    }
}
flip_card_back.innerHTML = "<p>"+correct_answer+"</p>";
next.addEventListener("click", () => {
    id++;
    if (id > 0) { 
        prev.classList.remove("hide-konstantin");
    }
    else {
        prev.classList.add("hide-konstantin");
    }
    if (id < Questions.length){
        next.classList.remove("hide-konstantin");
    }
    else {
        next.classList.add("hide-konstantin");
    }
    if (id < Questions.length) {
        flip_card_front.innerHTML = "<h1>"+String(Questions[id].q)+"</h1>";
        for (let i = 0; i < Questions[id].a.length;i++){
            if (Questions[id].a[i].isCorrect) {
                correct_answer = Questions[id].a[i].text;
            }
        }
        flip_card_back.innerHTML = "<p>"+correct_answer+"</p>";
    }
    else {
        next.classList.add("hide-konstantin");
        prev.classList.remove("hide-konstantin");
        id = Questions.length;
        // flip_card_front.innerHTML = "<h1>"+String(Questions[id].q)+"</h1>";
        // for (let i = 0; i < Questions[id].a.length;i++){
        //     if (Questions[id].a[i].isCorrect) {
        //         correct_answer = Questions[id].a[i].text;
        //     }
        // }
        // flip_card_back.innerHTML = "<p>"+correct_answer+"</p>";
    }
}
)
prev.addEventListener("click", () => {
    id--;
    if (id > 0) { 
        prev.classList.remove("hide-konstantin");
    }
    else {
        prev.classList.add("hide-konstantin");
    }
    if (id < Questions.length){
        next.classList.remove("hide-konstantin");
    }
    else {
        next.classList.add("hide-konstantin");
    }
    if (id < 0) { id = Questions.length - id  }
    if (id < Questions.length) {
        flip_card_front.innerHTML = "<h1>"+String(Questions[id].q)+"</h1>";
        for (let i = 0; i < Questions[id].a.length;i++){
            if (Questions[id].a[i].isCorrect) {
                correct_answer = Questions[id].a[i].text;
            }
        }
        flip_card_back.innerHTML = "<p>"+correct_answer+"</p>";
    }
    else {
        next.classList.remove("hide-konstantin");
        prev.classList.add("hide-konstantin");
        id = 0;
        // flip_card_front.innerHTML = "<h1>"+String(Questions[id].q)+"</h1>";
        // for (let i = 0; i < Questions[id].a.length;i++){
        //     if (Questions[id].a[i].isCorrect) {
        //         correct_answer = Questions[id].a[i].text;
        //     }
        // }
        // flip_card_back.innerHTML = "<p>"+correct_answer+"</p>";
    }
}
)