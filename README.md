# rock-paper-scissors
Practice building a JavaScript program from scratch.

## Reworking Notes
Goal was to add buttons for obtain the user input instead of using a prompt and having the user type in their choice. Added EventListeners to each button making it call the playRound() function which in turn called the updateScore() function. We also update the score on the webpage each round, and reset after 5 rounds have been played and an overall winner is determined.

### computerPlay()
first we will write a function called computer play that will randomly return either 'Rock', 'Paper', or 'Scissors'.

### playRound()
function to compare the player election to the computerPlay to determine the results and attach them to the round result paragraph element. It will the call the updateScore() function with the results as it's parameter

### updateScore()
Function to update the gobals variables used to keep score for 5 rounds, and then resets the scores after those 5 rounds. It also updates the scores in the respective paragraph elements.

## Ideas for imporvement
* add CSS to make the sight look better
* use flexbox to make the flow better
* add images for the rock, paper, and scissor buttons

