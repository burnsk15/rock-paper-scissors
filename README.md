# rock-paper-scissors
Practice building a JavaScript program from scratch.


### computerPlay()
first we will write a function called computer play that will randomly return either 'Rock', 'Paper', or 'Scissors'.

### playerSelection()
function to prompt the user for and input and then converts that input into all lowe case.

### playRound()
function to compare the playerSelection to the computerPlay to determine and return the results.
If the user mi types or does not input "rock", "paper", or "scissors" then it will return with statement saying to input the correct answer. this should be moved into the player selcetion function so that it does not tkae up a round.

### game()
funtion to continue the game for 5 rounds and while keeping overall score including ties.

## Ideas for imporvement
* add test to see if the user inputs one of the choices, and return a result to prompt again.
* instead of converting the numbers into strings in the computerPlay function, we should convert the users input into intergers and compare those to make the code look cleaner.