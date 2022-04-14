/*







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
restartGame.addEventListener('click',function(e) {
    roundIsActive = false;
    enableSelections();
    if (playerChoice !=='') {
        computerOutcomeChoice.style.transitionDuration = "0.7s";
        playerOutcomeChoice.classList.remove(`playerOutcomeChoice${playerChoice}`);
        playerChoice = '';
        computerOutcomeChoice.style.transitionDuration = "0s";
    }
});


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


function playerSelection(selection) {

    let playerSelectors = document.querySelectorAll('.playerSelectors')

   // let playerSelection= document.querySelector(`#playerSelection${selection}`);
    playerOutcomeChoice.classList.remove(`playerOutcomeChoiceRock`);
    playerOutcomeChoice.classList.remove(`playerOutcomeChoicePaper`);
    playerOutcomeChoice.classList.remove(`playerOutcomeChoiceScissors`);
    playerOutcomeChoice.classList.add(`playerOutcomeChoice${selection}`);
    roundIsActive = true;
    disableSelections();
    
}





function computerSelection (selection){

    let x = 0;
    
    
      let intervalID = setInterval(() =>  {

        if (computerChoiceDisplay == 'Rock') {
            computerChoiceDisplay = 'Paper';
            computerOutcomeChoice.classList.add(`computerOutcomeChoicePaper`);
            computerOutcomeChoice.classList.remove(`computerOutcomeChoiceRock`);  
        } else if (computerChoiceDisplay == 'Paper') {
            computerChoiceDisplay = 'Scissors';
            //computerOutcomeChoice.style.backgroundImage = "url('./images/scissors.png')";
            computerOutcomeChoice.classList.add(`computerOutcomeChoiceScissors`);
            computerOutcomeChoice.classList.remove(`computerOutcomeChoicePaper`);
        } else if (computerChoiceDisplay == 'Scissors') {
            computerChoiceDisplay = 'Rock';
            computerOutcomeChoice.classList.add(`computerOutcomeChoiceRock`);
            computerOutcomeChoice.classList.remove(`computerOutcomeChoiceScissors`);
            //computerOutcomeChoice.style.backgroundImage = "url('./images/rock.png')";
        }
        if (++x === 20) {  
            clearInterval(intervalID) 
            computerOutcomeChoice.classList.remove(`computerOutcomeChoiceScissors`);
            computerOutcomeChoice.classList.remove(`computerOutcomeChoicePaper`);
            computerOutcomeChoice.classList.remove(`computerOutcomeChoiceRock`);  
            //computerOutcomeChoice.style.backgroundImage = "url('./images/outcome-placeholder.png')";
           // computerOutcomeChoice.classList.remove(`computerOutcomeChoice`);   
            computerOutcomeChoice.classList.add(`computerOutcomeChoice${selection}`);  
            
          }  

      }, 100);
    

}


function playRound (playerSelection ,computerSelection) { // compares user's choice with computer & declare's a winner
    

 /*   while (playerSelection !=='Rock' || playerSelection !=='Paper' || playerSelection !=='Scissors'){
        if (playerSelection !== null && (playerSelection =='Rock' || playerSelection =='Paper' ||
                playerSelection =='Scissors')) {
            break;
        } else if (playerSelection !== null) {
            console.log(`"${playerSelection}" is an invalid choice, try again`);
            playerSelection = playerPlay();
        } else {
        playerSelection = null;
            break;
        }
    }   
*/
    roundIsActive = true;
    disableSelections();



    if (playerSelection=='Rock' && computerSelection=='Paper' ||
            playerSelection=='Paper' && computerSelection=='Scissors' ||
            playerSelection=='Scissors' && computerSelection=='Rock') {
        computerScore++;
        //console.log(`The computer chose ${computerSelection} and you choose ${playerSelection}`);
        return `You lose this round! ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection==computerSelection) {
       // console.log(`The computer chose ${computerSelection} and you choose ${playerSelection}`);
        return `This round is a tie! You and the computer chose ${playerSelection}`;
    } else if (playerSelection==null) {
        return null;
    } else {
        playerScore++;
        //console.log(`The computer chose ${computerSelection} and you choose ${playerSelection}`);
        return `You won this round! ${playerSelection} beats ${computerSelection}!`;
        
    }
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
    computerOutcomeChoice.classList.remove(`computerOutcomeChoice${computerChoice}`);
}

playerSelectionRockClass.addEventListener('click', function() {
    if (!roundIsActive) {
    playerChoice = 'Rock';
    computerChoice = computerPlay();
    console.log(computerChoice);
    playerSelection('Rock');
    computerSelection(computerChoice);
   
}
    
});

playerSelectionPaperClass.addEventListener('click', function() {
    if (!roundIsActive) {
        playerChoice = 'Paper';
        computerChoice = computerPlay();
        playerSelection('Paper');
        computerSelection(computerChoice);
    }
        
    });

playerSelectionScissorsClass.addEventListener('click', function() {
    if (!roundIsActive) {
        playerChoice = 'Scissors';
        computerChoice = computerPlay();
        playerSelection('Scissors');
        computerSelection(computerChoice);
    }    
            
        });




