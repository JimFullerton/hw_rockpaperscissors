document.addEventListener('DOMContentLoaded', () => {

  let pooterPick = null;
  const plays = ['rock', 'paper', 'scissors'];
  const playerOP = document.querySelector('#players-choice');
  const pooterOP = document.querySelector('#computers-choice');
  const resultOP = document.querySelector('#result');

  function randomPlay(plays) {
    return plays[Math.floor(Math.random() * Math.floor(plays.length))];
  };

  function resultOut(playerPick, pooterPick, winner) {
    playerOP.textContent = `You played: ${playerPick}`
    pooterOP.textContent = `Computer played: ${pooterPick}`
    resultOP.textContent = `So the result is: ${winner}`
  };

  function playGame(playerPick) {
    pooterPick = randomPlay(plays);
    let x = plays.indexOf(playerPick) - plays.indexOf(pooterPick);
    switch (x) {
      case -2: case 1: resultOut(playerPick, pooterPick, 'player'); break;
      case -1: case 2: resultOut(playerPick, pooterPick, 'computer'); break;
      default: resultOut(playerPick, pooterPick, 'draw'); break;
    }
  };

  const rock = document.querySelector('#rock');
  rock.addEventListener('click', () => {
    playGame(event.target.value);
  });

  const paper = document.querySelector('#paper');
  paper.addEventListener('click', () => {
    playGame(event.target.value);
  });

  const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click', () => {
    playGame(event.target.value);
  });

});
