let playerScore = 0;
let computerScore = 0;
let gameIsActive = false
let roundIsActive = false;
let playerChoice = '';
let computerChoice = '';
let computerChoiceDisplay = 'Rock';


let playerSelectionRock = document.querySelector('#playerSelectionRock');
let playerSelectionPaper = document.querySelector('#playerSelectionPaper');
let playerSelectionScissors = document.querySelector('#playerSelectionScissors');
let playerSelectionRockClass = document.querySelector('.playerSelectionRock');
let playerSelectionPaperClass = document.querySelector('.playerSelectionPaper');
let playerSelectionScissorsClass = document.querySelector('.playerSelectionScissors');
let playerOutcomeChoice = document.querySelector('.playerOutcomeChoice');
let computerOutcomeChoice = document.querySelector('.computerOutcomeChoice');
let playerOutcomeScore = document.querySelector('#playerScore');
let computerOutcomeScore = document.querySelector('#computerScore');


let playerSelectors = document.getElementsByClassName('playerSelectors')

playerOutcomeScore.textContent = `You: ${playerScore}`;
computerOutcomeScore.textContent = `Computer: ${computerScore}`;


let restartGame = document.querySelector('#restartGame');


function computerPlay (){ // randomly select a computer choice
    let x = Math.floor(Math.random() * 3) + 1;
    if (x == 1) {
    return "Rock";
    } else if (x == 2) {
     return "Paper";
    } else {
     return "Scissors";
    }
}


function playerSelection(selection) { // Display player's choice and disable buttons

    let playerSelectors = document.querySelectorAll('.playerSelectors')
    playerOutcomeChoice.classList.add(`playerOutcomeChoice${selection}`);
    roundIsActive = true;
    disableSelections();
    
}



function computerSelection (selection){ // cycle through images & display computer selection
    computerOutcomeChoice.style.transitionDuration = "0s";
    let x = 0;
    
      let intervalID = setInterval(() =>  {
        if (computerChoiceDisplay == 'Rock') {
            computerChoiceDisplay = 'Paper';
            computerOutcomeChoice.classList.add(`computerOutcomeChoicePaper`);
            computerOutcomeChoice.classList.remove(`computerOutcomeChoiceRock`);  
        } else if (computerChoiceDisplay == 'Paper') {
            computerChoiceDisplay = 'Scissors';
            computerOutcomeChoice.classList.add(`computerOutcomeChoiceScissors`);
            computerOutcomeChoice.classList.remove(`computerOutcomeChoicePaper`);
        } else if (computerChoiceDisplay == 'Scissors') {
            computerChoiceDisplay = 'Rock';
            computerOutcomeChoice.classList.add(`computerOutcomeChoiceRock`);
            computerOutcomeChoice.classList.remove(`computerOutcomeChoiceScissors`);
        }
        if (++x === 20) {  
            clearInterval(intervalID) 
            computerOutcomeChoice.classList.remove(`computerOutcomeChoiceScissors`);
            computerOutcomeChoice.classList.remove(`computerOutcomeChoicePaper`);
            computerOutcomeChoice.classList.remove(`computerOutcomeChoiceRock`);
            computerOutcomeChoice.classList.add(`computerOutcomeChoice${selection}`);  
            
          }  

      }, 100);
    

}


function playRound (playerSelection ,computerSelection) { // compares user's choice with computer & declare's a winner
    

    if (playerSelection=='Rock' && computerSelection=='Paper' ||
            playerSelection=='Paper' && computerSelection=='Scissors' ||
            playerSelection=='Scissors' && computerSelection=='Rock') {
        computerScore++;
        setTimeout(function(){displayNotice(`You lose this round! ${computerSelection} beats ${playerSelection}`)},3000);
        setTimeout(endRound, 7500);
    
    } else if (playerSelection==computerSelection) {
        setTimeout(function(){displayNotice(`This round is a tie! You and the computer chose ${playerSelection}`)},3000);
        setTimeout(endRound, 7500);
    } else {
        playerScore++;
        setTimeout(function(){displayNotice(`You won this round! ${playerSelection} beats ${computerSelection}!`)},3000);
        setTimeout(endRound, 7500);
    }


}

