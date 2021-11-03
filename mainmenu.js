// ------------------ FUNCTION TO PRELOAD GAME BUTTONS ---------------------- //

function mainMenu(){
    // function variables
    let scale               =   window.innerWidth / window.screen; // resize to fit window
    let winCentreX          =   window.innerwidth / 2;
    let winHeight           =   window.innerHeight;
    let buttonWidth         =   300;
    let buttonHeight        =   200;
    let hover               =   1.2;
    let settingsButtonY     =   0.2;

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
    rectMode(CENTER,CENTER);
    image(settingsButtonImg, winCentreX, winHeight * settingsButtonY, buttonWidth * scale, buttonHeight * scale);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > settingsButtonY - buttonHeight / 2 && mouseY < settingsButtonY + buttonHeight / 2){
        image(settingsButtonImg, winCentreX, winHeight * settingsButtonY, buttonWidth * scale * hover, buttonHeight * scale * hover);
        gameState           = "settings";       // switch the gameState to run the settings page
    }

    // leaderboard button
    rectMode(CENTER,CENTER);
    image(leaderboardButtonImg , winCentreX, winHeight * settingsButtonY, buttonWidth * scale, buttonHeight * scale);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > settingsButtonY - buttonHeight / 2 && mouseY < settingsButtonY + buttonHeight / 2){
        image(leaderboardButtonImg , winCentreX, winHeight * settingsButtonY, buttonWidth * scale * hover, buttonHeight * scale * hover);
        gameState           = "leaderboard";       // switch the gameState to run the settings page
    }


}