function getComputerChoice()
{
    let options = ["rock", "paper", "scissors"];
    let compChoice = options[Math.floor(Math.random() * (options.length))];
    return compChoice;
}

function playRound(playerSelection, computerSelection)
{
    playerSelection.toLowerCase();
    console.log("The computer chose: " + computerSelection);
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

    return "I don't recognize that move";
}

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function playGame(rounds)
{
    let computerWins = 0;
    let playerWins = 0;

    for (let i = 1; i <= rounds; i++)
    {
        let playerSelection = prompt("game " + i + ": Chose Rock, Paper, or Scissors", "");
        let computerSelection = getComputerChoice();
        let theRound = playRound(playerSelection, computerSelection);

        if ( theRound === "win") 
        {
            playerWins += 1; 
            console.log("you win!");
        }
        else if (theRound === "lose")
        {
            computerWins += 1;
            console.log("you lose!");
        }
        else console.log("it's a draw!");

        console.log("Player: " + playerWins);
        console.log("Computer: " + computerWins);
        console.log("\n");
    }
}

playGame(5);