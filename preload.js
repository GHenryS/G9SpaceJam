// ------------------ FUNCTION TO MANAGE ALL PRELOAD FUNCTIONS --------------- //

function preLoadAllImages(){

  
  // run all the function which require items to be preloaded
  preLoadButtons();
  
  preLoadImages();
  // preLoadSound();
  preLoadFonts();
  preLoadStrings();
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

  // -------------- Map Images --------------------------------------------//
  
  floorImage = loadImage('images/floor.png');             
  wallImage = loadImage('images/wall.png');
  elevatorImage = loadImage('images/elevator.png');
  lockDoorImage = loadImage('images/LD.png');
  selfOpeningDoorImage = loadImage('images/selfOD.png');
  lockedLiftDoorImage = loadImage('images/lockedLD.png');
  ladderImage = loadImage('images/ladder.png');           
  texture1Image = loadImage('images/texture1.png');       //  Solitary Cell Back wall 
  texture2Image = loadImage('images/texture2.png');       //  Guard Post Back Wal
  texture3Image = loadImage('images/texture3.png');       //  Large Group Cell (bottom) Back Wall 
  texture4Image = loadImage('images/texture4.png');       //  Main Prison Hall Back Wall 
  texture5Image = loadImage('images/texture5.png');       //  Maintenance Room Back Wall
  texture6Image = loadImage('images/texture6.png');       //  Guard Break Room Back Wall
  texture7Image = loadImage('images/texture7.png');       //  Haunted Hallway Back Wall
  texture8Image = loadImage('images/texture8.png');        //  Crew Quarters Back Wall 
  texture9Image = loadImage('images/texture9.png');        //  Haunted Hallway Back Wall
  texture10Image = loadImage('images/texture10.png');      // Large Group Cell (top) Back Wall

}

// ------------------ FUNCTION TO PRELOAD SOUNDS    ---------------------- //
function preLoadSound(){


}

// ------------------ FUNCTION TO PRELOAD FONTS    ---------------------- //
function preLoadFonts(){
  SplashScreenFont            =   loadFont('fonts/CollegiateBlackFLF.ttf');   // Author: Casady & Greene , Downloaded from www.fonts.google.com 
  scribble                    =   loadFont('fonts/PermanentMarker-Regular.ttf');     // Author: Apache , Downloaded from: www.fonts.google.com

}
// ------------------ FUNCTION TO PRELOAD STRINGS FOR MAP    ---------------- //
function preLoadStrings(){
  mapLayoutTxt = loadStrings('gameMap.txt');

}