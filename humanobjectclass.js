

// varables
let mainCharacter;              // declare variable to represent the main

function setup(){
    createCanvas(300,300);

    mainCharacter               =   new HumanObject(200 , 250); // create the mainCharacter using the HumanObject class
    dude                        =   new HumanObject(400 , 250); // create the mainCharacter using the HumanObject class

}

function draw(){
background(50,50,50);

mainCharacter.xPos = 30
mainCharacter.hMove()
dude.hMove()

}

function hMove(){

}

class HumanObject{
    // the constructor is like the setup function in P5
    constructor(xPos, yPos){
        // for this object the xPos and yPos would be at the bottom - centre of the character 
        this.xPos                       =   xPos;
        this.yPos                       =   yPos;
        this.hmove                      =   0;      // hmove controls movement on the horisonal plane
        this.vmove                      =   0;      // hmove controls movement on the horisonal plane

        // private variables
        // create the sckeleton

        // distances for leg scheleton
        let frontFrontFootDist          =   5;
        let frontBackFootDist           =   5;
        let frontLowerLegDist           =   20;
        let frontUpperLegDist           =   20;

        let backFrontFootDist           =   5;
        let backBackFootDist            =   5;
        let backLowerLegDist            =   20;
        let backUpperLegDist            =   20;

        // distances for arm scheleton
        let frontLowerArmDist           =   20;
        let frontUpperArmDist           =   20;

        let frontLowerArmDist           =   20;
        let frontUpperArmDist           =   20;

        // distances for spine, neck and head
        let spineToShoulder             =   20;
        let shoulderToNeck              =   5;
        let neck                        =   5;
        let head                        =   5;
        
        let hipWidth                    =   15;
        let shoulderWidth               =   20;

    }
    // this is where you create methods(function to make your object do things when clled to do something)
    hMove(){

    }
    draw()

}