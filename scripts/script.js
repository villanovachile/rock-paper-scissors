let userScore = 0;
let computerScore = 0;
let gameRound = 1;
let totalRounds = 6

for (; gameRound <= totalRounds; gameRound++ ){
    let userChoice = prompt('Enter rock, paper, or scissors:');
    if (userChoice == null || userChoice == undefined) {
        userChoice = null;
    } else {
    userChoice = userChoice.toLowerCase().replace(/\s+/g, '');
    }
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    

    
    if (computerChoice == 1) {
        computerChoice = 'rock';
    } else if (computerChoice == 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    } 
    
  
    if (userChoice !== null && (userChoice =='rock' || userChoice =='paper' || userChoice =='scissors')) {
    console.log('User chooses ' + userChoice);
    console.log('Computer chooses ' + computerChoice);
    } else {
        userChoice = null;
    }
    
    if (userChoice=='rock' && computerChoice=='paper' || userChoice=='paper' && computerChoice=='scissors' || userChoice=='scissors' && computerChoice=='rock') {
        computerScore++
        console.log ('The user has lost, because ' + userChoice + ' loses to ' + computerChoice + ', with a score of ' + userScore + ' to ' + computerScore);
        console.log ('Round ' + gameRound + ' of ' + totalRounds)
    } else if (userChoice==computerChoice) {
        console.log('It\'s a tie, with a score of ' + userScore + ' to ' + computerScore);
        console.log ('Round ' + gameRound + ' of ' + totalRounds)
    } else if (userChoice==null) {
        console.log('User made an invalid entry, please try again, with a score of ' + userScore + ' to ' + computerScore);
        console.log ('Round ' + gameRound + ' of ' + totalRounds)
        gameRound--
    } else {
        userScore++
        console.log ('The user has won, because ' + userChoice + ' beats ' + computerChoice + ', with a score of ' + userScore + ' to ' + computerScore);
        console.log ('Round ' + gameRound + ' of ' + totalRounds)
        
    }
}

if (userScore > computerScore) {
    console.log('The user has beaten the computer with a score of ' + userScore + ' to ' + computerScore)
    } else if (computerScore > userScore) {
    console.log('The computer has beaten the user with a score of ' + computerScore + ' to ' + userScore)
    } else {
        console.log('The game is a tie with a score of ' + userScore + ' to ' + computerScore);
    }
