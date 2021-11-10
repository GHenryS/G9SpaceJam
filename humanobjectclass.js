

// varables
let mainCharacter;              // declare variable to represent the main

function setup(){
    createCanvas(300,300);
    mainCharacter               =   new HumanObject(150, 150, 2); // create the mainCharacter using the HumanObject class
}

function draw(){
    background(0,0,0);

    mainCharacter.move();  
    mainCharacter.draw();

}

class HumanObject{
    // the constructor is like the setup function in P5
    constructor(xPos, yPos, size){

        ///////////////// THE NEXT SECTION DECLARES AND SETS THE STARTING VARIABLES ////////////////////////

        // for this object the xPos and yPos would be at the bottom - centre of the character 
        this.xPos                       =   xPos;
        this.yPos                       =   yPos;
        // this.hMove                      =   0;          // hmove controls movement on the horisonal plane
        // this.vMove                      =   0;          // hmove controls movement on the horisonal plane
        this.size                       =   size;       // scale the character

        // if stationary is "yes" the character will stay in one postion on the screen - it is assumed the screen will move //
        // if stationary is "no" the character will accross the screen - it ias assumed the screen will be stationary
        this.stationary                 =   "yes"   // "no" or "yes"
        this.turn                       =   0;
        this.speed                      =   1;
        this.change                     =   0.03;       // determines the rateof animation
        this.step                       =   1;

        // available object state "start", "turnleft", "walkleft", "stopleft"," turnright", "walkright", "stopright", "jumpup","jumpleft", "jumpright","climbUp", "climbdown"//  
        this.objectState                =   "front";
        this.keyState                   =   "none";  // "none" for no key pressed, "yes" for keyIsPressed 
                   

        ///////////////// THE NEXT SECTION SETS THE INITIAL STATE OF ANIMATIONS //////////////////////////////

        // this is required to determine which animation to run
        this.upright                    =   3;  // 1 = laying down, 2 = on knees, 3 = standup


        ///////////////// THE NEXT SECTION DECLARES THE FUNCTIONS ARRAY /////////////////////////////////////        

        this.aniInputArray              =   new Array();    // Array to add the target angles to move limbs to
        this.moveLinkArray              =   new Array();    // Array to show to link current angles to target angles 

        this.objectArray                =   new Array();    // Main Array to store the objects X and Y co-ords
        this.linkArray                  =   new Array();    // Array to link rotation points to each other
        this.dimensionArray             =   new Array();    // Array which contains the distances between linked points
        this.pivitArray                 =   new Array();    // Array containing the rotation steps used during animation
        this.aniArray                   =   new Array();

        // this required to nsure that a movement is complete even if no buttom is pressed
        
        this.turnLeftInMotion           =   false;
        this.turnRightInMotion          =   false;

        this.stepToLeft1                =   false;
        this.stepToLeft2                =   false;
        this.stopToLeft1                =   false;
        this.stopToLeft2                =   false;

        this.stepToRight1               =   false;
        this.stepToRight2               =   false;
        this.stopToRight1               =   false;
        this.stopToRight2               =   false;

        this.moveToFront                =   false;

        this.motion                     =   false;
           

        ///////////////// THE NEXT SECTION ASSIGNS DIMENTIONS TO THE BODY PARTS //////////////////////////////

        let rightToeFootDist            =   2 * this.size;
        let rightFootFootDist           =   3 * this.size;
        let rightLowerLegDist           =   20 * this.size;
        let rightUpperLegDist           =   20 * this.size;
        let leftToeFootDist             =   2 * this.size;
        let leftFootFootDist            =   3 * this.size;
        let leftLowerLegDist            =   20 * this.size;
        let leftUpperLegDist            =   20 * this.size;
        let rightLowerArmDist           =   20 * this.size;
        let rightUpperArmDist           =   20 * this.size;
        let leftLowerArmDist            =   20 * this.size;
        let leftUpperArmDist            =   20 * this.size;
        let spineToShoulder             =   27 * this.size;
        let neck                        =   6 * this.size;
        let head                        =   8 * this.size;  
        let hipWidth                    =   15 * this.size;
        let shoulderWidth               =   26 * this.size;

         // load the variable into an array so that they can be used outside if the constructor       
        let tempArray                   =   [];
        tempArray                       =   [
            rightToeFootDist, rightFootFootDist, rightLowerLegDist, rightUpperLegDist, leftToeFootDist,
            leftFootFootDist, leftLowerLegDist, leftUpperLegDist,rightLowerArmDist, rightUpperArmDist, 
            leftLowerArmDist, leftUpperArmDist, spineToShoulder, neck, head, shoulderWidth, hipWidth];
        this.dimensionArray.push(tempArray);

        // create and load the pivitpoint array with the start angle (radians)
        tempArray           =   [];

        tempArray[0]            =   3/4 * 2*PI   // neck to head
        tempArray[1]            =   3/4 * 2*PI   // shoulder to neck
        tempArray[2]            =   3/4 * 2*PI   // hip to shoulder
        //...........................................................//
        tempArray[3]            =   PI/2         // left shoulder to left elbow
        tempArray[4]            =   PI/2         // left elbow to left wrist
        //...........................................................//
        tempArray[5]            =   PI/2         // right shoulder to right elbow
        tempArray[6]            =   PI/2         // right elbow to right wrist
        //...........................................................//
        tempArray[7]            =   PI/2         // left ship to left knee
        tempArray[8]            =   PI/2         // left knee to left ankle
        tempArray[9]            =   PI/2         // left ankle to left foot
        tempArray[10]           =   PI/2         // left foot to left toe
        //...........................................................//
        tempArray[11]           =   PI/2         // left ship to left knee
        tempArray[12]           =   PI/2         // left knee to left ankle
        tempArray[13]           =   PI/2         // left ankle to left foot
        tempArray[14]           =   PI/2         // left foot to left toe
        
        // the start position is the same as the loking to front angles
        this.aniInputArray.push(tempArray)
        // add pivitpoints to the pivitArray 
        this.pivitArray.push(tempArray);
        // add a second line to the pivitArray (this is only a place holder to prevent the first line from being deleted
        this.pivitArray.push(tempArray);
        

        // pivit Array //
        // 0 - neck to head
        // 1 - shoulder to neck
        // 2 - hip to shoulder/neck
        // 3 - left shoulder to left elbow
        // 4 - left elbow to left wrist
        // 5 - right shoulder to right elbow
        // 6 - right elbow to right wrist
        // 7 - left hip to left knee
        // 8 - left knee to left ankle
        // 9 - left ankle to left foot
        // 10 - left foot to left toe
        // 11 - right hip to right knee
        // 12 - right knee to right ankle
        // 13 - right ankle to right foot
        // 14 - right foot to right toe

        ///////////////// THE NEXT SECTION DEFINES THE CO-ORDINATES OF THE PIVIT POINTS //////////////////////////////
        // spine, neck and head
        let spineHipX                   =   this.xPos;               
        let spineHipY                   =   this.yPos;
        let spineShoulderX              =   spineHipX;               
        let spineShoulderY              =   spineHipY - spineToShoulder;
        let shoulderNeckX               =   spineHipX;                           
        let shoulderNeckY               =   spineShoulderY;
        let neckHeadX                   =   spineHipX;               
        let neckHeadY                   =   shoulderNeckY - head;
        let headX                       =   neckHeadX;
        let headY                       =   neckHeadY - head;           

        // right foot and leg
        let rightHipX                   =   spineHipX - hipWidth/2;           
        let rightHipY                   =   spineHipY
        let rightKneeX                  =   rightHipX;                             
        let rightKneeY                  =   rightHipY + rightUpperLegDist;
        let rightAnkleX                 =   rightKneeX;                       
        let rightAnkleY                 =   rightKneeY + rightLowerLegDist; 
        let rightToeFootX               =   rightAnkleX;        
        let rightToeFootY               =   rightAnkleY;               
        let rightToeX                   =   rightToeFootX;        
        let rightToeY                   =   rightToeFootY;           // -2 allows for fresh underneath the toe

        // left foot and leg
        let leftHipX                    =   spineHipX + hipWidth / 2;   
        let leftHipY                    =   spineHipY;
        let leftKneeX                   =   leftHipX;          
        let leftKneeY                   =   leftHipY + leftUpperLegDist;
        let leftAnkleX                  =   leftKneeX;          
        let leftAnkleY                  =   leftKneeY + leftLowerLegDist; 
        let leftToeFootX                =   leftAnkleX;           // Toe - Foot pointX position is same when hMove = 0
        let leftToeFootY                =   leftAnkleY;           // Toe - Foot pointY position is same when hMove = 0
        let leftToeX                    =   leftToeFootX;        
        let leftToeY                    =   leftToeFootY;           // -2 allows for fresh underneath the toe

        // left arm
        let rightShoulderX              =   xPos - shoulderWidth / 2; 
        let rightShoulderY              =   spineShoulderY;
        let rightElbowX                 =   rightShoulderX;
        let rightElbowY                 =   rightShoulderY + rightUpperArmDist;
        let rightWristX                 =   rightElbowX
        let rightWristY                 =   rightElbowY + rightLowerArmDist;

        // right arm
        let leftShoulderX               =   xPos + shoulderWidth / 2; 
        let leftShoulderY               =   spineShoulderY;
        let leftElbowX                  =   leftShoulderX;
        let leftElbowY                  =   leftShoulderY + leftUpperArmDist;
        let leftWristX                  =   leftElbowX
        let leftWristY                  =   leftElbowY + leftLowerArmDist;

        // create an array to store pivit points
        tempArray                       =   [];

        // add X co-ords to tempArray
        tempArray[0]                    =   headX;              // head pos
        tempArray[1]                    =   neckHeadX;          // head to neck point
        tempArray[2]                    =   shoulderNeckX;      // neck to torso point
        tempArray[3]                    =   leftShoulderX;      // left shoulder
        tempArray[4]                    =   leftElbowX;         // left elbow
        tempArray[5]                    =   leftWristX;         // left elbow
        tempArray[6]                    =   rightShoulderX;     // right shoulder
        tempArray[7]                    =   rightElbowX;        // right elbow 
        tempArray[8]                    =   rightWristX;        // right wrist
        tempArray[9]                    =   spineHipX;          // spine to hip joint
        tempArray[10]                   =   leftHipX;           // left hip
        tempArray[11]                   =   leftKneeX;          // left knee
        tempArray[12]                   =   leftAnkleX;         // left Ankle
        tempArray[13]                   =   leftToeFootX;       // left foot pivit point
        tempArray[14]                   =   leftToeX;           // left toe
        tempArray[15]                   =   rightHipX;          // right hip
        tempArray[16]                   =   rightKneeX;         // right knee
        tempArray[17]                   =   rightAnkleX;        // right Ankle
        tempArray[18]                   =   rightToeFootX;      // right foot pivit point
        tempArray[19]                   =   rightToeX;          // right toe
        // push X co-ords into this.objectArray[0]
        this.objectArray.push(tempArray);

        // clear the tempArray
        tempArray                       =   [];
        
        // add Y co-ords to tempArray
        tempArray[0]                    =   headY;              // head pos
        tempArray[1]                    =   neckHeadY;          // head to neck point
        tempArray[2]                    =   shoulderNeckY;      // neck to torso point
        tempArray[3]                    =   leftShoulderY;      // left shoulder
        tempArray[4]                    =   leftElbowY;         // left elbow
        tempArray[5]                    =   leftWristY;         // left elbow
        tempArray[6]                    =   rightShoulderY;     // right shoulder
        tempArray[7]                    =   rightElbowY;        // right elbow 
        tempArray[8]                    =   rightWristY;        // right wrist
        tempArray[9]                    =   spineHipY;          // spine to hip joint
        tempArray[10]                   =   leftHipY;           // left hip
        tempArray[11]                   =   leftKneeY;          // left knee
        tempArray[12]                   =   leftAnkleY;         // left Ankle
        tempArray[13]                   =   leftToeFootY;       // left foot pivit point
        tempArray[14]                   =   leftToeY;           // left toe
        tempArray[15]                   =   rightHipY;          // right hip
        tempArray[16]                   =   rightKneeY;         // right knee
        tempArray[17]                   =   rightAnkleY;        // right Ankle
        tempArray[18]                   =   rightToeFootY;      // right foot pivit point
        tempArray[19]                   =   rightToeY;          // right toe

        // push X co-ords into this.objectArray[0]
        this.objectArray.push(tempArray);

        ///////// CREATE AN ARRAY TO LINK BODY PARTS TOGETHER //////////////////

        this.linkArray   =   [
            [0,1],
            [1,2],
            [2,3],
            [2,6],
            [3,4],
            [4,5],
            [6,7],
            [7,8],
            [2,9],
            [9,10],
            [9,15],
            [10,11],
            [11,12],
            [12,13],
            [13,14],
            [15,16],
            [16,17],
            [17,18],
            [18,19],
        ]
    

        ///////////////////////// CONSTRUCT THE ANIMATION ARRAY //////////////////////

        // ELEMENTS
        // 0 - head
        // 1 - neck
        // 2 - spine
        // 3 - left upper arm
        // 4 - left lower arm
        // 5 - right upper arm
        // 6 - right lower arm
        // 7 - left upper leg
        // 8 - left lower leg
        // 9 - left foot
        // 10 - left toe
        // 11 - right upper leg
        // 12 - right lower leg
        // 13 - right foot
        // 14 - right toe

        // ARRAYS LINES
        // 0 - facing to front
        // 1 - Face left
        // 2 - left  leg forward (walk left)
        // 3 - right leg forward (walk left)

        let C3          =   1.5 * PI;
        let C2          =   PI
        let C1          =   0.5 * PI; 

        //                        0     1     2     3     4     5     6     7     8     9    10    11    12    13     14
        this.aniInputArray.push([4.9 , 4.7 , 4.6 , 1.3 , 2.2 , 1.3 , 2.2 , 1.8 , 1.5 , C2  , C2  , 1.8 , 1.5 , C2  , C2  ]); // 1 FACING LEFT
        this.aniInputArray.push([4.9 , 4.7 , 4.6 , 1.0 , 1.4 , 2.2 , 2.3 , 2.3 , 1.9 , 2.5 , 3.0 , 1.0 , 0.9 , 1.6 , 2.0 ]); // 2 LEFT - LEFT FOOT FORWARD
        this.aniInputArray.push([4.9 , 4.7 , 4.6 , 2.0 , 2.3 , 1.0 , 1.4 , 1.0 , 0.9 , 2.0 , 3.0 , 2.3 , 1.9 , 2.5 , 3.0 ]); // 3 LEFT - RIGHT FOOT FORWARD
        this.aniInputArray.push([4.51, 4.72, 4.80, 1.84, 0.94, 1.84, 0.94, 1.34, 1.64 ,0.0 , 0.0 , 1.34, 1.64, 0.0 , 0.0 ]); // 4 FACING RIGHT
        this.aniInputArray.push([4.51, 4.72, 4.82, 2.3 , 1.74, 1.14, 0.84, 0.6 , 1.24 ,1.14, 0.14, 2.3, 2.45, 1.14, 0.14]); // 5 RIGHT - LEFT FOOT FORWARD
        this.aniInputArray.push([4.51, 4.72, 4.82, 1.14, 0.84, 2.3 , 1.74, 2.3 , 2.45 ,1.14, 0.14, 0.6, 1.24, 1.14, 0.14]); // 6 RIGHT - RIGHT FOOT FORWARD
        
        //............ ANIMATION ................//

        this.moveLinkArray   =   [
            [1, 0], // 0 - turn from front to left  
            [2, 1], // 1 - walk LEFT - LEFT leg forward (from stand still)
            [3, 2], // 2 - walk LEFT - RIGHT leg forward
            [2, 3], // 3 - walk LEFT - LEFT leg forward (while walk is in motion)
            [1, 3], // 4 - stop LEFT - from RIGHT leg being forward
            [1, 2], // 5 - stop LEFT - from LEFT leg being forward

            [4, 0], // 6 - turn from front to left           
            [6, 4], // 7 - walk RIGHT - RIGHT leg forward (from stand still)
            [5, 6], // 8 - walk RIGHT - LEFT leg forward
            [6, 5], // 9 - walk RIGHT - RIGHT leg forward (while walk is in motion)
            [4, 5], // 10 - stop RIGHT - from RIGHT leg being forward
            [4, 6], // 11 - stop RIGHT - from LEFT leg being forward

            [0, 1], // 12 - tiurn from facing LEFT to FRONT
            [0, 4], // 13 - tiurn from facing RIGHT to FRONT
        ]

        // construct the this.aniArray - first run
        for(let i = 0; i < this.moveLinkArray.length; i++){
            let arrayLine = this.aniInputArray[0];
            let tempArray       =   []
            for( let u = 0; u < arrayLine.length; u++){
                tempArray[u] = (this.aniInputArray[this.moveLinkArray[i][0]][u] - this.aniInputArray[this.moveLinkArray[i][1]][u]) * this.change 
            }
            this.aniArray.push(tempArray)  
            console.log(this.aniArray)                       
        } 

    }
    constructAniArray(){
        // construct the this.aniArray
        for(let i = 0; i < this.moveLinkArray.length; i++){
            let arrayLine = this.aniInputArray[0];
            let tempArray       =   []
            for( let u = 0; u < arrayLine.length; u++){
                tempArray[u] = (this.aniInputArray[this.moveLinkArray[i][0]][u] - this.aniInputArray[this.moveLinkArray[i][1]][u]) * this.change 
            }
            this.aniArray.push(tempArray)                         
        } 
    }        
    
    

