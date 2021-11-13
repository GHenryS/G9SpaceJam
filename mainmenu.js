// ------------------ FUNCTION TO PRELOAD GAME BUTTONS ---------------------- //

function mainMenu(){
    // set main menu page
    createCanvas(window.innerWidth, window.innerWidth * canRatio);
    background(0,0,0);
   
    // function variables
    let scale                   =   window.innerWidth / window.screen.width ; // resize to fit window
    let winCentreX              =   window.innerWidth / 2;
    let winHeight               =   window.innerWidth * canRatio;
    let buttonWidth             =   400 * scale;
    let buttonHeight            =   60 * scale;
    let hover                   =   1.15;
    let openingButtonY          =   0.25;
    let settingsButtonY         =   0.35;
    let leaderButtonY           =   0.45;
    let infoButtonY             =   0.55;
    let resetButtonY            =   0.65;
    let playGameButtonY         =   0.75;

    // add stars to the background
    addStars(95, 0, 0 , 1, 1);
    // draw the top banner
    colourBannerTop.drawBanner();
    // make the top banner colours float
    colourBannerTop.floatColours();
    // add header text
    pageHeader("MAIN MENU", 580, 90);
    
    // draw the bottom banner
    colourBannerBottom.drawBanner();
    // make the bottom banner colours float
    colourBannerBottom.floatColours();


/*
    function gameButton(img, xPos, yPos, buttonWidth, buttonHeight, hoverSize, goToGameState )
      // opening scene button
      image(openingButtonImg  , winCentreX, winHeight * openingButtonY   , buttonWidth, buttonHeight);
      if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * openingButtonY - buttonHeight / 2 && mouseY < winHeight * openingButtonY + buttonHeight / 2){
          image(openingButtonImg , winCentreX, winHeight * openingButtonY , buttonWidth * hover, buttonHeight * hover);
          if(mouseIsPressed){
              gameState           =   "splash";       // switch the gameState to run 
              splashCount         =   1300;
          }
      }  
    
    */
    
    
    
    // opening scene button
    image(openingButtonImg  , winCentreX, winHeight * openingButtonY   , buttonWidth, buttonHeight);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * openingButtonY - buttonHeight / 2 && mouseY < winHeight * openingButtonY + buttonHeight / 2){
        image(openingButtonImg , winCentreX, winHeight * openingButtonY , buttonWidth * hover, buttonHeight * hover);
        if(mouseIsPressed){
            gameState           =   "splash";       // switch the gameState to run 
            splashCount         =   1300;
            frameCount          =   0;
        }
    }
 
    // settings button
    
    image(settingsButtonImg, winCentreX, winHeight * settingsButtonY, buttonWidth, buttonHeight);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * settingsButtonY - buttonHeight / 2 && mouseY < winHeight * settingsButtonY + buttonHeight / 2){
        image(settingsButtonImg, winCentreX, winHeight * settingsButtonY, buttonWidth * hover, buttonHeight * hover);
        if(mouseIsPressed){
            gameState           = "settings";       // switch the gameState to run the settings page
            fadeInCounter       =   0;
        }   
    }

    // leaderboard button
    image(leaderboardButtonImg , winCentreX, winHeight * leaderButtonY, buttonWidth, buttonHeight);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * leaderButtonY - buttonHeight / 2 && mouseY < winHeight * leaderButtonY + buttonHeight / 2){
        image(leaderboardButtonImg , winCentreX, winHeight * leaderButtonY, buttonWidth * hover, buttonHeight * hover);
        if(mouseIsPressed){
            gameState           = "leaderboard";       // switch the gameState to run the settings page
            fadeInCounter       =   0;
        }
    }

    // information button
    image(infoButtonImg  , winCentreX, winHeight * infoButtonY , buttonWidth, buttonHeight);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * infoButtonY  - buttonHeight / 2 && mouseY < winHeight * infoButtonY  + buttonHeight / 2){
        image(infoButtonImg  , winCentreX, winHeight * infoButtonY , buttonWidth * hover, buttonHeight * hover);
        if(mouseIsPressed){
            gameState           = "information";       // switch the gameState to run the settings page
            fadeInCounter       =   0;
        }
    }

    // reset button
    image(resetGameButtonImg  , winCentreX, winHeight * resetButtonY  , buttonWidth, buttonHeight);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * resetButtonY   - buttonHeight / 2 && mouseY < winHeight * resetButtonY   + buttonHeight / 2){
        image(resetGameButtonImg   , winCentreX, winHeight * resetButtonY , buttonWidth * hover, buttonHeight * hover);
        if(mouseIsPressed){
            gameState           = "resetgame";       // switch the gameState to run the settings page
            fadeInCounter       =   0;
        }
    }

    // NEEDS A CONDITION TO DETERMINE IF THE PLAY BUTTON OR RETURN TO GAME BUTTON SHOULD SHOW
    // RETURN TO GAME BUTTON NEEDS TO OBTAIN THE LAST GAME STATE INFO AND SHOULD THEN RETURN TO THE LAST GAME STATE PAGE
    // reset button
    image(playGameButtonImg   , winCentreX, winHeight * playGameButtonY  , buttonWidth, buttonHeight);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * playGameButtonY  - buttonHeight / 2 && mouseY < winHeight * playGameButtonY  + buttonHeight / 2){
        image(playGameButtonImg   , winCentreX, winHeight * playGameButtonY , buttonWidth * hover, buttonHeight * hover);
        if(mouseIsPressed){
            gameState           =   "playgame";       // switch the gameState to run the settings page
            fadeInCounter       =   0;
            fadeInSetting       =   0;
        }  
    }
      
    fadeIn();
    //imageSettings();
}


