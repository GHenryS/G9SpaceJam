// ------------------ FUNCTION TO SET GAMESTATE ---------------------- //
function setGameState(){
    if( gameState == "splash"){
        mainMenu();             //  switch to splash page
    }
    if( gameState == "leaderboard"){
        leaderBoard();          //  switch to leaderboard page
    }  
    if( gameState == "information"){
        information();          //  switch to information page
    }  
    if( gameState == "resetgame"){
        resetGame();            //  switch to resetGame page
    }
    if( gameState == "playgame"){
        playGame();             //  switch to first game page
    }     
}

// ------------------ FUNCTION TO RUN SPLASH SCREEN ---------------------- //
function splash(){
    
    introScreenSetup()
    introScreen();
}