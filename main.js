
const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const results = document.querySelector(".results");

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;

}


function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        const p = document.createElement('p');
        p.innerText = "It's a tie!";
        results.appendChild(p);
    }
    else if(result == "Player"){
        const p = document.createElement('p');
        p.innerText = `You win! ${playerSelection} beats ${computerSelection}`
        results.appendChild(p);
    }
    else{
        const p = document.createElement('p');
        p.innerText = `You lose! ${computerSelection} beats ${playerSelection}`
        results.appendChild(p);
    }
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
        ){
            playerScore++
            return "Player";
        }
    else {
            compScore++
            return "Computer";
    }
}


rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
});
paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
});
scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
});

const checkForWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You won ${playerScore} to ${compScore}`;
        results.append(h2);
    } else if (compScore === 5) {
        const h2 = document.createElement('h2');
        h2.innerText = `You lost ${playerScore} to ${compScore}`;
        results.append(h2);
    }
}



// function game(){
//     let scorePlayer = 0;
//     let scoreComputer = 0;
    // for (let i = 0; i < 5; i++) {
    //     const playerSelection = getPlayerChoice();
    //     const computerSelection = getComputerChoice();
    //     console.log(playRound(playerSelection, computerSelection));
    //     if(checkWinner(playerSelection, computerSelection) == "Player"){
    //         scorePlayer++;
    //     }
    //     else if(checkWinner(playerSelection, computerSelection) == "Computer"){
    //         scoreComputer++;
    //     }
    // }
//     console.log("Game Over")
//     if(scorePlayer > scoreComputer){
//         console.log("Player was the winner");
//     }
//     else if(scorePlayer < scoreComputer){
//         console.log("Computer was the winner");
//     }
//     else{
//         console.log("We have a tie!");
//     }
// }

// game()



