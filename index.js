let playerScore = 0;
let computerScore = 0;
const choices  = ["rock","paper","scissors"];

function computerPlay(){
    let random = Math.round(Math.random()*2);
    let choice = choices[random];
    return choice;
}

function userInput(){
    let playerSelection = prompt(message);
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock"||playerSelection === "scissors"||playerSelection=== "paper") {
        return playerSelection;
    } else {
        console.log("try again!");
        userInput();
    }
}

function playRound(playerSelection,computerSelection){
    //playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        console.log("It is a draw!");
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper"){
            computerScore++;
            console.log("You Lose! Paper beats rock!");
        } else if (computerSelection ==="scissors"){
            playerScore++;
            console.log("You win! Rock beats scissors!");
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            console.log("You win! Paper beats Rock");
        } else if (computerSelection === "scissors") {
            computerScore++;
            console.log("You Lose! Scissors beats Paper");
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            console.log("You Lose! Rock beats Scissors");
        } else if (computerSelection === "paper") {
            playerScore++;
            console.log("You Win! Scissors beats Paper");
        }
    }
    }

function game(){
    for (let i=0;i<5;i++){
        console.log("Game: "+(i+1));
        message = "Rock, Paper or Scissors?";
        let playerSelection = userInput();
        let computerSelection = computerPlay();
        playRound(playerSelection,computerSelection);
        console.log("Computer Score:"+computerScore);
        console.log("Player Score:"+playerScore);
    }

    if (playerScore > computerScore){
        console.log("Player wins!");
    } else if (playerScore === computerScore) {
        console.log("It is a final draw!");
    } else {
        console.log("Computer wins!");
    }
}

game();

