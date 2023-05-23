const words = [
    { german: 'Apfel', english: 'apple' },
    { german: 'Buch', english: 'book' },
    { german: 'Katze', english: 'cat' },
    { german: 'Hund', english: 'dog' },
    { german: 'Ente', english: 'duck' },
    { german: 'Fisch', english: 'fish' },
    { german: 'Garten', english: 'garden' },
    { german: 'Haus', english: 'house' },
    { german: 'Insel', english: 'island' },
    { german: 'Junge', english: 'boy' },
    { german: 'Mädchen', english: 'girl' },
    { german: 'Kuh', english: 'cow' },
    { german: 'Schaf', english: 'sheep' },
    { german: 'Pferd', english: 'horse' },
    { german: 'Vogel', english: 'bird' },
  ];
  
  let currentWord = getRandomWord();
  let score = 0;
  
  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }
  
  function updateScore() {
    score += 1;
    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML = score;
  }
  
  function updateFallingWords() {
    const fallingWordsContainer = document.getElementById('falling-words-container');
    fallingWordsContainer.innerHTML = ''; // clear any previous falling words
  
    const fallingWords = generateFallingWords();
    for (let i = 0; i < fallingWords.length; i++) {
      fallingWordsContainer.appendChild(fallingWords[i]);
    }
  }
  
  function generateFallingWords() {
    const fallingWords = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].german !== currentWord.german) { // don't include the current word in the falling words
        const fallingWord = document.createElement('div');
        fallingWord.classList.add('falling-word');
        fallingWord.innerHTML = words[i].english;
        fallingWord.style.left = `${Math.floor(Math.random() * 90)}%`; // randomly position the falling word
        fallingWord.style.animationDelay = `${Math.floor(Math.random() * 5)}s`; // randomly delay the start of the animation
        fallingWords.push(fallingWord);
      }
    }
    return fallingWords;
  }
  
  function checkFallingWords() {
    const fallingWordsContainer = document.getElementById('falling-words-container');
    const fallingWords = fallingWordsContainer.children;
    for (let i = 0; i < fallingWords.length; i++) {
      const rect = fallingWords[i].getBoundingClientRect();
      if (rect.bottom > window.innerHeight) { // if the word hits the bottom of the screen
        gameOver();
        return;
      }
    }
    setTimeout(checkFallingWords, 10); // check again after a short delay
  }
  
  function handleInput(event) {
    const input = event.target.value.toLowerCase().trim(); // get the player's input and convert to lowercase
    const englishWord = currentWord.english.toLowerCase().trim(); // get the correct English translation for the current word and convert to lowercase
  
    if (input === englishWord) { // if the player's input is correct
      event.target.value = ''; // clear the input field
      updateScore(); // update the score
      currentWord = getRandomWord(); // get a new random word
      updateFallingWords(); // generate new falling words
    }
}

function gameOver() {
    alert(`Game over! Your final score is ${score}.`);
    score = 0; // reset the score
    currentWord = getRandomWord(); // get a new random word
    updateScore(); // update the score display
    updateFallingWords(); // generate new falling words
    }
    
    function gameLoop() {
    checkFallingWords(); // check for falling words hitting the bottom of the screen
    requestAnimationFrame(gameLoop); // keep the game loop running
    }
    
    function startGame() {
    const startScreen = document.getElementById('start-screen');
    startScreen.style.display = 'none'; // hide the start screen
    gameLoop(); // start the game loop
    }
    
    function init() {
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', startGame);
    
    const inputField = document.getElementById('input-field');
    inputField.addEventListener('input', handleInput);
    
    updateScore();
    updateFallingWords();
    }
    
    init();