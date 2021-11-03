// ------------------ FUNCTION TO MANAGE ALL PRELOAD FUNCTIONS --------------- //

function preLoadImages(){

  preLoadButtons();
  preLoadSplashImages();
  preLoadSound();

}

// ------------------ FUNCTION TO PRELOAD GAME BUTTONS ---------------------- //

function preLoadButtons(){
    
    mainMenuButtonImg           =   preLoadImages('buttons/mainmenu.png');
    LL
    infoButtonImg               =   preLoadImages('buttons/information.png');
    leaderboardButtonImg        =   preLoadImages('buttons/leaderboard.png');
    mainMenuButtonImg           =   preLoadImages('buttons/menu.png');
    playGameButtonImg           =   preLoadImages('buttons/playgame.png');
    resetGameButtonImg          =   preLoadImages('buttons/resetgame.png');
    returnToGameButtonImg       =   preLoadImages('buttons/returntogame.png');
    settingsButtonImg           =   preLoadImages('buttons/settings.png');

}

// ------------------ FUNCTION TO PRELOAD IMAGES    ---------------------- //

function preLoadSplashImages(){

    // -------------- Splash screen images ------------------------------- //
    
    introImage                  =   loadImage('images/space.png');          // Author : Daniel Stephens , Downloaded From www.OpenGameArt.org
    rocketImage                 =   loadImage('images/cohete_on_wf.png');   //Author: JM.Atencia, Downloaded From www.OpenGameArt.org

}

// ------------------ FUNCTION TO PRELOAD SOUNDS    ---------------------- //
function preLoadSound(){


}