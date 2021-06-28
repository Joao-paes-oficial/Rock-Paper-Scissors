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
    
    result.innerHTML = `${userChoice} wins ${computerChoice}. You won!`

    document.getElementById(userChoice).classList.add('green-glow');
    document.getElementById(computerChoice).classList.add('red-glow');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('green-glow');
        document.getElementById(computerChoice).classList.remove('red-glow');
    }, 600)
}

function lose(userChoice, computerChoice) {
    computerScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    
    result.innerHTML = `${userChoice} loses to ${computerChoice}. You lost!`

    document.getElementById(userChoice).classList.add('red-glow');
    document.getElementById(computerChoice).classList.add('green-glow');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('red-glow');
        document.getElementById(computerChoice).classList.remove('green-glow');
    }, 600)
}

function draw(userChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result.innerHTML = "It's a draw.";

    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('gray-glow');
    }, 600)
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
            draw(userChoice);
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