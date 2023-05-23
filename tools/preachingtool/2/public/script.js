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
  const triggers = ["Stuhl - Chair", "Handy - Mobile Phone", "Tasse - Cup", "Boden - Floor"];
  const trigger_answers = ["Ich sehe einen Stuhl.", "Ich sehe ein Handy.", "Ich sehe eine Tasse.", "Ich sehe einen Boden."];
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
    // current_trigger_index = Math.floor(Math.random()*triggers.length);
    current_trigger_index++; 
    if (current_trigger_index + 1 > triggers.length) {
      current_trigger_index = 0;
    }
    current_trigger = triggers[current_trigger_index];
    trigger_content.innerText = current_trigger;
    // words.innerText = "";
    // let p = document.createElement('p');
    // words.appendChild(p);
    triggerFocus(words);
  }
  
  function deleteEverything() {
    for(i=paragraphs.length - 2; i > 0; i--){
      console.log("I am outside the if statement");
      if(i >= 0){
        console.log("I am inside the if statement.");
        paragraphs[i].remove();
      }
    }
    paragraphs[0].innerText = "";
    // triggerFocus(words);
  }
  
  // window.onkeypress = function(event) {
  //   if (event.keyCode == 32)
  // function startRecognition(){
    // recognition.abort();
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
    // const deleteAll = transcript.match("alles weg"); 
    // const deleteDel = transcript.replace(/Hallo/gi, ':)');
    if (deleteScript == "löschen" && counter == 0) {
      $('.words').children().last().remove();
      // counter++;
      console.log(words.innerHTML); 
    }
    
    if(paragraphs.length > 1){
      paragraphs[paragraphs.length - 1].style.color = "black";
    }
    // console.log(transcript);
    p.textContent = poopScript;
    // p.textContent = deleteDel;
    console.log("I am here");
    if (e.results[0].isFinal) {
      console.log("ERESULTS: " + e.results.length);
      p = document.createElement('p');
      words.appendChild(p);
      // console.log("Appended");
      // console.log("Paragraphs: " + paragraphs[0].innerHTML);
      if(paragraphs.length > 1) {
        if(paragraphs[paragraphs.length - 2].innerText.toLowerCase() == trigger_answers[current_trigger_index].toLowerCase().replace(/[.,?!;:]/g,"")){
          paragraphs[paragraphs.length - 2].style.color = "green";
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
    // console.log(words);
    recognition.addEventListener('end', () => {
      audio_img.src = "public/img/not_speaking_microphone.png"
    });
    
  });
  recognition.addEventListener('end', recognition.start);
    
    // recognition.removeEventListener("result",e);
    // recognition.stop();
    // setTimeout(function(){ recognition.start(); }, 400);
    // recognition.onspeechend = () => {
      //   console.log("Stopped");
      //   recognition.abort();
      // }
      // }
      
      
      
      // }
      
      // for (i = 0; i < paragraphs.length; i++) {
        //   console.log(paragraphs[i].innerText);
        //   // compare input with correct answers while ignoring case and special characters 
        //   if (paragraphs[i].innerText.toLowerCase() == trigger_answers[current_trigger_index].toLowerCase().replace(/[.,?!;:]/g,"")) {
          //     paragraphs[i].style.color = "green";
        //     console.log("We set it to green");
        //   }
        //   else {
          //     paragraphs[i].style.color = "red";
          //     // If the last audio is false show the correct solution
          //     if(paragraphs.length > 1) {
            //       if(paragraphs[paragraphs.length - 2].innerText.toLowerCase() != trigger_answers[current_trigger_index].toLowerCase().replace(/[.,?!;:]/g,"")){
              //         correct_answers_div.innerText = "Correct Answer:" + trigger_answers[current_trigger_index];
              //       }
        //     }
        //   }
        // }
  
