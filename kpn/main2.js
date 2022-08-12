let counter = 1
let [computer_score, user_score] = [0, 0]
let result_ref = document.getElementById("result");
let computer_choice_id = document.getElementById("computer_choice");
let user_choice_id = document.getElementById("user_choice");
let computer_score_id = document.getElementById("computer_score");
let user_score_id = document.getElementById("user_score");


let choices_object = {
    'K': {
        'K': 'draw',
        'P': 'lose',
        'N': 'win'
    },
    'P': {
        'K': 'win',
        'P': 'draw',
        'N': 'lose'
    },
    'N': {
        'K': 'lose',
        'P': 'win',
        'N': 'draw'
    }
}

function checker(input) {
    let choices = ["K", "P", "N"];      
    let choiceIndex = Math.floor(Math.random()*3);
    let computer_choice = choices[choiceIndex];

    computer_choice_id.innerHTML = `Computer choice <span>${choices[choiceIndex]}<span/>`;
    user_choice_id.innerHTML = `User choice <span>${input}<span/>`;

    switch(choices_object[input][computer_choice]) {
        case 'win':
            gameEvaluation('YOU WIN', input, computer_choice, counter++)
            break;
        case 'lose':
            gameEvaluation('YOU LOSE', input, computer_choice, counter++)
            break;
        case 'draw':
            gameEvaluation('DRAW', input, computer_choice, counter++)
            break;
    }
    computer_score_id.innerHTML = computer_score;
    user_score_id.innerHTML = user_score;

    if(computer_score === 5) {
        alert('prehral si')
        if (window.confirm('chcete hru spustiť znova?') == true) {
        resetGame()
        } else {
            alert('')
        }
    } 
    else if(user_score === 5) {
        alert('vyhral si')
        if (window.confirm('chcete hru spustiť znova?') == true) {
        resetGame()   
        } else {
            alert('')
        }
    }
}

const table = document.getElementById("history")

function createRow(rank, user, computer, winner) {
    const row = table.insertRow()
    const rankCell = row.insertCell()
    const userCell = row.insertCell()
    const computerCell = row.insertCell()
    const winnerCell = row.insertCell()
    rankCell.innerHTML = rank
    userCell.innerHTML = user
    computerCell.innerHTML = computer
    winnerCell.innerHTML = winner
    winnerCell.classList.add(winner === 'YOU LOSE' ? 'lose' : winner === 'YOU WIN' ? 'win' : 'draw')
}

function gameEvaluation(result, input, computer_choice, counter) {
    result_ref.classList.value= ''
    result_ref.classList.add(result === 'YOU LOSE' ? 'lose' : result === 'YOU WIN' ? 'win' : 'draw')
    result_ref.innerHTML = result
    result === 'YOU LOSE' ? computer_score++ : result === 'YOU WIN' ? user_score++ : ''
    createRow(counter, input, computer_choice, result)
}

function resetGame() {
    // spytať sa mareka ako vymazať všetk rows cez deleteRow()
    table.remove();
    //location.reload();
    computer_choice_id.innerHTML=''
    user_choice_id.innerHTML=''
    computer_score_id.innerHTML='0'
    user_score_id.innerHTML='0'
    result_ref.innerHTML=''
    result_ref.classList.value= ''
}