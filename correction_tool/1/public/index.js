let timer_text = document.querySelector(".init_time");
let accuracy_text = document.querySelector(".init_accuracy");
let error_text = document.querySelector(".init_errors");
let words_text = document.querySelector(".init_wpm");
let content_text = document.querySelector(".content");
let input_box = document.querySelector(".input_box");
let start_btn = document.querySelector(".reset-button");
let restart_btn = document.querySelector(".restart");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");
let checker_div = document.querySelector(".checker");
let written_div = document.querySelector(".written");
let score_text = document.querySelector(".init_score");
let score_container = document.querySelector(".score");
let errors_container = document.querySelector(".errors");
let playbutton_container = document.querySelector(".playbutton");
let tool_container = document.querySelector(".container");
let difficulty_container = document.querySelector(".difficulty_box");
let start_counter = 0;
checker_div.innerText = "";
// let time_left = 60;
// let time_passed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let typed = 0;
let score = 0;
let total_score = 0;
let highscore = 0;
let current_content = "";
let c = 0;
var difficulty_level;
var tmp_content = "";
// DIFFICULTY LEVELS
function easyGame() {
  difficulty_level = 1;
  tool_container.classList.remove("hide-konstantin");
  tmp_content = ["Es war ein schöner Montagmorgen in Berlin.",
  "Wie jeden Tag mussten Simone und Stefan zur Arbeit."];
  difficulty_container.classList.add("hide-konstantin");
}

function normalGame() {
  difficulty_level = 2;
  tool_container.classList.remove("hide-konstantin");
  tmp_content = ["Es war ein schöner", "Montagmorgen in Berlin.",
  "Wie jeden Tag", "mussten Simone und Stefan", "zur Arbeit."]
  difficulty_container.classList.add("hide-konstantin");
}

function hardGame() {
  difficulty_level = 3;
  tool_container.classList.remove("hide-konstantin");
  tmp_content = ["Es war ein schöner Montagmorgen in Berlin.",
  "Wie jeden Tag mussten Simone und Stefan zur Arbeit."];
  difficulty_container.classList.add("hide-konstantin");
}

if (difficulty_level == 3) {
  console.log("3");
}
let content_counter = 0;
function ChangeContent() {
  if (content_counter < tmp_content.length) {
    content_text.textContent = null;
    current_content = tmp_content[content_counter];
    
    current_content.split('').forEach(char => {
      const charSpan = document.createElement('span');
      charSpan.innerText = char;
      content_text.appendChild(charSpan);
    })
  }
}

function textInput() {
  input = input_box.value;
  input_array = input.split('');
  typed++;
  errors = 0;
  quoteSpanArray = content_text.querySelectorAll('span');
  quoteSpanArray.forEach((char, index) => {
  let typed = input_array[index];
  if (difficulty_level > 1) {
    if (input_array.length > 5) {
      content_text.classList.add("hide-konstantin");
    }
  }
  if (typed == null) {
      char.classList.remove('correct');
  } 
  else if (typed === char.innerText) {
      char.classList.add('correct');
      char.classList.remove('incorrect');
  } 
  else {
    char.classList.add('incorrect');
    char.classList.remove('correct');
    errors++;
    if (total_errors >= 0) {
      console.log(total_errors);
      total_errors++;
    }
  }
});
  error_text.textContent = errors;

  if (input.length == current_content.length) {
    if (errors == 0) {
      content_text.classList.remove("hide-konstantin");
      written_div.classList.remove("hide-konstantin");
      written_div.innerText += tmp_content[content_counter] + "\n";
      content_counter++;
      score = current_content.length;
      total_score += score;
      highscore = total_score - total_errors
      score_text.textContent = highscore;
      if (content_counter == tmp_content.length) {
        finishGame();
      }
      ChangeContent();
      checker_div.innerText = "";
      input_box.value = "";
    }
    else {
      checker_div.innerText = "Correct your mistakes before you continue.";
    }

  }
}

// function updateTimer() {
//   if (time_left > 0) {
//     time_left--;
//     time_passed++;
//     timer_text.textContent = time_left ;
//   }
//   else {
//     finishGame();
//   }
// }

function finishGame() {
  if (content_counter == tmp_content.length) {
    console.log("finished");
    content_text.classList.add("hide-konstantin");
    input_box.disabled = true;
    input_box.classList.add("hide-konstantin");
    // score_container.classList.add("hide-konstantin");
    // errors_container.classList.add("hide-konstantin");
    // playbutton_container.classList.add("hide-konstantin");
    written_div.innerText = "";
    console.log("You finished the game. ");
    written_div.innerText += "\n CONGRATULATIONS \n";
    written_div.innerText += "Final Score: " + highscore;
  }
}

function startGame() {
  // content_text.style.display="block"
  content_text.classList.remove("hide-konstantin");
  start_btn.classList.remove("hide-konstantin");
  // if (start_counter%2 == 0) {
  //   start_btn.innerHTML = "<img src=\"images/resetbutton.png\" width=\"50\" height=\"50\">";
  // }
  // else {
  //   start_btn.innerHTML = "<img src=\"images/playbutton.png\" width=\"50\" height=\"50\">";
  // }
  start_btn.innerHTML = "<img src=\"images/resetbutton.png\" width=\"50\" height=\"50\">";
  // resetGame();
  ChangeContent();
  start_counter++;
  console.log(difficulty_level);
  // clearInterval(timer);
  // timer = setInterval(updateTimer, 1000);
}

function resetGame() {
  errors = 0;
  total_errors = 0;
  typed = 0;
  content_counter = 0;
  highscore = 0;
  score = 0;
  total_score = 0;
  score_text.textContent = 0;
  c = 0;
  input_box.disabled = false;
  input_box.value = "";
  input_box.innerText = "";
  content_text.textContent = "";
  error_text.textContent = 0;
  written_div.innerText = "";
  written_div.classList.add("hide-konstantin");
  input_box.classList.remove("hide-konstantin");
  content_text.classList.add("hide-konstantin");
  tool_container.classList.add("hide-konstantin");
  difficulty_container.classList.remove("hide-konstantin");
}
