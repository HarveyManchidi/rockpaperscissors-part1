function playRound(playerSelection, computerSelection) {
  // your code here!

  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "pointB";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "pointA";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "pointA";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "pointB";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "pointB";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "pointA";
  }
}

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  position = Math.floor(Math.random() * 3);
  return choice[position];
}

function playGame() {
  var playerA = 0;
  var playerB = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter Choice");
    const computerSelection = getComputerChoice();
    //console.log(playRound(playerSelection, computerSelection));
    var point = playRound(playerSelection, computerSelection);
    if (point === "pointA") {
      playerA += 1;
      console.log("player:" + playerA);
    } else if (point === "pointB") {
      playerB += 1;
      console.log("Computer:" + playerB);
    }
  }

  if (playerA === playerB) {
    console.log("Draw");
  } else if (playerA < playerB) {
    console.log("Computer won");
  } else if (playerA > playerB) {
    console.log("You won");
  }
}

playGame();
