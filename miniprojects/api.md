# Projects related to DOM

# Solution code for changing bg color
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const { id } = event.target;
    if (id === 'grey') {
      body.style.backgroundColor = id;
    }
  });
});
```
# Solution code for updating clock time in html dom
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const result = document.getElementById('results');
  
  const height = parseInt(heightInput.value);
  const weight = parseInt(weightInput.value);

  if (isNaN(height) || height <= 0) {
    result.innerHTML = `Please provide a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = `Please provide a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
  
```
# Solution code for calculating bgw
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
# Solution code for random number guessing game
```javascript
let randomNumber = Math.floor(Math.random() * 100 + 1);

const submitButton = document.querySelector('#submit');
const userInput = document.querySelector('#userInput');
const guessList = document.querySelector('.guessList');
const remainingAttempts = document.querySelector('.remainingAttempts');
const feedbackMessage = document.querySelector('.feedbackMessage');
const newGameContainer = document.querySelector('.newGameContainer');

const newGameButton = document.createElement('button');

let previousGuesses = [];
let numberOfGuesses = 1;

let isGameActive = true;

if (isGameActive) {
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than 101');
  } else {
    previousGuesses.push(guess);
    if (numberOfGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. The random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed the right number.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Too low! Try a higher number.`);
  } else {
    displayMessage(`Too high! Try a lower number.`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessList.innerHTML += `${guess}, `;
  numberOfGuesses++;
  remainingAttempts.innerHTML = `${11 - numberOfGuesses} guesses remaining`;
}

function displayMessage(message) {
  feedbackMessage.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', true);
  newGameButton.classList.add('button');
  newGameButton.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  newGameContainer.appendChild(newGameButton);
  isGameActive = false;
  initializeNewGame();
}

function initializeNewGame() {
  const newGameButtonElement = document.querySelector('#newGame');
  newGameButtonElement.addEventListener('click', function (e) {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    previousGuesses = [];
    numberOfGuesses = 1;
    guessList.innerHTML = '';
    remainingAttempts.innerHTML = `${11 - numberOfGuesses} guesses remaining`;
    userInput.removeAttribute('disabled');
    newGameContainer.removeChild(newGameButton);

    isGameActive = true;
  });
}
```



