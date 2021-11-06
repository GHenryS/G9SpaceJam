// ------------------ FUNCTION TO PRELOAD GAME BUTTONS ---------------------- //

function mainMenu(){
    // set main menu page
    createCanvas(window.innerWidth, window.innerWidth * canRatio);
    background(0,0,0);
   
    // fade-in variables
    let fadeInCounter           =   2000;

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
    // banner variables
    let redColour;
    let grnColour;
    let bluColour;
    let red;
    let grn;
    let blu;
    let topOfBanner             =   10 * scale;
    let bottomOfBanner          =   topOfBanner + 110 * scale;

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

        redC                    =   1 / scale;
        grnC                    =   2 / scale;
        bluC                    =   3 / scale;
    }

    // draw banner
    for(i = 0 ; i < bannerArray.length; i++){
        stroke(bannerArray[i][0], bannerArray[i][1], bannerArray[i][2],setBright);
        line(i, topOfBanner, i, bottomOfBanner)     
    }
    
    // add a new line to the end of the array and remove the first line from the array
    bLength                     =   bannerArray.length - 1;
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
    bannerArray.push(tempArray);
    bannerArray.shift();
 
    // create background for header
    noStroke();
    fill(0,0,0,180);
    rectMode(CENTER,CENTER);
    rect(winCentreX, 66 * scale, 580 * scale, 90 * scale);
    // add header text
    textAlign(CENTER,CENTER);
    textSize(90 * scale);
    stroke(0,0,0,0);
    fill(255,255,255,setBright);
    text("MAIN MENU", winCentreX, 70 * scale);
    imageMode(CENTER)
    // add stars
    
    if(starArray.length < 50){
        tempArray               =   [];
        xPos                    =   random(10 * scale, window.screen.width - 14 * scale);
        yPos                    =   random(window.screen.width * canRatio * 0.2, window.screen.width * canRatio * 0.8);
        starSize                =   random(10 * scale, 15 * scale);
        starLive                =   random(200, 500);
        tempArray[0]            =   starLive;
        tempArray[1]            =   xPos;
        tempArray[2]            =   yPos;
        tempArray[3]            =   starSize;
    
        starArray.push(tempArray);
    }
 
    // animate stars
    for(i = 0; i < starArray.length; i++){
        starArray[i][3]         =   starArray[i][3] + random( -2, 2);
        // prevents the star from growing to large
        if(starArray[i][3] > 15 * scale){
            starArray[i][3]     =  starArray[i][3] - 1 * scale ;
        }
        // create a sort fade away if the star gets close ti its end of live
        if(starArray[i][0] < 200){
            starArray[i][3] = starArray[i][3] + 0.7 * scale;
        }
        // reduce the star's live
        starArray[i][0]         =   starArray[i][0] - 0.5;
    }
    // sort array to put stars with sortest life first in the que for removal
    for(i = 0; i < starArray.length; i++){
        starArray[i][0]                  =  starArray[i][0] / 1000; 
    }   
    starArray.sort();   
    for(i = 0; i < starArray.length; i++){
        starArray[i][0]                  =  starArray[i][0] * 1000; 
    }
    // remove dead stars from the starArray
    if(starArray[0][0] < 0){
        starArray.shift();
    }
    // apply graphics filters
    star.filter.style = "brightness("+(setBright/255)+"),  ";

    // draw stars
    
    for(i = 0; i < starArray.length; i++){

        

        console.log(star.filter.style);

        image(star, starArray[i][1] * scale, starArray[i][2] * scale, starArray[i][3] * scale, starArray[i][3] * scale);
    }

    // opening scene button
    image(openingButtonImg  , winCentreX, winHeight * openingButtonY   , buttonWidth, buttonHeight);
    if(mouseX > winCentreX - buttonWidth / 2 && mouseX < winCentreX + buttonWidth / 2 && mouseY > winHeight * openingButtonY - buttonHeight / 2 && mouseY < winHeight * openingButtonY + buttonHeight / 2){
        image(openingButtonImg , winCentreX, winHeight * openingButtonY , buttonWidth * hover, buttonHeight * hover);
        if(mouseIsPressed){
            gameState           =   "splash";       // switch the gameState to run 
            fadeInSetting       =   0;
            fadeOutSetting      =   255;
            fadeOut();
            //introScreenSetup()
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
    setBrightness();    
    }
    
    
    fadeIn();
}

