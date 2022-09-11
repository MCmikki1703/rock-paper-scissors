function getComputerChoice() {
    let computer = ["Rock", "Paper", "Scissors"];
    let random = computer[Math.floor(Math.random() * computer.length)];
    return random;
}

//console.log(getComputerChoice());!