// ------------------ FUNCTION TO SET GAMESTATE ---------------------- //
function setGameState(){
    
    if( gameState == "splash"){
        splash();                   //  switch to splash page
    }
    if( gameState == "mainmenu"){
        mainMenu();                 //  switch to splash page
    }
    if( gameState == "settings"){
        settings();                 //  switch to leaderboard page
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

// ------------------ FUNCTION TO RUN ALL GAME SETUPS -------------------- //
function runSetupFunctions(){
    introScreenSetup();
}


// ------------------ FUNCTION TO RUN SPLASH SCREEN ---------------------- //
function splash(){
    
    introScreen();
}