function endGame() { // display game outcome message
    if (playerScore >= 5) {
        displayEndGameNotice('Congrats, you beat the computer!');
    } else {
        displayEndGameNotice('The computer has beaten you, better luck next time!');

    }
    

}

function endRound() { // update score & run re-enable buttons function
        playerOutcomeScore.textContent = `You: ${playerScore}`;
        computerOutcomeScore.textContent = `Computer: ${computerScore}`;
        restartGame.classList.add('buttons'); 
        restartGame.classList.remove('buttonsDisabled');
        restartGame.disabled = false;
    
    if (playerScore >= 5 || computerScore >= 5){
        endGame();
    } else {
        enableSelections();
        roundIsActive = false;
        if (playerChoice !=='') {
        playerOutcomeChoice.classList.remove(`playerOutcomeChoice${playerChoice}`);
        playerChoice = '';
        }
    }
}


function disableSelections() { // disable buttons while round is active

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
    restartGame.classList.remove('buttons'); 
    restartGame.classList.add('buttonsDisabled');
    restartGame.disabled = true;
    

}

function enableSelections() { // re-enable buttons
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
    restartGame.classList.add('buttons'); 
    restartGame.classList.remove('buttonsDisabled');
    restartGame.disabled = false;
    computerOutcomeChoice.style.transitionDuration = "0.7s";
    computerOutcomeChoice.classList.remove(`computerOutcomeChoiceRock`);
    computerOutcomeChoice.classList.remove(`computerOutcomeChoicePaper`);
    computerOutcomeChoice.classList.remove(`computerOutcomeChoiceScissors`);
}


function displayNotice(message) { // display round results
    var x = document.getElementById("notice");
    x.className = "show";
    let msg = document.getElementById("msg");
    msg.textContent = message;
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4500);
}

  function displayEndGameNotice(message) { // display non-fading end game message
    let x = document.getElementById("notice");
    x.className = "end";
    let msg = document.getElementById("msg");
    msg.textContent = message;
    //setTimeout(function(){ x.className = x.className.replace("showEnd", ""); }, 4500);
  }


playerSelectionRockClass.addEventListener('click', function() { // runs user choice and begins round

    if (!roundIsActive) {
    playerChoice = 'Rock';
    computerChoice = computerPlay();
    playerSelection('Rock');
    computerSelection(computerChoice);
    playRound(playerChoice,computerChoice);
   
}
    
});

playerSelectionPaperClass.addEventListener('click', function() {  // runs user choice and begins round
    if (!roundIsActive) {
        playerChoice = 'Paper';
        computerChoice = computerPlay();
        playerSelection('Paper');
        computerSelection(computerChoice);
        playRound(playerChoice,computerChoice);
    }

        
    });

playerSelectionScissorsClass.addEventListener('click', function() {  // runs user choice and begins round
    if (!roundIsActive) {
        playerChoice = 'Scissors';
        computerChoice = computerPlay();
        playerSelection('Scissors');
        computerSelection(computerChoice);
        playRound(playerChoice,computerChoice);
    }    
});

restartGame.addEventListener('click',function(e) { // Restart Game
    roundIsActive = false;
    computerScore = 0;
    playerScore = 0;
    playerOutcomeScore.textContent = `You: ${playerScore}`;
    computerOutcomeScore.textContent = `Computer: ${computerScore}`;
    x = document.getElementById("notice");
    x.className = x.className.replace("show", "");
    x.className = x.className.replace("end", "");
       enableSelections();
     if (playerChoice !=='') {
        playerOutcomeChoice.classList.remove(`playerOutcomeChoice${playerChoice}`);
        playerChoice = '';
     }
 });