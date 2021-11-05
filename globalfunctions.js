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