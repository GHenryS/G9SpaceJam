// ------------------ FUNCTION TO PRELOAD GAME BUTTONS ---------------------- //

function gameSettings(){

    setPage();          // see globalfunctions.js for detail  
    colourBanner();     // see globalfunctions.js for detail
    ll
    settingsPsge();
}

function settingsPsge(){
    fadeIn();
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
    text("GAME SETTINGS", winCentreX, 70 * scale);
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
        image(star, starArray[i][1] * scale, starArray[i][2] * scale, starArray[i][3] * scale, starArray[i][3] * scale);
    }

    fadeIn();
}