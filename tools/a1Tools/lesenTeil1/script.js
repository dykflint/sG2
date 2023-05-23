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
const imgContainer = document.querySelector('.img-src');

// Necessary variables for points and other values 
let ncorrect = 0;
let baseButtonColor = "#D7EBFA";
let buttonClickedColor = "#A6BFDC";
let rightColor = "#23CD9C";
let wrongColor = "#FF8080";
let start = true;
let id = 0;



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
    if(id < 4){
        imgContainer.src = "img/Lesen Teil 01 - 1-4.png";
    }
    if(id >= 4 && id < 10){
        imgContainer.src = "img/Lesen Teil 01 - 5-10.png";
    }
    if(id >= 10 && id < 18){
        imgContainer.src = "img/Lesen Teil 01 - 11-18.png";
    }
    if(id >= 18 && id < 22){
        imgContainer.src = "img/Lesen Teil 01 - 19-22.png";
    }
    if(id >= 22 && id < 27){
        imgContainer.src = "img/Lesen Teil 01 - 23-27.png";
    }
    if(id >= 27 && id < 37){
        imgContainer.src = "img/Lesen Teil 01 - 28-37.png";
    }
    if(id >= 37 && id < 43){
        imgContainer.src = "img/Lesen Teil 01 - 38-43.png";
    }
    if(id >= 43 && id < 48){
        imgContainer.src = "img/Lesen Teil 01 - 44-48.png";
    }
    if(id >= 48 && id < 55){
        imgContainer.src = "img/Lesen Teil 01 - 49-55.png";
    }
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
document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', event => {
        // Make the right and wrong buttons unclickable
        wrongButton.classList.add('unclickable');
        rightButton.classList.add('unclickable');
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
                wrongButton.classList.remove('unclickable');
                rightButton.classList.remove('unclickable');
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
