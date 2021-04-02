let userScore = 0;
let compScore = 0;
let level;
let move;
const choiceDistri = [1, 1, 1];
const choice = ['r', 'p', 's'];
const choiceMap = { r: "Rock", p: "Paper", s: "Scissors" }
const levelSelect = document.getElementById("level");
const userScore_span = document.getElementById('user_score');
const compScore_span = document.getElementById('computer_score');
const userChoice_div = document.getElementById('user_choice');
const compChoice_div = document.getElementById('comp_choice');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const resultDisplay = document.getElementById('display');

function setLevel() {
    level = levelSelect.value;
}

function compMove() {
    if (level == "0") {
        return choice[Math.floor(Math.random() * 3)];
    } else {
        let sum = choiceDistri.reduce((a, b) => a + b, 0);
        let dis = choiceDistri.map(function(el) {
            return el / sum;
        });
        let ran = Math.random();
        if (ran < dis[0]) {
            return choice[1];
        } else if (ran < dis[1]) {
            return choice[2];
        } else {
            return choice[0];
        }

    }
}

function draw(userChoice, compChoice) {
    const resultString = choiceMap[userChoice] + " equals " + choiceMap[compChoice] + ". Draw!";
    resultDisplay.innerHTML = resultString;
    const name = choiceMap[userChoice].toLowerCase()

}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const resultString = choiceMap[userChoice] + " Beats " + choiceMap[compChoice] + ". You win!";
    resultDisplay.innerHTML = resultString;

}

function lose(userChoice, compChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    const resultString = choiceMap[userChoice] + " loses to " + choiceMap[compChoice] + ". You lose!";
    resultDisplay.innerHTML = resultString;
}

function getAction() {
    rock_div.addEventListener("click", function() {
        game('r');
    })
    paper_div.addEventListener("click", function() {
        game('p');
    })
    scissor_div.addEventListener("click", function() {
        game('s');
    })
    levelSelect.addEventListener("click", function() {
        level = document.getElementById("level").value;
    })

}

function game(userChoice) {
    choiceDistri[choice.indexOf(userChoice)]++;
    const compChoice = compMove()
    console.log(userChoice, compChoice)
    let result = userChoice + compChoice;
    switch (result) {
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, compChoice);
            break;
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, compChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, compChoice);
    }

}

function main() {
    getAction();
}

main();