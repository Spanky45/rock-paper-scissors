let computerScore = 0;
let humanScore = 0;

const buttons = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('#reset');

const humanUi = document.querySelector('#human-score');
const computerUi = document.querySelector('#computer-score');
const messageArea = document.querySelector('#message-area');
const gameMessage = document.querySelector('#game-message');

let isNewGame = true;
let messages = [];

function logMessage(text) {
        messages.unshift(text);
        if (messages.length > 5) {
                messages.pop();
        }
        renderMessages();
}

function renderMessages() {
        messageArea.innerHTML = '';

        messages.forEach(message => {
                const p = document.createElement('p');
                p.textContent = message;
                p.style.whiteSpace = 'pre-line';
                messageArea.appendChild(p);
        });
}

function updateUi() {
        humanUi.textContent = humanScore;
        computerUi.textContent = computerScore;
}


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
                return "loser.";
        }
}

function disableButtons() {
        buttons.forEach(button => {
                button.disabled = true;
        });
}

buttons.forEach(button => {
        button.addEventListener('click', () => {
                if (isNewGame) {
                        messages = [];
                        renderMessages();
                        isNewGame = false;
                }

                const humanSelection = button.id;
                const computerSelection = getComputerChoice();

                let result = playRound(humanSelection, computerSelection);
                updateUi();
                logMessage(result);

                if (humanScore === 5 || computerScore === 5) {
                if (humanScore > computerScore) {
                logMessage(`
                        ----------------------------------------------------
                        CONGRATS YOU WIN
                        ----------------------------------------------------
                        `);
        }       
                else if (humanScore < computerScore) {
                 logMessage(`
                        ----------------------------------------------------
                        YOU LOST GO HOME LOSER
                        ----------------------------------------------------
                        `);
        }
                else logMessage(`
                        ----------------------------------------------------
                        IT'S A TIE
                        ----------------------------------------------------
                        `);
               disableButtons();
               resetBtn.hidden = false;
        }});
});

function enableButtons() {
  buttons.forEach(button => {
    button.disabled = false;
  });
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateUi();

  enableButtons();
  resetBtn.hidden = true;

messages = [];
renderMessages();

  logMessage('New game started!');
  isNewGame = true;
}

resetBtn.addEventListener('click', resetGame);