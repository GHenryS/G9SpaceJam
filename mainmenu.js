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
    let buttonHeight        =   75 * scale;
    let hover               =   1.2;
    let openingButtonY      =   0.25;
    let settingsButtonY     =   0.35;
    let leaderButtonY       =   0.45;
    let infoButtonY         =   0.55;
    let resetButtonY        =   0.65;
    let playGameButtonY     =   0.75;
    // banner variables
    let redColour;
    let grnColour;
    let bluColour;
    let red;
    let grn;
    let blu;
    let newRed;
    let topOfBanner         =   window.innerWidth * canRatio * 0.05;
    let bottomOfBanner      =   topOfBanner + 100 * scale;

    // set canvas and background //
    createCanvas(window.innerWidth - 4, window.innerHeight - 4)
    background(0,0,0);
 
    // setup page header
    // header banner
    if(bannerFirstTime == 0 || window.innerWidth != windowSize){
            redColour           =   255;
            grnColour           =   150;
            bluColour           =   50;
            red                 =   1 / scale;
            grn                 =   2 / scale;
            blu                 =   3 / scale;
            let newRed              =   1;
            for(i = 0 ; i < window.innerWidth - 4; i++){
            // keep colour rage between 0and 255
            if(redColour > 254 || redColour < 0){
                red = -red;
            }
            if(grnColour > 254 || grnColour < 0){
                grn = -grn;
            }  
            if(bluColour > 254 || bluColour < 0){
                blu = -blu;
            }  
    
            // step the colours
            redColour           =   redColour + red;
            grnColour           =   grnColour + grn;
            bluColour           =   bluColour + blu;
            // clear the tempArray
            tempArray           =   [];
            // add colours to tempArray 
            tempArray.push(redColour);
            tempArray.push(grnColour);
            tempArray.push(bluColour);
             // add tempArray content to the banner array
            bannerArray.push(tempArray);
        }
        
        // set variable so to prevent the banner creation loop from running again
        bannerFirstTime         =   1;
        // variable to check the window size have changed
        // if the window size have changed the array will be re-created
        windowSize              =   window.innerWidth;  
       // console.log(bannerArray); 
        redC                    =   1 / scale;
        grnC                    =   2 / scale;
        bluC                    =   3 / scale;
    }

    // draw banner
    for(i = 0 ; i < bannerArray.length; i++){
        stroke(bannerArray[i][0], bannerArray[i][1], bannerArray[i][2]);
        line(i, topOfBanner, i, bottomOfBanner)     
    }
    
    //console.log(red)
    bLength                 =   bannerArray.length - 1;
    console.log(bLength)
    console.log(bannerArray[bLength])
    console.log(bannerArray)
    
    tempArray                   =   [];
    if(bannerArray[bLength][0] + redC > 255 || bannerArray[bLength][0] + redC < 0 ){
        redC    = -redC; 
    }
    if(bannerArray[bLength][1] + grnC > 255 || bannerArray[bLength][1] + grnC < 0 ){
        grnC    = -grnC; 
    }
    if(bannerArray[bLength][2] + bluC > 255 || bannerArray[bLength][2] + bluC < 0 ){
        bluC    = -bluC; 
    }

    tempArray[0]                =   bannerArray[bLength][0] + redC;
    tempArray[1]                =   bannerArray[bLength][1] + grnC;
    tempArray[2]                =   bannerArray[bLength][2] + bluC;
    console.log(tempArray)  
      
    bannerArray.push(tempArray);
    bannerArray.shift();
    //bannerArray[0][0] = 20;
    //console.log(bannerArray[0])
    //console.log(redColour)  
 
    noStroke();
    fill(0,0,0);
    rectMode(CENTER);
    square(winCentreX, winHeight * 0.11, 600 * scale, 5 * scale);


    textAlign(CENTER,CENTER);
    textSize(90 * scale);
    stroke(0,0,0,0);
    fill(200,200,200);
    text("MAIN MENU", winCentreX, winHeight * 0.1);
    imageMode(CENTER)

    // opening scene button
    image(openingButtonImg  , winCentreX, winHeight * openingButtonY   , buttonWidth, buttonHeight);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * openingButtonY - buttonHeight / 2 && mouseY < winHeight * openingButtonY + buttonHeight / 2){
        image(openingButtonImg , winCentreX, winHeight * openingButtonY , buttonWidth * hover, buttonHeight * hover);
        if(mouseIsPressed){
            gameState           = "splash";       // switch the gameState to run the settings page
        }
    }
 
    // settings button
    
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
            gameState           = "playgame";       // switch the gameState to run the settings page
        }
    }


}