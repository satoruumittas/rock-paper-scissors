let winCount = 0;
let lossCount = 0;
let streak = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = '';

    if (playerChoice === computerChoice) {
        result = `It's a draw! You both chose ${playerChoice}`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}`;
        winCount++;
        streak++;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}`;
        lossCount++;
        streak = 0;
    }

    // Update DOM
    document.getElementById('result').textContent = result;
    document.getElementById('wins').textContent = `Wins: ${winCount}`;
    document.getElementById('losses').textContent = `Losses: ${lossCount}`;
    document.getElementById('streak').textContent = `Win Streak: ${streak}`;
}

function resetGame() {
    winCount = 0;
    lossCount = 0;
    streak = 0;

    document.getElementById('result').textContent = '';
    document.getElementById('wins').textContent = 'Wins: 0';
    document.getElementById('losses').textContent = 'Losses: 0';
    document.getElementById('streak').textContent = 'Win Streak: 0';
}
