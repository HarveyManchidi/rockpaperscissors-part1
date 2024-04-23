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
  var playerSelection = "";
  var point = "";
  var pointA = document.getElementById("pointA")
  var pointB = document.getElementById("pointB")
  var results = document.getElementById("results");

  const rockButton = document.getElementById("rock");
  rockButton.addEventListener("click", function () {
    playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    point = playRound(playerSelection, computerSelection);
    if (point === "pointA") {
      playerA += 1;
	  pointA.textContent = playerA;
      console.log("player:" + playerA);
    } else if (point === "pointB") {
      playerB += 1;
	  pointB.textContent = playerB;
      console.log("Computer:" + playerB);
    }

    // final score
    if (playerA === playerB) {
		console.log("Draw");
		results.textContent = "Draw";
	  } else if (playerB === 5) {
		console.log("Computer won");
		results.textContent = "Computer won";
	  } else if (playerA === 5) {
		console.log("You won");
		results.textContent = "You won";
	  }
  });

  const paperButton = document.getElementById("paper");
  paperButton.addEventListener("click", function () {
    playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    point = playRound(playerSelection, computerSelection);
    if (point === "pointA") {
      playerA += 1;
	  pointA.textContent = playerA;
      console.log("player:" + playerA);
    } else if (point === "pointB") {
      playerB += 1;
	  pointB.textContent = playerB;
      console.log("Computer:" + playerB);
    }
    // final score
    if (playerA === playerB) {
		console.log("Draw");
		results.textContent = "Draw";
	  } else if (playerB === 5) {
		console.log("Computer won");
		results.textContent = "Computer won";
	  } else if (playerA === 5) {
		console.log("You won");
		results.textContent = "You won";
	  }
  });

  const scissorsButton = document.getElementById("scissors");
  scissorsButton.addEventListener("click", function () {
    playerSelection = "Scissors";
    const computerSelection = getComputerChoice();
    point = playRound(playerSelection, computerSelection);
    // point increasing
    if (point === "pointA") {
      playerA += 1;
	  pointA.textContent = playerA;
      console.log("player:" + playerA);
    } else if (point === "pointB") {
      playerB += 1;
	  pointB.textContent = playerB;
      console.log("Computer:" + playerB);
    }

    // final score
    if (playerA === playerB) {
      console.log("Draw");
	  results.textContent = "Draw";
    } else if (playerB === 5) {
      console.log("Computer won");
	  results.textContent = "Computer won";
    } else if (playerA === 5) {
      console.log("You won");
	  results.textContent = "You won";
    }
  });
}

playGame();
