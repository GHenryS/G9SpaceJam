

// varables
let mainCharacter;              // declare variable to represent the main

function setup(){
    createCanvas(300,500);

    mainCharacter               =   new HumanObject(250, 300); // create the mainCharacter using the HumanObject class

}

function draw(){
    background(0,0,0);
    ellipse(200,200,10)
    mainCharacter.draw();

}

class HumanObject{
    // the constructor is like the setup function in P5
    constructor(xPos, yPos){
        // for this object the xPos and yPos would be at the bottom - centre of the character 
        this.xPos                       =   xPos;
        this.yPos                       =   yPos;
        this.hMove                      =   0;      // hmove controls movement on the horisonal plane
        this.vMove                      =   0;      // hmove controls movement on the horisonal plane
        this.size                       =   3;    // scale the character
        // if stationary is "yes" the character will stay in one postion on the screen - it is assumed the screen will move //
        // if stationary is "no" the character will accross the screen - it ias assumed the screen will be stationary
        this.stationary                 =   "yes"   // "no" or "yes"
        this.turn                       =   0;
        this.speed                      =   1;
        // set the starting stutus's of the object
        this.busyTurnLeft               =   3;  //set the starting status of turn right 
        this.busyTurnRight              =   3;  //set the starting status of turn right 
        this.upright                    =   3;  // 1 = laying down, 2 = on knees, 3 = standup
        // available object state "start", "turnleft", "walkleft", "stopleft"," turnright", "walkright", "stopright", "jumpup","jumpleft", "jumpright","climbUp", "climbdown"//  
        this.objectState                =   "start"


        this.objectArray                =   new Array();
        this.linkArray                  =   new Array();
        this.turnArray                  =   new Array();

        // private variables
        // create the sckeleton

        // distances for leg scheleton
        // leading right or left refers to the depth of the component on the Z-Axes
        let rightToeFootDist            =   5 * this.size;
        let rightFootFootDist           =   5 * this.size;
        let rightLowerLegDist           =   20 * this.size;
        let rightUpperLegDist           =   20 * this.size;

        let leftToeFootDist             =   5 * this.size;
        let leftleftFootDist            =   5 * this.size;
        let leftLowerLegDist            =   20 * this.size;
        let leftUpperLegDist            =   20 * this.size;

        // distances for arm scheleton
        let rightLowerArmDist           =   20 * this.size;
        let rightUpperArmDist           =   20 * this.size;

        let leftLowerArmDist            =   20 * this.size;
        let leftUpperArmDist            =   20 * this.size;

        // distances for spine, neck and head
        let spineToShoulder             =   30 * this.size;
        let neck                        =   5 * this.size;
        let head                        =   8 * this.size;  
        let hipWidth                    =   15 * this.size;
        let shoulderWidth               =   26 * this.size;

         /////////////////THE NEXT SECTION DEFINES THE CHARACTERS PIVIT POINTS ////////////////////////////////////////
        
        // construct the sckeleton assuming hMove = 0
        // when hMove = 0 right = objects right & left = objects left
       
        // left foot and leg
        let rightToeX                   =   xPos - hipWidth / 2;        
        let rightToeY                   =   yPos - 2;           // -2 allows for fresh underneath the toe
        let rightToeFootX               =   rightToeX;          // Toe - Foot pointX position is same when hMove = 0
        let rightToeFootY               =   rightToeY;          // Toe - Foot pointY position is same when hMove = 0
        let rightHealX                  =   rightToeX;          // Toe - heal pointX position is same when hMove = 0
        let rightHealY                  =   rightToeY;          // Toe - heal pointY position is same when hMove = 0
        let rightKneeX                  =   rightToeX;          // Knee is directly above the heal 
        let rightKneeY                  =   rightHealY - rightLowerLegDist;
        let rightHipX                   =   rightKneeX;         // hip point is directly above the knee
        let rightHipY                   =   rightKneeY - rightUpperLegDist;

        // right foot and leg
        let leftToeX                    =   xPos + hipWidth/2;        
        let leftToeY                    =   yPos - 2;           // -2 allows for fresh underneath the toe
        let leftToeFootX                =   leftToeX;           // Toe - Foot pointX position is same when hMove = 0
        let leftToeFootY                =   leftToeY;           // Toe - Foot pointY position is same when hMove = 0
        let leftHealX                   =   leftToeX;           // Toe - heal pointX position is same when hMove = 0
        let leftHealY                   =   leftToeY;           // Toe - heal pointY position is same when hMove = 0
        let leftKneeX                   =   leftToeX;           // Knee is directly above the heal 
        let leftKneeY                   =   leftHealY - leftLowerLegDist;
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
        let tempArray                   =   [];

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
        tempArray[12]                   =   leftHealX;          // left heal
        tempArray[13]                   =   leftToeFootX;       // left foot pivit point
        tempArray[14]                   =   leftToeX;           // left toe
        tempArray[15]                   =   rightHipX;          // right hip
        tempArray[16]                   =   rightKneeX;         // right knee
        tempArray[17]                   =   rightHealX;         // right heal
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
        tempArray[12]                   =   leftHealY;          // left heal
        tempArray[13]                   =   leftToeFootY;       // left foot pivit point
        tempArray[14]                   =   leftToeY;           // left toe
        tempArray[15]                   =   rightHipY;          // right hip
        tempArray[16]                   =   rightKneeY;         // right knee
        tempArray[17]                   =   rightHealY;         // right heal
        tempArray[18]                   =   rightToeFootY;      // right foot pivit point
        tempArray[19]                   =   rightToeY;          // right toe

        // push X co-ords into this.objectArray[0]
        this.objectArray.push(tempArray);

        ///////// CREATE AN ARRAY TO SIMULATE THE CHARACTER TURNING //////////////////

        // create a copy of the object array and add extra lines
        for(let i = 0; i < 14; i++){
            this.turnArray.push(this.objectArray[0]);       
        }
        for(let i = 0; this.objectArray[0].length; i++){
            let value1                  =   this.objectArray[0][i];
            let value2                  =   this.objectArray[1][i];
            this.turnArray[6][i]        =   value1;
            this.turnArray[7][i]        =   value1;
        }
        console.log(this.turnArray)
        // update co-ordinates data

       // this.turnArray[2][1][18]        =   this.turnArray[2][1][18] - 
        




        // change X
        //this.turnArray[1][18]           =   this.turnArray[0][19] - rightToeFootDist/3;  

        // clear the tempArray
        tempArray                       =   []; 

        // add dimentions to array


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
    // this is where you create methods/function to make your object do things when called to do something

    switchStationaryMode(){

        // switch characters to be stationary or screen or to move around the screen
        if( this.stationary = "yes"){
            this.stationary = "no";
        } else {
            this.stationary = "yes";
        }
    }

    move(){
        //////////////////// KEY EVENTS ////////////////////////////
        // check for axctive keyevent fist
        // if key events
        if(keyIsPressed === true){
            if (keyCode === LEFT_ARROW && this.status == "start") {
                this.status = "busyturnleft";
            } 
            if (keyCode === RIGHT_ARROW && this.status == "start") {
                this.status = "busyturnright";
            } 
            if (keyCode === LEFT_ARROW && this.status == "stopright") {
                this.status = "busyturnleft";
            } 
            if (keyCode === RIGHT_ARROW && this.status == "stopleft") {
                this.status = "busyturnright";
            } 
            if (keyCode === LEFT_ARROW && this.status == "stopleft") {
                this.status = "walkleft";
            } 
            if (keyCode === RIGHT_ARROW && this.status == "stopright") {
                this.status = "busywalkright";
            }
            // continue to walk left if already busy walking left
            if (keyCode === LEFT_ARROW && this.status == "walkleft") {
                this.status = "busywalkleft";
            }
            if (keyCode === RIGHT_ARROW && this.status == "walkright") {
                this.status = "busywalkright";
            }
        }
        // if no key events
        if(keyIsPressed === false && this.status == "moveright" ){
            this.status = "stopright";
        }
        if(keyIsPressed === false && this.status == "moveleft" ){
            this.status = "stopleft";
        }

        ///////////////////////// ANIMATIONS ////////////////////////////
        // left turn animation
        if(this.objectState = "stopleft"){
            // weight has shifted to the objects right - face towards left of screen


        }
        if(this.objectState = "stopright"){
            // weight has shifted to the objects left - face towards right of screen

        }       

        if(this.status == "busyturnleft"){
            // 1 is facing left and 5 is facing right

            if(this.busyTurnLeft == 1 ){
                //

            } else if (this.busyTurnLeft == 2 ){



            } else if (this.busyTurnLeft == 3 ){


            } else if (this.busyTurnLeft == 4 ){

            } else if (this.busyTurnLeft == 5 ){

        }

           

         
            // on completion set statu to "stopleft"
        }
        if(this.status == "busyturnright"){
         
            // on completion set status to "stopright"
        } 
        if(this.status == "busywalkleft"){
         
            // on completion set status to "walkleft"
        }
        if(this.status == "busywalkright"){
         
            // on completion set status to "walkright"
        }
        
    }

    draw(){

        this.move();

        // check for movement

        let value1;
        let value2;
        stroke(100,255,100);
        for(let i = 0; i < this.linkArray.length; i++){
            value1          =   this.linkArray[i][0];
            value2          =   this.linkArray[i][1];

        line(this.objectArray[0][value1],this.objectArray[1][value1], this.objectArray[0][value2], this.objectArray[1][value2]);
        fill(0,255,0);
        ellipse(this.objectArray[0][value1], this.objectArray[1][value1], 4);
        noFill();
        ellipse(this.objectArray[0][0], this.objectArray[1][0], 30, 40);
        }
            
    }

}