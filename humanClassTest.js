

// varables
let mainCharacter;              // declare variable to represent the main

function setup(){

    createCanvas(300,300);
    mainCharacter               =   new HumanObject(150, 150, 2.5); // create the mainCharacter using the HumanObject class
}

function draw(){
    background(0,0,0);

    //mainCharacter.move();  
    mainCharacter.draw();

}




