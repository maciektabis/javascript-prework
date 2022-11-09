let playerScore = 0;
let computerScore = 0;

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
    if(argMoveId == 2){
        return 'papier';
      }
    if(argMoveId == 3){
        return 'nożyce';
      }
}

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    playerScore++;
    }
    if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Przegrywasz!');
    computerScore++;
    }
    if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis');
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis ');
     }
    if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz! ');
    computerScore++;
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz! ');
    playerScore++;
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis ');
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrywasz! ');
    computerScore++;
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz! ');
    playerScore++;
    }
}

function playGame(playerInput) {
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to:' + randomNumber);
    let computerMove = getMoveName(randomNumber); //1 -> 'papier'
    printMessage('Mój ruch to: ' + computerMove);
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove)

    displayResult(computerMove, playerMove);

    printMessage("Gracz: " + playerScore + " Computer: " + computerScore)
}

let btnRock = document.getElementById('btn-rock');
btnRock.addEventListener('click', function() { playGame(1) });
let btnPaper = document.getElementById('btn-paper');
btnPaper.addEventListener('click', function() { playGame(2) });
let btnScissors = document.getElementById('btn-scissors');
btnScissors.addEventListener('click', function() { playGame(3) });