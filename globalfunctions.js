// ------------------ FUNCTION TO RUN ALL GAME SETUPS -------------------- //
function runSetupFunctions(){
    // new class objects
    colourBannerBottom          =   new ColourBanner(880, -10); 
    colourBannerTop             =   new ColourBanner(10,120);
    hero                        =   new HumanObject(420, 2080, 2)
    // Map Setup
    setupMap();
    hero.moveXrate = 20

    // Enemey Setup
    ghostSetup()
    robotSetup()
    ghost1                      = new GhostObject(1800, 4500 , 1500 , 2000 )

}

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
 
    count                   =   0;
    maxCount                =   100000;
    step                    =   255 / maxCount;
    setting                 =   0;
    frameCount              =   0;
    rectMode(CORNER);

    for(i = 0 ; i < maxCount; i++){
        console.log(frameCount);
        stroke(255,255,255)
        text(frameCount, 100, 200)
    } 
}

// ----------FUNCTION TO CREATE THE CANVAS AND TO MANAGE THE WINDOW SCALE VARIABLE ---------------//

function setPage(){
    scale                   =   window.innerWidth / window.screen.width ; // resize to fit window
    // create canvas and set background
    createCanvas(window.innerWidth, window.innerWidth * canRatio);
 
}

// ----------FUNCTION TO APPLY ATTRIBUTES TO IMAGES -----------------------------------------//
function imageSettings(){
    imgSet              =   "brightness("+(setBright/255)+"), contrast("+(setContrast/255)+"), opacity ("+(setOpacity/255)+"), saturation ("+(setSaturation/255)+")";
    star.filter.style   =   imgSet;
    
}
// ----------FUNCTION TO ADD HEADER TEXT TO A PAGE -----------------------------------------//
function pageHeader(headertext, width, height){
        
    headText                =   headertext;
    headerWidth             =   width;
    headerHeight            =   height;

    winCentreX              =   window.innerWidth /2;
    
    // create background for header
    noStroke();
    fill(0,0,0,180);
    rectMode(CENTER,CENTER);
    rect(winCentreX, 66 * scale, headerWidth * scale, headerHeight * scale);
    // add header text
    textAlign(CENTER,CENTER);
    textSize(90 * scale);
    stroke(0,0,0,0);
    fill(255,255,255,setBright);
    text(headertext, winCentreX, headerHeight * 0.8 * scale);
    imageMode(CENTER)
}

// ----------FUNCTION TO ADD STARS TO BACKGROUND -----------------------------------------//
// add the number of stars and set the container boundaries
//number of starts, left Boundary (0-1), topBoundary (0-1), rightBoundary(0-1), bottomBoundary(0-1))
function addStars(stars, leftBoundary, topBoundary, rightBoundary, bottomBoundary){
    //inputs
    starNumber                  =   stars;
    fromLeft                    =   leftBoundary;
    fromTop                     =   topBoundary;
    fromRight                   =   rightBoundary;
    fromBottom                  =   bottomBoundary;
    // scale to fit window
    scale                       =   window.innerWidth / window.screen.width;
    // add stars
    if(starArray.length < starNumber){
        tempArray               =   [];
        xPos                    =   random(fromLeft * window.innerWidth, fromRight * window.innerWidth);
        yPos                    =   random(fromTop * window.innerWidth * canRatio, window.innerWidth * canRatio * 0.8);
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
        if(starArray[i][3] > 20 * scale){
            starArray[i][3]     =  starArray[i][3] - 1 * scale ;
        }
        // create a fade away if the star gets close to its end of live
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
    // move stars
    for(i = 0; i < starArray.length; i++){
        starArray[i][2] = starArray[i][2] + 0.05;
    }
    // draw stars   
    for(i = 0; i < starArray.length; i++){
    image(star, starArray[i][1] * scale, starArray[i][2] * scale, starArray[i][3] * scale, starArray[i][3] * scale);
    }
}