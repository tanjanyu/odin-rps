// Initiate an array with rock paper and scissors
let numOfOptions = 3;
let options = ["rock", "paper", "scissors"];
let capitalizedOptions = ["Rock", "Paper", "Scissors"];

// Function Declerations
// Randomly return either rock paper or scissors
function getComputerChoice() {
// Obtain a random integer between 0-2
let randomNum = Math.floor(Math.random() * numOfOptions);
// Return the random integer
return randomNum;
}

// Play one game of rock paper scissors and declare the winner
function calcGameResult(playerSelection, computerSelection) {
// Find the array position for computerSelection, then store that in a variable (That variable will be computerSelection)
// Find the array position for playerSelection
for (let i = 0; i < numOfOptions; i++) {
    if (playerSelection === options[i]) {
        let playerSelectionNum = i;
    }
}
// Initiate gameStatus variable and winner/loserNum variables
let gameStatus = "drew", winnerNum = 0, loserNum = 0;
// Using a switch statement, find if the playerSelection is equal to the losing, draw, or winning values
// If player wins/loses/draw, say, You ${win/lose/draw}! {Winner array value} beats {Loser array value}
switch(playerSelectionNum) {
    case loser(computerSelection):
        gameStatus = "lose";
        winnerNum = computerSelection;
        loserNum = playerSelectionNum;


    case winner(computerSelection):
        gameStatus = "win";
        loserNum = computerSelection;
        winnerNum = playerSelectionNum;
}

// Return statement
if (gameStatus !== "drew") {
    return `You ${gameStatus}! ${capitalizedOptions[winnerNum]} beats ${option[loserNum]}`;
} else {
    return `You drew! You both picked ${option[computerSelection]}`;
}

}

// This function should find the losing value in the array
function loser(input) {
    let potentialLoserValue = input - 1;
    if (potentialLoserValue >= 0) {
        return potentialLoserValue;
    } else {
        return numOfOptions;
    }
}

// This function should find the winning value in the array
function winner(input) {
    let potentialWinnerValue = input + 1;
    if (potentialWinnerValue <= numOfOptions) {
        return potentialWinnerValue;
    } else {
        return 0;
    }

}

// Gets case insensitive player selection
function getPlayerSelection() {
    // Use prompt to obtain a string from the player
    let userInput = prompt("Rock, paper, or scissors?", '');
    // Make string completely lowercase
    // Return the string
    return userInput.toLowerCase();
}