    //++++++++++++++++++++ END OF THE CONSTRUCTOR +++++++++++++++++++//

    

    //++++++++++++++++++++ START OF CLASS METHODS +++++++++++++++++++//

    switchStationaryMode(){
        // switch characters to be stationary or screen or to move around the screen
        if( this.stationary = "yes"){
            this.stationary = "no";
        } else {
            this.stationary = "yes";
        }
    }
    //-------------------------- METHOD TO MANAGE MOVEMENT ----------------------------------//
    move(){
        // keyStates are used to run or stop animations

        // front
        if(this.objectState == "front" ){
            this.turnRightFromFront(); 
            this.turnLeftFromFront();  
        }

        // going left............................
        if(this.objectState == "faceleft" ){  
            this.firstStepToleft();
            this.turnToFrontFromLeft()
        }
        if(this.objectState == "walkleft1"){
            this.step1Toleft();     // left foot forward
        }
        if(this.objectState == "walkleft2"){
            this.step2Toleft();     // RIGHT FOOT FORWARD
        }
        if(this.objectState == "leftstop1"){
            this.stopFaceLeft1();
        }       
        if(this.objectState == "leftstop2"){
            this.stopFaceLeft2();
        }

        console.log(this.objectState)
        //turn back to front


        // going right........................
        if(this.objectState == "faceright"){  
           this.firstStepToRight();
           this.turnToFrontFromRight()
        }
        if(this.objectState == "walkright1"){
            this.step1ToRight();     // left foot forward
        }
        if(this.objectState == "walkright2"){
            this.step2ToRight();     // RIGHT FOOT FORWARD
        }
        if(this.objectState == "rightstop1"){
            this.stopFaceRight1();
        }       
        if(this.objectState == "rightstop2"){
            this.stopFaceRight2();
        }

    
        
    }

