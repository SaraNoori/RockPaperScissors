"use strict";



// formatted weirdly here because js doesn't like it
// when I start new lines in the middle of a string
var rockASCII =
    "    _______<br />---'   ____)<br />      (_____)<br />      (_____)<br />      (____)<br />---.__(___)";

var paperASCII =
    "    _______<br />---'   ____)____<br />          ______)<br />          _______)<br />          _______)<br />---.__________)<br />";

var scissorsASCII =
    "    _______<br />---'   ____)____<br />          ______)<br />        __________)<br />      (____)<br />---.__(___)";


// all variables and pointers
var computerWins = 0;
var playerWins = 0;

const rockBut = document.querySelector(".rockBut");
const scissorsBut = document.querySelector(".scissorsBut");
const paperBut = document.querySelector(".paperBut");
const historyLog = document.querySelector(".moveHist");
const plWinCount = document.querySelector(".playerWin");
const compWinCount = document.querySelector(".computerWin");
const playerArt = document.querySelector(".playerArt");
const computerArt = document.querySelector(".computerArt");
const restartBut = document.querySelector(".restartButton");

rockBut.addEventListener("click", processSelection);
scissorsBut.addEventListener("click", processSelection);
paperBut.addEventListener("click", processSelection);
restartBut.addEventListener("click", restart);

playerArt.innerHTML = rockASCII;

function restart()
{
    playerWins = 0;
    computerWins = 0;
    plWinCount.textContent = "Player: " + playerWins;
    compWinCount.textContent = "Computer: " + computerWins;

    playerArt.innerHTML = rockASCII;
    historyLog.replaceChildren();
}


function processSelection(event)
{
    var buttonType = event.target.getAttribute("class");
    var compChoice = getComputerChoice();
    var result = playRound(buttonType, compChoice);
    processReult(result); 
}

function getComputerChoice()
{
    let options = ["rock", "paper", "scissors"];
    let compChoice = options[Math.floor(Math.random() * (options.length))];
    return compChoice;
}

function playRound(playerSelection, computerSelection)
{
    playerSelection.toLowerCase();
    playerSelection = playerSelection.split("But")[0];

    changePlayerArt(playerSelection);
    addToHist("The computer Chose: " + computerSelection);
    
    if (playerSelection === computerSelection)
    {
        return "draw";
    }

    if (playerSelection === "rock")
    {
        if (computerSelection === "paper") return "lose";
        else return "win";
    }

    if (playerSelection === "paper")
    {
        if (computerSelection === "rock") return "win";
        else return "lose";
    }

    if (playerSelection === "scissors")
    {
        if (computerSelection === "rock") return "lose";
        else return "win";
    }
}


function processReult(result)
{
    if (result == "win")
    {
        playerWins += 1;
        addSpecialHist("You Win!");
    }
    else if (result == "lose")
    {
        computerWins += 1;
        addSpecialHist("You lose!");
    }
    else
    {
        addSpecialHist("It's a draw!");
    }

    plWinCount.textContent = "Player: " + playerWins;
    compWinCount.textContent = "Computer: " + computerWins;

}

// movement history of actions taken
// and results of rounds
function addToHist(text)
{
    removeOldHist();
    const log = document.createElement("li");
    log.textContent = text;
    historyLog.appendChild(log);
}

// special history is to be used for
// the result of a game
// wins, losses, and draws will look special on screen to differentiate them
function addSpecialHist(text)
{
    removeOldHist();
    const log = document.createElement("li");
    log.style.color = "orange";
    log.textContent = "---- " + text + " ----";
    historyLog.appendChild(log);
}


function removeOldHist()
{
    if (historyLog.children.length > 5)
    {
        historyLog.firstElementChild.remove();
        historyLog.firstElementChild.remove();
    }
}

// change the innerHTML instead of textContent
// because textContent does not do kindly 
// with new lines and extra spaces
function changePlayerArt(move)
{
    if (move == "rock")
    {
        playerArt.innerHTML = rockASCII;
        return;
    }

    if (move == "paper")
    {
        playerArt.innerHTML = paperASCII;
        return;
    }

    if (move == "scissors")
    {
        playerArt.innerHTML = scissorsASCII;
        return;
    }
}
