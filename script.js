const gameChoices = ["rock", "paper", "scissors"];
const winners = [];


function game() {
    for(let i = 1; i <=5; i++){
        playRound(i);
    }
    keepScore();
}

function playRound(round){
    let playerSelection = playerChoice();
    let computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner); //will add the winner into the winners array
    logRound(playerSelection, computerSelection, winner, round);
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
      return "Player Wins";
    } else {
      return "Computer Wins";
    }
}

function keepScore(){
    let playerWins = winners.filter((item) => item == "Player Wins").length; //Will loop through the winners array searching for "Player Wins"
    let computerWins = winners.filter((item) => item == "Computer Wins").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Player Wins: " + playerWins);
    console.log("Computer Wins: " + computerWins);
    console.log("Ties: " + ties);
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log("Round: " + round);
    console.log("Player Chose: " + playerChoice);
    console.log("Computer Chose: " + computerChoice);

    console.log("Winner: " + winner);
    
}

game();

