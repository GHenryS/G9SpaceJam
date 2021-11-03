// ------------------------ GLOBAL VARIABLES -------------------------------//
// declare variables which will be used globally
// function specific variables must be declared in the specific function 
let gameState           = "mainmenu";     // the splash page is the first page to run  "splash"



// ------------------------ GLOBAL ARRAYS -------------------------------//
// declare arrays which will be used over multiple functions
// arrays which are specific to a function should be declared in the function 




// ----- function preload -----//
function preload(){

  preLoadImages();

}


// ------------------------ FUNCTION SETUP -------------------------------//
function setup(){

  canHeight   =  window.innerWidth * 0.5;
  createCanvas(window.innerWidth * 0.99 - 6, window.innerHeight * 0.98 - 8);
  background(0,0,0);
  // draw()

}

// ------------------------ FUNCTION DRAW -------------------------------//

function draw() {
  
  stroke(255);
  fill(255);
  textSize(40);
  text("hi", 10, 10);
  // setGameState is the first function to run
  // the setGameState controles which page to show and which code to run for that page
  setGameState(); 
}




