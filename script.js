function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    const finalChoice = choices[Math.floor(Math.random() * choices.length)];
    alert("The computer chose: " + finalChoice);
    console.log(getComputerChoice);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Please make your choice");
    console.log(playerSelection)
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));