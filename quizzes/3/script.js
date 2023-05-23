//Variables = qNumber(null), timer(num), score(num), initials(text)
let score = 0;
let username = "";
let qNumber;
let finalScore;


//DOM Objects = START BUTTON, ANSWER BUTTONS, QUESTION CONTAINER, QUESTION ELEMENT
const startButton = document.getElementById("startButton-konstantin");
const qContainer = document.getElementById("questionsContainer-konstantin");
const qElement = document.getElementById("question-konstantin");
const answerButtons = document.getElementById("answers-konstantin");
const countdown = document.getElementById("timerArea-konstantin");
const scoreArea = document.getElementById("scoreArea-konstantin");
//const highScoresButton = document.getElementById("showScoresButton-konstantin");
const submitButton = document.getElementById("submitButtonID-konstantin");
const nextButton = document.getElementById("nextButtonID-konstantin");

//LocalStorage Objects
//let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//

startButton.addEventListener("click", startGame);
//highScoresButton.addEventListener("click", displayScores);

//function to start the game
//called when start button is clicked, should run the function to display questions and the function to start the timer

function startGame() {
  alert("new");
  startButton.classList.add("hide-konstantin");
  scoreArea.classList.add("hide-konstantin");
  answerButtons.classList.remove("hide-konstantin");
  qNumber = 0;
  qContainer.classList.remove("hide-konstantin");
  scoreArea.innerHTML = "";
  //startClock();
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  showQuestion(questions[qNumber]);
}

//function to display the questions
//should load one object from the questions array into the proper html elements, then run the function to collect answers
function showQuestion(question) {
  qElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("button-konstantin");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function myFunction() {
  clearQuestion();
  qNumber++;
  showQuestion(questions[qNumber]);
}
//function to collect answers
//should listen for what answer the user clicks on, compare it to the correct answer, and decrease the timer if wrong. should then run the next question function
//unless the current question is the last, then it should run the game over function
var clicked = false;
function selectAnswer(e) {
  const selectedButton = e.target;
  if (!selectedButton.dataset.correct) {
    //selectedButton.style.border = "10px solid red";
    //timer = timer - 100;
    //console.log(timer);
  } else {
      score++;
  }
  if (qNumber == questions.length - 1) {
    gameOver();
  } else {
    //submitButton.classList.add("hide");
    submitButton.addEventListener("click", evaluation(nextButton, selectedButton));
    setTimeout(function() {
      clearQuestion()
      qNumber++;
      showQuestion(questions[qNumber]);
    }, 1000);

    //console.log(score);
  }
}

function evaluation(nextButton, selectedButton) {
  //nextButton.classList.add("hide");
  if (!selectedButton.dataset.correct) {
    selectedButton.style.border = "5px solid red";
    //alert("red")
    //nextButton.addEventListener("click", function() {
    //  clicked = true
    //});
  } else {
    selectedButton.style.border = "5px solid green";
    //alert("green")
    //nextButton.addEventListener("click", function() {
    //  clicked = true
    //});
  }
}
//function to clear the current question
//should empty the HTML elements that are occupied with the currently displayed question
function clearQuestion() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

//function for game over
//should grab the current time remaining and set it as the score, hide the questions area, display the score to the user, and give them the chance to try again or submit
//their high scores via a text box for intials and the high scores function
function gameOver() {
  clearQuestion();
  showResults();
  startButton.innerText = "Restart";
  startButton.classList.remove("hide-konstantin");
  if (score == questions.length) {
      startButton.innerText = "Continue";
  }
  score = 0;
}

function showResults() {
  finalScore = score;
  if (finalScore < 0) {
    finalScore = 0;
  }
  qElement.innerText = "";
  scoreArea.classList.remove("hide-konstantin");
  answerButtons.classList.add("hide-konstantin");
  scoreArea.innerHTML = `You got ${finalScore} out of ${questions.length} questions correct.`;
  username = document.getElementById("initials-konstantin");
  saveButton = document.getElementById("save-btn-konstantin");
  username.addEventListener("keyup", function() {
    saveButton.disabled = !username.value;
  });
}


//function to display high scores
//should populate the HTML with a ranked display of the high scores and and provide the option to clear the scores via a function
//function displayScores() {
//  countdown.innerHTML = "";
//  clearQuestion();
//  qElement.innerText = "";
//  scoreArea.classList.remove("hide-konstantin");
//
//  scoreArea.innerHTML = `<h2>High Scores</h2><ul id="highScoresList-konstantin"></ul><button id="clearScores-konstantin" class="btn button-konstantin" onclick="clearScores()">Clear Scores</button>`;
//  const highScoresList = document.getElementById("highScoresList");
//  highScoresList.innerHTML = highScores
//    .map(score => {
//      return `<li class="scoresList konstantin">${score.name} - ${score.score}</li>`;
//    })
//    .join("");
//  startButton.classList.remove("hide");
//  highScoresButton.classList.add("hide");
//}

//function to clear high scores
//should fire on click, and erase the values of the high scores object
//function clearScores() {
//  highScores = [];
//  highScoresList.innerHTML = "<h3>Scores have been Cleared</h3>";
//  document.getElementById("clearScores").classList.add("hide");
//}

/////
//Questions go Here
/////
const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "javascript", correct: false },
      { text: "script", correct: true },
      { text: "js", correct: false },
      { text: "jQuery", correct: false }
    ]
  },
  {
    question: "Where is the correct place to insert JavaScript?",
    answers: [
      { text: "The Head Section", correct: false },
      { text: "The Body Section", correct: false },
      { text: "In an External File", correct: false },
      { text: "All of the Above", correct: true }
    ]
  },
  {
    question: "The external JavaScript file must contain the script tag.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answers: [
      { text: 'msg("Hello World");', correct: false },
      { text: 'prompt("Hello World");', correct: false },
      { text: 'alertBox("Hello World");', correct: false },
      { text: 'alert("Hello World");', correct: true }
    ]
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function myFunction()", correct: true },
      { text: "function = myFunction()", correct: false },
      { text: "make.function.myFunction()", correct: false },
      { text: "function:myFunction()", correct: false }
    ]
  },
  {
    question: 'How do you call a function named "myFunction"?',
    answers: [
      { text: "call myFunction()", correct: false },
      { text: "read myFunction()", correct: false },
      { text: "myFunction()", correct: true },
      { text: "run.myFunction()", correct: false }
    ]
  },
  {
    question: "How do you write an IF statement in JavaScript?",
    answers: [
      { text: "if (i === 5)", correct: true },
      { text: "if i = 5 then", correct: false },
      { text: "if i === 5 then", correct: false },
      { text: "if (i = 5)", correct: false }
    ]
  },
  {
    question: "!= means what in javascript?",
    answers: [
      { text: "Or", correct: false },
      { text: "And", correct: false },
      { text: "Plus and Equal To", correct: false },
      { text: "Not Equal To", correct: true }
    ]
  },
  {
    question: "What Characters Contains an Array?",
    answers: [
      { text: "< >", correct: false },
      { text: "{ }", correct: false },
      { text: "[ ]", correct: true },
      { text: "# #", correct: false }
    ]
  }
];