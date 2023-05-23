// Delay function 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleepFor(seconds, whattodo){
    for (let i = 0; i < seconds; i++){
        await sleep(i*1000);
    }
    whattodo();
}


// Collect all the necessary containers 
const questionContainer = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const gameScreen = document.querySelector('.game-screen');
const finishScreen = document.querySelector('.finish-screen');
const option1 = document.querySelector('.option-1');
const option2 = document.querySelector('.option-2');
const option3 = document.querySelector('.option-3');
const scoreMessage = document.querySelector('.score');
const titleContainer = document.querySelector('.title')
const audioContainer = document.querySelector('.audio-src');

// Necessary variables for points and other values 
let ncorrect = 0;
let baseButtonColor = "#D7EBFA";
let buttonClickedColor = "#A6BFDC";
let rightColor = "#23CD9C";
let wrongColor = "#FF8080";
let start = true;
let id = 0;



// Testing field 


// Iterate through all the questions 
function iterate(id) {
    // Reset inline styles and make the buttons clickable 
    option1.removeAttribute('style');
    option1.classList.remove('unclickable');
    option2.removeAttribute('style');
    option2.classList.remove('unclickable');
    option3.removeAttribute('style');
    option3.classList.remove('unclickable');
    // Put the current question into the question div
    questionContainer.innerText = Questions[id].q;
    titleContainer.innerText = title + "(" + (id + 1) + "/" + Questions.length + ")";
    // Set the options and give them the value to indicate whether correct or incorrect
    audioContainer.src = "audio/A1-Exam-Prep-Hoeren-Teil-3-Aufgabe-" + (id+1)+".mp3";
    option1.innerText = Questions[id].a[0].text;
    option1.value = Questions[id].a[0].isCorrect;
    option2.innerText = Questions[id].a[1].text;
    option2.value = Questions[id].a[1].isCorrect;
    option3.innerText = Questions[id].a[2].text;
    option3.value = Questions[id].a[2].isCorrect;


    // if(rightButton.value) {
    //     console.log("The answer you picked is correct.")
    // }    
    // Set start variable to false
    start = false;
}

function retakeQuiz(){
    finishScreen.classList.add('hide');
    gameScreen.classList.remove('hide');
    id = 0;
    ncorrect = 0;
    iterate(0);
}

// Create event listener for all buttons
document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', event => {
        // Make the right and wrong buttons unclickable
        option1.classList.add('unclickable');
        option2.classList.add('unclickable');
        option3.classList.add('unclickable');
        console.log(item.value);
        if(item.value == "true"){
            ncorrect++;
            sleepFor(1, () => {
                console.log(item.value);
                item.style.backgroundColor = rightColor;
            })
        } else {
            sleepFor(1, () => {
                item.style.backgroundColor = wrongColor;
            })
        }
        sleepFor(2, () => {
            if(id < Questions.length - 1){
                id++;
                item.style.backgroundColor = baseButtonColor;
                iterate(id);
            } else {
                console.log("In the finish screen");
                gameScreen.classList.add('hide');
                finishScreen.classList.remove('hide');
                scoreMessage.innerText = ncorrect + "/" + Questions.length;
            }
        })
    })
})


initialize: if(start) iterate(0);
