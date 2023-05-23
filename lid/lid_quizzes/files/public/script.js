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

let selected = "";
let chosenAnswer = "";
// Iterate
var counter = 0;
const option_container = document.getElementsByClassName("option-container")[0];
// Getting the options
const option1 = document.getElementById('op1');
const option2 = document.getElementById('op2');
const option3 = document.getElementById('op3');
const option4 = document.getElementById('op4');
const panelContainer = document.getElementsByClassName("panel")[0];
const question_container = document.getElementsByClassName("question-container")[0];
const finishScreen = document.querySelector('.finish-screen');
const scoreMessage = document.querySelector('.score');
// const result_container = document.getElementsByClassName("result_container")[0];
const translation_button = document.getElementsByClassName("translation_button")[0];
const original_button = document.getElementsByClassName("original_button")[0];
const imageContainer = document.getElementsByClassName("image-container")[0];
const counterContainer = document.querySelector('.counter');
// Getting the question
const question = document.getElementById("question");
let ncorrect = 0;
let baseButtonColor = "#D7EBFA";
// let buttonClickedColor = "#A6BFDC";
let rightColor = "#BBE4DA";
let wrongColor = "#EA7475";
let start = true;
let id = 0;

function retakeQuiz(){
    finishScreen.classList.add('hide-konstantin');
    panelContainer.classList.remove('hide-konstantin');
    id = 0;
    ncorrect = 0;
    iterate(0);
}

function iterate(id) {
    imageContainer.innerHTML = "";
    // Reset inline styles and make the buttons clickable 
    option1.removeAttribute('style');
    option1.classList.remove('unclickable');
    option2.removeAttribute('style');
    option2.classList.remove('unclickable');
    option3.removeAttribute('style');
    option3.classList.remove('unclickable');
    option4.removeAttribute('style');
    option4.classList.remove('unclickable');
    


    // Setting the question text
    question.innerText = Questions[id].q;


    // Setting image if available 
    if (Questions[id].image) {
        let img = document.createElement("img");
        img.src = Questions[id].image;
        imageContainer.innerHTML = "<img src="+img.src + ">";
    }


    counterContainer.innerText = (id + 1) + "/" + Questions.length;

    // Providing option text
    option1.innerText = Questions[id].a[0].text;
    option2.innerText = Questions[id].a[1].text;
    option3.innerText = Questions[id].a[2].text;
    option4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    option1.value = Questions[id].a[0].isCorrect;
    option2.value = Questions[id].a[1].isCorrect;
    option3.value = Questions[id].a[2].isCorrect;
    option4.value = Questions[id].a[3].isCorrect;

    // Translation button 
    translation_button.addEventListener("click", () => {
        question.innerText = Translations[id].q;
        // Providing option text
        op1.innerText = Translations[id].a[0].text;
        op2.innerText = Translations[id].a[1].text;
        op3.innerText = Translations[id].a[2].text;
        op4.innerText = Translations[id].a[3].text;

        // Providing the true or false value to the options
        op1.value = Translations[id].a[0].isCorrect;
        op2.value = Translations[id].a[1].isCorrect;
        op3.value = Translations[id].a[2].isCorrect;
        op4.value = Translations[id].a[3].isCorrect;
        translation_button.classList.add("hide-konstantin");
        original_button.classList.remove("hide-konstantin");
    })
    original_button.addEventListener("click", () => {
        // German Version of the Questions and Answers
        // Setting the question text
        question.innerText = Questions[id].q;
        // Providing option text
        op1.innerText = Questions[id].a[0].text;
        op2.innerText = Questions[id].a[1].text;
        op3.innerText = Questions[id].a[2].text;
        op4.innerText = Questions[id].a[3].text;

        // Providing the true or false value to the options
        op1.value = Questions[id].a[0].isCorrect;
        op2.value = Questions[id].a[1].isCorrect;
        op3.value = Questions[id].a[2].isCorrect;
        op4.value = Questions[id].a[3].isCorrect;
        translation_button.classList.remove("hide-konstantin");
        original_button.classList.add("hide-konstantin");
    })
    // var selected = "";


}

initialize: if (start) {
iterate(0);
}

// Create event listener for all buttons
document.querySelectorAll('.option').forEach(item => {
    item.addEventListener('click', event => {
        // Make the right and wrong buttons unclickable
        option1.classList.add('unclickable');
        option2.classList.add('unclickable');
        option3.classList.add('unclickable');
        option4.classList.add('unclickable');
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
                panelContainer.classList.add('hide-konstantin');
                finishScreen.classList.remove('hide-konstantin');
                scoreMessage.innerText = ncorrect + "/" + Questions.length;
            }
        })
    })
})

