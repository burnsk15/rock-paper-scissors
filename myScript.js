// Function to determine what the computer will throw out in the game
function computerPlay() {
    // Get a random number 0, 1, or 2
    let num = Math.floor(Math.random() * 3);
    // Assign each random number a hand sign
    if (num === 0) {
        let play = "rock";
        return play;
    } else if (num === 1) {
        let play = "paper";
        return play;
    } else {
        let play = "scissors";
        return play;
    }
}

