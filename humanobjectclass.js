

// varables
let mainCharacter;              // declare variable to represent the main

function setup(){
    createCanvas(500,500);

    mainCharacter               =   new HumanObject(250, 300, 2); // create the mainCharacter using the HumanObject class
    

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
        this.hMove                      =   0;      // hmove controls movement on the horisonal plane
        this.vMove                      =   0;      // hmove controls movement on the horisonal plane
        this.size                       =   size;    // scale the character

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

        // this required to nsure that a movement is complete even if no buttom is pressed
        this.turnLeftInMotion           =   false;
        this.fisrtWalkLeftInMotion      =   false;      

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

        ///////////////// THE NEXT SECTION DEFINES THE CO-ORDINATES OF THE PIVIT POINTS //////////////////////////////
        
        // construct the sckeleton assuming hMove = 0
        // when hMove = 0 right = objects right & left = objects left
       
        // left foot and leg
        let rightToeX                   =   xPos - hipWidth / 2;        
        let rightToeY                   =   yPos - 2;           // -2 allows for fresh underneath the toe
        let rightToeFootX               =   rightToeX;          // Toe - Foot pointX position is same when hMove = 0
        let rightToeFootY               =   rightToeY;          // Toe - Foot pointY position is same when hMove = 0
        let rightAnkleX                 =   rightToeX;          // Toe - Ankle pointX position is same when hMove = 0
        let rightAnkleY                 =   rightToeY;          // Toe - Ankle pointY position is same when hMove = 0
        let rightKneeX                  =   rightToeX;          // Knee is directly above the Ankle 
        let rightKneeY                  =   rightAnkleY - rightLowerLegDist;
        let rightHipX                   =   rightKneeX;         // hip point is directly above the knee
        let rightHipY                   =   rightKneeY - rightUpperLegDist;
        // right foot and leg
        let leftToeX                    =   xPos + hipWidth/2;        
        let leftToeY                    =   yPos - 2;           // -2 allows for fresh underneath the toe
        let leftToeFootX                =   leftToeX;           // Toe - Foot pointX position is same when hMove = 0
        let leftToeFootY                =   leftToeY;           // Toe - Foot pointY position is same when hMove = 0
        let leftAnkleX                  =   leftToeX;           // Toe - Ankle pointX position is same when hMove = 0
        let leftAnkleY                  =   leftToeY;           // Toe - Ankle pointY position is same when hMove = 0
        let leftKneeX                   =   leftToeX;           // Knee is directly above the Ankle 
        let leftKneeY                   =   leftAnkleY - leftLowerLegDist;
        let leftHipX                    =   leftKneeX;          // hip point is directly above the knee
        let leftHipY                    =   leftKneeY - leftUpperLegDist
        // spine, neck and head
        let spineHipX                   =   xPos;               // when hMove is 0 the spineHipX is in the centre
        let spineHipY                   =   rightHipY;
        let spineShoulderX              =   xPos;               // when hMove is 0 the spineShoulderX is in the centre
        let spineShoulderY              =   spineHipY - spineToShoulder;
        let shoulderNeckX               =   xPos;               // when hMove is 0 the spineShoulderX is in the centre              
        let shoulderNeckY               =   spineShoulderY;
        let neckHeadX                   =   xPos;               // when hMove is 0 the spineShoulderX is in the centre
        let neckHeadY                   =   shoulderNeckY - head;
        let headX                       =   neckHeadX;
        let headY                       =   neckHeadY - head;       
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

        this.turnLeftFromFront();
        this.takeFirstStepToleft();
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
    turnLeftFromFront(){

        // run animation if the conditions are met 
        if (keyCode == LEFT_ARROW || this.stateOfAnimation == true) {
            if(this.objectState == "front" || this.stateOfAnimation == true){
                this.turnLeftInMotion = true;
                // animate the object turning to its right from a front position
                stroke(255,255,255);
                fill(255);
                text("TURN RIGHT", 100, 150)
                let change                  =   0.04 * this.speed;
                this.step                   = this.step + change;

                if( this.step < 1.0){
                    // right toe turns
                    this.objectArray[0][19] =   this.objectArray[0][18] - this.dimensionArray[0][0] - (this.dimensionArray[0][0] * this.step);
                    // right ancle lifts
                    this.objectArray[1][17] =   this.objectArray[1][18] - 2 * innerWidth / screen.width * this.step; 
                    this.objectArray[0][17] =   this.objectArray[0][18] + sqrt(pow(this.dimensionArray[0][1],2) - pow(3 * this.size * this.step, 2));
                    // right knee stays above foot pivit point
                    this.objectArray[1][16] =   this.objectArray[1][18] - sqrt(pow(this.dimensionArray[0][2],2) - pow((this.objectArray[0][17] - this.objectArray[0][18]),2)); // right ancle turns
                    this.objectArray[1][15] =   this.objectArray[1][16] - this.dimensionArray[0][3];
                    // left hip drops down to same level as right hip 
                    this.objectArray[1][10] =   this.objectArray[1][15]; 
                    // move left hip to have the same X as the right hip
                    this.objectArray[0][10] =   this.objectArray[0][15] + this.dimensionArray[0][16] - (this.dimensionArray[0][16] * this.step)
                    // hip drops down to same level as left hip 
                    this.objectArray[1][9]  =   this.objectArray[1][10]
                    // move left spine to have the same X as the right hip 
                    this.objectArray[0][9]  =   this.objectArray[0][15] + this.dimensionArray[0][16] / 2 - (this.dimensionArray[0][16]/2 * this.step)
                    this.objectArray[0][2]  =   this.objectArray[0][9];
                    // move head to align with spine
                    this.objectArray[0][1]  =   this.objectArray[0][9];
                    this.objectArray[0][0]  =   this.objectArray[0][9];
                    // set spine and head hights
                    this.objectArray[1][2]  =   this.objectArray[1][9] - this.dimensionArray[0][12];
                    this.objectArray[1][1]  =   this.objectArray[1][2] - this.dimensionArray[0][13];
                    this.objectArray[1][0]  =   this.objectArray[1][1] - this.dimensionArray[0][14];
                    //sfift the left knee to align with the right knee
                    this.objectArray[1][11] =   this.objectArray[1][16];
                    this.objectArray[0][11] =   this.objectArray[0][16] + this.dimensionArray[0][11] - (this.dimensionArray[0][11] * this.step);
                    // align left ankle with right ankle
                    this.objectArray[1][12] =   this.objectArray[1][17];
                    this.objectArray[0][12] =   this.objectArray[0][17] + this.dimensionArray[0][12] - (this.dimensionArray[0][12] * this.step);
                    // align left foot with right foot
                    this.objectArray[1][13] =   this.objectArray[1][18];
                    this.objectArray[0][13] =   this.objectArray[0][12] - this.dimensionArray[0][5] - (this.dimensionArray[0][5] * this.step);
                    // align left toe with right toe
                    this.objectArray[1][14] =   this.objectArray[1][19];
                    this.objectArray[0][14] =   this.objectArray[0][13] - this.dimensionArray[0][4] - (this.dimensionArray[0][4] * this.step);
                    // align left shoulder with foot pivit point
                    this.objectArray[1][3]  =   this.objectArray[1][2];
                    this.objectArray[0][3]  =   this.objectArray[0][18] + this.dimensionArray[0][3] - (this.dimensionArray[0][3] * this.step);
                    // align right shoulder with foot pivit point
                    this.objectArray[1][6]  =   this.objectArray[1][2];
                    this.objectArray[0][6]  =   this.objectArray[0][18];
                    // left elbow
                    this.objectArray[0][4]  =   this.objectArray[0][3] + (40 * innerWidth / screen.width);
                    this.objectArray[1][4]  =   this.objectArray[1][3] + sqrt(pow(this.dimensionArray[0][11],2) - pow((20),2));
                    // left wrist
                    this.objectArray[0][5]  =   this.objectArray[0][4] - (50 * this.size) * this.step
                    this.objectArray[1][5]  =   this.objectArray[1][4] + sqrt(pow(this.dimensionArray[0][10],2) - pow((this.objectArray[0][5] - this.objectArray[0][14] ),2));
                    // right elbow
                    this.objectArray[0][7]  =   this.objectArray[0][6] + (8 * this.size) * this.step;
                    this.objectArray[1][7]  =   this.objectArray[1][6] + sqrt(pow(this.dimensionArray[0][9],2) - pow((10 * this.size),2));
                    // right writs
  
                }  
                if(this.step >1 ){
                    this.objectState = "stopleft";
                    this.turnLeftInMotion = false; 
                }                       
            }
        }
    }

        ////////////////////// ARRAYS REFERENCE LISTS ////////////////////////

        /* ------------- OBJECT-ARRAY ELEMENT POSTIONS -------------------- */
        // O - X-axes
        // 1 - Y-axes

        /* ------------- OBJECT-ARRAY ELEMENT POSTIONS -------------------- */
        // 0 - head pos
        // 1 - head to neck point
        // 2 - neck to torso point
        // ----------------------------
        // 3 - left shoulder
        // 4 - left elbow
        // 5 - left elbow
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
        // 15 right hip
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

    //-------------------------- METHOD TO TAKE FIST STEP GOING LEFT ---------------------------//
    takeFirstStepToleft(){
        if (keyCode == LEFT_ARROW || this.fisrtWalkLeftInMotion == true ) {
            if(this.objectState == "stopleft" || this.fisrtWalkLeftInMotion == true){
                this.fisrtWalkLeftInMotion = true;
                // animate the object turning to its right from a front position
                stroke(255,255,255)
                fill(255)
                text("STOP LEFT", 100, 150)
                let change  =   0.04 * this.speed;
                this.step = this.step + change;
                
                if( this.step < 1.0){
                console.log(this.step)
                }
            }
        }

    }

}