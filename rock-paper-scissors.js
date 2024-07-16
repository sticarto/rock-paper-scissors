

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
    return humanChoice;
}

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

    // display text stating who won

    // increment the winner's score
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);

