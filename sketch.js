// ------------------------ GLOBAL VARIABLES -------------------------------//
// declare variables which will be used globally
// function specific variables must be declared in the specific function 

let gameState           = "splash";     // the splash page is the first page to run  "splash"
let canRatio            = 0.5 ;          // set the game canvas ratio height : width

// splashSreen variables
let splashCount         = 1300;
let opaqueValue         = 0;

// banner variables
let bannerFirstTime     = 0;
let colourBannerTop;
let colourBannerBottom;

// global variables
let gamePath            = "http://127.0.0.1:5500/index.html";
let fadeInSetting       = 255;
let fadeOutSetting      = 0;
let setBright           = 250;
let setContrast         = 150;
let setOpacity          = 150;
let setSaturation       = 150;
let scale;


// Map Global Variables
let elevatorCarriage1;
let elevatorCarriage2;
let hero;
let bob;

// Ghost Global Variable
let ghostAnimation;
let ghostImage;
let ghostSprite;
let ghosts = [];

// Robot Global Variables
let robotAnimation;
let robotImage;
let robotSprite;
let robots = [];

// Trooper Gloabl Variables
let trooperAnimation;
let trooperImage;
let trooperSprite;
let troopers = [];

// ------------------------ GLOBAL ARRAYS -------------------------------//
// declare arrays which will be used over multiple functions
// arrays which are specific to a function should be declared in the function 

let starArray           = new Array();  // 

// ------------------------ FUNCTION PRELOAD -------------------------------//

function preload(){
  preLoadAllImages();        // see preload.js

}


// ------------------------ FUNCTION SETUP -------------------------------//
function setup(){
  // all functions required as part of the setup is called using the runSetupFunction
  runSetupFunctions()       // see globalfunctions.js   
  
}
// ------------------------ FUNCTION DRAW -------------------------------//

function draw() {

  // setGameState is the first function to run
  // the setGameState controles which page to show and which code to run for that page

  setGameState();           // see navigation.js
}