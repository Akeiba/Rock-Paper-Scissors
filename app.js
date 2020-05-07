// Initialise scores
let playerScore = 0;
let compScore = 0;
let noRounds = 0;


// Computer play returns rock, paper or scissors
function computerPlay() {
    let hands = ['rock', 'paper', 'scissors'];
    return hands[Math.floor(Math.random() * Math.floor(3))];
}


// Single round of game play
function singleRound (playerSelection, computerSelection) {
    let input = playerSelection.toLowerCase();
    let drawMsg = 'Hmmm, it\'s a draw...';
    let loseMsg = `Uh oh, you lost, ${computerSelection} beats ${input}!`;
    let winMsg = `Yay, you won ${input} beats ${computerSelection}!`;
    console.log(`${input} vs ${computerSelection}`);
    console.log(`Player: ${playerScore} vs Computer: ${compScore}`)
    if(input === 'rock' && computerSelection === 'rock') {
        return drawMsg;
    } else if(input === 'rock' && computerSelection === 'paper') {
        ++compScore;
        return loseMsg;
    } else if(input === 'rock' && computerSelection === 'scissors') {
        ++playerScore;
        return winMsg;
    } else if(input === 'paper' && computerSelection === 'paper') {
        return drawMsg;
    } else if(input === 'paper' && computerSelection === 'scissors') {
        ++compScore
        return(loseMsg);
    } else if(input === 'paper' && computerSelection === 'rock') {
        ++playerScore
        return winMsg;
    } else if(input === 'scissors' && computerSelection === 'scissors') {
        return drawMsg;
    } else if(input === 'scissors' && computerSelection === 'rock') {
        ++compScore;
        return loseMsg;
    } else if(input === 'scissors' && computerSelection === 'paper') {
        ++playerScore;
        return winMsg;
    } 
    
}


// Game play of 5 rounds & winner declaration
function game() {
    let noRounds = 0;
    for(let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        let playerSelection = prompt('Choose your hand');
        singleRound(playerSelection, computerSelection);
         ++noRounds
        console.log(`Round ${noRounds}`);
        // console.log(`Player: ${playerScore} vs Computer: ${compScore}`)
    }

    // Count winning score
    let winner;
    if(playerScore > compScore) {
        winner = 'You won';
    } else if(playerScore < compScore) {
        winner = 'the Computer won';
    } else if(playerScore == compScore) {
        winner = 'it\'s a draw';
    }
    // Final score declaration
    if(noRounds === 5) {
        console.log(`Player: ${playerScore} vs Computer: ${compScore}`)
        console.log(`Game over, ${winner}!`);
        noRounds = 0;
    }
}

game();
