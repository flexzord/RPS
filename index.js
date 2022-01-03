function computerChoice(){
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random()*3);
  return choices[choice];
}

function playerChoice(){
  let choices = ["rock", "paper", "scissors"];
  let choice = parseInt(prompt("1-rock, 2-paper, 3-scissors"));
  return choices[choice-1];
}

function compare(player,computer){
  let winMessage;
  if(player==="rock"&&computer==="rock"||player==="paper"&&computer==="paper"||player==="scissors"&&computer==="scissors"){
    winMessage = "Draw";
  }else if(player==="rock"&&computer==="scissors"||player==="paper"&&computer==="rock"||player==="scissors"&&computer==="paper"){
    winMessage = "Player won!";
  }else{
    winMessage = "Computer won!";
  }
  return winMessage;
}

function game(){
  let computerScore=0;
  let playerScore = 0;
  let rounds = parseInt(prompt("How many rounds"));

  while(rounds!==0){
    let gameRound = compare(playerChoice(),computerChoice());
    if(gameRound==="Draw"){
      computerScore++;
      playerScore++;
      alert(`${gameRound} computer score: ${computerScore} player score: ${playerScore}`);
    }else if(gameRound==="Player won!"){
      playerScore++;
      alert(`${gameRound} computer score: ${computerScore} player score: ${playerScore}`);
    }else{
      computerScore++;
      alert(`${gameRound} computer score: ${computerScore} player score: ${playerScore}`);
    }
    rounds--

  }
  if(computerScore===playerScore){
    alert(`Draw computer score: ${computerScore} player score: ${playerScore}`);
  }else if(computerScore>playerScore){
    alert(`Computer Won computer score: ${computerScore} player score: ${playerScore}`);
  }else{
    alert(`Player Won computer score: ${computerScore} player score: ${playerScore}`);
  }
}
