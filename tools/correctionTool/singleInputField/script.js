function adjustInputSize(textarea) {
    let lines = textarea.value.split("\n");
    let lineCount = lines.length;
    let lineHeight = parseInt(getComputedStyle(textarea).lineHeight);

    // Calculate the scroll height to check if the textarea is at the bottom
    let scrollHeight = textarea.scrollHeight;
    let clientHeight = textarea.clientHeight;

    if (scrollHeight > clientHeight) {
        // If the textarea overflows, increase its height
        lineCount++;
    }

    textarea.style.height = lineCount * lineHeight + 'px';
    textarea.cols = 50; // Set an appropriate number of columns for your layout
    updateLineNumbers(textarea, lines);
}


function updateLineNumbers(textarea, lines) {
    let lineNumberContainer = document.querySelector(".line-numbers");
    let lineCount = lines.length;
    let lineHeight = parseInt(getComputedStyle(textarea).lineHeight);

    // Generate the line numbers content
    let lineNumbersHTML = '';
    for (let i = 1; i <= lineCount; i++) {
        lineNumbersHTML += '<div style="line-height: ' + lineHeight + 'px;">' + i + '</div>';
    }

    // Set the line numbers content and update the container height
    lineNumberContainer.innerHTML = lineNumbersHTML;
    lineNumberContainer.style.height = textarea.style.height;
}

function updateWordCount() {
    const inputFields = document.querySelectorAll('.adjustable-input');

    totalWords = 0;
    inputFields.forEach((input) => {
        if(!input.value || input.value.trim().split(/\s+/) == ''){
            totalWords += 0;
        } else {
            totalWords += input.value.trim().split(/\s+/).length;
        }
    });

    const wordCountRow = document.getElementById('wordCountRow');
    wordCountRow.textContent = `${totalWords} words`;
  }
// Update the word count initially
updateWordCount();
function handleCopyButtonClick() {
    const inputFields = document.querySelectorAll('.adjustable-input');
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