    //-------------------------- METHOD TO DRAW OBJECT -----------------------------------------//
    draw(){
        let value1;
        let value2;        
        for(let i = 0; i < this.linkArray.length; i++){
            value1          =   this.linkArray[i][0];
            value2          =   this.linkArray[i][1];       
            stroke(0,255,0);
            fill(0,255,0); 
            
        if( i == 6 || i == 7 || i == 15 || i == 16 || i == 17){
            stroke(255,0,0);
            fill(255,0,0);
        } else if( i == 4 || i == 5 || i == 11 || i == 12 || i == 13){
            stroke(0,0,255);
            fill(0,0,255);
        } else {
            stroke(0,255,0);
            fill(0,255,0);        
        }
        
        /* ------------- OBJECT-ARRAY ELEMENT POSTIONS -------------------- */
        // 0 - head pos
        // 1 - head to neck point
        // 2 - neck to torso point
        // ----------------------------
        // 3 - left shoulder
        // 4 - left elbow
        // 5 - left wrist
        // ----------------------------
        // 6 - right shoulder
        // 7 - right elbow 
        // 8 - right wrist
        // ---------------------------
        // 9 - spine to hip joint
        // ---------------------------
        // 10 - left hip
        // 11 - left knee
        // 12 - left Ankle
        // 13 - left foot pivit point
        // 14 - left toe
        // ---------------------------
        // 15 - right hip
        // 16 - right knee
        // 17 - right Ankle
        // 18 - right foot pivit point
        // 19 - right toe



        line(this.objectArray[0][value1],this.objectArray[1][value1], this.objectArray[0][value2], this.objectArray[1][value2]);
        fill(0,255,0);
        ellipse(this.objectArray[0][value1], this.objectArray[1][value1], 4);
        noFill();
        ellipse(this.objectArray[0][0], this.objectArray[1][0], 30, 40);  
        
        }       
    }

