// ------------------------ GLOBAL VARIABLES -------------------------------//
// declare variables which will be used globally
// function specific variables must be declared in the specific function 

let gameState           = "mainmenu";     // the splash page is the first page to run  "splash"
let canRatio            = 0.6;          // set the game canvas ratio height : width
let bannerFirstTime     = 0;

// ------------------------ GLOBAL ARRAYS -------------------------------//
// declare arrays which will be used over multiple functions
// arrays which are specific to a function should be declared in the function 
let bannerArray         = new Array();  // banner for menu page


// ------------------------ FUNCTION PRELOAD -------------------------------//

function preload(){

  preLoadImages();        // see preload.js

}


// ------------------------ FUNCTION SETUP -------------------------------//
function setup(){

  // all functions required as part of the setup is called using the runSetupFunction
  runSetupFunctions()     // see navigation.js

  canHeight   =  window.innerWidth * 0.5;
  createCanvas(window.innerWidth * 0.99 - 6, window.innerHeight * 0.98 - 8);
  background(0,0,0);
  introScreenSetup()

}

// ------------------------ FUNCTION DRAW -------------------------------//

function draw() {

  // setGameState is the first function to run
  // the setGameState controles which page to show and which code to run for that page
  setGameState(); 
}




