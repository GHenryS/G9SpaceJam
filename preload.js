// ------------------ FUNCTION TO MANAGE ALL PRELOAD FUNCTIONS --------------- //

function preLoadImages(){
  // run all the function which require items to be preloaded
  preLoadButtons();
  preLoadSplashImages();
  // preLoadSound();

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

function preLoadSplashImages(){

  // -------------- Splash screen images ------------------------------- //
  introImage                  =   loadImage('images/space.png');              // Author : Daniel Stephens , Downloaded From www.OpenGameArt.org
  rocketImage                 =   loadImage('images/cohete.png');             //Author: JM.Atencia, Downloaded From www.OpenGameArt.org
  splashScreenFont            =   loadFont('images/CollegiateBlackFLF.ttf')
}

// ------------------ FUNCTION TO PRELOAD SOUNDS    ---------------------- //
function preLoadSound(){


}