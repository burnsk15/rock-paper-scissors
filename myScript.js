// Gobal Variables to keep score
var computerScore = 0;
var playerScore = 0;
var ties = 0;

// Function to determine what the computer will throw out in the game
function computerPlay() {
    // Get a random number 0, 1, or 2
    let num = Math.floor(Math.random() * 3);
    // Assign each random number a hand sign
    if (num === 0) {
        // Rock option
        let play = "rock";
        return play;
    } else if (num === 1) {
        // Paper option
        let play = "paper";
        return play;
    } else {
        // Scissors option
        let play = "scissors";
        return play;
    }
}

//Function to declare the winner and show the round results
function playRound(str) {
    // call both the computerPlay funtion and uses the player's selection determined from what button was pushed.
    let computer = computerPlay();
    let player = str;
    let result = "";
    const roundPara = document.getElementById("round");
    
        // to determine the winner
        if (computer === player) { //incase of a tie
            result = "tie";
            roundPara.innerText += "\nIt's a tie!";
        } else if (computer === 'rock' && player === 'paper') {
            result = "win";
            roundPara.innerText += "\nYou win! Paper beats rock!";
        } else if (computer === 'paper' && player === 'rock') {
            result = "lose";
            roundPara.innerText += "\nYou lose. Paper beats rock!";
        } else if (computer === 'rock' && player === 'scissors') {
            result = "lose";
            roundPara.innerText += "\nYou lose. Rock Beats scissors!";
        } else if (computer === 'scissors' && player === 'rock') {
            result = "win";
            roundPara.innerText += "\nYou win! Rock beats scissors!";
        } else if (computer === 'paper' && player === 'scissors') {
            result = "win";
            roundPara.innerText += "\nYou win! Scissors beat paper!";
        } else if (computer === 'scissors' && player === 'paper') {
            result = "lose";
            roundPara.innerText += "\nYou lose. Scissors beat paper!";
        } 

        updateScore(result);
}

// Function to hold the updated score message and determine the winner after 5 rounds.
function updateScore(result) {
    // updates the gobal variables to track round results    
    if (result === "lose") {
        computerScore++; // add an increment to the score variable
    } else if (result === "win") {
        playerScore++;
    } else {
        ties++;
    } 
    const compScorePara = document.getElementById("computer");
    const playerScorePara = document.getElementById("player");
    const tiesPara = document.getElementById("tie");
    const resultPara = document.getElementById("result");
    
    // updates the Score in the html
    compScorePara.textContent = computerScore;
    playerScorePara.textContent = playerScore;
    tiesPara.textContent = ties;
    
    // Sets the overall winner after 5 games
    if (computerScore+playerScore+ties === 5) {
        if (computerScore > playerScore) {
            resultPara.textContent = "Sorry, you lost. Try again!";
        } else if (playerScore > computerScore) {
            resultPara.textContent = "You won! Great Job!";
        }
        else {
            resultPara.textContent = "Tied. Try again!";
        }

        // Resets the Scores showing with the html
        computerScore = 0;
        playerScore = 0;
        ties = 0;
        const roundPara = document.getElementById("round");
        roundPara.textContent = "Results: ";
    }
}

// EventListener to determine what button is hit
window.onload = function(){

    // How to determine what button was pushed and running the game
    // added EventListeners to each button, and when clicked they call the playRound function
    let rockButton = document.querySelector("#rock");
    rockButton.addEventListener('click', () => { (playRound("rock"))});

    let paperButton = document.getElementById("paper");
    paperButton.addEventListener('click', () => { (playRound("paper"))});

    let scissorsButton = document.getElementById("scissors");
    scissorsButton.addEventListener('click', () => {(playRound("scissors"))}); 

}


