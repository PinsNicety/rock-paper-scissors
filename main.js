function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection = 'rock') {
        switch (computerSelection) {
            case 'rock':
                output = 'You Tie';
                break;
            case 'paper':
                output = 'You Lose';
                break;
            case 'scissors':
                output = "You Win";
                break;
            default:
                output = "You need to pick a right answer"
        }
    }
    return output
}

let computerPlay = function () {
    const num = random(2);
    console.log(num)
    return num
  }
  
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));