    //////////////////////////// THE NEXR SECTION HANDLES WALKING TO LEFT ///////////////////////////////
    //-------------------------- METHOD TO TURN FROM FRONT POSITION TO LEFT ---------------------------//
    
    turnRightFromFront(){

        // run animation if the conditions are met 
        if(keyIsPressed == true || this.turnRightInMotion == true) {
            if (keyCode == LEFT_ARROW || this.turnRightInMotion == true) {

                // check if the routine is run for the first time
                if(this.turnRightInMotion  == false ){
                    this.pivitArray.pop()
                    this.pivitArray.push(this.aniArray[0])
                }
                this.dir                    =   1
                // set this method to true to make it auto run until the end of the routine
                this.turnRightInMotion = true;

                this.callForAnimation(); 
                if(this.step < 0 ){
                    this.turnRightInMotion  =   false; 
                    this.step               =   1;  
                    this.objectState = "faceleft";
                    this.dir                =   0;              
                }  
                this.step                   =   this.step - this.change;                                   
            }    
        }
    }
    
    //-------------------------- METHOD TO TURN FROM FRONT POSITION TO RIGHT ---------------------------//
    turnLeftFromFront(){

        // run animation if the conditions are met 
        if(keyIsPressed == true || this.turnLeftInMotion == true) {
            if (keyCode == RIGHT_ARROW || this.turnLeftInMotion == true) {

                // check if the routine is run for the first time
                if(this.turnLeftInMotion  == false ){
                    this.pivitArray.pop()
                    this.pivitArray.push(this.aniArray[6])
                }
                this.dir                    =   1
                // set this method to true to make it auto run until the end of the routine
                this.turnLeftInMotion = true;

                this.callForAnimation(); 
                if(this.step < 0 ){
                    this.objectState        =   "faceright";
                    this.turnLeftInMotion   =   false; 
                    this.step               =   1;
                    this.dir                =   0;                  
                }  
                this.step                   =   this.step - this.change;                                   
            }
        }  
    }
    //-------------------------- METHOD TO TURN FROM FRONT POSITION TO RIGHT ---------------------------//
    turnToFrontFromLeft(){

        // run animation if the conditions are met 
        if(keyIsPressed == true || this.turnLeftInMotion == true) {
            if (keyCode == RIGHT_ARROW || this.turnLeftInMotion == true) {

                // check if the routine is run for the first time
                if(this.turnLeftInMotion  == false ){
                    this.pivitArray.pop()
                    this.pivitArray.push(this.aniArray[12]) /////////////////
                }
                this.dir                    =   1
                // set this method to true to make it auto run until the end of the routine
                this.turnLeftInMotion = true;

                this.callForAnimation(); 
                if(this.step < 0 ){
                    this.objectState        =   "front";
                    this.turnLeftInMotion   =   false; 
                    this.step               =   1; 
                    this.dir                =   0                
                }  
                this.step                   =   this.step - this.change;                                   
            }
        }  
    }
    //-------------------------- METHOD TO TURN FROM FRONT POSITION TO RIGHT ---------------------------//
    turnToFrontFromRight(){

        // run animation if the conditions are met 
        if(keyIsPressed == true || this.turnLeftInMotion == true) {
            if (keyCode == LEFT_ARROW || this.turnLeftInMotion == true) {

                // check if the routine is run for the first time
                if(this.turnLeftInMotion  == false ){
                    this.pivitArray.pop()
                    this.pivitArray.push(this.aniArray[13]) /////////////////
                }
                this.dir                    =   -1
                // set this method to true to make it auto run until the end of the routine
                this.turnLeftInMotion = true;

                this.callForAnimation(); 
                if(this.step < 0 ){
                    this.objectState        =   "front";
                    this.turnLeftInMotion   =   false; 
                    this.step               =   1; 
                    this.dir                =   0                
                }  
                this.step                   =   this.step - this.change;                                   
            }
        }  
    }


