getComputerChoice();

function getComputerChoice()
{
    let options = ["Rock", "Paper", "Scissors"];
    let compChoice = options[Math.floor(Math.random() * (options.length))];
    return compChoice;
}