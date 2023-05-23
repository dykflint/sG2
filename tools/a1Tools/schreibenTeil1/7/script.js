// CONSTANTS
const container = document.querySelector('.container');
const firstField = document.querySelector('#first');
const secondField = document.querySelector('#second');
const thirdField = document.querySelector('#third');
const fourthField = document.querySelector('#fourth');
const fifthField = document.querySelector('#fifth');
const sixthField = document.querySelector('#sixth');
const seventhField = document.querySelector('#seventh');
const radio1Field = document.querySelector('.radio1');
const radio2Field = document.querySelector('.radio2');
const radio3Field = document.querySelector('.radio3');
const radio4Field = document.querySelector('.radio4');
const radio5Field = document.querySelector('.radio5');
const radio6Field = document.querySelector('.radio6');
const radio7Field = document.querySelector('.radio7');
const radio8Field = document.querySelector('.radio8');
const radio9Field = document.querySelector('.radio9');
const radio10Field = document.querySelector('.radio10');
// const radio1Button = document.querySelector('#radio1');
// const radio2Button = document.querySelector('#radio2');
// const radio3Button = document.querySelector('#radio3');
const miscField = document.querySelector('.misc');
const checkButton = document.querySelector('.check-button');
// TODO: Make pre-filled fields uneditable 



function checkInput(id, field) {
    // correct or incorrect tracker for multiple answers 
    let isValid = 0;
    Solutions[id].a.forEach((element) => {
        // console.log(field.value.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""));
        // console.log(element.text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""));
        if(field.value.toLowerCase().trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]\s/g,"") == element.text.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]\s/g,"")){
            isValid = 1;
        }
    })
    if(isValid == 1){
        field.classList.remove('incorrect');
        field.classList.add('correct');
        isValid = 0;
    } else {
        field.classList.remove('correct');
        field.classList.add('incorrect');
    }
    // miscField.classList.add('correct');
}
// Function to remove the coloring for the radio buttons 
function uncheckRadio() {
    radio1Field.classList.remove('radio-correct');
    radio1Field.classList.remove('radio-incorrect');
    radio2Field.classList.remove('radio-correct');
    radio2Field.classList.remove('radio-incorrect');
    radio3Field.classList.remove('radio-correct');
    radio3Field.classList.remove('radio-incorrect');
    radio4Field.classList.remove('radio-correct');
    radio4Field.classList.remove('radio-incorrect');
    radio5Field.classList.remove('radio-correct');
    radio5Field.classList.remove('radio-incorrect');
    radio6Field.classList.remove('radio-correct');
    radio6Field.classList.remove('radio-incorrect');
    radio7Field.classList.remove('radio-correct');
    radio7Field.classList.remove('radio-incorrect');
}

function uncheckRadioTmp() {
    radio8Field.classList.remove('radio-correct');
    radio8Field.classList.remove('radio-incorrect');
    radio9Field.classList.remove('radio-correct');
    radio9Field.classList.remove('radio-incorrect');
    radio10Field.classList.remove('radio-correct');
    radio10Field.classList.remove('radio-incorrect');
}
function checkRadio(id) {
    Solutions[id].a.forEach((element) => {
        if($('input[name="writing"]:checked').val().trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()] /g,"") == element.text.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()] /g,"")) {
            uncheckRadio();
            $('input[name="writing"]:checked').parent()[0].classList.add('radio-correct');
            $('input[name="writing"]:checked').parent()[0].classList.remove('radio-incorrect')
        } else {
            uncheckRadio();
            $('input[name="writing"]:checked').parent()[0].classList.remove('radio-correct');
            $('input[name="writing"]:checked').parent()[0].classList.add('radio-incorrect')
        }
    })
}
function checkRadioTmp(id) {
    Solutions[id].a.forEach((element) => {
        if($('input[name="kursart"]:checked').val().trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()] /g,"") == element.text.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()] /g,"")) {
            uncheckRadioTmp();
            $('input[name="kursart"]:checked').parent()[0].classList.add('radio-correct');
            $('input[name="kursart"]:checked').parent()[0].classList.remove('radio-incorrect')
        } else {
            uncheckRadioTmp();
            $('input[name="kursart"]:checked').parent()[0].classList.remove('radio-correct');
            $('input[name="kursart"]:checked').parent()[0].classList.add('radio-incorrect')
        }
    })
}
checkButton.addEventListener('click', () => {
    checkInput(0, firstField);
    checkInput(1, secondField);
    checkInput(2, thirdField);
    checkInput(3, fourthField);
    checkRadio(4);
    checkRadioTmp(5);
})