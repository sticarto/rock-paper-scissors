

let humanScore;
let computerScore;

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
    return humanChoice.toUpperCase();
}

function playRound(humanChoice, computerChoice) {

}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

