
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
