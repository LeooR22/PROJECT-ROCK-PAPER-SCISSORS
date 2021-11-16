//¿Querés saber más? Entrá en nuestra página web o contactanos para mas info 💻📲 (SEO PARA INSTAGRAM)
const btnReset = document.querySelector("#btnReset");

let userScore = 0;
let computerScore = 0;

const WinnerOfGame = function (userScore, computerScore) {
  if (userScore == 5 || computerScore == 5) {
    if (userScore == computerScore) {
      disableButtons();
      return (document.getElementById("winnerofgame").innerHTML =
        "The result of the game was a draw. Reset game to play again");
    } else if (userScore > computerScore) {
      disableButtons();
      return (document.getElementById("winnerofgame").innerHTML =
        "User wins ! Reset game to play again");
    } else {
      disableButtons();
      return (document.getElementById("winnerofgame").innerHTML =
        "Computer wins ! Reset game to play again");
    }
  }
};

let computerplay = function () {
  let randomitem = Math.floor(Math.random() * 3) + 1;
  if (randomitem == 1) {
    return "rock";
  } else if (randomitem == 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

let playRound = function (playerSelection) {
  computerplay();

  const computerSelection = computerplay();

  if (playerSelection == computerSelection) {
    //condicion empate

    userScore += 1;
    computerScore += 1;

    contentLogs.textContent =
      "Tie. " + playerSelection + " equals " + computerSelection;

    content.textContent =
      "User score = " + userScore + " --- Computer score = " + computerScore;
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") || //condicion perdededora
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    userScore += 0;
    computerScore += 1;

    contentLogs.textContent =
      "You lose! " + computerSelection + " beats " + playerSelection;

    content.textContent =
      "User score = " + userScore + " --- Computer score = " + computerScore;
  } else {
    //condicion ganadora

    userScore += 1;
    computerScore += 0;

    contentLogs.textContent =
      "You win! " + playerSelection + " beats " + computerSelection;

    content.textContent =
      "User score = " + userScore + " --- Computer score = " + computerScore;
  }

  document.getElementById("logs").innerHTML = contentLogs.textContent;

  document.getElementById("eventsList").innerHTML = content.textContent;

  // ingresar funcion de ganador
  WinnerOfGame(userScore, computerScore);
};

const buttons = document.querySelectorAll(".btn-primary");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    if (button.id == 1) {
      return playRound("rock");
    } else if (button.id == 2) {
      return playRound("paper");
    } else if (button.id == 3) {
      return playRound("scissors");
    }
  });
});

function disableButtons() {
  btnReset.classList.remove("d-none");
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}

const eventsList = document.querySelector("#eventsList");
const logs = document.querySelector("#logs");
const HTMLwinnerofgame = document.querySelector("#winnerofgame");

const content = document.createElement("li");
content.classList.add("content");

const contentLogs = document.createElement("div");
contentLogs.classList.add("contentLogs");

const winnerofgame = document.createElement("winnerofgame");
winnerofgame.classList.add("div");

// resetGame = () => {
//   btnReset.classList.add("d-none");

//   buttons.forEach((elem) => {
//     elem.disabled = false;
//   });

//   userScore = 0;
//   computerScore = 0;
//   content.textContent = "";
//   contentLogs.textContent = "";
//   winnerofgame.textContent = "";
// };
btnReset.addEventListener("click", () => {
  btnReset.classList.add("d-none");

  buttons.forEach((elem) => {
    elem.disabled = false;
  });

  userScore = 0;
  computerScore = 0;
  logs.textContent = "";
  eventsList.textContent = "";
  HTMLwinnerofgame.textContent = "";
});
