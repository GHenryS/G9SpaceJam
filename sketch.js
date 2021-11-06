// ------------------------ GLOBAL VARIABLES -------------------------------//
// declare variables which will be used globally
// function specific variables must be declared in the specific function 

let gameState           = "splash";     // the splash page is the first page to run  "splash"
let canRatio            = 0.45;          // set the game canvas ratio height : width

// splashSreen variables
let splashCount         = 1500;
let opagueValue         = 0;

// mainMenu variables
let bannerFirstTime     = 0;

// global functions variables
let gamePath            = "http://127.0.0.1:5500/index.html";
let fadeInSetting       = 255;
let fadeOutSetting      = 255;
let setBright           = 105;

// ------------------------ GLOBAL ARRAYS -------------------------------//
// declare arrays which will be used over multiple functions
// arrays which are specific to a function should be declared in the function 
let bannerArray         = new Array();  // banner for menu page
let starArray           = new Array();  // 

// ------------------------ FUNCTION PRELOAD -------------------------------//

function preload(){

  preLoadAllImages();        // see preload.js

}


// ------------------------ FUNCTION SETUP -------------------------------//
function setup(){
  // all functions required as part of the setup is called using the runSetupFunction
  runSetupFunctions()     // see navigation.js
 
}

// ------------------------ FUNCTION DRAW -------------------------------//

function draw() {

  // setGameState is the first function to run
  // the setGameState controles which page to show and which code to run for that page

  setGameState(); 
}







