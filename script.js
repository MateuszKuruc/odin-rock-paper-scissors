const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
    return choice;
    
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }   else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection = "paper" && computerSelection == "rock")) {
            return "Player";
        }   else {
        return "Computer";
    }
}


function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    console.log(result);
    if (result == "Tie") {
        return "It is a draw!";
    }   else if (result == "Player") {
        return `You win this round! ${playerSelection} beats ${computerSelection}.`;
    }   else {
        return `You lose this round! ${computerSelection} beats ${playerSelection}.`;
    } 
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));














/*
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const finalChoice = choices[Math.floor(Math.random() * choices.length)];
    alert("The computer chose: " + finalChoice);

}


function playRound() {
    
    if (playerSelection === computerSelection) {
        alert("It is a draw!");
    }   else if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You have lost! Paper beats Rock");
    }   else if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("You have won! Rock beats Scissors");
    }   else if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("You have lost! Scissors beat Paper");
    }   else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You have won! Paper beats Rock");
    }   else if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("You have lost! Rock beats Scissors");
    }   else if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You have won! Scissors beat Paper");
    }   
    return playerSelection;
}

    let playerSelection = prompt("Please choose Rock, Paper or Scissors");
    let computerSelection = getComputerChoice();
    console.log(getComputerChoice);
    console.log(playRound(playerSelection, computerSelection));
    */