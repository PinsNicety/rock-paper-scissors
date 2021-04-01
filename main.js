// randomize computer play
const possiblePlayList = ['rock', 'paper', 'scissors'];
const computerSelection = () => possiblePlayList[Math.floor(Math.random() * (2 - 0 + 1)) + 0];

// scoreboard
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

// play single round
function playRound(playerSelection, computerSelection) {
    roundNumber++
    computerSelection = computerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'paper': 
                    computerScore++;
                    return 'Computer';
                case 'scissors': 
                    playerScore++;
                    return 'Player';
            }
        case 'scissors':
            switch (computerSelection) {
                case 'rock': 
                    computerScore++;
                    return 'Computer';
                case 'paper': 
                    playerScore++;
                    return 'Player';
            }
        case 'paper':
            switch (computerSelection) {
                case 'rock': 
                    playerScore++;
                    return 'Player';
                case 'scissors': 
                    computerScore++;
                    return 'Computer';
            }
    }
    return 'TIE';
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
    setWinner.textContent = 'Round Winner: ';
    setPlayerScore.textContent = `Player Score: ${ playerScore }`;
    setComputerScore.textContent = `Computer Score: ${ computerScore }`;
    setRound.textContent = `Round #${ roundNumber }`;
};

// alert a winner
function finalScore () {
    if (playerScore > computerScore) message = `You win ${ playerScore } - ${ computerScore }`;
    else message = `You lose ${ playerScore } - ${ computerScore }`;
    resetGame();
    return message
};

// set  selectors
const setRound = document.querySelector('#round-number');
const setWinner = document.querySelector('#winner');
const setPlayerScore = document.querySelector('#player-score');
const setComputerScore = document.querySelector('#comp-score');

// set event listeners
const buttons = document.querySelectorAll('.choice-btn');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let winner = playRound(e.target.id, computerSelection())
        setWinner.textContent = `Round Winner: ${ winner }`;
        setPlayerScore.textContent = `Player Score: ${ playerScore }`;
        setComputerScore.textContent = `Computer Score: ${ computerScore }`;
        setRound.textContent = `Round #${ roundNumber }`;
        if (playerScore === 5 || computerScore === 5) alert(finalScore());
    });
});


