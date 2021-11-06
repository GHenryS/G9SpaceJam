// ----------FUNCTION TO CREATE A FADE IN EFFECT ---------------------------//

function fadeIn(){
    // function variables
    xPos                    =   window.innerWidth / 2;
    yPos                    =   window.innerWidth * canRatio / 2; 
    rectWidth               =   window.innerWidth;
    rectHeight              =   window.innerWidth * canRatio;
    // create fadeIn effect
    if(fadeInSetting > 0 && fadeInSetting < 256){
        fill(0,0,0, fadeInSetting);
        rect(xPos, yPos, rectWidth, rectHeight);
        fadeInSetting--;
    }
}

// ----------FUNCTION TO CREATE A FADE IN EFFECT ---------------------------//

function fadeOut(){
    // function variables
    xPos                    =   window.innerWidth / 2;
    yPos                    =   window.innerWidth * canRatio / 2; 
    rectWidth               =   window.innerWidth;
    rectHeight              =   window.innerWidth * canRatio;
    // create fadeIn effect
    while(fadeInSetting < 255){
        if(fadeOutSetting < 256 && fadeOutSetting > 0){
            fill(0,0,0, fadeInSetting);
            rect(xPos, yPos, rectWidth, rectHeight);
            fadeInSetting++;
        }
    }
}

// ----------FUNCTION TO CREATE A CHANGING COLOUR BANNER AT THE TOP OF THE PAGE ----------------------//

function colourBanner(){
    // banner variables
    let redColour;
    let grnColour;
    let bluColour;
    let red;
    let grn;
    let blu;
    let topOfBanner             =   10 * scale;
    let bottomOfBanner          =   topOfBanner + 110 * scale;
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
}

function newWindow(){
    if(keyIsPressed){
        gameState           =   "mainmenu" // go to main menu page
    }
}


// ----------FUNCTION TO CREATE THE CANVAS AND TO MANAGE THE WINDOW SCALE    VARIABLE ----------------------//

function setPage(){
    let scale                   =   window.innerWidth / window.screen.width ; // resize to fit window
    // create canvas and set background
    createCanvas(window.innerWidth, window.innerWidth * canRatio);
    background(0,0,0);
}