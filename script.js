"use strict";

var score1 = 0;
var score2 = 0;
var tempScore = 0;
var turn = 1;
var winner = false;
var player1Score = document.querySelector("#score--0");
var player2Score = document.querySelector("#score--1");
var current1 = document.querySelector("#current--0");
var current2 = document.querySelector("#current--1");
var holdBtn = document.querySelector(".btn--hold");
var rollBtn = document.querySelector(".btn--roll");
var player1 = document.querySelector(".player--0");
var player2 = document.querySelector(".player--1");
var dice = document.querySelector(".dice");
var newGameBtn = document.querySelector(".btn--new");
console.log(hasWinner());
starter();
newGameBtn.addEventListener("click", starter);
holdBtn.addEventListener("click", hold);
rollBtn.addEventListener("click", roll);

function starter() {
  score1 = 0;
  score2 = 0;
  tempScore = 0;
  winner = false;
  player1Score.textContent = score1;
  player2Score.textContent = score2;

  player1.classList.add("player--active");
  player2.classList.remove("player--active");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
}
function hold() {
  turn === 1 ? (score1 += tempScore) : (score2 += tempScore);
  tempScore = 0;
  winner = hasWinner();
  if (!winner) {
    if (turn === 1) {
      turn = 2;
      current1.textContent = 0;
      player2.classList.add("player--active");
      player1.classList.remove("player--active");
    } else {
      turn = 1;
      current2.textContent = 0;
      player1.classList.add("player--active");
      player2.classList.remove("player--active");
    }
  } else {
    if (turn === 1) {
      player1.classList.add("player--winner");
    } else {
      player2.classList.add("player--winner");
    }
  }
  player1Score.textContent = score1;
  player2Score.textContent = score2;
}

function roll() {
  if (!winner) {
    var guess = Math.floor(Math.random() * 6) + 1;
    pickImage(guess);

    if (guess === 1) {
      tempScore = 0;
      hold();
    } else {
      tempScore += guess;
    }
    if (turn === 1) {
      current1.textContent = tempScore;
    } else {
      current2.textContent = tempScore;
    }
  }
}
function pickImage(guess) {
  var location = `dice-${guess}.png`;
  dice.setAttribute("src", location);
}
function hasWinner() {
  if (score1 >= 100 || score2 >= 100) {
    return true;
  } else {
    return false;
  }
}
