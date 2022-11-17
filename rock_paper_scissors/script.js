const totalScore = {computerScore: 0, playerScore: 0};

function getComputerChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3)
    return rpsChoice[randomNumber];
}

function getResult(payerChoice, computerChoice) {
    let score;
    let resultMap = new Map();
    resultMap.set('Rock', 'Scissors');
    resultMap.set('Paper', 'Rock');
    resultMap.set('Scissors', 'Paper');

    if (payerChoice === computerChoice) {
        score = 0;
    } else if (resultMap.get(payerChoice) === computerChoice) {
        score = 1;
    } else {
        score = -1;
    }
    return score;
}

function showResult(score, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    const handsDiv = document.getElementById('hands');
    const playerScoreDiv = document.getElementById('playerScore');
    // const resultMessage = ['🤬', '😶', '😄'];
    const resultMessage = ['loss..', 'tie', 'win!!'];
    const rpsEmoji = new Map();
    rpsEmoji.set('Rock', '✊🏼');
    rpsEmoji.set('Paper', '🖐🏼');
    rpsEmoji.set('Scissors', '✌🏼');

    resultDiv.innerText = resultMessage[score + 1];

    handsDiv.innerHTML =
        `<div class="playerHand"><span class="label">👤</span>${rpsEmoji.get(playerChoice)}</div>
            <div style="font-size: 2rem">&nbsp&nbsp🆚&nbsp&nbsp</div>
        <div class="comHand"><div class="label">🤖</div>${rpsEmoji.get(computerChoice)}</div>`
    ;
    playerScoreDiv.innerText = `Score: ${totalScore['playerScore']}`
}

function onClickRPS(playerChoice) {
    console.log({playerChoice})
    const computerChoice = getComputerChoice();
    console.log({computerChoice})
    const score = getResult(playerChoice, computerChoice);
    totalScore['playerScore'] += score;
    totalScore['computerScore'] -= score;
    console.log(score)
    console.log(totalScore)

    showResult(score, playerChoice, computerChoice);
}

function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton');

    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })

    const endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick = () => endGame(totalScore);
}

function endGame(totalScore) {
    totalScore['playerScore'] = 0;
    totalScore['computerScore'] = 0;

    const resultDiv = document.getElementById('result');
    const handsDiv = document.getElementById('hands');
    const playerScoreDiv = document.getElementById('playerScore');

    resultDiv.innerText = '';
    handsDiv.innerText = '';
    playerScoreDiv.innerText = '';
}

playGame()