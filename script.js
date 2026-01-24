function playGame() {
let computerScore = 0;
let humanScore = 0;


function getComputerChoice() {
    let randomNumber = Math.random();
    
    if (randomNumber < 1/3) {
        return 'rock';
}   else if (randomNumber < 2/3) {
        return 'paper';
}   else {
        return 'scissors';
}
}

function getHumanChoice() {
    let Choice = prompt('rock, paper or scissors?');
    return Choice.toLowerCase();
}

function playRound(humanSelection, computerSelection) {
        if (humanSelection === computerSelection)
                return "It's a tie!";
        else if (humanSelection === 'rock' && computerSelection === 'scissors') {
                humanScore++;
                return "WINNER WINNER CHICKEN DINNER!!!";
        }
        else if (humanSelection === 'paper' && computerSelection === 'rock') {
                humanScore++;
                return "WINNER WINNER CHICKEN DINNER!!!";
        }
        else if (humanSelection === 'scissors' && computerSelection === 'paper') {
                humanScore++;
                return "WINNER WINNER CHICKEN DINNER!!!";
        }
        else {
                computerScore++;
                return "loser." 
        }
}
for (let i = 0; i < 5; i++) {
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

let result = playRound(humanSelection, computerSelection);
console.log(result);
console.log(`Your score: ${humanScore}. Opponent: ${computerScore}`)
}
console.log('----------------------------------------------------')
if (humanScore > computerScore) {
        console.log('CONGRATS YOU WIN')
}
else if (humanScore < computerScore) {
        console.log('YOU LOST GO HOME LOSER')
}
else console.log("IT'S A TIE")

console.log('----------------------------------------------------')

}
playGame();