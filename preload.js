// ------------------ FUNCTION TO MANAGE ALL PRELOAD FUNCTIONS --------------- //

function preLoadAllImages(){

  
  // run all the function which require items to be preloaded
  preLoadButtons();
  
  preLoadImages();
  // preLoadSound();
  preLoadFonts();

}

// ------------------ FUNCTION TO PRELOAD GAME BUTTONS ---------------------- //

function preLoadButtons(){
  
  mainMenuButtonImg           =   loadImage('buttons/mainmenu.png');
  infoButtonImg               =   loadImage('buttons/information.png');
  leaderboardButtonImg        =   loadImage('buttons/leaderboard.png');
  mainMenuButtonImg           =   loadImage('buttons/menu.png');
  playGameButtonImg           =   loadImage('buttons/playgame.png');
  resetGameButtonImg          =   loadImage('buttons/resetgame.png');
  returnToGameButtonImg       =   loadImage('buttons/returntogame.png');
  settingsButtonImg           =   loadImage('buttons/settings.png');
  openingButtonImg            =   loadImage('buttons/openingscene.png');
  openingButtonImg            =   loadImage('buttons/openingscene.png');
}

// ------------------ FUNCTION TO PRELOAD IMAGES    ---------------------- //

function preLoadImages(){

  // -------------- Splash screen images ------------------------------- //
  introImage                  =   loadImage('images/space.png');              // Author : Daniel Stephens , Downloaded From www.OpenGameArt.org
  rocketImage                 =   loadImage('images/cohete.png');             //Author: JM.Atencia, Downloaded From www.OpenGameArt.org
  
  // -------------- Envelope screen images ------------------------------ //
  note                        =   loadImage('images/Cartel Nota.png');        // Author: Santoniche , Downloaded from: www.opengameart.org
  prison                      =   loadImage('images/Walls.png');              // Author: zisongbr , Downloaded from: www.opengameart.org

  // -------------- Menu page --------------------------------------------//
  star                        =   loadImage('images/star.png'); 
}

// ------------------ FUNCTION TO PRELOAD SOUNDS    ---------------------- //
function preLoadSound(){


}

// ------------------ FUNCTION TO PRELOAD FONTS    ---------------------- //
function preLoadFonts(){
  SplashScreenFont            =   loadFont('fonts/CollegiateBlackFLF.ttf');   // Author: Casady & Greene , Downloaded from www.fonts.google.com 
  scribble                    =   loadFont('fonts/PermanentMarker-Regular.ttf');     // Author: Apache , Downloaded from: www.fonts.google.com

}
