// CONSTANTS
const iframeContainer = document.querySelector('.babystepsIframe');
let e = document.querySelector('#lessonNumber');
const lessonTitle = document.querySelector('.lesson-title');
lessonTitle.innerHTML = "Eine Einladung zum Geburtstag annehmen"

e.addEventListener("change", () => {
    let value = e.value;
    if(1 <= value && value <= 12) {
        lessonTitle.innerHTML = "Eine Einladung zum Geburtstag annehmen"
    }
    if(13 <= value && value <= 18) {
        lessonTitle.innerHTML = "Anzeige Zeitung - DE Kurs"
    }
    if(19 <= value && value <= 24) {
        lessonTitle.innerHTML = "Anzeige Zeitung - Stelle"
    }
    if(25 <= value && value <= 27) {
        lessonTitle.innerHTML = "Anzeige Zeitung - Stelle ablehnen"
    }
    if(28 <= value && value <= 35) {
        lessonTitle.innerHTML = "Entschuldigung Sohn - Krankheit"
    }
    if(36 <= value && value <= 39) {
        lessonTitle.innerHTML = "Information Tourist"
    }
    if(40 <= value && value <= 43) {
        lessonTitle.innerHTML = "Einladung Treffen mit Freund"
    }
    if(44 <= value && value <= 46) {
        lessonTitle.innerHTML = "Einladung zum Geburtstag aussprechen"
    }
    if( value == 47) {
        lessonTitle.innerHTML = "Wohnungssuche - Standard"
    }
    if(48 <= value && value <= 49) {
        lessonTitle.innerHTML = "Wohnungssuche - WG"
    }
    iframeContainer.setAttribute("src", "https://smartergerman.github.io/babystepstool/a1/"+value+"/index.html")
})

