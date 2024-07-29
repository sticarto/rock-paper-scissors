

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
    let computerSelection = getComputerChoice();

    const buttonRock = document.querySelector('#rock');
    const buttonPaper = document.querySelector('#paper');
    const buttonScissors = document.querySelector('#scissor');

    // Move playRound function here. This lets it access the score variables.
    function playRound(humanChoice, computerChoice) {
        // compare both string arguments to see who wins
        if (humanChoice.toUpperCase() === "ROCK" && computerChoice === "SCISSORS") {
            console.log(`You Won! ${humanChoice} beats ${computerChoice}.`);
            humanScore += 1;
        } else if (humanChoice.toUpperCase() === "PAPER" && computerChoice === "ROCK") {
            console.log(`You Won! ${humanChoice} beats ${computerChoice}.`);
            humanScore += 1;
        } else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice === "PAPER") {
            console.log(`You Won! ${humanChoice} beats ${computerChoice}.`);
            humanScore += 1;
        } else if (humanChoice.toUpperCase() === computerChoice) {
            console.log(`Tie! ${humanChoice} vs ${computerChoice}`);
        } else {
            console.log("You lost");
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
        playRound('ROCK', computerSelection);
    })
    buttonPaper.addEventListener('click', () => {
        playRound('PAPER', computerSelection);
    })
    buttonScissors.addEventListener('click', () => {
        playRound('SCISSORS', computerSelection);
    })



    // Display the score
    console.log(`The Final Score: HUMAN = ${humanScore} | COMPUTER = ${computerScore}`);

}



playGame();