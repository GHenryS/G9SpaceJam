
// ------------------ FUNCTION TO SETUP INTRO SCREEN ---------------------- //

function splashScreen(){
  // All the functions which should be called to run the splash screen
  // The splashScreen() function should be the only function in the setup function for the splash screen
  introScreenSetup();
  introScreen();
  flyInText();
}

// ------------------ FUNCTION TO SETUP INTRO SCREEN ---------------------- //

function introScreenSetup(){
  // setup page
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);
  background(0,0,0);
  // create/clear a temporary array
  theta                 = []; 
  // fill theta array for all spinning things
  for(let i=0 ; i < 360 ; i++){   
    theta[i]            = i;  
  }
}

// ------------------ FUNCTION TO PLAY INTRO SCREEN ---------------------- //
function introScreen(){
  // function specific variables
  let rocketWidth       = width * 0.55;
  let rocketHeight      = height * 0.45;
  // animate rocket  
  for(i=0; i < 1 ; i++){
  let xpos              = rocketWidth * cos(theta[i] + 1.5 * PI) + width * 0.2;
  let ypos              = rocketHeight * sin(theta[i] + 1.5 * PI) + height * 1;
  rocketship            = createSprite(xpos,ypos);
  rocketship.addImage(rocketImage);
  rocketship.rotation   = ((tan(xpos/ypos))*3*PI+90);
  theta[i] += 0.005;
  }
  // draw background image and rocketship
  image(introImage, 0, 0, window.innerWidth - 4, window.innerHeight - 4);
  drawSprite(rocketship);
 }

// ------------------ FUNCTION TO PLAY INTRO SCREEN ---------------------- //
function flyInText(){
  // needs to be completed

}