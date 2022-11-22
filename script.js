function getComputerChoice() {
    let computer = ["Rock", "Paper", "Scissors"];
    let random = computer[Math.floor(Math.random() * computer.length)];
    return random;
}



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    if (playerSelection === computerSelection) {
        return 'Draw';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You Lose! Scissors beats paper'
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You Win! Paper beats Rock';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You Lose! Rock beats Scissors'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You Win! Scissors beats Paper'
    } 
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));