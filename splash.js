/* Contributor = Todd */
// Does this work?
// ------------------ FUNCTION TO SETUP INTRO SCREEN ---------------------- //

function splashScreen(){
  // All the functions which should be called to run the splash screen
  // The splashScreen() function should be the only function in the setup function for the splash screen
  introScreen();
   
}

// ------------------ FUNCTION TO PLAY INTRO SCREEN ---------------------- //
function introScreen(){
 
    createCanvas(window.innerWidth - 4, window.innerWidth * canRatio);
    // scalling factor fit to window
    let windowScale           =   window.innerWidth / window.screen.width;

    textFont(SplashScreenFont)
    textAlign(CENTER)
    textSize(40 * windowScale)
    strokeWeight(0.5)
    stroke(0,255,0)
    fill(0,255,0)
     
    //  This if/else statement scrolls the screen down
    //  To adjust how farthe screen will scor ll adjust the if statement 
    //  To adjust the scroll speed adjust the frame count multiplier
    introImage.resize(window.innerWidth, 800 * windowScale)
    if(frameCount < 680){
        image(introImage , 0 , 0 - frameCount * 1 * windowScale, 2 * width, 2 * height)
        }else{
    //Once the image has achieved the desired point it will be redrawn
    //at that point
        image(introImage , 0 , 0 - 680 * windowScale, 2 * width, 2 * height)
    }
    
    // Introduction of Collaborators, note the 10 second
    // intervals in between each text being shown
    if(frameCount < 60){                          // 60 FrameCount
        text("Presenting" , width / 2 , height * 0.2)
    }else if(frameCount > 70 && frameCount < 215){   // 145 FrameCount
        text("A Georges Production" , width / 2 , height * 0.2)
    }else if(frameCount > 225 && frameCount < 285){  //  60 FrameCount
        text("In Collaboration With" , width / 2 , height * 0.2)
    }else if(frameCount > 295 && frameCount < 450){  // 145 FrameCount
        text("Evans Studios" , width / 2 , height * 0.2 )
    }else if(frameCount > 460 && frameCount < 495){   // 45 FrameCount
        text("and" , width / 2 , height * 0.2)
    }else if(frameCount > 505 && frameCount < 650){   // 145 Frame Count
        text("Todds Visual Arts " , width / 2, height * 0.2)
    
    //Title            
    }else if(frameCount > 655){
        textSize(70 * windowScale)
        strokeWeight(5 * windowScale)
        stroke('red')
        text("Escape From Prison" , width / 2 , width * canRatio * 0.2)
    }
    if(frameCount > 720){
        stroke('black')
        fill('yellow')
        text("IN SPACE" , width * 0.6, width * canRatio * 0.29)
        stroke('yellow')
        line(width * 0.45, width * canRatio * 0.31, width * 0.75, width * canRatio * 0.31)
    }
    //At thia point the rocketship will come into view from
    //left screen
    rocketStartFrame            =   600;
    if(frameCount > rocketStartFrame){
        // radius  = width * 2.5 * windowScale   // Size of the radius of the orbit 
        
        startX              =   window.innerWidth / 2;
        startXDist          =   window.innerWidth * 1.9;
        startY              =   window.innerWidth * canRatio * 0.9;
        yStartDist          =   startY + 0.3 * window.innerWidth * canRatio;   
        radius              =   sqrt(pow(startXDist,2) + pow(yStartDist,2));
        curveCorrection     =   0.1;
        if(frameCount > rocketStartFrame && frameCount < rocketStartFrame + 5){
            radians         =   PI + atan(yStartDist / startXDist);
        }
        thetaChange         =   0.002;
        // calculate the rockets position
        radians = radians + thetaChange;
        let xpos = startX + radius * windowScale * cos(radians)  // X position of rocketship
        let ypos = startY + curveCorrection * radius * sin(radians) // Y position of rocketship
                    
        rocketship          =   createSprite(xpos , ypos );
        rocketImage.resize(150 * windowScale, 300 * windowScale)
        rocketship.addImage(rocketImage)
        rocketship.rotation = 75 + (60 * (xpos * windowScale) / window.innerWidth ) // This is a ham-fisted attempt to keep the ship level with the planet
        drawSprite(rocketship);
    } 
}

function completeSplash(){
    splashCount--;

    rectMode(CENTER,CENTER);
    xPos                    =   window.innerWidth / 2;
    yPos                    =   window.innerWidth  * canRatio / 2;
    opagueChange            =   255/fadeOutSetting;
    rectMode(CENTER,CENTER);
    // create a fadeout effect to softern the transition from splash to mainmenu
    if(splashCount < fadeOutSetting){
        stroke(0,0,0);
        fill(0,0,0,opagueValue)
        rect(xPos, yPos, window.innerWidth, window.innerWidth * canRatio);   
        opagueValue         =   opagueValue + opagueChange;
    }
    // change the gameStae to mainmenu
    if(splashCount < 1){
        
    }
    if(keyIsPressed){
        
        newWindow();
        gameState           = "mainmenu" // go to main menu page
    }
}

