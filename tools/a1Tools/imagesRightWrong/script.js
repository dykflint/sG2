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
const optionsContainer = document.querySelector('right-wrong-options');
const gameScreen = document.querySelector('.game-screen');
const finishScreen = document.querySelector('.finish-screen');
const rightButton = document.querySelector('.right');
const wrongButton = document.querySelector('.wrong');
const scoreMessage = document.querySelector('.score');
const titleContainer = document.querySelector('.title')

// Necessary variables for points and other values 
let ncorrect = 0;
let baseButtonColor = "#D7EBFA";
let buttonClickedColor = "#A6BFDC";
let rightColor = "#23CD9C";
let wrongColor = "#FF8080";
let start = true;
let id = 0;

// Create data structure of questions with the correct answer highlighted 
const title = "Reality Check | Lesen - Teil 01 "
const Questions = [
{
    id: 0,
    q: 'Die Hauptstadt von Deutschland ist Berlin.', 
    a: [{ text: 'img/Lesen Teil 02 - 1.1.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 1.2.png', isCorrect: false}]
},
{
    id: 1,
    q: 'Die Hauptstadt von Frankreich ist Toulouse', 
    a: [{ text: 'img/Lesen Teil 02 - 1.1.png', isCorrect: false},
        { text: 'img/Lesen Teil 02 - 1.2.png', isCorrect: true}]
},
{
    id: 2,
    q: 'Die Hauptstadt von Kanada ist Ottawa', 
    a: [{ text: 'img/Lesen Teil 02 - 1.2.png', isCorrect: true},
        { text: 'img/Lesen Teil 02 - 1.1.png', isCorrect: false}]
}
];

// Testing field 


rightButton.addEventListener('click', () => {
    rightButton.style.backgroundColor = buttonClickedColor;
})

// Iterate through all the questions 
function iterate(id) {
    wrongButton.removeAttribute('style');
    wrongButton.classList.remove('unclickable');
    rightButton.removeAttribute('style');
    rightButton.classList.remove('unclickable');
    // Put the current question into the question div
    questionContainer.innerText = Questions[id].q;

    // Create a copy of the right and wrong buttons to give them the true/false values
    rightButton.src = Questions[id].a[0].text;
    wrongButton.src = Questions[id].a[1].text;
    rightButton.value = Questions[id].a[0].isCorrect;
    wrongButton.value = Questions[id].a[1].isCorrect;
    titleContainer.innerText = title + "(" + (id + 1) + "/" + Questions.length + ")";
    // if(rightButton.value) {
    //     console.log("The answer you picked is correct.")
    // }    
    // Set start variable to false
    start = false;
}
// Retake Function 
function retakeQuiz(){
    finishScreen.classList.add('hide');
    gameScreen.classList.remove('hide');
    id = 0;
    ncorrect = 0;
    iterate(0);
}
// Create event listener for both buttons
document.querySelectorAll('img').forEach(item => {
    item.addEventListener('click', event => {
        // Make the right and wrong buttons unclickable
        wrongButton.classList.add('unclickable');
        rightButton.classList.add('unclickable');
        // console.log(item.value);
        if(item.value == true){
            ncorrect++;
            sleepFor(1, () => {
                console.log(item.value);
                item.style.border = "5px solid " + rightColor;
            })
        } else {
            sleepFor(1, () => {
                item.style.border = "5px solid " + wrongColor;
            })
        }
        sleepFor(2, () => {
            if(id < Questions.length - 1){
                id++;
                item.style.backgroundColor = baseButtonColor;
                wrongButton.classList.remove('unclickable');
                rightButton.classList.remove('unclickable');
                iterate(id);
            } else {
                // console.log("In the finish screen");
                gameScreen.classList.add('hide');
                finishScreen.classList.remove('hide');
                scoreMessage.innerText = ncorrect + "/" + Questions.length;
            }
        })
    })
})


initialize: if(start) iterate(0);
