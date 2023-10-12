let totalWords = 0;

function handleKeyDown(event) {
    const currentInput = event.target;
    if (event.key === 'Enter') {
      event.preventDefault();
      createInputFieldAfter(currentInput);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusNextInputField(currentInput);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusPreviousInputField(currentInput);
    } else if (event.key === 'Backspace') {
      handleBackspaceKey(currentInput);
    } 
}

  function createInputFieldAfter(currentInput) {
    const inputField = document.createElement('div');
    inputField.className = 'input-field';

    const input = document.createElement('input');
    input.type = 'text';
    input.onkeydown = handleKeyDown;

    const lineNumber = parseInt(currentInput.dataset.line) + 1;
    input.dataset.line = lineNumber;

    const lineNumberElement = document.createElement('span');
    lineNumberElement.className = 'line-number';
    lineNumberElement.textContent = lineNumber;

    inputField.appendChild(lineNumberElement);
    inputField.appendChild(input);

    const container = document.getElementById('inputFieldsContainer');
    container.insertBefore(inputField, currentInput.parentElement.nextSibling);
    input.focus();

    // Update line numbers of all input fields
    updateLineNumbers();

    // Add input event listener to the newly created input field
    input.addEventListener('input', handleInput);
  }

  function updateLineNumbers() {
    const container = document.getElementById('inputFieldsContainer');
    const inputFields = container.querySelectorAll('.input-field');
    let lineNumber = 1;

    inputFields.forEach((inputField) => {
      const input = inputField.querySelector('input');
      const lineNumberElement = inputField.querySelector('.line-number');
      lineNumberElement.textContent = lineNumber;
      input.dataset.line = lineNumber;
      lineNumber++;
    });
  }

function focusNextInputField(currentInput) {
    const container = document.getElementById('inputFieldsContainer');
    const inputFields = container.querySelectorAll('.input-field');
    const currentIndex = Array.from(inputFields).indexOf(currentInput.parentElement);
    const nextIndex = (currentIndex + 1) % inputFields.length;

    if (nextIndex !== 0 || currentIndex !== inputFields.length - 1) {
      inputFields[nextIndex].querySelector('input').focus();
    }
}

function focusPreviousInputField(currentInput) {
    const container = document.getElementById('inputFieldsContainer');
    const inputFields = container.querySelectorAll('.input-field');
    const currentIndex = Array.from(inputFields).indexOf(currentInput.parentElement);
    const previousIndex = (currentIndex - 1 + inputFields.length) % inputFields.length;

    if (previousIndex !== inputFields.length - 1 || currentIndex !== 0) {
      inputFields[previousIndex].querySelector('input').focus();
    }
}

function handleBackspaceKey(currentInput) {
    if (currentInput.selectionStart === 0) {
      const previousInput = getPreviousInput(currentInput);
      if (previousInput) {
        event.preventDefault();
        const textToMove = currentInput.value;
        const previousInputValue = previousInput.value;
        const previousInputCursorPosition = previousInput.value.length;

        previousInput.value = previousInputValue + textToMove;
        currentInput.value = '';

        // Move cursor to the end of the previous input field
        previousInput.setSelectionRange(previousInputCursorPosition, previousInputCursorPosition);
        previousInput.focus();

        // Update line numbers of all input fields
        updateLineNumbers();
      }
    }
  }
//   handles text delete functionality
function handleInput(event) {
    const currentInput = event.target;
    const textToMove = currentInput.value;
    const previousInput = getPreviousInput(currentInput);
    
    if (currentInput.selectionStart === 0 && currentInput.selectionEnd === 0) {
      if (previousInput && (previousInput.value !== '' || textToMove !== '')) {
        event.preventDefault();
        const previousInputValue = previousInput.value;
        const previousInputCursorPosition = previousInput.value.length;

        previousInput.value = previousInputValue + textToMove;
        currentInput.value = '';

        // Move cursor to the end of the previous input field
        previousInput.setSelectionRange(previousInputCursorPosition, previousInputCursorPosition);
        previousInput.focus();
      } else if (!previousInput && textToMove === '') {
        removeInputField(currentInput);
        // Update line numbers of all input fields
        updateLineNumbers();
      }
    }
    updateWordCount();
}

function removeInputField(inputFieldToRemove) {
    const container = document.getElementById('inputFieldsContainer');
    container.removeChild(inputFieldToRemove.parentElement);
}

function getPreviousInput(currentInput) {
    const container = document.getElementById('inputFieldsContainer');
    const inputFields = container.querySelectorAll('.input-field');

    for (let i = 0; i < inputFields.length; i++) {
      if (inputFields[i].querySelector('input') === currentInput) {
        const previousInput = inputFields[i - 1].querySelector('input');
        if (previousInput && currentInput.value === '') {
          removeInputField(currentInput);
        }
        return previousInput;
      }
    }
    return null;
}
// Word Count Functionality
function updateWordCount() {
    const inputFields = document.querySelectorAll('input');

    totalWords = 0;
    inputFields.forEach((input) => {
        if(!input.value){
            totalWords += 0;
        } else {
            totalWords += input.value.trim().split(/\s+/).length;
        }
        console.log(totalWords + " words" );
        console.log("code = " + input.value);
    });

    const wordCountRow = document.getElementById('wordCountRow');
    wordCountRow.textContent = `${totalWords} words`;
  }
// Add input event listener to each input field
const inputFields = document.querySelectorAll('input');
inputFields.forEach((input) => {
input.addEventListener('input', handleInput);
});
  // Update the word count initially
updateWordCount();

document.addEventListener('input', handleInput);
document.addEventListener('keydown', updateWordCount);

function handleCopyButtonClick() {
    const inputFields = document.querySelectorAll('input');
    let formattedText = "";

    inputFields.forEach((input) => {
      formattedText += `${input.value}\n`;
    });

    // Copy the formatted text to the clipboard
    copyToClipboard(formattedText);
    showCopiedPopup();
  }

  function showCopiedPopup() {
    const copiedPopup = document.getElementById('copiedPopup');
    copiedPopup.style.display = 'block';
    setTimeout(() => {
      copiedPopup.style.display = 'none';
    }, 1500);
  }

  function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  const copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', handleCopyButtonClick);