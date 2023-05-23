const triggerContent = document.querySelector(".trigger-content");
const chatContainer = document.querySelector(".chat-container");
const userInput = document.querySelector(".input-field");
const triggerCounter = document.querySelector(".trigger-counter");
// Pick the current trigger 
let current_trigger = triggers[0]
let current_trigger_index = 0;
let nextIndex = 0;

triggerContent.innerText = current_trigger;
triggerCounter.innerText = "1/" + triggers.length;

// array of sentences the tool has to speak per trigger
let toolOutputs = [];
// array of sentences the user has to speak per trigger
let correctAnswers = [];

//  DELAY FUNCTION
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve,ms));
// }
// async function sleepFor(seconds, whattodo) {
//     for (let i = 0; i < seconds; i++) {
//         await sleep(i*1000);
//     }
//     whattodo;
// }

function createAnswers(triggerSentences) {
    // if there is only one sentence for the trigger the tool doens't speak
    if(triggerSentences.length == 1) return;
    if(computerSpeakingFirst){
        if(triggerSentences.length == 2) {
            toolOutputs.push(triggerSentences[0]);
            correctAnswers.push(triggerSentences[1]);
        }
        if(triggerSentences.length == 4) {
            toolOutputs.push(triggerSentences[0]);
            toolOutputs.push(triggerSentences[2]);
            correctAnswers.push(triggerSentences[1]);
            correctAnswers.push(triggerSentences[3]);
        }
    } else {x1
        if(triggerSentences.length == 2) {
            toolOutputs.push(triggerSentences[1]);
            correctAnswers.push(triggerSentences[0]);
        }
        if(triggerSentences.length == 4) {
            toolOutputs.push(triggerSentences[1]);
            toolOutputs.push(triggerSentences[3]);
            correctAnswers.push(triggerSentences[0]);
            correctAnswers.push(triggerSentences[2]);
        }
    }
}

// TODO: Ich hab dich nicht verstanden. Noch einmal bitte. 
function playCorrectionAudio(sentence) {
    globalThis.correctionAudio = new Audio('audio/The correct answer is.mp3');
    correctionAudio.play();
    
    setTimeout(playAudio, 2000);
}
function playAudio(sentence) {
    // sentence = sentence.replace(/ä/g,"ae");
    // sentence = sentence.replace(/Ä/g,"Ae");
    // sentence = sentence.replace(/ö/g,"oe");
    // sentence = sentence.replace(/Ö/g,"Oe");
    // sentence = sentence.replace(/ü/g,"ue");
    // sentence = sentence.replace(/Ü/g,"Ue");
    // sentence = sentence.replace(/ß/g,"ss");
    let audio = new Audio('audio/' + "Ich kaufe einen Garten" + '.mp3');
    audio.play();
}
let alarmTag = '<img src="img/alarm.png" alt="correct-answer">'
function toolCorrection(sentence) {
    d = document.createElement('div')
    d.innerHTML = "<span style='color: red; font-weight: bold;'>The correct answer is: </span>" + sentence + alarmTag;
    d.classList.add("tool-output");
    chatContainer.appendChild(d);
    chatContainer.lastChild.scrollIntoView({behavior: "smooth", block: "end"});
    playCorrectionAudio(sentence);
}
// cancel any ongoing speech output
function cancelSpeech() {
    audio.pause();
}
function nextTrigger() {
    toolOutputs = [];
    correctAnswers = [];
    createAnswers(allTriggerAnswersData[0][current_trigger]);
    if(nextIndex + 1 < triggers.length) nextIndex++;
    current_trigger = triggers[nextIndex];
    triggerCounter.innerText = (nextIndex + 1) + "/" + triggers.length;
    triggerContent.innerText = current_trigger;
}

// Key command to enter input
window.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        enterInput();
    }
})
let switchPlaces = 0;
let computerSpeakingFirst = true;
// let computerSpeakingFirst = true;
allTriggerAnswersData = JSON.parse(allTriggerAnswersJSON);
console.log(allTriggerAnswersData[0]);
let allUserInputs = [];
// Create the array of answers for the first trigger
createAnswers(allTriggerAnswersData[0][triggers[0]]);
function enterInput() {
    if(userInput.value != ""){
        allUserInputs.push(userInput.value);
        d = document.createElement("div");
        d.classList.add("user-output");
        d.innerText = userInput.value;
        chatContainer.appendChild(d);
        chatContainer.lastChild.scrollIntoView({behavior: "smooth", block: "end"});
        userInput.value = "";
    }
    if(switchPlaces % 2 == 0){
        if(allUserInputs.slice(-1) == correctAnswers[0]) {
            console.log("Correct.");
            d.classList.add("correct");
        } else {
            toolCorrection(correctAnswers[0]);
        }

    }
}