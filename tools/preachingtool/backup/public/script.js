window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = this.length - 1; i >= 0; i--) {
      if(this[i] && this[i].parentElement) {
          this[i].parentElement.removeChild(this[i]);
      }
  }
}




const body = document.querySelector("body");
const audio_img = document.getElementById("audio-img");
const trigger_content = document.querySelector(".trigger-content");
const correct_answers_div = document.querySelector(".correct-answers"); 
const preaching_section = document.querySelector(".preaching-container");
const starting_box = document.querySelector(".starting-box-konstantin");
const counter = 0;

// ! DELAY FUNCTION
// Put whatever code that needs to be delayed into sleepFor(seconds)
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleepFor(seconds, whattodo, index) {
  for (let i = 0; i < seconds; i++) {
      await sleep(i * 1000);
  }
  whattodo(index);
}
// Let computer give its answer function 
function toolAnswer(){
  p.innerText = trigger_answers[current_trigger_index + 1];
  current_trigger_index += 2;
  p = document.createElement('p');
  words.appendChild(p)
}

// START PREACHING 
function startPreaching(){
  preaching_section.classList.remove("hide-konstantin");
  starting_box.classList.add("hide-konstantin");
}
  // WEB SPEECH API SETTINGS 
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.continuous = false;
  recognition.lang = 'de-DE';
  
  // TRIGGERS AND ANSWERS 
  // Remove triggers from HTML 
  const triggers = ["bleiben (=ist geblieben) - to stay/to remain  zu Hause (fixed expression) - at home", "Garten (m) - garden"];
  const trigger_answers = ["Bist du zu Hause geblieben?", "Ich bin nicht zu Hause geblieben.", "Warum bist du nicht zu Hause geblieben?", "Weil ich nicht zu Hause geblieben bin."];

  let allTriggerAnswersJSON = `[
    {"bleiben (=ist geblieben) - to stay/to remain  zu Hause (fixed expression) - at home" : ["Bist du zu Hause geblieben?","Ich bin nicht zu Hause geblieben.", "Warum bist du nicht zu Hause geblieben?", "Weil ich nicht zu Hause geblieben bin."],
    "Garten (m) - garden" : ["Kaufst du einen Garten?", "Ich kaufe einen Garten.", "Kaufst du einen großen Garten?", "Ich kaufe einen großen Garten."]}
]`;
  allTriggerAnswersData = JSON.parse(allTriggerAnswersJSON);
  console.log(allTriggerAnswersData[0][triggers[0]][0]);
  // Initialize the shown trigger 
  trigger_content.innerText = triggers[0];
  
  let p = document.createElement('p');
  const words = document.querySelector('.words');
  words.appendChild(p);
  
  // Focus Function 
  function triggerFocus(element) {
    var eventType = "onfocusin" in element ? "focusin" : "focus",
    bubbles = "onfocusin" in element,
    event;
    
    if ("createEvent" in document) {
      event = document.createEvent("Event");
      event.initEvent(eventType, bubbles, true);
    }
    else if ("Event" in window) {
      event = new Event(eventType, { bubbles: bubbles, cancelable: true });
    }
    
    element.focus();
    element.dispatchEvent(event);
  }
  
  // Pick the current Trigger 
  let current_trigger; 
  let current_trigger_index = 0;
  let paragraphs = words.getElementsByTagName("p");
  function nextTrigger() {
    current_trigger_index++; 
    if (current_trigger_index + 1 > triggers.length) {
      current_trigger_index = 0;
    }
    current_trigger = triggers[current_trigger_index];
    trigger_content.innerText = current_trigger;
    triggerFocus(words);
  }
  
  function deleteEverything() {
    for(i=paragraphs.length - 2; i > 0; i--){
      if(i >= 0){
        paragraphs[i].remove();
      }
    }
    paragraphs[0].innerText = "";
    current_trigger_index = 0;
  }
  // ! Tutorial Button 
  // This goes inside startTutorial() 
  function tutorialExample(index){
    p.innerText = example_preaching[index];
    console.log(example_preaching[index]);
    p = document.createElement('p');
    words.appendChild(p);
}
  function nestedSleep(index){

  }
  let example_preaching = ["This is an example conversation.",
  "The tool will show you what an ideal example looks like.",
  "Feel free to talk along.", "Got it?"]
  function startTutorial(){
    deleteEverything();
    for(i = 0; i < example_preaching.length; i++){
      sleepFor(2, tutorialExample, i);
    }
  }

  
  recognition.start();
  recognition.addEventListener('result', e => {
    // Reset correct answer div 
    correct_answers_div.innerText = "";
    
    audio_img.src = "public/img/speaking_microphone.png"
    // console.log(audio_img);
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    
    const poopScript = transcript.replace(/Baum|poo|shit|dump/gi, '💩');
    const deleteScript = transcript.match("löschen");
    if (deleteScript == "löschen" && counter == 0) {
      $('.words').children().last().remove();
      // counter++;
      console.log(words.innerHTML); 
    }
    
    if(paragraphs.length > 1){
      paragraphs[paragraphs.length - 1].style.color = "black";
    }
    p.textContent = poopScript;
    if (e.results[0].isFinal) {
      console.log("ERESULTS: " + e.results.length);
      p = document.createElement('p');
      words.appendChild(p);
      if(paragraphs.length > 1) {
        if(paragraphs[paragraphs.length - 2].innerText.toLowerCase() == trigger_answers[current_trigger_index].toLowerCase().replace(/[.,?!;:]/g,"")){
          paragraphs[paragraphs.length - 2].style.color = "green";

          if(trigger_answers[current_trigger_index + 1]){
            // Let the computer give the next answer 
            // myFunction();
            sleepFor(2, toolAnswer);
            // p.innerText = trigger_answers[current_trigger_index + 1];
            // current_trigger_index += 2;
            // p = document.createElement('p');
            // words.appendChild(p)
          }
        }
        else {
          paragraphs[paragraphs.length - 2].style.color = "red";
          correct_answers_div.innerText = "Correct Answer:" + trigger_answers[current_trigger_index];
        }
      }
    }
    if(paragraphs.length > 7){
      paragraphs[0].remove();
    }
    recognition.addEventListener('end', () => {
      audio_img.src = "public/img/not_speaking_microphone.png"
    });
    
  });
  recognition.addEventListener('end', recognition.start);