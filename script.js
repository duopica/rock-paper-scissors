let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let computerChoices = ['Rock', 'Paper', 'Scissors'];
    return computerChoices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "Rock":
                return "Rock and Rock. You draw."
                break;
            case "Paper":
                computerScore += 1;
                return "Paper beats Rock. You lose."
                break;
            default:
                playerScore += 1;
                return "Rock beats Scissors. You win."
                break;
        }
                
     } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "Rock":
                playerScore += 1;
                return "Paper beats Rock. You win."
                break;
            case "Paper":
                return "Paper and Paper. You draw."
                break;
            default:
                computerScore += 1;
                return "Scissors beat Paper. You lose."
                break;
        }
                
    } else {
        switch (computerSelection) {
            case "Rock":
                computerScore += 1;
                return "Rock beats Scissors. You lose."
                break;
            case "Paper":
                playerScore += 1;
                return "Scissors beat Paper. You win."
                break;
            default:
                return "Scissors and Scissors. You draw."
                break;    
        }
    }  
}

function game(){
    playerScore = 0;
    computerScore = 0;
    let outcome = "result";

    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt("Rock/Paper/Scissors?");
        console.log(playRound(playerSelection.toLowerCase(),computerPlay()));
        console.log("Player's Score: " + playerScore);
        console.log("Computer's Score: " + computerScore);
    }

    if (playerScore > computerScore){
        outcome = "win";
    } else if (playerScore < computerScore) {
        outcome = "lose";
    } else {
        outcome = "drew";
    }

    console.log(`You ${outcome}.
        Final Score:
        Player   = ${playerScore}. 
        Computer = ${computerScore}.`);
}
