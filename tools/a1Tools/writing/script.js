// CONSTANTS
const container = document.querySelector('.container');
const firstField = document.querySelector('#first');
const secondField = document.querySelector('#second');
const thirdField = document.querySelector('#third');
const fourthField = document.querySelector('#fourth');
const fifthField = document.querySelector('#fifth');
const sixthField = document.querySelector('#sixth');
const checkButton = document.querySelector('.check-button');

// TODO: Make pre-filled fields uneditable 

// Structure with the answers 
const Solutions = [
    {
        id: 0,
        a: [{ text: 'Volodymyr Zelenskyy'},
            { text: 'Volodymyr, Zelenskyy'}]
    },
    {
        id: 1,
        a: [{ text: '55246'}]
    },
    {
        id: 2,
        a: [{ text: '25'}]
    },
    {
        id: 3,
        a: [{ text: 'AOK'}]
    },
    {
        id: 4, 
        a: [{ text: 'Elektriker'}]
    },
    {
        id: 5,
        a: [{ text: 'Fieber'}]
    }
];

function checkInput(id, field) {
    // correct or incorrect tracker for multiple answers 
    let isValid = 0;
    Solutions[id].a.forEach((element) => {
        if(field.value.toLowerCase() == element.text.toLowerCase()){
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
}
checkButton.addEventListener('click', () => {
    checkInput(0, firstField);
    checkInput(1, secondField);
    checkInput(2, thirdField);
    checkInput(3, fourthField);
    checkInput(4, fifthField);
    checkInput(5, sixthField);
})