    //-------------------------- TAKE FIRST STEP FROM STAND STILL POSITION ---------------------------//
    firstStepToleft(){
        
        // END WITH LEFT FOOT FORWARD - HALF STEP

        // run animation if the conditions are met
        if(keyIsPressed == true || this.stepToLeft1 == true) {
            if (keyCode == LEFT_ARROW || this.stepToLeft1 == true) { 
                
                // check if the routine is run for the first time
                if(this.stepToLeft1 == false ){
                    this.pivitArray.pop()
                    this.pivitArray.push(this.aniArray[1])    // call line 1             
                }
                // set this method to true to make it auto run until the end of the routine
                this.stepToLeft1 = true;
                this.callForAnimation();      
                if(this.step < 0 ){
                    this.stepToLeft1        =   false; 
                    this.step               =   1;
                    this.objectState        =   "walkleft1";
                    if(keyIsPressed == false){ this.objectState = "leftstop1";}
                }  
                this.step                   =   this.step - this.change;  
            }
        }        
    }
    //-------------------------- TAKE FIRST STEP FROM STAND STILL POSITION ---------------------------//
    firstStepToRight(){
       
        // END WITH LEFT FOOT FORWARD - HALF STEP

        // run animation if the conditions are met
        if(keyIsPressed == true || this.stepToRight1 == true) {
            if (keyCode == RIGHT_ARROW || this.stepToRight1 == true) { 
                
                // check if the routine is run for the first time
                if(this.stepToRight1 == false ){
                    this.pivitArray.pop()
                    this.pivitArray.push(this.aniArray[7])    // call line 1             
                }
                // set this method to true to make it auto run until the end of the routine
                this.stepToRight1           =   true;
                this.callForAnimation();      
                if(this.step < 0 ){
                    this.objectState        =   "walkright1";
                    this.stepToRight1       =   false; 
                    this.step               =   1;
                    if(keyIsPressed == false){ this.objectState = "rightstop2";}
                }  
                this.step                   =   this.step - this.change;  
            }
        }
    }

    //-------------------------- METHOD TO WALK TO LEFT ---------------------------//
    step1Toleft(){
        // END WITH RIGHT FOOT FORWARD - FULL STEP
        // run animation if the conditions are met
        if(keyIsPressed == true || this.stepToLeft1 == true) {
            if (keyCode == LEFT_ARROW || this.stepToLeft1 == true) { 
                
                // check if the routine is run for the first time
                if(this.stepToLeft1 == false ){
                    this.pivitArray.pop()
                    this.pivitArray.push(this.aniArray[2])    // call line 1             
                }
                // set this method to true to make it auto run until the end of the routine
                this.stepToLeft1 = true;
                this.callForAnimation();      
                if(this.step < 0 ){
                    this.objectState        =   "walkleft2";
                    this.stepToLeft1        =   false; 
                    this.step               =   1;
                    if(keyIsPressed == false){ this.objectState = "leftstop2";}
                }  
                this.step                   =   this.step - this.change;  
            }
        }
    }

    //-------------------------- METHOD TO WALK TO RIGHT ---------------------------//
    step1ToRight(){
        
        // END WITH RIGHT FOOT FORWARD - FULL STEP
       
        // run animation if the conditions are met
        if(keyIsPressed == true || this.stepToRight1 == true) {
            if (keyCode == RIGHT_ARROW || this.stepToRight1 == true) { 
                
                // check if the routine is run for the first time
                if(this.stepToRight1 == false ){
                    this.pivitArray.pop()
                    this.pivitArray.push(this.aniArray[8])    // call line 1             
                }
                // set this method to true to make it auto run until the end of the routine
                this.stepToRight1 = true;
                this.callForAnimation();      
                if(this.step < 0 ){
                    this.objectState        =   "walkright2";
                    this.stepToRight1       =   false; 
                    this.step               =   1;
                    if(keyIsPressed == false){ this.objectState = "rightstop1";}
                }  
                this.step                   =   this.step - this.change;  
            }
        }
    }

    //-------------------------- METHOD TO WALK TO LEFT ---------------------------//
    step2Toleft(){
        // END WITH RIGHT FOOT FORWARD - FULL STEP
        
        if(keyIsPressed == true || this.stepToLeft2 == true) {      
            if (keyCode == LEFT_ARROW || this.stepToLeft2 == true) {    

                // check if the routine is run for the first time
                if(this.stepToLeft2 == false ){
                    this.pivitArray.pop()
                    this.pivitArray.push(this.aniArray[3])    // call line 1              
                }
                // set this method to true to make it auto run until the end of the routine
                this.stepToLeft2            =   true;                
                this.callForAnimation();  
                if(this.step < 0 ){
                    this.objectState        =   "walkleft1";
                    this.stepToLeft2        =   false; 
                    this.step               =   1;
                    if(keyIsPressed == false){ this.objectState = "leftstop1";}
                } 
                this.step                   =   this.step - this.change;             
            }
        }
    }

    //-------------------------- METHOD TO WALK TO RIGHT ---------------------------//
    step2ToRight(){
        // END WITH RIGHT FOOT FORWARD - FULL STEP
        
        if(keyIsPressed == true || this.stepToRight2 == true) {      
            if (keyCode == RIGHT_ARROW || this.stepToRight2 == true) {    

                // check if the routine is run for the first time
                if(this.stepToRight2 == false ){
                    this.pivitArray.pop()
                    this.pivitArray.push(this.aniArray[9])    // call line 1                  
                }
                // set this method to true to make it auto run until the end of the routine
                this.stepToRight2      = true;                
                this.callForAnimation();  
                if(this.step < 0 ){
                    this.objectState        =   "walkright1";
                    this.stepToRight2       =   false; 
                    this.step               =   1;
                    if(keyIsPressed == false){ this.objectState = "rightstop2";}                   
                } 
                this.step                   =   this.step - this.change;             
            }
        }
    }

    //-------------------------- METHOD TO STOP WALKING TO LEFT - LEFT FOOT ---------------------------//
    stopFaceLeft1(){ 

        this.step                   =   this.step - this.change;
        // check if the routine is run for the first time
        if(this.stopToLeft1 == false ){
            this.pivitArray.pop()
            this.pivitArray.push(this.aniArray[5])    // call line 1 
            this.stopToLeft1        = true;  
        }
        // set this method to true to make it auto run until the end of the routine
              
        this.callForAnimation();  
        if(this.step < 0 ){
            this.objectState        = "faceleft";
            this.stopToLeft1        = false; 
            this.step               = 1;
        }                             
    }

