'use strict';
// console.log(document.querySelector('.message').textContent);
// // For class we use query selector, for id we use GetElementById

// document.querySelector('.message').textContent = 'Correct Number!'
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 15;

// console.log(document.querySelector('.guess').value);

var secretNumber = Math.trunc(Math.random() * 20) + 1;

var score = 20;

var highscore = 0;

// document.querySelector('.number').textContent = secretNumber;




document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    if (!guess) {
        document.querySelector('.message').textContent = '🥺 No Number!'
    }

    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🪄Correct Number!'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.check').style.visibility='hidden'; 

        if(score>highscore){
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
    }
    else if (guess > secretNumber) {
        if(score>1){
        document.querySelector('.message').textContent = '☹️Too high!'
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '😒You lost the game!'
        }

    }
    else if (guess < secretNumber) {
        if(score > 1){
        document.querySelector('.message').textContent = '☹️Too low!'
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
             document.querySelector('.message').textContent = '😒You lost the game!'
             document.querySelector('.score').textContent = '0'
        }

    }
})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = '20';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = ''
    document.querySelector('.check').style.visibility='visible';  

})

