
let counter = 1
let [computer_score, user_score] = [0, 0]
let result_ref = document.getElementById("result");
 //let styleCell = result === "YOU LOSE" ? "lose": result === "YOU WIN" ? "win" : "draw"

function checker(input) {
    let choices = ["K", "P", "N"];      
    let choiceIndex = Math.floor(Math.random()*3);
    let computer_choice = choices[choiceIndex];

    //alert("test")

    document.getElementById("computer_choice").innerHTML = `Computer choice <span>${choices[choiceIndex]}<span/>`;
    document.getElementById("user_choice").innerHTML = `User choice <span>${input}<span/>`;

    if(input === computer_choice) {
        gameEvaluation('DRAW', input, computer_choice)
    }
    else if(input === "K") {
        if(computer_choice === "P") {
            gameEvaluation('YOU LOSE', input, computer_choice)
            computer_score++
        }
        else{   
            gameEvaluation('YOU WIN', input, computer_choice)
            user_score++
        }
    }
    else if(input === "P") {
        if(computer_choice === "N") {
            gameEvaluation('YOU LOSE', input, computer_choice)
            computer_score++
        }
        else{
            gameEvaluation('YOU WIN', input, computer_choice)   
            user_score++
        }
    }
    else if(input === "N") {
        if(computer_choice === "K") {
            gameEvaluation('YOU LOSE', input, computer_choice)
            computer_score++
        }
        else{
            gameEvaluation('YOU WIN', input, computer_choice)   
            user_score++
        }
    }

    document.getElementById("computer_score").innerHTML = computer_score
    document.getElementById("user_score").innerHTML = user_score
}

function createRow(rank, user, computer, winner) {
    console.log(winner)
    const table = document.getElementById("history")
    const row = table.insertRow()
    const rankCell = row.insertCell()
    const userCell = row.insertCell()
    const computerCell = row.insertCell()
    const winnerCell = row.insertCell()
    rankCell.innerHTML = rank
    userCell.innerHTML = user
    computerCell.innerHTML = computer
    winnerCell.innerHTML = winner
    // winnerCell.style.cssText = styleCell
    winnerCell.classList.add(winner === 'YOU LOSE' ? 'lose' : winner === 'YOU WIN' ? 'win' : 'draw')
    console.log(winnerCell.classList)
    console.log(result)
}

function gameEvaluation(result, input, computer_choice) {
    result_ref.classList.value= ''
    result_ref.classList.add(result === 'YOU LOSE' ? 'lose' : result === 'YOU WIN' ? 'win' : 'draw')
    result_ref.innerHTML = result
    //const styleCell = result === "YOU LOSE" ? "lose": result === "YOU WIN" ? "win" : "draw"
    createRow(counter++, input, computer_choice, result)
}
