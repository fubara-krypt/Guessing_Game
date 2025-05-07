// Generate a random number between 1 and 5
let randomNumber = Math.floor(Math.random() * 5) + 1;
let attempts = 3; // User has three attempts

// DOM Elements
const submitGuessBtn = document.getElementById('submitGuess');
const userGuessInput = document.getElementById('userGuess');
const resultMessage = document.getElementById('resultMessage');
const attemptsRemaining = document.getElementById('attemptsRemaining');
const finalResult = document.getElementById('finalResult');
const restartGameBtn = document.getElementById('restartGame');

// Update attempts remaining
attemptsRemaining.textContent = `Attempts Remaining: ${attempts}`;

// Validate input and listen for user guess
submitGuessBtn.addEventListener('click', function() {
    let userGuess = parseInt(userGuessInput.value);

    // Check if input is a valid number
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 5) {
        resultMessage.textContent = 'Please enter a valid number between 1 and 5!';
        return;
    }

    attempts--; // Decrease attempts
    attemptsRemaining.textContent = `Attempts Remaining: ${attempts}`;

    // Check if guess is correct, too high, or too low
    if (userGuess === randomNumber) {
        finalResult.textContent = 'Congratulations! You guessed the right number!';
        endGame();
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = 'Too high! Try again.';
    } else {
        resultMessage.textContent = 'Too low! Try again.';
    }

    // If attempts run out, game over
    if (attempts === 0 && userGuess !== randomNumber) {
        finalResult.textContent = `Game over! The number was ${randomNumber}.`;
        endGame();
    }

    userGuessInput.value = ''; // Clear input after each guess
});

// End game function
function endGame() {
    userGuessInput.disabled = true;
    submitGuessBtn.disabled = true;
    restartGameBtn.style.display = 'block'; // Show restart button
}

// Restart game function
restartGameBtn.addEventListener('click', function() {
    attempts = 3;
    randomNumber = Math.floor(Math.random() * 5) + 1;
    resultMessage.textContent = '';
    finalResult.textContent = '';
    attemptsRemaining.textContent = `Attempts Remaining: ${attempts}`;
    userGuessInput.disabled = false;
    submitGuessBtn.disabled = false;
    restartGameBtn.style.display = 'none'; // Hide restart button
});
