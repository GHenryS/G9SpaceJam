

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
        this.step                       =   0;

        // available object state "start", "turnleft", "walkleft", "stopleft"," turnright", "walkright", "stopright", "jumpup","jumpleft", "jumpright","climbUp", "climbdown"//  
        this.objectState                =   "front";


        ///////////////// THE NEXT SECTION SETS THE INITIAL STATE OF ANIMATIONS //////////////////////////////

        // this is required to determine which animation to run
        this.upright                    =   3;  // 1 = laying down, 2 = on knees, 3 = standup

        ///////////////// THE NEXT SECTION DECLARES THE FUNCTIONS ARRAY /////////////////////////////////////        

        this.objectArray                =   new Array();
        this.linkArray                  =   new Array();
        this.dimensionArray             =   new Array();
        this.pivitArray                 =   new Array();

        // this required to nsure that a movement is complete even if no buttom is pressed
        this.turnLeftInMotion           =   false;
        this.turnRightInMotion          =   false;
        this.fisrtWalkLeftInMotion      =   false;
        this.walkLeftInMotion1          =   false;
           

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
        let spineToShoulder             =   30 * this.size;
        let neck                        =   8 * this.size;
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

        this.linkArray                  =   [
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

        
        if(this.objectState == "front"){
            this.turnLeftFromFront(); 
            this.turnRightFromFront();  
        }
        if(this.objectState == "stopleft"){
            this.takeFirstStepToleft();
        }
        if(this.objectState == "walkleft1"){
            //this.step1Toleft();
        }
        console.log(this.objectState)
        

        // -- the next two will have to cycle
        // this.stepRightFootLeft();
        // this.stepLeftFoodFLeft();
        // this.stopFromRightFootLeft();
        // this.stopFromLeftFootLeft(); 
            

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
        line(this.objectArray[0][value1],this.objectArray[1][value1], this.objectArray[0][value2], this.objectArray[1][value2]);
        fill(0,255,0);
        ellipse(this.objectArray[0][value1], this.objectArray[1][value1], 4);
        noFill();
        ellipse(this.objectArray[0][0], this.objectArray[1][0], 30, 40);       
        }       
    }

    //-------------------------- METHOD TO TURN FROM FRONT POSITION TO LEFT ---------------------------//
    turnRightFromFront(){

        // run animation if the conditions are met 
        if (keyCode == LEFT_ARROW || this.turnRightInMotion == true) {
            if(this.objectState == "front" || this.turnRightInMotion == true){
                this.turnRightInMotion = true;
                // animate the object turning to its right from a front position
                let change                  =   0.04 * this.speed;
                this.step                   =   this.step + change;
                if( this.step < 1.0 && this.step > 0){
                    // rotation will not required in most animations
                    // if the are required they must be added in this order
                    this.rotateObjectHips(1);                   // 1 = rotation to LEFT, -1 = rotation to RIGHT
                    this.torso(-0.005, -0.005, 0.005);          // pivitPoint rotation (spine, neck, head)
                    this.rotateObjectShoulders(1)               // 1 = rotation to LEFT, -1 = rotation to RIGHT
                    this.rightLeg(0.02, -0.01,  -0.01, 0.01);    // pivitPoint rotation (rightUpperLeg, rightLowerLeg, rightFoot, rightToe)
                    this.leftLeg (0.02, -0.01, -0.01, 0.01);    // pivitPoint rotation (leftUpperLeg, leftLowerLeg, leftFoot, leftToe)
                    this.leftArm( -0.01, 0.02);                  // pivitPoint rotation (leftUpperArm, leftLowerArm)
                    this.rightArm( -0.01, 0.02);                 // pivitPoint rotation (rightUpperArm, rightLowerArm)        
                }  
                if(this.step >1 ){
                    this.objectState = "stopleft";
                    this.turnRightInMotion = false; 
                    this.step = 0;
                }                       
            }
        }
    }

    //-------------------------- METHOD TO TURN FROM FRONT POSITION TO LEFT ---------------------------//
    turnLeftFromFront(){
        // run animation if the conditions are met 
        if (keyCode == RIGHT_ARROW || this.stateOfAnimation == true) {
            if(this.objectState == "front" || this.stateOfAnimation == true){
                this.turnLeftInMotion = true;
                stroke(255)
                fill(255)
                text("TURNING LEFT", this.xPos + 50, this.yPos)
                // animate the object turning to its right from a front position
                let change                  =   0.04 * this.speed;
                this.step                   =   this.step + change;
                if( this.step < 1.0 && this.step > 0){
                    // rotation will not required in most animations
                    // if the are required they must be added in this order
                    this.rotateObjectHips(-1);                   // 1 = rotation to LEFT, -1 = rotation to RIGHT
                    this.torso(0.005, 0.005, -0.005);          // pivitPoint rotation (spine, neck, head)
                    this.rotateObjectShoulders(-1)               // 1 = rotation to LEFT, -1 = rotation to RIGHT
                    this.rightLeg(-0.02, 0.01, 0.01, -0.01);    // pivitPoint rotation (rightUpperLeg, rightLowerLeg, rightFoot, rightToe)
                    this.leftLeg (-0.02, 0.01, 0.01, -0.01);    // pivitPoint rotation (leftUpperLeg, leftLowerLeg, leftFoot, leftToe)
                    this.leftArm( 0.01, -0.02);                  // pivitPoint rotation (leftUpperArm, leftLowerArm)
                    this.rightArm( 0.01, -0.02);                 // pivitPoint rotation (rightUpperArm, rightLowerArm)        
                }  
                if(this.step > 1 ){
                    this.objectState = "stopright";
                    this.turnLeftInMotion = false; 
                    this.step = 0;
                }                       
            }
        }
    }

    //-------------------------- METHOD TO WALK TO LEFT ---------------------------//
    takeFirstStepToleft(){
        
        // run animation if the conditions are met 
        if (keyCode == LEFT_ARROW || this.fisrtWalkLeftInMotion == true) {
            
           
            if(this.objectState == "stopleft" || this.fisrtWalkLeftInMotion == true){
                this.fisrtWalkLeftInMotion = true;
                
                // animate the object turning to its right from a front position
                let change                  =   0.04 * this.speed;
                this.step                   =   this.step + change;
                console.log(this.step)
                if( this.step < 1.0 && this.step >= 0){
                    console.log("OK")
                    // rotation will not required in most animations
                    // if the are required they must be added in this order
                    this.rotateObjectHips(0);                     // 1 = rotation to LEFT, -1 = rotation to RIGHT
                    this.torso(0.005, -0.005, 0.005);              // pivitPoint rotation (spine, neck, head)
                    this.rotateObjectShoulders(0)                 // 1 = rotation to LEFT, -1 = rotation to RIGHT, 0 = NO rotation
                    this.rightLeg(-0.03, -0.02,  0.02, 0.03);       // pivitPoint rotation (rightUpperLeg, rightLowerLeg, rightFoot, rightToe)
                    this.leftLeg (0.015, 0.012, 0.02, 0.03);          // pivitPoint rotation (leftUpperLeg, leftLowerLeg, leftFoot, leftToe)
                    this.leftArm( -0.02, 0.015);                     // pivitPoint rotation (leftUpperArm, leftLowerArm)
                    this.rightArm( 0.02, 0.02);                     // pivitPoint rotation (rightUpperArm, rightLowerArm)        
                }  
                if(this.step >1 ){
                    this.objectState = "walkleft1";
                    this.fisrtWalkLeftInMotion = false; 
                    this.step = 0;

                }                       
            }
        }
    }

    //-------------------------- METHOD TO WALK TO LEFT ---------------------------//
    step1Toleft(){
        
        //left leg is in the front and needs to go back
        // run animation if the conditions are met 
        if (keyCode == LEFT_ARROW || this.walkLeftInMotion1  == true) {
            
            fill(255)
            if(keyIsPressed){
                text("KEY IS PRESSED", this.xPos, 20)
            }
            if(this.objectState == "walkleft1" || this.walkLeftInMotion1  == true){
                this.walkLeftInMotion1  = true;
                
                // animate the object turning to its right from a front position
                let change                  =   0.04 * this.speed;
                this.step                   =   this.step + change;
                console.log(this.step)
                if( this.step < 1.0 && this.step >= 0){
                    console.log("OK")
                    // rotation will not required in most animations
                    // if the are required they must be added in this order
                    this.rotateObjectHips(0);                     // 1 = rotation to LEFT, -1 = rotation to RIGHT
                    this.torso(0.005, -0.005, 0.005);              // pivitPoint rotation (spine, neck, head)
                    this.rotateObjectShoulders(0)                 // 1 = rotation to LEFT, -1 = rotation to RIGHT, 0 = NO rotation
                    this.rightLeg(-0.03, -0.02,  0.02, 0.03);       // pivitPoint rotation (rightUpperLeg, rightLowerLeg, rightFoot, rightToe)
                    this.leftLeg (0.015, 0.012, 0.02, 0.03);          // pivitPoint rotation (leftUpperLeg, leftLowerLeg, leftFoot, leftToe)
                    this.leftArm( -0.02, 0.015);                     // pivitPoint rotation (leftUpperArm, leftLowerArm)
                    this.rightArm( 0.02, 0.02);                     // pivitPoint rotation (rightUpperArm, rightLowerArm)        
                }  
                if(this.step > 1 ){
                    this.objectState = "walkleft1";
                    this.fisrtWalkLeftInMotion = false; 
                    this.step = 0;

                }                       
            }
        }
    }


    



    ////////////////////////////////////// SUB METHODS ///////////////////////////////////////////////////////
    

    rotateObjectHips(left_right){  
        this.dir                    =   left_right;
        // right hip moves to spine
        this.objectArray[0][15]     =   this.objectArray[0][9] - (this.dimensionArray[0][16] / 2 * (1 - this.step)) * this.dir;
        // left hip moves to spine
        this.objectArray[0][10]     =   this.objectArray[0][9] + (this.dimensionArray[0][16] / 2 * (1 - this.step)) * this.dir;   
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
 
    rotateObjectShoulders(left_right){
        this.dir                    =   left_right;
        if(this.dir = 0){
            this.objectArray[0][6]      =   this.objectArray[0][2];
            this.objectArray[0][3]      =   this.objectArray[0][2]; 
        } else {
            // right hip moves to spine
            this.objectArray[0][6]      =   this.objectArray[0][2] + (this.dimensionArray[0][15] / 2 * (1 - this.step)) * this.dir;
            // left shoulder moves to spine
            this.objectArray[0][3]      =   this.objectArray[0][2] - (this.dimensionArray[0][15] / 2 * (1 - this.step)) * this.dir;
        }
    }

    rightLeg(rightUpperLeg, rightLowerLeg, rightFoot, rightToe){
        // RIGHT LEG AND FOOT ------------------------------------------------------//
        //angle right upper leg
        this.rightUpperLeg           =   rightUpperLeg;
        this.pivitArray[0][11]       =   this.pivitArray[0][11] + this.rightUpperLeg;
        this.objectArray[0][16]      =   this.objectArray[0][15] + this.dimensionArray[0][3] * cos(this.pivitArray[0][11]);
        this.objectArray[1][16]      =   this.objectArray[1][15] + this.dimensionArray[0][3] * sin(this.pivitArray[0][11]);

        //angle right lower leg                  
        this.righLowerLeg            = rightLowerLeg;
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
        this.objectArray[0][19]      =   this.objectArray[0][17] + this.dimensionArray[0][0] * cos(this.pivitArray[0][14]);
        this.objectArray[1][19]      =   this.objectArray[1][17] + this.dimensionArray[0][0] * sin(this.pivitArray[0][14]);
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