    //-------------------------- METHOD TO STOP WALKING TO RIGHT - LEFT FOOT ---------------------------//
    stopFaceRight1(){ 

        this.step                   =   this.step - this.change;
        // check if the routine is run for the first time
        if(this.stopToRight1 == false ){
            this.pivitArray.pop()
            this.pivitArray.push(this.aniArray[10])    // call line 1 
            this.stopToRight1       =   true;  
        }
        // set this method to true to make it auto run until the end of the routine
                        
        this.callForAnimation();  
        if(this.step < 0 ){
            this.objectState        =   "faceright";
            this.stopToRight1       =   false; 
            this.step               =   1;
        }                             
    }

    //-------------------------- METHOD TO STOP WALKING TO LEFT - RIGHT FOOT ---------------------------//
    stopFaceLeft2(){ 

        this.step                   =   this.step - this.change;
        // check if the routine is run for the first time
        if(this.stopToLeft2 == false ){
            this.pivitArray.pop()
            this.pivitArray.push(this.aniArray[4])    // call line 1 
            this.stopToLeft2        =   true;
        }
        // set this method to true to make it auto run until the end of the routine
                        
        this.callForAnimation();  
        if(this.step < 0 ){
            this.objectState        =   "faceleft";
            this.stopToLeft2        =   false; 
            this.step               =   1;
        } 
    }
        
 
    //-------------------------- METHOD TO STOP WALKING TO RIGHT - RIGHT FOOT ---------------------------//
    stopFaceRight2(){ 
       
        this.step                   =   this.step - this.change;
        // check if the routine is run for the first time
        if(this.stopToRight2 == false ){
            this.pivitArray.pop()
            this.pivitArray.push(this.aniArray[11])    // call line 1 
            this.stopToRight2       = true;  
        }
        // set this method to true to make it auto run until the end of the routine
                        
        this.callForAnimation();  
        if(this.step < 0 ){
            this.objectState        = "faceright";
            this.stopToRight2       = false; 
            this.step               = 1;
        }        

    }
    
    // GET THE CURRENT ANGLES
 
    /*
    currentAngles(){
        let targetX;
        let targetY;
        //spine
        targetX                     =   this.objectArray[0][9] + this.dimensionArray[0][12] * cos(this.aniInputArray[1][2]);
        targetY                     =   this.objectArray[1][9] + this.dimensionArray[0][12] * sin(this.aniInputArray[1][2]);




        this.objectArray[0][2]      =   this.objectArray[0][9] + this.dimensionArray[0][12] * cos(this.aniInputArray[1][2]);
        this.objectArray[1][2]      =   this.objectArray[1][9] + this.dimensionArray[0][12] * sin(this.aniInputArray[1][2]);
        // neck
        this.objectArray[0][1]      =   this.objectArray[0][2] + this.dimensionArray[0][13] * cos(this.aniInputArray[1][1]);
        this.objectArray[1][1]      =   this.objectArray[1][2] + this.dimensionArray[0][13] * sin(this.aniInputArray[1][1]);
        // head
        this.objectArray[0][0]      =   this.objectArray[0][1] + this.dimensionArray[0][14] * cos(this.aniInputArray[1][0]);
        this.objectArray[1][0]      =   this.objectArray[1][1] + this.dimensionArray[0][14] * sin(this.aniInputArray[1][0]);
        // left elbow
        this.objectArray[0][4]      =   this.objectArray[0][3] + this.dimensionArray[0][11] * cos(this.aniInputArray[1][3]);
        this.objectArray[1][4]      =   this.objectArray[1][3] + this.dimensionArray[0][11] * sin(this.aniInputArray[1][3]);
        // left wrist
        this.objectArray[0][5]      =   this.objectArray[0][4] + this.dimensionArray[0][8] * cos(this.aniInputArray[1][4]);
        this.objectArray[1][5]      =   this.objectArray[1][4] + this.dimensionArray[0][8] * sin(this.aniInputArray[1][4]);
        // right elbow
        this.objectArray[0][7]      =   this.objectArray[0][6] + this.dimensionArray[0][9] * cos(this.aniInputArray[1][5]);
        this.objectArray[1][7]      =   this.objectArray[1][6] + this.dimensionArray[0][9] * sin(this.aniInputArray[1][5]);
        // right wrists
        this.objectArray[0][8]      =   this.objectArray[0][7] + this.dimensionArray[0][8] * cos(this.aniInputArray[1][6]);
        this.objectArray[1][8]      =   this.objectArray[1][7] + this.dimensionArray[0][8] * sin(this.aniInputArray[1][6]);
        // left upper leg
        this.objectArray[0][11]     =   this.objectArray[0][10] + this.dimensionArray[0][7] * cos(this.aniInputArray[1][7]);
        this.objectArray[1][11]     =   this.objectArray[1][10] + this.dimensionArray[0][7] * sin(this.aniInputArray[1][7]);
        // lower leg
        this.objectArray[0][12]     =   this.objectArray[0][11] + this.dimensionArray[0][2] * cos(this.aniInputArray[1][8]);
        this.objectArray[1][12]     =   this.objectArray[1][11] + this.dimensionArray[0][2] * sin(this.aniInputArray[1][8]); 
        // left foot
        this.objectArray[0][13]     =   this.objectArray[0][12] + this.dimensionArray[0][1] * cos(this.aniInputArray[1][9]);
        this.objectArray[1][13]     =   this.objectArray[1][12] + this.dimensionArray[0][1] * sin(this.aniInputArray[1][9]);
        // left toe
        this.objectArray[0][14]     =   this.objectArray[0][13] + this.dimensionArray[0][4] * cos(this.aniInputArray[1][10]);
        this.objectArray[1][14]     =   this.objectArray[1][13] + this.dimensionArray[0][4] * sin(this.aniInputArray[1][10]);
        // right upper leg
        this.objectArray[0][16]      =   this.objectArray[0][15] + this.dimensionArray[0][3] * cos(this.aniInputArray[1][11]);
        this.objectArray[1][16]      =   this.objectArray[1][15] + this.dimensionArray[0][3] * sin(this.aniInputArray[1][11]);
        // right lower leg                  
        this.objectArray[0][17]      =   this.objectArray[0][16] + this.dimensionArray[0][2] * cos(this.aniInputArray[1][12]);
        this.objectArray[1][17]      =   this.objectArray[1][16] + this.dimensionArray[0][2] * sin(this.aniInputArray[1][12]);
        // right foot
        this.objectArray[0][18]      =   this.objectArray[0][17] + this.dimensionArray[0][1] * cos(this.aniInputArray[1][13]);
        this.objectArray[1][18]      =   this.objectArray[1][17] + this.dimensionArray[0][1] * sin(this.aniInputArray[1][13]);
        // right toe
        this.objectArray[0][19]      =   this.objectArray[0][18] + this.dimensionArray[0][0] * cos(this.aniInputArray[1][14]);
        this.objectArray[1][19]      =   this.objectArray[1][18] + this.dimensionArray[0][0] * sin(this.aniInputArray[1][14]);

        this.constructAniArray();
    }
        */              
    







