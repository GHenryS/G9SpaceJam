// ------------------ FUNCTION TO MANAGE ALL PRELOAD FUNCTIONS --------------- //

function preLoadImages(){

  preLoadButtons();
  // preLoadImages();
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

}
//
// ------------------ FUNCTION TO PRELOAD IMAGES    ---------------------- //

function preLoadImages(){

  // -------------- Splash screen images ------------------------------- //
  introImage                  =   loadImage('images/space.png');               // Author : Daniel Stephens , Downloaded From www.OpenGameArt.org
  rocketImage                 =   loadImage('images/cohete2.png');             //Author: JM.Atencia, Downloaded From www.OpenGameArt.org
  // -------------- Envelope screen images ------------------------------- //
  note                        =   loadImage('Cartel Nota.png');                // Author: Santoniche , Downloaded from: www.opengameart.org
  prison                      =   loadImage('Walls.png');                      // Author: zisongbr , Downloaded from: www.opengameart.org

}

// ------------------ FUNCTION TO PRELOAD SOUNDS    ---------------------- //
function preLoadSound(){


}

// ------------------ FUNCTION TO PRELOAD FONTS    ---------------------- //
function preLoadFonts(){
  SplashScreenFont            =   loadFont('images/CollegiateBlackFLF.ttf');   // Author: Casady & Greene , Downloaded from www.fonts.google.com 
  scribble                    =   loadFont('PermanentMarker-Regular.ttf');     // Author: Apache , Downloaded from: www.fonts.google.com

}
