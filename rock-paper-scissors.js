

function getComputerChoice() {
    // Get a random number to choose which action the computer will take.
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "ROCK";
    } else if (computerChoice === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getHumanChoice() {
    // Ask the human to input their choice as a string
    let humanChoice = prompt("Choose: Rock, Paper, or Scissors");

    // check if the choice is valid

    // return that string
    return humanChoice;
}


function playGame() {
    // Move score variables here
    let humanScore = 0;
    let computerScore = 0;
    // let computerSelection = getComputerChoice();

    const div = document.querySelector('div');
    const scoreboard = document.createElement('p');
    const result = document.createElement('p');
    const buttonRock = document.querySelector('#rock');
    const buttonPaper = document.querySelector('#paper');
    const buttonScissors = document.querySelector('#scissor');

    // append elements to div
    div.appendChild(scoreboard);
    div.appendChild(result);

    // Move playRound function here. This lets it access the score variables.
    function playRound(humanChoice, computerChoice) {
        // compare both string arguments to see who wins
        if (humanChoice.toUpperCase() === "ROCK" && computerChoice === "SCISSORS") {
            result.textContent = `You Won! ${humanChoice} > ${computerChoice}`;
            humanScore += 1;
        } else if (humanChoice.toUpperCase() === "PAPER" && computerChoice === "ROCK") {
            result.textContent = `You Won! ${humanChoice} > ${computerChoice}`;
            humanScore += 1;
        } else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice === "PAPER") {
            result.textContent = `You Won! ${humanChoice} > ${computerChoice}`;
            humanScore += 1;
        } else if (humanChoice.toUpperCase() === computerChoice) {
            result.textContent = `Tie! ${humanChoice} = ${computerChoice}`;
        } else {
            result.textContent = `You Lost! ${humanChoice} < ${computerChoice}`;
            computerScore += 1;
        }
    }


    // Call playRound 5 times
    // for (let i = 0; i < 5; i++) {
    //     // get choices
    //     let humanSelection = getHumanChoice();
    //     let computerSelection = getComputerChoice();

    //     // run playround
    //     playRound(humanSelection, computerSelection);

    // }


    buttonRock.addEventListener('click', () => {
        playRound('ROCK', getComputerChoice());
        scoreboard.textContent = `SCORE: Human = ${humanScore} | Computer = ${computerScore}`;
    })
    buttonPaper.addEventListener('click', () => {
        playRound('PAPER', getComputerChoice());
        scoreboard.textContent = `SCORE: Human = ${humanScore} | Computer = ${computerScore}`;
    })
    buttonScissors.addEventListener('click', () => {
        playRound('SCISSORS', getComputerChoice());
        scoreboard.textContent = `SCORE: Human = ${humanScore} | Computer = ${computerScore}`;
    })


    // while no one reaches five points
    // run game

    // Display the score
    // console.log(`The Final Score: HUMAN = ${humanScore} | COMPUTER = ${computerScore}`);
    // scoreboard.textContent = `SCORE: Human = ${humanScore} | Computer = ${computerScore}`;


}



playGame();