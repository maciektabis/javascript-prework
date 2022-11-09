function playGame = function(playerInput){
    clearMessages(); 
   function printMessage(msg){
        let div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }

    function clearMessages(){
        document.getElementById('messages').innerHTML = '';
    }


    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to:' + randomNumber);

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
    let computerMove = getMoveName(randomNumber);
    /*
    if(randomNumber == 1){
        computerMove = 'kamień';
    }
    if(randomNumber == 2){
        computerMove = 'papier';
    }
    if(randomNumber == 3){
        computerMove = 'nożyce';
    }
    */
    printMessage('Mój ruch to: ' + computerMove);

    /*
    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')
    */
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    /*
    if(playerInput == '1'){
        playerMove = 'kamień';
    }
    if(playerInput == '2'){
        playerMove = 'papier';
    }
    if(playerInput == '3'){
        playerMove = 'nożyce';
    }
    */
    printMessage('Twój ruch to: ' + playerMove)

    function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
        }
        if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrywasz!');
        }
        if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis');
        }
        if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
        printMessage('Losowanie nieważne ');
        }
        if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis ');
        }
        if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Przegrywasz! ');
        }
        if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz! ');
        }
        if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
        printMessage('Losowanie nieważne ');
        }
        if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis ');
        }
        if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Przegrywasz! ');
        }
        if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz! ');
        }
        if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
        printMessage('Losowanie nieważne ');
        }
    }
}
document.getElementById('kamień').addEventListener('click', function(){
    playGame(1);
    });
document.getElementById('papier').addEventListener('click', function(){
    playGame(2);
  });
document.getElementById('nożyce').addEventListener('click', function(){
    playGame(3);
  });