    ////////////////////////////////////// SUB METHODS ///////////////////////////////////////////////////////
    
    callForAnimation(){

        // rotation will not required in most animations
        // if the are required they must be added in this order
        this.rotateObjectHips(this.dir);                                                                                    // 1 = rotation to LEFT, -1 = rotation to RIGHT
        this.torso(this.pivitArray[1][2], this.pivitArray[1][1], this.pivitArray[1][0]);                                    // pivitPoint rotation (spine, neck, head)
        this.rotateObjectShoulders(this.dir)                                                                                // 1 = rotation to LEFT, -1 = rotation to RIGHT, 0 = NO rotation
        this.rightLeg(this.pivitArray[1][11] , this.pivitArray[1][12] ,  this.pivitArray[1][13] , this.pivitArray[1][14] ); // pivitPoint rotation (rightUpperLeg, rightLowerLeg, rightFoot, rightToe)
        this.leftLeg (this.pivitArray[1][7] , this.pivitArray[1][8] , this.pivitArray[1][9] , this.pivitArray[1][10] );     // pivitPoint rotation (leftUpperLeg, leftLowerLeg, leftFoot, leftToe)
        this.leftArm(this.pivitArray[1][3] , this.pivitArray[1][4] );                                                       // pivitPoint rotation (leftUpperArm, leftLowerArm)
        this.rightArm(this.pivitArray[1][5] , this.pivitArray[1][6] );                                                      // pivitPoint rotation (rightUpperArm, rightLowerArm)        
    }

    rotateObjectHips(left_right){  
        this.dir                    =   left_right;
        // right hip moves to spine
        this.objectArray[0][15]     =   this.objectArray[0][9] - (this.dimensionArray[0][16] / 2 * this.step) * this.dir;
        // left hip moves to spine
        this.objectArray[0][10]     =   this.objectArray[0][9] + (this.dimensionArray[0][16] / 2 * this.step) * this.dir;   
    }

    rotateObjectShoulders(left_right){
        this.dir                        =   left_right;

        // right hip moves to spine
        this.objectArray[0][6]      =   this.objectArray[0][2] + (this.dimensionArray[0][15] / 2 * this.step) * this.dir;
        // left shoulder moves to spine
        this.objectArray[0][3]      =   this.objectArray[0][2] - (this.dimensionArray[0][15] / 2 * this.step) * this.dir;
    }

    torso(spine, neck, head){
 
        //angle spine
        this.spine                  =   spine;
        this.pivitArray[0][2]       =   this.pivitArray[0][2] + this.spine;
        this.objectArray[0][2]      =   this.objectArray[0][9] + this.dimensionArray[0][12] * cos(this.pivitArray[0][2]);
        this.objectArray[1][2]      =   this.objectArray[1][9] + this.dimensionArray[0][12] * sin(this.pivitArray[0][2]);
        //angle shoulder to neck
        this.neck                   =   neck;
        this.pivitArray[0][1]       =   this.pivitArray[0][1] + this.neck;
        this.objectArray[0][1]      =   this.objectArray[0][2] + this.dimensionArray[0][13] * cos(this.pivitArray[0][1]);
        this.objectArray[1][1]      =   this.objectArray[1][2] + this.dimensionArray[0][13] * sin(this.pivitArray[0][1]);
        //angle neck to head
        this.head                   =   head;
        this.pivitArray[0][0]       =   this.pivitArray[0][0] + this.neck;
        this.objectArray[0][0]      =   this.objectArray[0][1] + this.dimensionArray[0][14] * cos(this.pivitArray[0][1]);
        this.objectArray[1][0]      =   this.objectArray[1][1] + this.dimensionArray[0][14] * sin(this.pivitArray[0][1]);
    }
 


    rightLeg(rightUpperLeg, rightLowerLeg, rightFoot, rightToe){
        // RIGHT LEG AND FOOT ------------------------------------------------------//
        //angle right upper leg
        this.rightUpperLeg           =   rightUpperLeg;
        this.pivitArray[0][11]       =   this.pivitArray[0][11] + this.rightUpperLeg;
        this.objectArray[0][16]      =   this.objectArray[0][15] + this.dimensionArray[0][3] * cos(this.pivitArray[0][11]);
        this.objectArray[1][16]      =   this.objectArray[1][15] + this.dimensionArray[0][3] * sin(this.pivitArray[0][11]);

        //angle right lower leg                  
        this.righLowerLeg            =   rightLowerLeg;
        this.pivitArray[0][12]       =   this.pivitArray[0][12] + this.righLowerLeg;  
        this.objectArray[0][17]      =   this.objectArray[0][16] + this.dimensionArray[0][2] * cos(this.pivitArray[0][12]);
        this.objectArray[1][17]      =   this.objectArray[1][16] + this.dimensionArray[0][2] * sin(this.pivitArray[0][12]);
        
        //angle right foot
        this.rightFoot = rightFoot;
        this.pivitArray[0][13]       =   this.pivitArray[0][13] + this.rightFoot;
        this.objectArray[0][18]      =   this.objectArray[0][17] + this.dimensionArray[0][1] * cos(this.pivitArray[0][13]);
        this.objectArray[1][18]      =   this.objectArray[1][17] + this.dimensionArray[0][1] * sin(this.pivitArray[0][13]);

        //angle right toe
        this.rightToe = rightToe;
        this.pivitArray[0][14]       =   this.pivitArray[0][14] + this.rightToe;
        this.objectArray[0][19]      =   this.objectArray[0][18] + this.dimensionArray[0][0] * cos(this.pivitArray[0][14]);
        this.objectArray[1][19]      =   this.objectArray[1][18] + this.dimensionArray[0][0] * sin(this.pivitArray[0][14]);
    }

