let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector('.user-score');
const computerScore_span = document.querySelector('.computer-score');

const scoreBoard = document.querySelector('.score-board');
const result = document.querySelector('.result > p');

const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');



function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3); // Math.floor is to return a number like a interger, so will return (0, 1 or 2), without Math.floor would return a float number.
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result.innerHTML = `${userChoice} beats ${computerChoice}. You won!`
    document.getElementById(userChoice).classList.add('green-glow');
}

function lose(userChoice, computerChoice) {
    computerScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result.innerHTML = `${userChoice} loses to ${computerChoice}. You lost!`
}

function draw() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result.innerHTML = "It's a draw.";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerChoice);
            break;

        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw();
            break;
    }
}

function main() {
    rock.addEventListener('click', () => {
        game('Rock');
    })

    paper.addEventListener('click', () => {
        game('Paper');
    })

    scissors.addEventListener('click', () => {
        game('Scissors');
    })
}

main();