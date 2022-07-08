const gameChoices = ["rock", "paper", "scissors"];

function game() {
    playRound();
}

function computerChoice() {
  return gameChoices[~~(Math.random() * gameChoices.length)];
}

function playerChoice (){
    let input = prompt("Enter a choice 'Rock', 'Paper', or 'Scissors'");
    while (input == null){
        input = prompt("Enter a choice 'Rock', 'Paper', or 'Scissors'");
    }

    input = input.toLowerCase();
    let check = validatePlayerChoice(input);
    while(check == false){
        input = prompt("Enter a choice 'Rock', 'Paper', or 'Scissors'. Make sure your spelling is correct");
        while (input == null){
            input = prompt("Enter a choice 'Rock', 'Paper', or 'Scissors'");
        }
        input = input.toLowerCase();
        check = validatePlayerChoice(input);
    }
    return input;
}

function playRound(computerS, playerS){
    let playerSelection = playerChoice();
    let computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    console.log("Player Chose:" + playerSelection);
    console.log("Computer Chose:" + computerSelection);
    console.log(winner);
} 

// validates if the player's choice is in our array of gameChoices
function validatePlayerChoice(playerChoice){
    return gameChoices.includes(playerChoice); //returns true if it is, false if it's not
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
      return "Tie";
    } else if (
      (choiceP === "rock" && choiceC == "scissors") ||
      (choiceP === "paper" && choiceC == "rock") ||
      (choiceP === "scissors" && choiceC == "paper")
    ) {
      return "Player Wins!";
    } else {
      return "Computer Wins!";
    }
  }

playRound();