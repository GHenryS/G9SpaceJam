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

// ----------FUNCTION TO CONTROL THE SCREEN BRIGHTNESS ----------------------//

function setBrightness(){


    
}

function newWindow(){
    if(keyIsPressed){
        
        ww                  =   window.screen.width;
        wh                  =   ww * canRatio;
        //myWindow = window.open('http://127.0.0.1:5500/index.html','_blank', "width=1200, height=570, menubar=no, resizable = no, scrollbars = no", '') 
        gameState           =   "mainmenu" // go to main menu page
    }
}
