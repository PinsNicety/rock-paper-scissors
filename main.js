let possiblePlayList = ['rock', 'paper', 'scissors'];
const computerSelection = () => possiblePlayList[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log(`You Played: ${ playerSelection }`);
    if (playerSelection === 'rock') {
        switch (computerSelection) {
            case 'rock':
                return 'You Tie against rock.';
            case 'paper':
                computerScore++
                return 'You Lose against paper.';
            case 'scissors':
                playerScore++;
                return 'You Win against scissors.';
        }
    } else if (playerSelection === 'scissors') {
        switch (computerSelection) {
            case 'rock':
                computerScore++;
                return 'You lose against rock.';
            case 'paper':
                playerScore++;
                return 'You win against paper.';
            case 'scissors':
                return 'You tie against scissors.';
        }
    } else if (playerSelection === 'paper') {
        switch (computerSelection) {
            case 'rock':
                playerScore++;
                return 'You win against rock.';
            case 'paper':
                return 'You tie against paper.';
            case 'scissors':
                computerScore++;
                return 'You lost against scissors.';
        }
    } else {
        return 'Pick rock, paper, or scissors.';
    }
}
function game () {
    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("Enter rock. paper, or scissors: ", "");
        const computerSelection = () => possiblePlayList[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
        console.log(playRound(playerSelection, computerSelection()));
    }

    let message = (playerScore > computerScore) ? `You win ${ playerScore } - ${ computerScore }` :
        (playerScore < computerScore) ? `You lose ${ playerScore } - ${ computerScore }` :
        `You tied ${ playerScore } - ${ computerScore }`;
    console.log(message)
}


game()
