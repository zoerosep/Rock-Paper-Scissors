const form = document.getElementById("game-form");
const container = document.querySelector(".card-container");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());

  const userChoice = dataObject.selection;
  const computerSelection = computerChoice();

  const result = doMath(computerSelection, userChoice);

  console.log(result);

  showData(userChoice, computerSelection, result);

  form.reset();
}

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

function doMath(computerSelection, userChoice) {
  if (computerSelection === userChoice) {
    return "It's a tie!";
  } else if (computerSelection === "rock" && userChoice === "scissors") {
    return "You lost!";
  } else if (computerSelection === "paper" && userChoice === "rock") {
    return "You lost!";
  } else if (computerSelection === "scissors" && userChoice === "paper") {
    return "You lost!";
  } else {
    return "You won!";
  }
}

function showData(userChoice, computerSelection, result) {
  container.textContent = "";

  container.textContent = `You chose ${userChoice}. The computer chose ${computerSelection}. ${result}`;
}
