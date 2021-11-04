/* Contributor = Todd */


// ------------------ FUNCTION TO SETUP INTRO SCREEN ---------------------- //

function splashScreen(){
  // All the functions which should be called to run the splash screen
  // The splashScreen() function should be the only function in the setup function for the splash screen
  introScreenSetup();
  introScreen();
  gameState           = "mainmenu" // go to main menu page 
}



// ------------------ FUNCTION TO PLAY INTRO SCREEN ---------------------- //
function introScreen(){
<<<<<<< HEAD
  // scale to fit the screen
  createCanvas(window.innerWidth, window.innerWidth * canRatio)

  let scale             = window.innerWidth / window.screen.width;
  let width             = window.innerWidth - 4;
  let height            = window.innerHeight - 4;

  // text configuration
  textFont(splashScreenFont);
  textAlign(CENTER);
  textSize(40 * scale);
  strokeWeight(0.5);
  stroke(0,255,0);
  fill(0,255,0);
=======
  textFont(SplashScreenFont);
  textAlign(CENTER);
  textSize(40);
  strokeWeight(0.5);
  stroke(0 , 255 , 0);
  fill(0 , 255 , 0);
>>>>>>> 3916ee88c0553c3ba956204b986dcb378a32ec87
  
  //  This if/else statement scrolls the screen down
  //  To adjust how farthe screen will scorll adjust the if statement 
  //  To adjust the scroll speed adjust the frame count multiplier
<<<<<<< HEAD
  if(frameCount < 680){
    image(introImage, 0,0 - frameCount * 1, 2 * width, 2 * height);
  } else {
    //Once the image has achieved the desired point it will be redrawn
    //at that point
    image(introImage, 0,-680, 2 * width, 2 * height);
=======

  if(frameCount < 680){
      image(IntroImage , 0,0 - frameCount * 1 , 2 * width , 2 * height);
      }else{
  //Once the image has achieved the desired point it will be redrawn
  //at that point
      image(IntroImage , 0 ,0 - 680 , 2 * width , 2 * height);
>>>>>>> 3916ee88c0553c3ba956204b986dcb378a32ec87
  }
  
  // Introduction of Collaborators, note the 10 second
  // intervals in between each text being shown
<<<<<<< HEAD
  if(frameCount<60){                          // 60 FrameCount
      text("Presenting", width / 2,height * 0.2);
  }else if(frameCount > 70 && frameCount < 215){   // 145 FrameCount
      text("A Georges Production", width / 2, height * 0.2);
  }else if(frameCount > 225 && frameCount < 285){  //  60 FrameCount
      text("In Collaboration With", width / 2, height * 0.2);
  }else if(frameCount > 295 && frameCount<450){  // 145 FrameCount
      text("Evans Studios", width / 2, height * 0.2);
  }else if(frameCount > 460 && frameCount < 495){   // 45 FrameCount
      text("and", width / 2, height * 0.2);
  }else if(frameCount > 505 && frameCount < 650){   // 145 Frame Count
      text("Todds Visual Arts ", width / 2, height * 0.2);
  
  //Title            
  }else if(frameCount>655){
      textSize(70);
      strokeWeight(5);
      stroke('red');
      text("Escape From Prison",width/2,height*0.2);
  }
  if(frameCount>720){
      stroke('black');
      fill('yellow');
      text("IN SPACE",width*0.6,height*0.29);
      stroke('yellow');
      line(width*0.45,height*0.31,width*0.75,height*0.31);
  }
  //At thia point the rocketship will come into view from
  //left screen
  if(frameCount>700){
      r               =   width * 1.5    // Size of the radius of the orbit 
      for(i=0; i < 1 ; i++){
          let xpos    = r * cos(theta[i] + 1.4 * PI) + width * 0.4;   // X position of rocketship
          let ypos    = r * sin(theta[i] + 1.4 * PI) + height * 2.5; // Y position of rocketship
=======
  if(frameCount < 60){                          // 60 FrameCount
      text("Presenting" , width / 2 , height * 0.2);
  }else if(frameCount > 70 && frameCount < 215){   // 145 FrameCount
      text("A Georges Production" , width / 2 , height * 0.2);
  }else if(frameCount > 225 && frameCount < 285){  //  60 FrameCount
      text("In Collaboration With" , width / 2 , height * 0.2);
  }else if(frameCount > 295 && frameCount < 450){  // 145 FrameCount
      text("Evans Studios" , width / 2 , height * 0.2);
  }else if(frameCount > 460 && frameCount < 495){   // 45 FrameCount
      text("and", width / 2 , height * 0.2);
  }else if(frameCount > 505 && frameCount < 650){   // 145 Frame Count
      text("Todds Visual Arts " , width / 2 , height * 0.2);
  
  //Title            
  }else if(frameCount > 655){
      textSize(70);
      strokeWeight(5);
      stroke('red');
      text("Escape From Prison" , width / 2 , height * 0.2);
  }
  if(frameCount > 720){
      stroke('black');
      fill('yellow');
      text("IN SPACE" , width * 0.6 , height * 0.29);
      stroke('yellow');
      line(width * 0.45 , height * 0.31 , width * 0.75 , height * 0.31);
  }
  //At thia point the rocketship will come into view from
  //left screen
  if(frameCount > 700){
      r = width * 1.5;   // Size of the radius of the orbit 
      for(i=0 ; i < 1 ; i++){
          let xpos = r * cos(theta[i] + 1.4 * PI) + width * 0.4;   // X position of rocketship
          let ypos = r * sin(theta[i] + 1.4 *PI) + height * 3.5; // Y position of rocketship
>>>>>>> 3916ee88c0553c3ba956204b986dcb378a32ec87
          // X and Y positioning uses a polar coordinate system which can be
          // represented as Xposition = r * cos (theta[i]+a*PI)+width*b
          // and            Yposition = r * sin (theta[i]+a*PI)+height*b
          // The 'a' value will adjust how far around the circle the rocketship will appear
          // The 'b' value will adjust the X and Y position of the center of the rocketships orbit
<<<<<<< HEAD
          rocketship  = createSprite(xpos,ypos);
          rocketship.addImage(rocketImage);
          rocketship.rotation = 80 + ((frameCount - 700) / 55); // This is a ham-fisted attempt to keep the ship level with the planet
          theta[i] += 0.0005;  // This will adjust the speed of the ship 
        }
  drawSprite(rocketship);
  }
  // gameState           = "mainmenu";
=======
          rocketship = createSprite(xpos,ypos);
          rocketship.addImage(RocketImage2);
          rocketship.rotation = 80 + ((frameCount - 700) / 55); // This is a ham-fisted attempt to keep the ship level with the planet
          theta[i] += 0.0005; // This will adjust the speed of the ship 
        }
  drawSprite(rocketship);
  }
>>>>>>> 3916ee88c0553c3ba956204b986dcb378a32ec87
}

