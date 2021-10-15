let firstPlayerName = "";
let secondPlayerName = "";
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let totalScore = 0;


function onSubmit(event) {
  event.preventDefault();
  const formData = document.getElementsByTagName("input");
  firstPlayerName = formData[0].value;
  secondPlayerName = formData[1].value;
  totalScore = formData[2].value;
  document.getElementById("form-container").style.display = "none";
  document.getElementById("board-container").style.display = "block";
  document.getElementById("panel").style.display = "block";
  document.getElementById("g-p").innerHTML = "GOAL = " + totalScore;
  document
    .getElementById("player1")
    .getElementsByClassName("heading")[0].innerHTML = firstPlayerName;
  document
    .getElementById("player2")
    .getElementsByClassName("heading")[0].innerHTML = secondPlayerName;
  document.getElementById("p-t").innerHTML = firstPlayerName.toUpperCase() + "' s turn"
}

function rollDice(playerIndex) {
  const randomNumber = getRandom();
  const playerNodes = document.getElementById(`player${playerIndex}`);
  playerNodes
    .querySelector(".dice img")
    .setAttribute("src", `../images/dice${randomNumber}.png`);
  switch (playerIndex) {
    case 1:
      firstPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        firstPlayerScore;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player2")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
        document.getElementById("p-t").innerHTML = secondPlayerName.toUpperCase() + "' s turn"
      break;
    case 2:
      secondPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        secondPlayerScore;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player1")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
      document.getElementById("p-t").innerHTML = firstPlayerName.toUpperCase() + "' s turn"
      break;
    default:
      break;
  }
  checkIfWinnerExists();
}

function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

function checkIfWinnerExists() {
  if (firstPlayerScore >= totalScore) {
    document
      .getElementById("player2")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
      document.getElementById("p-t").innerHTML = firstPlayerName.toUpperCase() + " is Winner ";
      document.getElementById("g-p").innerHTML = "NICE";

  }
  if (secondPlayerScore >= totalScore) {
    document
      .getElementById("player1")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
      document.getElementById("p-t").innerHTML = secondPlayerName.toUpperCase() + " is Winner ";  
      document.getElementById("g-p").innerHTML = "NICE";
  }
}


function reset(){
  firstPlayerScore = 0;
  secondPlayerScore = 0;
  document.getElementById(`player1`).getElementsByClassName("score")[0].innerHTML = "0";
  document.getElementById(`player2`).getElementsByClassName("score")[0].innerHTML = "0"; 
  document.getElementById(`player2`).querySelector(".dice img")
  .setAttribute("src", `../images/dice1.png`);
  document.getElementById(`player1`).querySelector(".dice img")
  .setAttribute("src", `../images/dice1.png`);
  document.getElementById("p-t").innerHTML = firstPlayerName.toUpperCase() + "' s turn";
  document.getElementById("p1b").disabled = false;
  document.getElementById("g-p").innerHTML = "GOAL = " + totalScore;
}

function newgame(){
  reset();
  document.getElementById("form-container").style.display = "flex";
  document.getElementById("board-container").style.display = "none";
  document.getElementById("panel").style.display = "none";
  document.getElementById("form-container").reset();
  document.getElementById("p1b").disabled = false;
}