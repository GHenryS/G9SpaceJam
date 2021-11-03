// ------------------ FUNCTION TO PRELOAD GAME BUTTONS ---------------------- //

function mainMenu(){
    // set main menu page
    createCanvas(window.innerWidth - 4, window.innerHeight - 4);
    background(0,0,0);

    // function variables
    let scale               =   window.innerWidth / window.screen; // resize to fit window
    let winCentreX          =   window.innerwidth / 2;
    let winHeight           =   window.innerHeight;
    let buttonWidth         =   300;
    let buttonHeight        =   200;
    let hover               =   1.2;
    let settingsButtonY     =   0.2;
    let leaderButtonY       =   0.3;
    let infoButtonY         =   0.4;
    let resetButtonY        =   0.6;
    let playGameButtonY     =   0.8;

    // set canvas and background //
    createCanvas(window.innerWidth - 4, window.innerHeight - 4)
    background(0,0,0);

    // setup page header
    textAlign(CENTER);
    textSize(30 * scale);
    stroke(255,255,255);
    fill(255,255,255);
    text("MAIN MENU", winCentreX, winHeight * 0.1);

    // settings button
    rectMode(CENTER);
    image(settingsButtonImg, winCentreX, winHeight * settingsButtonY, buttonWidth * scale, buttonHeight * scale);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > settingsButtonY - buttonHeight / 2 && mouseY < settingsButtonY + buttonHeight / 2){
        image(settingsButtonImg, winCentreX, winHeight * settingsButtonY, buttonWidth * scale * hover, buttonHeight * scale * hover);
        gameState           = "settings";       // switch the gameState to run the settings page
    }

    // leaderboard button
    image(leaderboardButtonImg , winCentreX, winHeight * leaderButtonY, buttonWidth * scale, buttonHeight * scale);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > leaderButtonY - buttonHeight / 2 && mouseY < leaderButtonY + buttonHeight / 2){
        image(leaderboardButtonImg , winCentreX, winHeight * leaderButtonY, buttonWidth * scale * hover, buttonHeight * scale * hover);
        gameState           = "leaderboard";       // switch the gameState to run the settings page
    }

    // information button
    image(infoButtonImg  , winCentreX, winHeight * infoButtonY , buttonWidth * scale, buttonHeight * scale);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > infoButtonY  - buttonHeight / 2 && mouseY < infoButtonY  + buttonHeight / 2){
        image(infoButtonImg  , winCentreX, winHeight * infoButtonY , buttonWidth * scale * hover, buttonHeight * scale * hover);
        gameState           = "information";       // switch the gameState to run the settings page
    }

    // reset button
    image(resetGameButtonImg  , winCentreX, winHeight * resetButtonY  , buttonWidth * scale, buttonHeight * scale);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > resetButtonY   - buttonHeight / 2 && mouseY < resetButtonY   + buttonHeight / 2){
        image(resetGameButtonImg   , winCentreX, winHeight * resetButtonY , buttonWidth * scale * hover, buttonHeight * scale * hover);
        gameState           = "resetgame";       // switch the gameState to run the settings page
    }

    // NEEDS A CONDITION TO DETERMINE IF THE PLAY BUTTON OR RETURN TO GAME BUTTON SHOULD SHOW
    // RETURN TO GAME BUTTON NEEDS TO OBTAIN THE LAST GAME STATE INFO AND SHOULD THEN RETURN TO THE LAST GAME STATE PAGE
    // reset button
    image(playGameButtonImg   , winCentreX, winHeight * playGameButtonY  , buttonWidth * scale, buttonHeight * scale);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > playGameButtonY  - buttonHeight / 2 && mouseY < playGameButtonY  + buttonHeight / 2){
        image(playGameButtonImg   , winCentreX, winHeight * playGameButtonY , buttonWidth * scale * hover, buttonHeight * scale * hover);
        gameState           = "resetgame";       // switch the gameState to run the settings page
    }


}