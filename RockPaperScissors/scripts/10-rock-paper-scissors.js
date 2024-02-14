let score = 
JSON.parse(localStorage.getItem("score"));

if(score === null) {
score = {
  wins: 0,
  losses: 0,
  ties: 0
}
}

function playGame(userPick) {
const randomNumber = Math.random();
let computerMove = '';
if(randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'rock';
}
else if(randomNumber >= 1/3 && randomNumber < 2/3) {
  computerMove = 'paper';
}
else {
  computerMove = 'scissors';
}
console.log(computerMove); 

let result = ''

if(computerMove == userPick) {
  result = 'tie'
  score.ties++;
} 
else if(computerMove == "rock" && userPick == "scissors") {
  result = 'you lose.'
  score.losses++;
} 
else if(computerMove == "rock" && userPick == "paper") {
  result = 'you win.'
  score.wins++;
}
else if(computerMove == "paper" && userPick == "rock") {
  result = 'you loose.'
  score.losses++;
}
else if(computerMove == "paper" && userPick == "scissors") {
  result = 'you win.'
  score.wins++;
}
else if(computerMove == "scissors" && userPick == "rock") {
  result = 'you win.'
  score.wins++;
}
else if(computerMove == "scissors" && userPick == "paper") {
  result = 'you loose.'
  score.losses++;
}

localStorage.setItem("score", JSON.stringify(score));

document.querySelector(".js-winner").innerHTML = 
`${result}`;

document.querySelector(".js-move").innerHTML = 
`    You <img src="images/${userPick}-emoji.png" class="move-icon"> 
<img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;

document.querySelector(".js-score").innerHTML = 
`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
;
}

document.querySelector(".js-score").innerHTML = 
`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
;

function resetScore() {
score.wins = 0;
score.losses = 0;
score.ties = 0;
localStorage.removeItem("score");
document.querySelector(".js-score").innerHTML = 
`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
;
}