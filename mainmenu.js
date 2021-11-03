// ------------------ FUNCTION TO PRELOAD GAME BUTTONS ---------------------- //

function mainMenu(){
    // set main menu page
    createCanvas(window.innerWidth - 4, window.innerHeight - 4);
    background(0,0,0);

    // function variables
    let scale               =   window.innerWidth / window.screen.width ; // resize to fit window
    let winCentreX          =   window.innerWidth / 2;
    let winHeight           =   window.innerWidth * canRatio;
    let buttonWidth         =   400 * scale;
    let buttonHeight        =   80 * scale;
    let hover               =   1.2;
    let settingsButtonY     =   0.25;
    let leaderButtonY       =   0.40;
    let infoButtonY         =   0.55;
    let resetButtonY        =   0.70;
    let playGameButtonY     =   0.85;


    // set canvas and background //
    createCanvas(window.innerWidth - 4, window.innerHeight - 4)
    background(0,0,0);
 
    // setup page header
    textAlign(CENTER,CENTER);
    textSize(50 * scale);
    stroke(255,255,255);
    fill(255,255,255);
    text("MAIN MENU", winCentreX, winHeight * 0.1);
 
    // settings button
    imageMode(CENTER)
    image(settingsButtonImg, winCentreX, winHeight * settingsButtonY, buttonWidth, buttonHeight);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * settingsButtonY - buttonHeight / 2 && mouseY < winHeight * settingsButtonY + buttonHeight / 2){
        image(settingsButtonImg, winCentreX, winHeight * settingsButtonY, buttonWidth * hover, buttonHeight * hover);
        if(mouseIsPressed){
            gameState           = "settings";       // switch the gameState to run the settings page
        }   
    }

    // leaderboard button
    image(leaderboardButtonImg , winCentreX, winHeight * leaderButtonY, buttonWidth, buttonHeight);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * leaderButtonY - buttonHeight / 2 && mouseY < winHeight * leaderButtonY + buttonHeight / 2){
        image(leaderboardButtonImg , winCentreX, winHeight * leaderButtonY, buttonWidth * hover, buttonHeight * hover);
        if(mouseIsPressed){
            gameState           = "leaderboard";       // switch the gameState to run the settings page
        }
    }

    // information button
    image(infoButtonImg  , winCentreX, winHeight * infoButtonY , buttonWidth, buttonHeight);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * infoButtonY  - buttonHeight / 2 && mouseY < winHeight * infoButtonY  + buttonHeight / 2){
        image(infoButtonImg  , winCentreX, winHeight * infoButtonY , buttonWidth * hover, buttonHeight * hover);
        if(mouseIsPressed){
            gameState           = "information";       // switch the gameState to run the settings page
        }
    }

    // reset button
    image(resetGameButtonImg  , winCentreX, winHeight * resetButtonY  , buttonWidth, buttonHeight);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * resetButtonY   - buttonHeight / 2 && mouseY < winHeight * resetButtonY   + buttonHeight / 2){
        image(resetGameButtonImg   , winCentreX, winHeight * resetButtonY , buttonWidth * hover, buttonHeight * hover);
        if(mouseIsPressed){
            gameState           = "resetgame";       // switch the gameState to run the settings page
        }
    }

    // NEEDS A CONDITION TO DETERMINE IF THE PLAY BUTTON OR RETURN TO GAME BUTTON SHOULD SHOW
    // RETURN TO GAME BUTTON NEEDS TO OBTAIN THE LAST GAME STATE INFO AND SHOULD THEN RETURN TO THE LAST GAME STATE PAGE
    // reset button
    image(playGameButtonImg   , winCentreX, winHeight * playGameButtonY  , buttonWidth, buttonHeight);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * playGameButtonY  - buttonHeight / 2 && mouseY < winHeight * playGameButtonY  + buttonHeight / 2){
        image(playGameButtonImg   , winCentreX, winHeight * playGameButtonY , buttonWidth * hover, buttonHeight * hover);
        if(mouseIsPressed){
            gameState           = "resetgame";       // switch the gameState to run the settings page
        }
    }
}