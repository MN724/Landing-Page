function getComputerChoice() {
  let ComputerValue = Math.floor(Math.random() * 3);
  
  return ComputerValue;
}

ComputerValue = getComputerChoice();

if (ComputerValue == 0) {
  ComputerChoice = "rock";
} else if (ComputerValue == 1) {
  ComputerChoice = "paper";
} else if (ComputerValue == 2) {
  ComputerChoice = "scissors";
}

let UserChoice = prompt("rock, paper, or scissors?");
UserChoice = UserChoice.toLowerCase();
// let UserChoice = "Rock";

if (UserChoice == "rock") {
  UserValue = 0;
} else if (UserChoice == "paper") {
  UserValue = 1;
} else if (UserChoice == "scissors") {
  UserValue = 2;
}

if (ComputerValue == UserValue) {
  console.log("Tie");
} else if (ComputerValue == 0) {
  if (UserValue == 1) {
    console.log("You Win! Paper beats Rock");
  } else if (UserValue == 2) {
    console.log("You Lose! Rock beats Scissors");
  }
} else if (ComputerValue == 1) {
  if (UserValue == 2) {
    console.log("You Win! Scissors beats Paper");
  } else if (UserValue == 0) {
    console.log("You Lose! Paper beats Rock");
  }
} else if (ComputerValue == 2) {
  if (UserValue == 0) {
    console.log("You Win! Rock beats Scissors");
  } else if (UserValue == 1) {
    console.log("You Lose! Scissors beats Paper");
  }
}

console.log(ComputerValue);
console.log(ComputerChoice);
console.log(UserValue);
console.log(UserChoice);