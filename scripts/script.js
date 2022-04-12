/*

let playerScore = 0;
let computerScore = 0;


function computerPlay (){ // randomly select a computer choice
    let x = Math.floor(Math.random() * 3) + 1;
    if (x == 1) {
    return "rock";
    } else if (x == 2) {
     return "paper";
    } else {
     return "scissors";
    }
}

function playerPlay () { //prompt user's choice and remove spaces/convert to lower case
    choice = prompt('Enter rock, paper, or scissors:');
    if (choice !== null) {
    choice = choice.toLowerCase().replace(/\s+/g, '');
    }  
    return choice;
}

function playRound (playerSelection ,computerSelection) { // compares user's choice with computer & declare's a winner
    
    while (playerSelection !=='rock' || playerSelection !=='paper' || playerSelection !=='scissors'){
        if (playerSelection !== null && (playerSelection =='rock' || playerSelection =='paper' ||
                playerSelection =='scissors')) {
            break;
        } else if (playerSelection !== null) {
            console.log(`"${playerSelection}" is an invalid choice, try again`);
            playerSelection = playerPlay();
        } else {
        playerSelection = null;
            break;
        }
    }   

    if (playerSelection=='rock' && computerSelection=='paper' ||
            playerSelection=='paper' && computerSelection=='scissors' ||
            playerSelection=='scissors' && computerSelection=='rock') {
        computerScore++;
        console.log(`The computer chose ${computerSelection} and you choose ${playerSelection}`);
        return `You lose this round! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection==computerSelection) {
        console.log(`The computer chose ${computerSelection} and you choose ${playerSelection}`);
        return `This round is a tie! You and the computer chose ${playerSelection}`;
    } else if (playerSelection==null) {
        return null;
    } else {
        playerScore++;
        console.log(`The computer chose ${computerSelection} and you choose ${playerSelection}`);
        return `You won this round! ${playerSelection} beats ${computerSelection}!`;
        
    }
}

function game(){ // Plays 5 rounds, and concludes an overall winner
let roundOutCome;
    for (let i = 1; i <= 5; i++) {
        roundOutcome = playRound(playerPlay(), computerPlay());
        
        if (roundOutcome == null) {
            break;
        } else {
            console.log(roundOutcome);
        }
    


        console.log(`Round ${i} of 5`);
        console.log(`Your Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log(`===================================`);
     }

     if (computerScore > playerScore && roundOutcome !== null) {
         console.log(`The computer has won with a score of ${computerScore} to ${playerScore}`);
     } else if (computerScore < playerScore && roundOutcome !== null) {
        console.log(`You've won won with a score of ${playerScore} to ${computerScore}`);
     } else if (computerScore == playerScore && roundOutcome !== null) {
        console.log(`It's a tie with a score of ${playerScore} to ${computerScore}`); 
     } else {
        console.log(`You have canceled the game`)   
        
     }

}


game();

*/


let roundIsActive = false;
let playerChoice = '';


let playerSelectionRock = document.querySelector('#playerSelectionRock');
let playerSelectionPaper = document.querySelector('#playerSelectionPaper');
let playerSelectionScissors = document.querySelector('#playerSelectionScissors');
let playerSelectionRockClass = document.querySelector('.playerSelectionRock');
let playerSelectionPaperClass = document.querySelector('.playerSelectionPaper');
let playerSelectionScissorsClass = document.querySelector('.playerSelectionScissors');
let playerOutcomeChoice = document.querySelector('.playerOutcomeChoice');

let playerSelectors = document.getElementsByClassName('playerSelectors')


let restartGame = document.querySelector('#restartGame');
restartGame.addEventListener('click',function(e) {
    roundIsActive = false;
    enableSelections();
    if (playerChoice !=='') {
    playerOutcomeChoice.classList.remove(`playerOutcomeChoice${playerChoice}`);
    playerChoice = '';
    }
});



function playerSelection(selection) {

    let playerSelectors = document.querySelectorAll('.playerSelectors')

    let playerSelection= document.querySelector(`#playerSelection${selection}`);
    playerOutcomeChoice.classList.remove(`playerOutcomeChoiceRock`);
    playerOutcomeChoice.classList.remove(`playerOutcomeChoicePaper`);
    playerOutcomeChoice.classList.remove(`playerOutcomeChoiceScissors`);
    playerOutcomeChoice.classList.add(`playerOutcomeChoice${selection}`);
    roundIsActive = true;
    disableSelections();
    
}


function disableSelections() {

    for (let i = 0; i < playerSelectors.length; i++) {
        if  (playerSelectors[i].id == 'playerSelectionRock') {
            playerSelectors[i].classList.remove('playerSelectionRock');
            playerSelectors[i].classList.add('playerSelectionRockSelected');
        } else if (playerSelectors[i].id == 'playerSelectionPaper') {
            playerSelectors[i].classList.remove('playerSelectionPaper');
            playerSelectors[i].classList.add('playerSelectionPaperSelected');
        } else if (playerSelectors[i].id == 'playerSelectionScissors') {
            playerSelectors[i].classList.remove('playerSelectionScissors');
            playerSelectors[i].classList.add('playerSelectionScissorsSelected');

         }
    }
}

function enableSelections() {
    for (let i = 0; i < playerSelectors.length; i++) {
        if  (playerSelectors[i].id == 'playerSelectionRock') {
            playerSelectors[i].classList.add('playerSelectionRock');
            playerSelectors[i].classList.remove('playerSelectionRockSelected');
        } else if (playerSelectors[i].id == 'playerSelectionPaper') {
            playerSelectors[i].classList.add('playerSelectionPaper');
            playerSelectors[i].classList.remove('playerSelectionPaperSelected');
        } else if (playerSelectors[i].id == 'playerSelectionScissors') {
            playerSelectors[i].classList.add('playerSelectionScissors');
            playerSelectors[i].classList.remove('playerSelectionScissorsSelected');

         }
    }
}

playerSelectionRockClass.addEventListener('click', function(e) {
    if (!roundIsActive) {
    playerChoice = 'Rock';
    playerSelection('Rock');
   
}
    
});

playerSelectionPaperClass.addEventListener('click', function(e) {
    if (!roundIsActive) {
        playerChoice = 'Paper';
        playerSelection('Paper');
    }
        
    });

playerSelectionScissorsClass.addEventListener('click', function(e) {
    if (!roundIsActive) {
        playerChoice = 'Scissors';
        playerSelection('Scissors');
    }    
            
        });




