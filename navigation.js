// ------------------ FUNCTION TO SET GAMESTATE ---------------------- //
function setGameState(){
    
    if( gameState == "splash"){
        splashScreen();                   //  switch to splash page
    }
    if( gameState == "mainmenu"){
        mainMenu();                 //  switch to splash page
    }
    if( gameState == "settings"){
        gameSettings();                 //  switch to leaderboard page
    }    
    if( gameState == "leaderboard"){
        leaderBoard();              //  switch to leaderboard page
    }  
    if( gameState == "information"){
        information();              //  switch to information page
    }  
    if( gameState == "resetgame"){
        // resetGame();             //  switch to resetGame page
    }
    if( gameState == "playgame"){
        playGame();                 //  switch to first game page
    }     
}




