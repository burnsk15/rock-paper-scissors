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

// Function to determine and store the players input
function playerSelection() {
    // Ask for an input and store the string in a variable
    let string = prompt("Please enter rock, paper, or scissors.");
    
    // Convert String to all lower case
    let selection = string.toLowerCase();
    return selection;
}

//Function to declare the winner
function playRound(){
    let computer = computerPlay();
    let player = playerSelection();
    if (computer === player) {
        return "It's a tie!";
    } else if (computer === 'rock' && player === 'paper') {
        return "You win! Paper beats rock!";
    } else if (computer === 'paper' && player === 'rock') {
        return "You lose. Paper beats rock!";
    } else if (computer === 'rock' && player === 'scissors') {
        return "You lose. Rock Beats scissors!";
    } else if (computer === 'scissors' && player === 'rock') {
        return "You win! Rock beats scissors!";
    } else if (computer === 'paper' && player === 'scissors') {
        return "You win! Scissors beat paper!";
    } else if (computer === 'scissors' && player === 'paper') {
        return "You lose. Scissors beat paper!";
    } else {
        return "Something went wrong";
    }
}

