// CONSTANTS
const container = document.querySelector('.container');
// const firstField = document.querySelector('#first');
const secondField = document.querySelector('#second');
const thirdField = document.querySelector('#third');
const fourthField = document.querySelector('#fourth');
const fifthField = document.querySelector('#fifth');
const sixthField = document.querySelector('#sixth');
// const radio1Field = document.querySelector('.radio1');
// const radio2Field = document.querySelector('.radio2');
// const radio3Field = document.querySelector('.radio3');
// const radio1Button = document.querySelector('#radio1');
// const radio2Button = document.querySelector('#radio2');
// const radio3Button = document.querySelector('#radio3');
// const miscField = document.querySelector('#misc');
const checkButton = document.querySelector('.check-button');



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
// function uncheckRadio() {
//     radio1Field.classList.remove('radio-correct');
//     radio1Field.classList.remove('radio-incorrect');
//     radio2Field.classList.remove('radio-correct');
//     radio2Field.classList.remove('radio-incorrect');
//     radio3Field.classList.remove('radio-correct');
//     radio3Field.classList.remove('radio-incorrect');
// }
// function checkRadio(id) {
//     Solutions[id].a.forEach((element) => {
//         if($('input[name="writing"]:checked').val().trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()] /g,"") == element.text.trim().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()] /g,"")) {
//             uncheckRadio();
//             $('input[name="writing"]:checked').parent()[0].classList.add('radio-correct');
//             $('input[name="writing"]:checked').parent()[0].classList.remove('radio-incorrect')
//         } else {
//             uncheckRadio();
//             $('input[name="writing"]:checked').parent()[0].classList.remove('radio-correct');
//             $('input[name="writing"]:checked').parent()[0].classList.add('radio-incorrect')
//         }
//     })
// }
checkButton.addEventListener('click', () => {
    checkInput(0, secondField);
    checkInput(1, thirdField);
    checkInput(2, fourthField);
    checkInput(3, fifthField);
    checkInput(4, sixthField);
})