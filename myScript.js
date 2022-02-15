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
function playRound() {
    // call both the computerPlay funtion and the playerSelection function and assign to variables
    let computer = computerPlay();
    let player = playerSelection();
    // to determine the winner
    if (computer === player) { //incase of a tie
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
        return "You didn't input a correct option"; //incase user did not enter a valid answer
    }
}

// Function to play 5 games in a row and keep score
function game() {
    // declare the score keeping variables up here so that they do not reset every loop
    let computerScore = 0;
    let playerScore = 0;
    let ties = 0;
    for (let i=0; i<5; i++) {
        let text = playRound();
        // use substring to only compare the words "win!" or "lose"
        let result = text.substring(4, 8);
        if (result === "lose") {
           computerScore++; // add an increment to the score variable
        } else if (result === "win!") {
            playerScore++;
        } else {
            ties++;
        }
        console.log(text); // print out the reuslts of the round
    }  
    // print out the results of all 5 rounds  
    console.log("Computer: " + computerScore + " Player: " + playerScore + " Ties: " + ties);
}
