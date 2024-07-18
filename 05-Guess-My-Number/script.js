'use strict';
// Math.trunc -- Remove the decemial points
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
const __check = document.querySelector('.check');
__check.addEventListener('click', function (e) {
  const guessNum = parseInt(document.querySelector('.guess').value);
  let message = document.querySelector('.message');
  if (Boolean(guessNum)) {
    if (guessNum === secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('🎉 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guessNum !== secretNumber) {
      if (score > 1) {
        displayMessage(
          guessNum > secretNumber ? '📈 Too high!' : '📉 Too low!'
        );
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
