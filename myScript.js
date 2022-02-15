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