    leftLeg( leftUpperLeg, leftLowerLeg, leftFoot, leftToe){
        
        // LEFT LEG AND FOOT -------------------------------------------------------//
        //angle left upper leg
        this.leftUpperLeg           =   leftUpperLeg;
        this.pivitArray[0][7]       =   this.pivitArray[0][7] + this.leftUpperLeg;
        this.objectArray[0][11]     =   this.objectArray[0][10] + this.dimensionArray[0][7] * cos(this.pivitArray[0][7]);
        this.objectArray[1][11]     =   this.objectArray[1][10] + this.dimensionArray[0][7] * sin(this.pivitArray[0][7]);

        //angle left lower leg
        this.leftLowerLeg           =   leftLowerLeg;
        this.pivitArray[0][8]       =   this.pivitArray[0][8] + this.leftLowerLeg;
        this.objectArray[0][12]     =   this.objectArray[0][11] + this.dimensionArray[0][2] * cos(this.pivitArray[0][8]);
        this.objectArray[1][12]     =   this.objectArray[1][11] + this.dimensionArray[0][2] * sin(this.pivitArray[0][8]);
        
        //angle left foot
        this.leftFoot               =   leftFoot;
        this.pivitArray[0][9]       =   this.pivitArray[0][9] + this.leftFoot ;
        this.objectArray[0][13]     =   this.objectArray[0][12] + this.dimensionArray[0][1] * cos(this.pivitArray[0][9]);
        this.objectArray[1][13]     =   this.objectArray[1][12] + this.dimensionArray[0][1] * sin(this.pivitArray[0][9]);

        //angle left toe
        this.leftToe                =   leftToe;
        this.pivitArray[0][10]      =   this.pivitArray[0][10] + this.leftToe;
        this.objectArray[0][14]     =   this.objectArray[0][13] + this.dimensionArray[0][4] * cos(this.pivitArray[0][10]);
        this.objectArray[1][14]     =   this.objectArray[1][13] + this.dimensionArray[0][4] * sin(this.pivitArray[0][10]);

    }

    leftArm( leftUpperArm, leftLowerArm){
        /*-------------------------- ARMS --------------------------*/
        // left shoulder to elbow
        this.leftUpperArm           =   leftUpperArm;
        this.pivitArray[0][3]       =   this.pivitArray[0][3] + this.leftUpperArm ;
        this.objectArray[0][4]      =   this.objectArray[0][3] + this.dimensionArray[0][11] * cos(this.pivitArray[0][3]);
        this.objectArray[1][4]      =   this.objectArray[1][3] + this.dimensionArray[0][11] * sin(this.pivitArray[0][3]);
        // left wrist
        this.leftLowerArm           =   leftLowerArm;
        this.pivitArray[0][4]       =   this.pivitArray[0][4] + this.leftLowerArm ;
        this.objectArray[0][5]      =   this.objectArray[0][4] + this.dimensionArray[0][8] * cos(this.pivitArray[0][4]);
        this.objectArray[1][5]      =   this.objectArray[1][4] + this.dimensionArray[0][8] * sin(this.pivitArray[0][4]);

    }

    rightArm(rightUpperArm, rightLowerArm){
        // right shoulder to elbow
        this.rightUpperArm          =   rightUpperArm;
        this.pivitArray[0][5]       =   this.pivitArray[0][5] + this.rightUpperArm ;
        this.objectArray[0][7]      =   this.objectArray[0][6] + this.dimensionArray[0][9] * cos(this.pivitArray[0][5])
        this.objectArray[1][7]      =   this.objectArray[1][6] + this.dimensionArray[0][9] * sin(this.pivitArray[0][5]);
        // right wrists
        this.rightLowerArm          =   rightLowerArm;
        this.pivitArray[0][6]       =   this.pivitArray[0][6] + this.rightLowerArm ;
        this.objectArray[0][8]      =   this.objectArray[0][7] + this.dimensionArray[0][8] * cos(this.pivitArray[0][6]);
        this.objectArray[1][8]      =   this.objectArray[1][7] + this.dimensionArray[0][8] * sin(this.pivitArray[0][6]);
    }
        ////////////////////// ARRAYS REFERENCE LISTS ////////////////////////

        /* ------------- OBJECT-ARRAY ELEMENT POSTIONS -------------------- */
        // Line O - X-axes
        // Line 1 - Y-axes

        /* ------------- OBJECT-ARRAY ELEMENT POSTIONS -------------------- */
        // 0 - head pos
        // 1 - head to neck point
        // 2 - neck to torso point
        // ----------------------------
        // 3 - left shoulder
        // 4 - left elbow
        // 5 - left wrist
        // ----------------------------
        // 6 - right shoulder
        // 7 - right elbow 
        // 8 - right wrist
        // ---------------------------
        // 9 - spine to hip joint
        // ---------------------------
        // 10 - left hip
        // 11 - left knee
        // 12 - left Ankle
        // 13 - left foot pivit point
        // 14 - left toe
        // ---------------------------
        // 15 - right hip
        // 16 - right knee
        // 17 - right Ankle
        // 18 - right foot pivit point
        // 19 - right toe

        /* ------------- DIMENTION-ARRAY ELEMENT POSTIONS -------------------- */
        // 0 - rightToeFootDist,
        // 1 - rightFootFootDist, 
        // 2 - rightLowerLegDist,
        // 3 - rightUpperLegDist,
        // 4 - leftToeFootDist,
        // 5 - leftFootFootDist,
        // 6 - leftLowerLegDist,
        // 7 - leftUpperLegDist,
        // 8 - rightLowerArmDist, 
        // 9 - rightUpperArmDist, 
        // 10 - leftLowerArmDist,
        // 11 - leftUpperArmDist, 
        // 12 - spineToShoulder, 
        // 13 - neck,
        // 14 - head,
        // 15 - shoulderWidth,
        // 16 - hipWidth,



}