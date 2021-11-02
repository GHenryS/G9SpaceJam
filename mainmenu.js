// ------------------ FUNCTION TO PRELOAD GAME BUTTONS ---------------------- //

function mainMenu(){
    // set canvas and background //
    createCanvas(window.innerWidth - 4, window.innerHeight - 4)
    background(0,0,0);

    // setup page header
    textAlign(CENTER);
    textSize(30 * window.innerWidth / window.screen);
    stroke(255,255,255);
    fill(255,255,255);
    text("MAIN MENU", window.innerWidth/2, window.innerHeight * 0.1);

    // setup buttons
    rectMode(CENTER,CENTER);
    Image(settingsButtonImg, window.innerWidth/2, window.innerHeight * 0.2, 300, 200);

}