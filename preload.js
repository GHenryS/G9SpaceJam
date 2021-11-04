// ------------------ FUNCTION TO MANAGE ALL PRELOAD FUNCTIONS --------------- //

function preLoadImages(){
  // run all the function which require items to be preloaded
  preLoadButtons();
<<<<<<< HEAD
  preLoadSplashImages();
=======
  // preLoadImages();
>>>>>>> 3916ee88c0553c3ba956204b986dcb378a32ec87
  // preLoadSound();
  // preLoadFonts();

}

// ------------------ FUNCTION TO PRELOAD GAME BUTTONS ---------------------- //

function preLoadButtons(){
  
  mainMenuButtonImg           =   loadImage("buttons/mainmenu.png");
  infoButtonImg               =   loadImage('buttons/information.png');
  leaderboardButtonImg        =   loadImage('buttons/leaderboard.png');
  mainMenuButtonImg           =   loadImage('buttons/menu.png');
  playGameButtonImg           =   loadImage('buttons/playgame.png');
  resetGameButtonImg          =   loadImage('buttons/resetgame.png');
  returnToGameButtonImg       =   loadImage('buttons/returntogame.png');
  settingsButtonImg           =   loadImage('buttons/settings.png');
  openingButtonImg            =   loadImage('buttons/openingscene.png');

}

// ------------------ FUNCTION TO PRELOAD IMAGES    ---------------------- //

function preLoadImages(){

  // -------------- Splash screen images ------------------------------- //
<<<<<<< HEAD
  introImage                  =   loadImage('images/space.png');              // Author : Daniel Stephens , Downloaded From www.OpenGameArt.org
  rocketImage                 =   loadImage('images/cohete.png');             //Author: JM.Atencia, Downloaded From www.OpenGameArt.org
  splashScreenFont            =   loadFont('images/CollegiateBlackFLF.ttf')
=======
  introImage                  =   loadImage('images/space.png');               // Author : Daniel Stephens , Downloaded From www.OpenGameArt.org
  rocketImage                 =   loadImage('images/cohete2.png');             //Author: JM.Atencia, Downloaded From www.OpenGameArt.org
  // -------------- Envelope screen images ------------------------------- //
  note                        =   loadImage('Cartel Nota.png');                // Author: Santoniche , Downloaded from: www.opengameart.org
  prison                      =   loadImage('Walls.png');                      // Author: zisongbr , Downloaded from: www.opengameart.org

>>>>>>> 3916ee88c0553c3ba956204b986dcb378a32ec87
}

// ------------------ FUNCTION TO PRELOAD SOUNDS    ---------------------- //
function preLoadSound(){


}

// ------------------ FUNCTION TO PRELOAD FONTS    ---------------------- //
function preLoadFonts(){
  SplashScreenFont            =   loadFont('images/CollegiateBlackFLF.ttf');   // Author: Casady & Greene , Downloaded from www.fonts.google.com 
  scribble                    =   loadFont('PermanentMarker-Regular.ttf');     // Author: Apache , Downloaded from: www.fonts.google.com

}
