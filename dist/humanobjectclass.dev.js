"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HumanObject =
/*#__PURE__*/
function () {
  // the constructor is like the setup function in P5
  function HumanObject(xPos, yPos, size) {
    _classCallCheck(this, HumanObject);

    ///////////////// THE NEXT SECTION DECLARES AND SETS THE STARTING VARIABLES ////////////////////////
    // for this object the xPos and yPos would be at the bottom - centre of the character 
    this.xPos = xPos; // set the initial Y position for the object

    this.yPos = yPos; // set the initial Y position for the object

    this.size = size; // scale the character
    // if stationary is "yes" the character will stay in one postion on the screen - it is assumed the screen will move //
    // if stationary is "no" the character will accross the screen - it ias assumed the screen will be stationary

    this.stationary = "yes"; // "no" or "yes"

    this.turn = 0;
    this.moveXrate = 1;
    this.change = 0.03; // determines the rate of animation

    this.step = 1; // DO NOT CHANGE THIS VALUE - counter to control animatioon
    // SETTING STANDARD CONTROL KEYS
    // can be changed from outside by asigning new values

    this.leftKey = 37; // lEFT_ARROW

    this.rightKey = 39; // RIGHT_ARROW

    this.upKey = 38; // UP_ARROW

    this.downKey = 40; // DOWN_ARROW

    this.punchKey = 68; // d

    this.kickKey = 83; // s

    this.shootKey = 65; // a
    // SETTING THE INITIAL OBJECT STATE (LOOKING TO THE FRONT)
    // can can be changed from outside by asigning new values
    // available object state "start", "turnleft", "walkleft", "stopleft"," turnright", "walkright", "stopright", "jumpup","jumpleft", "jumpright","climbUp", "climbdown"//  

    this.objectState = "front"; ///////////////// THE NEXT SECTION DECLARES THE FUNCTIONS ARRAY /////////////////////////////////////        

    this.aniInputArray = new Array(); // Array to add the target angles to move limbs to

    this.moveLinkArray = new Array(); // Array to show to link current angles to target angles 

    this.objectArray = new Array(); // Main Array to store the objects X and Y co-ords

    this.linkArray = new Array(); // Array to link control points to each other

    this.dimensionArray = new Array(); // Array which contains the distances between linked points

    this.pivitArray = new Array(); // Array containing the rotation steps used during animation

    this.aniArray = new Array(); // Array used to store the calculated differences between rotation points

    this.aniStartArray = new Array(); // stores the starting points for each animantion
    // SEETING THE INITIAL INTERNAL STATES FOR EACH ANIMATION
    // this required to ensure that a movement is complete even if no buttom is pressed

    this.turnLeftInMotion = false;
    this.turnRightInMotion = false;
    this.stepToLeftFirst = false;
    this.stepToLeft1 = false;
    this.stepToLeft2 = false;
    this.stopToLeft1 = false;
    this.stopToLeft2 = false;
    this.stepToRightFirst = false;
    this.stepToRight1 = false;
    this.stepToRight2 = false;
    this.stopToRight1 = false;
    this.stopToRight2 = false;
    this.turnFrontFromLeft = false;
    this.turnFrontFromRight = false; // THE NEXT SECTION ASSIGNS DIMENTIONS TO THE BODY PARTS
    // and adds the dimentions to the dimention array

    this.rightToeFootDist = 4 * this.size;
    this.rightFootFootDist = 5 * this.size;
    this.rightLowerLegDist = 20 * this.size;
    this.rightUpperLegDist = 20 * this.size;
    this.leftToeFootDist = 4 * this.size;
    this.leftFootFootDist = 5 * this.size;
    this.leftLowerLegDist = 20 * this.size;
    this.leftUpperLegDist = 20 * this.size;
    this.rightLowerArmDist = 20 * this.size;
    this.rightUpperArmDist = 15 * this.size;
    this.leftLowerArmDist = 20 * this.size;
    this.leftUpperArmDist = 15 * this.size;
    this.spineToShoulder = 27 * this.size;
    this.neck = 7 * this.size;
    this.head = 9 * this.size;
    this.hipWidth = 9 * this.size;
    this.shoulderWidth = 26 * this.size; // load the variable into an array so that they can be used outside if the constructor       

    var tempArray = [];
    tempArray = [this.rightToeFootDist, this.rightFootFootDist, this.rightLowerLegDist, this.rightUpperLegDist, this.leftToeFootDist, this.leftFootFootDist, this.leftLowerLegDist, this.leftUpperLegDist, this.rightLowerArmDist, this.rightUpperArmDist, this.leftLowerArmDist, this.leftUpperArmDist, this.spineToShoulder, this.neck, this.head, this.shoulderWidth, this.hipWidth];
    this.dimensionArray.push(tempArray); ///////////////// THE NEXT SECTION DEFINES THE CO-ORDINATES OF THE PIVIT POINTS //////////////////////////////
    // spine, this.neck and this.head

    var spineHipX = this.xPos;
    var spineHipY = this.yPos;
    var spineShoulderX = spineHipX;
    var spineShoulderY = spineHipY - this.spineToShoulder;
    var shoulderNeckX = spineHipX;
    var shoulderNeckY = spineShoulderY;
    var neckHeadX = spineHipX;
    var neckHeadY = shoulderNeckY - this.head;
    var headX = neckHeadX;
    var headY = neckHeadY - this.head; // right foot and leg

    var rightHipX = spineHipX - this.hipWidth / 2;
    var rightHipY = spineHipY;
    var rightKneeX = rightHipX;
    var rightKneeY = rightHipY + this.rightUpperLegDist;
    var rightAnkleX = rightKneeX;
    var rightAnkleY = rightKneeY + this.rightLowerLegDist;
    var rightToeFootX = rightAnkleX;
    var rightToeFootY = rightAnkleY;
    var rightToeX = rightToeFootX;
    var rightToeY = rightToeFootY; // -2 allows for fresh underneath the toe
    // left foot and leg

    var leftHipX = spineHipX + this.hipWidth / 2;
    var leftHipY = spineHipY;
    var leftKneeX = leftHipX;
    var leftKneeY = leftHipY + this.leftUpperLegDist;
    var leftAnkleX = leftKneeX;
    var leftAnkleY = leftKneeY + this.leftLowerLegDist;
    var leftToeFootX = leftAnkleX; // Toe - Foot pointX position is same when hMove = 0

    var leftToeFootY = leftAnkleY; // Toe - Foot pointY position is same when hMove = 0

    var leftToeX = leftToeFootX;
    var leftToeY = leftToeFootY; // -2 allows for fresh underneath the toe
    // left arm

    var rightShoulderX = spineShoulderX - this.shoulderWidth / 2;
    var rightShoulderY = spineShoulderY;
    var rightElbowX = rightShoulderX;
    var rightElbowY = rightShoulderY + this.rightUpperArmDist;
    var rightWristX = rightElbowX;
    var rightWristY = rightElbowY + this.rightLowerArmDist; // right arm

    var leftShoulderX = spineShoulderX + this.shoulderWidth / 2;
    var leftShoulderY = spineShoulderY;
    var leftElbowX = leftShoulderX;
    var leftElbowY = leftShoulderY + this.leftUpperArmDist;
    var leftWristX = leftElbowX;
    var leftWristY = leftElbowY + this.leftLowerArmDist; // create an array to store pivit points

    tempArray = []; // add X co-ords to tempArray

    tempArray[0] = headX; // this.head pos

    tempArray[1] = neckHeadX; // this.head to this.neck point

    tempArray[2] = shoulderNeckX; // this.neck to torso point

    tempArray[3] = leftShoulderX; // left shoulder

    tempArray[4] = leftElbowX; // left elbow

    tempArray[5] = leftWristX; // left elbow

    tempArray[6] = rightShoulderX; // right shoulder

    tempArray[7] = rightElbowX; // right elbow 

    tempArray[8] = rightWristX; // right wrist

    tempArray[9] = spineHipX; // spine to hip joint

    tempArray[10] = leftHipX; // left hip

    tempArray[11] = leftKneeX; // left knee

    tempArray[12] = leftAnkleX; // left Ankle

    tempArray[13] = leftToeFootX; // left foot pivit point

    tempArray[14] = leftToeX; // left toe

    tempArray[15] = rightHipX; // right hip

    tempArray[16] = rightKneeX; // right knee

    tempArray[17] = rightAnkleX; // right Ankle

    tempArray[18] = rightToeFootX; // right foot pivit point

    tempArray[19] = rightToeX; // right toe
    // push X co-ords into this.objectArray[0]

    this.objectArray.push(tempArray); // clear the tempArray

    tempArray = []; // add Y co-ords to tempArray

    tempArray[0] = headY; // this.head pos

    tempArray[1] = neckHeadY; // this.head to this.neck point

    tempArray[2] = shoulderNeckY; // this.neck to torso point

    tempArray[3] = leftShoulderY; // left shoulder

    tempArray[4] = leftElbowY; // left elbow

    tempArray[5] = leftWristY; // left elbow

    tempArray[6] = rightShoulderY; // right shoulder

    tempArray[7] = rightElbowY; // right elbow 

    tempArray[8] = rightWristY; // right wrist

    tempArray[9] = spineHipY; // spine to hip joint

    tempArray[10] = leftHipY; // left hip

    tempArray[11] = leftKneeY; // left knee

    tempArray[12] = leftAnkleY; // left Ankle

    tempArray[13] = leftToeFootY; // left foot pivit point

    tempArray[14] = leftToeY; // left toe

    tempArray[15] = rightHipY; // right hip

    tempArray[16] = rightKneeY; // right knee

    tempArray[17] = rightAnkleY; // right Ankle

    tempArray[18] = rightToeFootY; // right foot pivit point

    tempArray[19] = rightToeY; // right toe
    // push X co-ords into this.objectArray[0]

    this.objectArray.push(tempArray); ///////// CREATE AN ARRAY TO LINK BODY PARTS TOGETHER //////////////////

    this.linkArray = [[0, 1], [1, 2], [2, 3], [2, 6], [3, 4], [4, 5], [6, 7], [7, 8], [2, 9], [9, 10], [9, 15], [10, 11], [11, 12], [12, 13], [13, 14], [15, 16], [16, 17], [17, 18], [18, 19]]; ///////////////////////// CONSTRUCT THE ANIMATION ARRAY //////////////////////
    //////// ANI-INPUT-ARRAY LINE ELEMENTS
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
    // 0 FACING FRONT
    // 1 FACING LEFT
    // 2 LEFT - LEFT FOOT FORWARD
    // 3 LEFT - RIGHT FOOT FORWARD
    // 4 FACING RIGHT
    // 5 RIGHT - LEFT FOOT FORWARD
    // 6 RIGHT - RIGHT FOOT FORWARD

    var C3 = round(1.5 * PI, 4);
    var C2 = round(PI, 2);
    var C1 = round(0.5 * PI, 4); //                        0     1     2     3     4     5     6     7     8     9    10    11    12    13     14

    this.aniInputArray.push([C3, C3, C3, C1, C1, C1, C1, C1, C1, C1, C1, C1, C1, C1, C1]); // 0

    this.aniInputArray.push([C3, 4.7, 4.6, 1.3, 2.2, 1.3, 2.2, 1.8, 1.5, C2, C2, 1.8, 1.5, C2, C2]); // 1

    this.aniInputArray.push([C3, 4.7, 4.6, 1.0, 1.4, 2.2, 2.3, 2.3, 1.9, 2.5, 3.0, 1.0, 0.9, 1.6, 2.0]); // 2

    this.aniInputArray.push([C3, 4.7, 4.6, 2.0, 2.3, 1.0, 1.4, 1.0, 0.9, 2.0, 3.0, 2.3, 1.9, 2.5, 3.0]); // 3

    this.aniInputArray.push([C3, 4.73, 4.80, 1.84, 0.94, 1.84, 0.94, 1.34, 1.64, 0.0, 0.0, 1.34, 1.64, 0.3, 0.0]); // 4

    this.aniInputArray.push([C3, 4.73, 4.82, 2.3, 1.74, 1.14, 0.84, 0.6, 1.24, 1.14, 0.14, 2.3, 2.45, 1.14, 0.14]); // 5

    this.aniInputArray.push([C3, 4.73, 4.82, 1.14, 0.84, 2.3, 1.74, 2.3, 2.45, 1.14, 0.14, 0.6, 1.24, 1.14, 0.14]); // 6

    this.pivitArray = this.aniInputArray[0]; //............ ANIMATION ................//

    this.moveLinkArray = [[1, 0], // 0 - turn from front to left  
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
    [0, 1], // 12 - turn from facing LEFT to FRONT
    [0, 4] // 13 - turn from facing RIGHT to FRONT
    ];
    /*
            // construct the aniArray - first run
            for(let i = 0; i < this.moveLinkArray.length; i++){
                let arrayLine = this.aniInputArray[0];
                let tempArray       =   [];
                let piv             =   this.moveLinkArray[i][1];
                let val             =   this.aniInputArray[piv];
                this.aniStartArray.push(val)
                for( let u = 0; u < arrayLine.length; u++){
                    tempArray[u] = (this.aniInputArray[this.moveLinkArray[i][0]][u] - this.aniInputArray[this.moveLinkArray[i][1]][u]);
                }
                this.aniArray.push(tempArray)          
            } 
            this.pivitArray.push(this.aniInputArray[0])
    */
    // THIS SECTIONS SETSUP THE INITIAL ROTATION DATA IN THE PIVIT-ARRAY
    // add pivitpoints to the pivitArray 
    //this.pivitArray.push(this.aniInputArray[0]);
    // add a second line to the pivitArray (this is only a place holder to prevent the first line from being deleted
    //this.pivitArray.push(this.aniInputArray[0]);
    // PIVIT-ARRAY  //
    // pivitArray[0] - contains the angles used to draw the object
    // pivitArray[1] - contains the calculates increments to adjust the pivitArray[0] elements by each time the move method mis called
    // 0 - neck to head
    // 1 - shoulder to this.neck
    // 2 - hip to shoulder/this.neck
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
  } //++++++++++++++++++++ END OF THE CONSTRUCTOR ++++++++++======================+++++++++//
  ////////////////////// OBJECTS METHODS TO FOLLOW ////////////////////////////////////////
  //++++++++++++++++++++ START OF CLASS METHODS +++++++++++++++++++//
  // this may be usefull when not using P5.play
  // not currently being used
  // functionality haqve not been incorporated into th code


  _createClass(HumanObject, [{
    key: "switchStationaryMode",
    value: function switchStationaryMode() {
      // switch characters to be stationary or screen or to move around the screen
      if (this.stationary = "yes") {
        this.stationary = "no";
      } else {
        this.stationary = "yes";
      }
    } //------------------THIS METHOD MANAGES THE OBJECTS STATES ----------------------------//
    // only methods are called which would naturally follow the current object state
    // this minimises the amount of code which nees to be run  (improves respons time)
    // it also minimise the risk of code conflict

  }, {
    key: "move",
    value: function move() {
      // keyStates are used to run or stop animations
      console.log(this.objectState); // front

      if (this.objectState == "front") {
        if (keyIsPressed == true && keyCode == this.leftKey && this.turnLeftInMotion == false) {
          this.faceLeftFromFront();
        }

        if (keyIsPressed == true && keyCode == this.rightKey && this.turnRightInMotion == false) {
          this.faceRightFromFront();
        }

        if (this.turnLeftInMotion == true) {
          this.faceLeftFromFront();
        }

        if (this.turnRightInMotion == true) {
          this.faceRightFromFront();
        }
      } // going right........................


      if (this.objectState == "faceright") {
        if (this.stepToRightFirst == true) {
          this.firstStepToRight();
        }

        if (keyIsDown(this.rightKey)) {
          this.firstStepToRight();
        }

        if (keyIsDown(this.leftKey)) {
          this.turnToFrontFromRight();
        }
      } // first step - left foot forward


      if (this.objectState == "firstright") {
        this.firstStepToRight();
      } // walking right left foot forward


      if (this.objectState == "walkright2") {
        this.step2ToRight();
      } // walking right left foot forward


      if (this.objectState == "walkright1") {
        this.step1ToRight();
      } // left foot forwrd


      if (this.objectState == "stopright1") {
        this.stopFaceRight1();
      } // right foot forward


      if (this.objectState == "stopright2") {
        this.stopFaceRight2();
      } // turn to front from right


      if (this.objectState == "frontfromright") {
        this.turnToFrontFromRight();
      } // going left............................


      if (this.objectState == "faceleft") {
        if (this.stepToLeftFirst == true) {
          this.firstStepToleft();
        }

        if (keyIsDown(this.leftKey)) {
          this.firstStepToleft();
        }

        if (keyIsDown(this.rightKey)) {
          this.turnToFrontFromLeft();
        }
      } // first step - left foot forwrd


      if (this.objectState == "firstleft") {
        this.firstStepToleft();
      }

      if (this.objectState == "walkleft2") {
        this.step1Toleft();
      }

      if (this.objectState == "walkleft1") {
        this.step2Toleft();
      }

      if (this.objectState == "stopleft1") {
        this.stopFaceLeft1();
      } // right foot forward


      if (this.objectState == "stopleft2") {
        this.stopFaceLeft2();
      }
    } ///////////////////////////////////////////////////////////////////////////////////////////////////
    ///////// THE METHOD CALLED FROM OUTSIDE OF THE CLASS TO MAKE IT ALL HAPPEN ///////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////

  }, {
    key: "draw",
    value: function draw() {
      this.move(); // run the calculations to update animations

      this.makeAvailable(); // makes data available to be used outside of the class

      this.addBody(); //
    }
  }, {
    key: "makeAvailable",
    value: function makeAvailable() {
      this.xPos = this.objectArray[0][9];
      this.yPos = this.objectArray[1][9];
    } //////////////////////////// THE NEXT SECTION HANDLES WALKING TO LEFT ///////////////////////////////
    //-------------------------- METHOD TO TURN FROM FRONT POSITION TO LEFT ---------------------------//

  }, {
    key: "updatePivitArray",
    value: function updatePivitArray(astart, astop, hipStart, hipStop) {
      this.astart = astart;
      this.astop = astop;
      this.hipStart = hipStart;
      this.hipStop = hipStop;
      var animationStart = this.aniInputArray[this.astart];
      var animationStop = this.aniInputArray[this.astop]; // calculate the rotation angle change

      var stepChangeHoldArray = [];

      for (var i = 0; i < animationStart.length; i++) {
        stepChangeHoldArray[i] = round((animationStop[i] - animationStart[i]) * (1 - this.step), 4);
      }

      console.log(stepChangeHoldArray); // add the new angles to the pivit array

      this.pivitArray = [];

      for (var _i = 0; _i < animationStart.length; _i++) {
        this.pivitArray[_i] = round(animationStart[_i] + stepChangeHoldArray[_i], 2);
      }

      console.log(this.pivitArray);

      if (this.objectState == "front") {
        this.objectArray[0][15] = this.objectArray[0][9] - this.dimensionArray[16] / 2;
        this.objectArray[0][10] = this.objectArray[0][9] + this.dimensionArray[16] / 2;
        this.objectArray[0][6] = this.objectArray[0][2] - this.dimensionArray[16] / 2;
        this.objectArray[0][3] = this.objectArray[0][2] + this.dimensionArray[16] / 2;
      } else {
        this.objectArray[0][15] = this.objectArray[0][9];
        this.objectArray[0][10] = this.objectArray[0][9];
        this.objectArray[0][6] = this.objectArray[0][2];
        this.objectArray[0][3] = this.objectArray[0][2];
      }
    }
  }, {
    key: "faceLeftFromFront",
    value: function faceLeftFromFront() {
      // run animation if the conditions are met 
      if (this.turnLeftInMotion == false) {
        this.dir = -1;
        this.step = 1;
        this.turnLeftInMotion = true;
      }

      if (this.turnLeftInMotion == true) {
        this.updatePivitArray(0, 1);
        this.callForAnimation();
        this.step = this.step - this.change;
      }

      if (this.step < 0) {
        this.turnRightInMotion = false;
        this.objectState = "faceleft";
      }
    } //-------------------------- METHOD TO TURN FROM FRONT POSITION TO RIGHT ---------------------------//

  }, {
    key: "faceRightFromFront",
    value: function faceRightFromFront() {
      // run animation if the conditions are met 
      if (this.turnRightInMotion == false) {
        this.dir = 1;
        this.step = 1;
        this.turnRightInMotion = true;
      }

      if (this.turnRightInMotion == true) {
        this.updatePivitArray(0, 4);
        this.callForAnimation();
        this.step = this.step - this.change;
      }

      if (this.step < 0) {
        this.turnRightInMotion = false;
        this.objectState = "faceright";
      }

      console.log("facing right from front");
    } //-------------------------- METHOD TO TURN FROM FRONT POSITION TO RIGHT ---------------------------//

  }, {
    key: "turnToFrontFromLeft",
    value: function turnToFrontFromLeft() {
      // run animation if the conditions are met 
      if (this.turnFrontFromLeft == false) {
        this.dir = 1;
        this.step = 1;
        this.turnFrontFromLeft = true;
      }

      if (this.turnFrontFromLeft == true) {
        this.updatePivitArray(1, 0);
        this.callForAnimation();
        this.step = this.step - this.change;
      }

      if (this.step < 0) {
        this.turnFrontFromLeft = false;
        this.objectState = "front";
      }

      console.log("facing front from left");
    } //-------------------------- METHOD TO TURN FROM FRONT POSITION TO RIGHT ---------------------------//

  }, {
    key: "turnToFrontFromRight",
    value: function turnToFrontFromRight() {
      // run animation if the conditions are met 
      if (this.turnFrontFromRight == false) {
        this.dir = 0;
        this.step = 1;
        this.turnFrontFromRight = true;
      }

      if (this.turnFrontFromRight == true) {
        this.updatePivitArray(4, 0);
        this.callForAnimation();
        this.step = this.step - this.change;
      }

      if (this.step < 0) {
        this.turnFrontFromRight = false;
        this.objectState = "front";
      }

      console.log("facing front from right");
    } //-------------------------- TAKE FIRST STEP FROM STAND STILL POSITION ---------------------------//

  }, {
    key: "firstStepToleft",
    value: function firstStepToleft() {
      // run animation if the conditions are met 
      if (this.stepToLeftFirst == false) {
        this.dir = 0;
        this.step = 1;
        this.stepToLeftFirst = true;
      }

      if (this.stepToLeftFirst == true) {
        this.updatePivitArray(1, 3);
        this.callForAnimation();
        this.moveObjectToLeft();
        this.step = this.step - this.change;
      }

      if (this.step < 0) {
        this.stepToLeftFirst = false;

        if (keyIsDown(this.leftKey)) {
          this.objectState = "walkleft2";
        } else {
          this.objectState = "stopleft2";
        }
      }

      console.log(" fisrt step to the left");
    } //-------------------------- TAKE FIRST STEP FROM STAND STILL POSITION ---------------------------//

  }, {
    key: "firstStepToRight",
    value: function firstStepToRight() {
      // run animation if the conditions are met
      if (this.stepToRightFirst == false) {
        this.dir = 0;
        this.step = 1;
        this.stepToRightFirst = true;
      }

      if (this.stepToRightFirst == true) {
        this.updatePivitArray(4, 5);
        this.callForAnimation();
        this.moveObjectToRight();
        this.step = this.step - this.change;
      }

      if (this.step < 0) {
        this.stepToRightFirst = false;

        if (keyIsDown(this.rightKey)) {
          this.objectState = "walkright1";
        } else {
          this.objectState = "stopright1";
        }
      }
    } //-------------------------- METHOD TO WALK TO LEFT ---------------------------//

  }, {
    key: "step1Toleft",
    value: function step1Toleft() {
      // END WITH RIGHT FOOT FORWARD - FULL STEP
      // run animation if the conditions are met
      if (this.stepToLeft1 == false) {
        this.dir = 0;
        this.step = 1;
        this.stepToLeft1 = true;
      }

      if (this.stepToLeft1 == true) {
        this.updatePivitArray(2, 3);
        this.callForAnimation();
        this.moveObjectToLeft();
        this.step = this.step - this.change;
      }

      if (this.step < 0) {
        this.stepToLeft1 = false;

        if (keyIsDown(this.leftKey)) {
          this.objectState = "walkleft1";
        } else {
          this.objectState = "stopleft2";
        }
      }

      console.log(" Walk 1 to the left");
    } //-------------------------- METHOD TO WALK TO RIGHT ---------------------------//

  }, {
    key: "step1ToRight",
    value: function step1ToRight() {
      // END WITH RIGHT FOOT FORWARD - FULL STEP
      // run animation if the conditions are met
      if (this.stepToRight1 == false) {
        this.dir = 0;
        this.step = 1;
        this.stepToRight1 = true;
      }

      if (this.stepToRight1 == true) {
        this.updatePivitArray(6, 5);
        this.callForAnimation();
        this.moveObjectToRight();
        this.step = this.step - this.change;
      }

      if (this.step < 0) {
        this.stepToRight1 = false;

        if (keyIsDown(this.rightKey)) {
          this.objectState = "walkright2";
        } else {
          this.objectState = "stopright1";
        }
      }

      console.log(" Walk 1 to the right");
    } //-------------------------- METHOD TO WALK TO LEFT ---------------------------//

  }, {
    key: "step2Toleft",
    value: function step2Toleft() {
      // END WITH LEFT FOOT FORWARD - FULL STEP
      // run animation if the conditions are met
      if (this.stepToLeft2 == false) {
        this.dir = 0;
        this.step = 1;
        this.stepToLeft2 = true;
      }

      if (this.stepToLeft2 == true) {
        this.updatePivitArray(3, 2);
        this.callForAnimation();
        this.moveObjectToLeft();
        this.step = this.step - this.change;
      }

      if (this.step < 0) {
        this.stepToLeft2 = false;

        if (keyIsDown(this.leftKey)) {
          this.objectState = "walkleft2";
        } else {
          this.objectState = "stopleft1";
        }
      }

      console.log(" Walk 2 to the left");
    } //-------------------------- METHOD TO WALK TO RIGHT ---------------------------//

  }, {
    key: "step2ToRight",
    value: function step2ToRight() {
      // END WITH RIGHT FOOT FORWARD - FULL STEP
      // run animation if the conditions are met
      if (this.stepToRight2 == false) {
        this.dir = 0;
        this.step = 1;
        this.stepToRight2 = true;
      }

      if (this.stepToRight2 == true) {
        this.updatePivitArray(5, 6);
        this.callForAnimation();
        this.moveObjectToRight();
        this.step = this.step - this.change;
      }

      if (this.step < 0) {
        this.stepToRight2 = false;

        if (keyIsDown(this.rightKey)) {
          this.objectState = "walkright1";
        } else {
          this.objectState = "stopright2";
        }
      }
    } //-------------------------- METHOD TO STOP WALKING TO LEFT - LEFT FOOT ---------------------------//

  }, {
    key: "stopFaceLeft1",
    value: function stopFaceLeft1() {
      this.step = this.step - this.change; // check if the routine is run for the first time

      if (this.stopToLeft1 == false) {
        this.step = 1;
        this.stopToLeft1 = true;
      } // set this method to true to make it auto run until the end of the routine 


      this.updatePivitArray(0, 1);
      this.callForAnimation();
      this.callForAnimation();

      if (this.step < 0) {
        this.objectState = "faceleft";
        this.stopToLeft1 = false;
      }
    } //-------------------------- METHOD TO STOP WALKING TO RIGHT - LEFT FOOT ---------------------------//

  }, {
    key: "stopFaceRight1",
    value: function stopFaceRight1() {
      this.step = this.step - this.change; // check if the routine is run for the first time

      if (this.stopToRight1 == false) {
        this.step = 1;
        this.stopToRight1 = true;
      } // set this method to true to make it auto run until the end of the routine 


      this.updatePivitArray(5, 4);
      this.callForAnimation();
      this.callForAnimation();

      if (this.step < 0) {
        this.objectState = "faceright";
        this.stopToRight1 = false;
      }
    } //-------------------------- METHOD TO STOP WALKING TO LEFT - RIGHT FOOT ---------------------------//

  }, {
    key: "stopFaceLeft2",
    value: function stopFaceLeft2() {
      this.step = this.step - this.change; // check if the routine is run for the first time

      if (this.stopToLeft2 == false) {
        this.step = 1;
        this.stopToLeft2 = true;
      } // set this method to true to make it auto run until the end of the routine


      this.updatePivitArray(3, 1);
      this.callForAnimation();
      this.callForAnimation();

      if (this.step < 0) {
        this.objectState = "faceleft";
        this.stopToLeft2 = false;
      }
    } //-------------------------- METHOD TO STOP WALKING TO RIGHT - RIGHT FOOT ---------------------------//

  }, {
    key: "stopFaceRight2",
    value: function stopFaceRight2() {
      this.step = this.step - this.change; // check if the routine is run for the first time

      if (this.stopToRight2 == false) {
        this.step = 1;
        this.stopToRight2 = true;
      } // set this method to true to make it auto run until the end of the routine 


      this.updatePivitArray(6, 4);
      this.callForAnimation();
      this.callForAnimation();

      if (this.step < 0) {
        this.objectState = "faceright";
        this.stopToRight2 = false;
      }
    } ////////////////////////////////////// SUB METHODS ///////////////////////////////////////////////////////

  }, {
    key: "callForAnimation",
    value: function callForAnimation() {
      // rotation will not required in most animations
      // if the are required they must be added in this order
      this.rotateObjectHips(this.dir); // 1 = rotation to LEFT, -1 = rotation to RIGHT

      this.torso(this.pivitArray[2], this.pivitArray[1], this.pivitArray[0]); // pivitPoint rotation (spine, this.neck, this.head)

      this.rotateObjectShoulders(this.dir); // 1 = rotation to LEFT, -1 = rotation to RIGHT, 0 = NO rotation

      this.rightLeg(this.pivitArray[11], this.pivitArray[12], this.pivitArray[13], this.pivitArray[14]); // pivitPoint rotation (rightUpperLeg, rightLowerLeg, rightFoot, rightToe)

      this.leftLeg(this.pivitArray[7], this.pivitArray[8], this.pivitArray[9], this.pivitArray[10]); // pivitPoint rotation (leftUpperLeg, leftLowerLeg, leftFoot, leftToe)

      this.leftArm(this.pivitArray[3], this.pivitArray[4]); // pivitPoint rotation (leftUpperArm, leftLowerArm)

      this.rightArm(this.pivitArray[5], this.pivitArray[6]); // pivitPoint rotation (rightUpperArm, rightLowerArm)        
    }
  }, {
    key: "torso",
    value: function torso(spine, neck, head) {
      //angle spine
      this.objectArray[0][2] = this.objectArray[0][9] + this.dimensionArray[0][12] * cos(this.pivitArray[2]);
      this.objectArray[1][2] = this.objectArray[1][9] + this.dimensionArray[0][12] * sin(this.pivitArray[2]); //angle shoulder to this.neck

      this.objectArray[0][1] = this.objectArray[0][2] + this.dimensionArray[0][13] * cos(this.pivitArray[1]);
      this.objectArray[1][1] = this.objectArray[1][2] + this.dimensionArray[0][13] * sin(this.pivitArray[1]); //angle this.neck to this.head

      this.objectArray[0][0] = this.objectArray[0][1] + this.dimensionArray[0][14] * cos(this.pivitArray[0]);
      this.objectArray[1][0] = this.objectArray[1][1] + this.dimensionArray[0][14] * sin(this.pivitArray[0]);
    }
  }, {
    key: "rotateObjectHips",
    value: function rotateObjectHips(left_right) {
      this.dir = left_right; // right hip moves to spine

      this.objectArray[0][15] = this.objectArray[0][9] - this.dimensionArray[0][16] / 2 * this.step * this.dir; // left hip moves to spine

      this.objectArray[0][10] = this.objectArray[0][9] + this.dimensionArray[0][16] / 2 * this.step * this.dir;
    }
  }, {
    key: "rotateObjectShoulders",
    value: function rotateObjectShoulders(left_right) {
      this.dir = left_right; // right hip moves to spine

      this.objectArray[0][6] = this.objectArray[0][2] + this.dimensionArray[0][15] / 2 * this.step * this.dir; // left shoulder moves to spine

      this.objectArray[0][3] = this.objectArray[0][2] - this.dimensionArray[0][15] / 2 * this.step * this.dir;
    }
  }, {
    key: "rightLeg",
    value: function rightLeg(rightUpperLeg, rightLowerLeg, rightFoot, rightToe) {
      // RIGHT LEG AND FOOT ------------------------------------------------------//
      //angle right upper leg
      this.objectArray[0][16] = this.objectArray[0][15] + this.dimensionArray[0][3] * cos(this.pivitArray[11]);
      this.objectArray[1][16] = this.objectArray[1][15] + this.dimensionArray[0][3] * sin(this.pivitArray[11]); //angle right lower leg                  

      this.objectArray[0][17] = this.objectArray[0][16] + this.dimensionArray[0][2] * cos(this.pivitArray[12]);
      this.objectArray[1][17] = this.objectArray[1][16] + this.dimensionArray[0][2] * sin(this.pivitArray[12]); //angle right foot

      this.objectArray[0][18] = this.objectArray[0][17] + this.dimensionArray[0][1] * cos(this.pivitArray[13]);
      this.objectArray[1][18] = this.objectArray[1][17] + this.dimensionArray[0][1] * sin(this.pivitArray[13]); //angle right toe

      this.objectArray[0][19] = this.objectArray[0][18] + this.dimensionArray[0][0] * cos(this.pivitArray[14]);
      this.objectArray[1][19] = this.objectArray[1][18] + this.dimensionArray[0][0] * sin(this.pivitArray[14]);
    }
  }, {
    key: "leftLeg",
    value: function leftLeg(leftUpperLeg, leftLowerLeg, leftFoot, leftToe) {
      // LEFT LEG AND FOOT -------------------------------------------------------//
      //angle left upper leg
      this.objectArray[0][11] = this.objectArray[0][10] + this.dimensionArray[0][7] * cos(this.pivitArray[7]);
      this.objectArray[1][11] = this.objectArray[1][10] + this.dimensionArray[0][7] * sin(this.pivitArray[7]); //angle left lower leg

      this.objectArray[0][12] = this.objectArray[0][11] + this.dimensionArray[0][2] * cos(this.pivitArray[8]);
      this.objectArray[1][12] = this.objectArray[1][11] + this.dimensionArray[0][2] * sin(this.pivitArray[8]); //angle left foot

      this.objectArray[0][13] = this.objectArray[0][12] + this.dimensionArray[0][1] * cos(this.pivitArray[9]);
      this.objectArray[1][13] = this.objectArray[1][12] + this.dimensionArray[0][1] * sin(this.pivitArray[9]); //angle left toe

      this.objectArray[0][14] = this.objectArray[0][13] + this.dimensionArray[0][4] * cos(this.pivitArray[10]);
      this.objectArray[1][14] = this.objectArray[1][13] + this.dimensionArray[0][4] * sin(this.pivitArray[10]);
    }
  }, {
    key: "leftArm",
    value: function leftArm(leftUpperArm, leftLowerArm) {
      /*-------------------------- ARMS --------------------------*/
      // left shoulder to elbow
      this.objectArray[0][4] = this.objectArray[0][3] + this.dimensionArray[0][11] * cos(this.pivitArray[3]);
      this.objectArray[1][4] = this.objectArray[1][3] + this.dimensionArray[0][11] * sin(this.pivitArray[3]); // left wrist

      this.objectArray[0][5] = this.objectArray[0][4] + this.dimensionArray[0][8] * cos(this.pivitArray[4]);
      this.objectArray[1][5] = this.objectArray[1][4] + this.dimensionArray[0][8] * sin(this.pivitArray[4]);
    }
  }, {
    key: "rightArm",
    value: function rightArm(rightUpperArm, rightLowerArm) {
      // right shoulder to elbow
      this.objectArray[0][7] = this.objectArray[0][6] + this.dimensionArray[0][9] * cos(this.pivitArray[5]);
      this.objectArray[1][7] = this.objectArray[1][6] + this.dimensionArray[0][9] * sin(this.pivitArray[5]); // right wrists

      this.objectArray[0][8] = this.objectArray[0][7] + this.dimensionArray[0][8] * cos(this.pivitArray[6]);
      this.objectArray[1][8] = this.objectArray[1][7] + this.dimensionArray[0][8] * sin(this.pivitArray[6]);
    }
    /*
        noDrift(lineNumber){
            ///////////////  THIS METHOD ENSURES THAT EACH ANIMATION REACHES THE TARGET CO-ORDS //////////////////////
            // the X and Y co-ords tends to drift due to rounding and reactions to key strokes
            // at the end of each simulation this method is run to force the X and Y co-ords to be equal to the target co-ords
            let tempArray               =   this.aniInputArray[lineNumber];
                    //////// ANI-INPUT-ARRAY LINE ELEMENTS
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
    
           //angle spine
           this.objectArray[0][2]      =   this.objectArray[0][9] + this.dimensionArray[0][12] * cos(this.aniInputArray[2]);
           this.objectArray[1][2]      =   this.objectArray[1][9] + this.dimensionArray[0][12] * sin(this.aniInputArray[2]);
           //angle shoulder to neck
           this.objectArray[0][1]      =   this.objectArray[0][2] + this.dimensionArray[0][13] * cos(this.aniInputArray[1]);
           this.objectArray[1][1]      =   this.objectArray[1][2] + this.dimensionArray[0][13] * sin(this.aniInputArray[1]);
           //angle neck to head
           this.objectArray[0][0]      =   this.objectArray[0][1] + this.dimensionArray[0][14] * cos(this.aniInputArray[0]);
           this.objectArray[1][0]      =   this.objectArray[1][1] + this.dimensionArray[0][14] * sin(this.aniInputArray[0]);
            //angle right upper leg
            this.objectArray[0][16]      =   this.objectArray[0][15] + this.dimensionArray[0][3] * cos(this.aniInputArray[11]);
            this.objectArray[1][16]      =   this.objectArray[1][15] + this.dimensionArray[0][3] * sin(this.aniInputArray[11]);
            //angle right lower leg                  
            this.objectArray[0][17]      =   this.objectArray[0][16] + this.dimensionArray[0][2] * cos(this.aniInputArray[12]);
            this.objectArray[1][17]      =   this.objectArray[1][16] + this.dimensionArray[0][2] * sin(this.aniInputArray[lineNumber][12]);  
            //angle right foot
            this.objectArray[0][18]      =   this.objectArray[0][17] + this.dimensionArray[0][1] * cos(this.aniInputArray[lineNumber][13]); 
            this.objectArray[1][18]      =   this.objectArray[1][17] + this.dimensionArray[0][1] * sin(this.aniInputArray[lineNumber][13]); 
            //angle right toe
            this.objectArray[0][19]      =   this.objectArray[0][18] + this.dimensionArray[0][0] * cos(this.aniInputArray[lineNumber][14]); 
            this.objectArray[1][19]      =   this.objectArray[1][18] + this.dimensionArray[0][0] * sin(this.aniInputArray[lineNumber][14]); 
            //angle left upper leg
            this.objectArray[0][11]     =   this.objectArray[0][10] + this.dimensionArray[0][7] * cos(this.aniInputArray[lineNumber][7]); 
            this.objectArray[1][11]     =   this.objectArray[1][10] + this.dimensionArray[0][7] * sin(this.aniInputArray[lineNumber][7]); 
            //angle left lower leg
            this.objectArray[0][12]     =   this.objectArray[0][11] + this.dimensionArray[0][2] * cos(this.aniInputArray[lineNumber][8]); 
            this.objectArray[1][12]     =   this.objectArray[1][11] + this.dimensionArray[0][2] * sin(this.aniInputArray[lineNumber][8]);        
            //angle left foot
            this.objectArray[0][13]     =   this.objectArray[0][12] + this.dimensionArray[0][1] * cos(this.aniInputArray[lineNumber][9]);
            this.objectArray[1][13]     =   this.objectArray[1][12] + this.dimensionArray[0][1] * sin(this.aniInputArray[lineNumber][9]);
            //angle left toe
            this.objectArray[0][14]     =   this.objectArray[0][13] + this.dimensionArray[0][4] * cos(this.aniInputArray[lineNumber][10]);
            this.objectArray[1][14]     =   this.objectArray[1][13] + this.dimensionArray[0][4] * sin(this.aniInputArray[lineNumber][10]);
            // left shoulder to elbow
            this.objectArray[0][4]      =   this.objectArray[0][3] + this.dimensionArray[0][11] * cos(this.aniInputArray[lineNumber][3]);
            this.objectArray[1][4]      =   this.objectArray[1][3] + this.dimensionArray[0][11] * sin(this.aniInputArray[lineNumber][3]);
            // left wrist
            this.objectArray[0][5]      =   this.objectArray[0][4] + this.dimensionArray[0][8] * cos(this.aniInputArray[lineNumber][4]);
            this.objectArray[1][5]      =   this.objectArray[1][4] + this.dimensionArray[0][8] * sin(this.aniInputArray[lineNumber][4]);
            // right shoulder to elbow
            this.objectArray[0][7]      =   this.objectArray[0][6] + this.dimensionArray[0][9] * cos(this.aniInputArray[lineNumber][5]);
            this.objectArray[1][7]      =   this.objectArray[1][6] + this.dimensionArray[0][9] * sin(this.aniInputArray[lineNumber][5]);
            // right wrists
            this.objectArray[0][8]      =   this.objectArray[0][7] + this.dimensionArray[0][8] * cos(this.aniInputArray[lineNumber][6]);
            this.objectArray[1][8]      =   this.objectArray[1][7] + this.dimensionArray[0][8] * sin(this.aniInputArray[lineNumber][6]);
    
        }
    */

  }, {
    key: "addBody",
    value: function addBody() {
      // circle diameter
      this.toeSize = 2 * this.size;
      this.footSize = 3 * this.size;
      this.ankleSize = 5 * this.size;
      this.kneeSize = 7.5 * this.size;
      this.hipSize = 9 * this.size;
      this.shoulderSize = 7.5 * this.size;
      this.chestSize = 12.5 * this.size;
      this.neckSize = 5 * this.size;
      this.elbowSize = 5 * this.size;
      this.wristSize = 3.5 * this.size;
      this.headSize = 15 * this.size; // ellipse colours

      this.toeRed = 255;
      this.toeGrn = 203;
      this.toeBlu = 164;
      this.footRed = 255;
      this.footGrn = 203;
      this.footBlu = 164;
      this.ankleRed = 255;
      this.ankleGrn = 203;
      this.ankleBlu = 164;
      this.kneeRed = 255;
      this.kneeGrn = 50;
      this.kneeBlu = 50;
      this.hipRed = 255;
      this.hipGrn = 50;
      this.hipBlu = 50;
      this.shoulderRed = 255;
      this.shoulderGrn = 203;
      this.shoulderBlu = 164;
      this.chestRed = 255;
      this.chestGrn = 203;
      this.chestBlu = 164;
      this.chestRed = 255;
      this.chestGrn = 203;
      this.chestBlu = 164;
      this.neckRed = 255;
      this.neckGrn = 203;
      this.neckBlu = 164;
      this.faceRed = 255;
      this.faceGrn = 203;
      this.faceBlu = 164;
      this.elbowRed = 255;
      this.elbowGrn = 203;
      this.elbowBlu = 164;
      this.wristRed = 255;
      this.wristGrn = 203;
      this.wristBlu = 164; // quad colours

      this.frontFootRed = 255;
      this.frontFootGrn = 203;
      this.frontFFootBlu = 164;
      this.backFootRed = 255;
      this.backFootGrn = 203;
      this.backFootBlu = 164;
      this.lowerLegRed = 255;
      this.lowerLegGrn = 50;
      this.lowerLegBlu = 50;
      this.upperLegRed = 255;
      this.upperLegGrn = 50;
      this.upperLegBlu = 50;
      this.pelvisRed = 255;
      this.pelvisGrn = 50;
      this.pelvisBlu = 50;
      this.torsoRed = 150;
      this.torsoGrn = 203;
      this.torsoBlu = 164;
      this.upperArmRed = 255;
      this.upperArmGrn = 203;
      this.upperArmBlu = 164;
      this.lowerArmRed = 255;
      this.lowerArmGrn = 203;
      this.lowerArmBlu = 164;
      this.qNeckRed = 255;
      this.qNeckGrn = 203;
      this.qNeckBlu = 164;
      this.pelvisRed = 255; // used to set the pelvis quad colours

      this.pelvisGrn = 50;
      this.pelvisBlu = 50; // THE FOLLOWING DRAWS THE OBJECT BASED ON ITS ORITATION
      // shading is added to the colours to make them darker or lighter depending the components depth
      // facing right

      if (this.objectState == "front" || this.objectState == "faceright" || this.objectState == "walkright1" || this.objectState == "walkright2" || this.objectState == "stopright1" || this.objectState == "stopright2" || this.objectState == "rightstop1" || this.objectState == "rightstop2") {
        this.shade = 0.6;
        this.drawObjectRightSide();
        this.shade = 0.8;
        this.drawObjectCentre();
        this.shade = 1.0;
        this.drawObjectLeftSide();
      } // facing front


      if (this.objectState == "front") {
        this.shade = 1.0;
        this.drawObjectCentre();
        this.shade = 1.0;
        this.drawObjectRightSide();
        this.shade = 1.0;
        this.drawObjectLeftSide();
      } // facing left


      if (this.objectState == "faceleft" || this.objectState == "walkleft1" || this.objectState == "walkleft2" || this.objectState == "stopleft1" || this.objectState == "stopleft2" || this.objectState == "leftstop1" || this.objectState == "leftstop2") {
        this.shade = 0.6;
        this.drawObjectLeftSide();
        this.shade = 0.8;
        this.drawObjectCentre();
        this.shade = 1.0;
        this.drawObjectRightSide();
      }
    }
  }, {
    key: "drawObjectRightSide",
    value: function drawObjectRightSide() {
      noStroke(); //DRAW THE RIGHT SIDE LIMBS
      // draws ellipses

      fill(this.shoulderRed * this.shade, this.shoulderGrn * this.shade, this.shoulderBlu * this.shade);
      ellipse(this.objectArray[0][6], this.objectArray[1][6], this.shoulderSize, this.shoulderSize); // shouder

      fill(this.elbowRed * this.shade, this.elbowGrn * this.shade, this.selbowBlu * this.shade);
      ellipse(this.objectArray[0][7], this.objectArray[1][7], this.elbowSize, this.elbowSize); // elboe

      fill(this.wristRed * this.shade, this.wristGrn * this.shade, this.wristBlu * this.shade);
      ellipse(this.objectArray[0][8], this.objectArray[1][8], this.wristSize, this.wristSize); // wrist

      fill(this.hipRed * this.shade, this.hipGrn * this.shade, this.hipBlu * this.shade);
      ellipse(this.objectArray[0][15], this.objectArray[1][15], this.hipSize, this.hipSize); // hip

      fill(this.kneeRed * this.shade, this.kneeGrn * this.shade, this.kneeBlu * this.shade);
      ellipse(this.objectArray[0][16], this.objectArray[1][16], this.kneeSize, this.kneeSize); // knee

      fill(this.ankleRed * this.shade, this.ankleGrn * this.shade, this.ankleBlu * this.shade);
      ellipse(this.objectArray[0][17], this.objectArray[1][17], this.ankleSize, this.ankleSize); // ankle

      fill(this.footRed * this.shade, this.footGrn * this.shade, this.footBlu * this.shade);
      ellipse(this.objectArray[0][18], this.objectArray[1][18], this.footSize, this.footSize); // foot

      fill(this.toeRed * this.shade, this.toeGrn * this.shade, this.toeBlu * this.shade);
      ellipse(this.objectArray[0][19], this.objectArray[1][19], this.toeSize, this.toeSize); // toe
      // draws quads
      // declare the quad specific variables

      var QX1;
      var QY1;
      var QX2;
      var QY2;
      var QX3;
      var QY3;
      var QX4;
      var QY4;
      var joint1;
      var joint2;
      var size1;
      var size2;
      var pivit; // right upper leg

      joint1 = 15;
      joint2 = 16;
      size1 = this.hipSize;
      size2 = this.kneeSize;
      console.log(this.pivitArray);
      pivit = 11; // calculate the quad's corner positions

      QX1 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY1 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      QX2 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY2 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX3 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY3 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX4 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY4 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] + PI / 2); // draw the quad

      noStroke();
      fill(this.upperLegRed * this.shade, this.upperLegGrn * this.shade, this.upperLegBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX4, QY4);
      line(QX2, QY2, QX3, QY3); //right lower leg

      joint1 = 16;
      joint2 = 17;
      size1 = this.kneeSize;
      size2 = this.ankleSize;
      pivit = 12; // calculate the quad's corner positions

      QX1 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY1 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      QX2 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY2 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX3 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY3 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX4 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY4 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] + PI / 2); // draw the quad

      noStroke();
      fill(this.lowerLegRed * this.shade, this.lowerLegGrn * this.shade, this.lowerLegBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX4, QY4);
      line(QX2, QY2, QX3, QY3); //right foot

      joint1 = 17;
      joint2 = 18;
      size1 = this.ankleSize;
      size2 = this.footSize;
      pivit = 13; // calculate the quad's corner positions

      QX1 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY1 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      QX2 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY2 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX3 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY3 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX4 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY4 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] + PI / 2); // draw the quad

      noStroke();
      fill(this.backFootRed * this.shade, this.backFootGrn * this.shade, this.backFootBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX4, QY4);
      line(QX2, QY2, QX3, QY3); //right toe

      joint1 = 18;
      joint2 = 19;
      size1 = this.footSize;
      size2 = this.toeSize;
      pivit = 14; // calculate the quad's corner positions

      QX1 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY1 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      QX2 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY2 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX3 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY3 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX4 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY4 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] + PI / 2); // draw the quad

      noStroke();
      fill(this.frontFootRed * this.shade, this.frontFGrn * this.shade, this.frontFBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX4, QY4);
      line(QX2, QY2, QX3, QY3); //right upper arm

      joint1 = 6;
      joint2 = 7;
      size1 = this.shoulderSize;
      size2 = this.elbowSize;
      pivit = 5; // calculate the quad's corner positions

      QX1 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY1 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      QX2 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY2 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX3 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY3 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX4 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY4 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] + PI / 2); // draw the quad

      noStroke();
      fill(this.upperArmRed * this.shade, this.upperArmGrn * this.shade, this.upperArmBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX4, QY4);
      line(QX2, QY2, QX3, QY3); //right lower arm

      joint1 = 7;
      joint2 = 8;
      size1 = this.elbowSize;
      size2 = this.wristSize;
      pivit = 5; // calculate the quad's corner positions

      QX1 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY1 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      QX2 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY2 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX3 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY3 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX4 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY4 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] + PI / 2); // draw the quad

      noStroke();
      fill(this.upperArmRed * this.shade, this.upperArmGrn * this.shade, this.upperArmBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX4, QY4);
      line(QX2, QY2, QX3, QY3);
    }
  }, {
    key: "drawObjectLeftSide",
    value: function drawObjectLeftSide() {
      noStroke(); ///// DRAW THE LEFT SIDE LIMBS
      //circles

      fill(this.shoulderRed * this.shade, this.shoulderGrn * this.shade, this.shoulderBlu * this.shade);
      ellipse(this.objectArray[0][3], this.objectArray[1][3], this.shoulderSize, this.shoulderSize); // shouder

      fill(this.elbowRed * this.shade, this.elbowGrn * this.shade, this.selbowBlu * this.shade);
      ellipse(this.objectArray[0][4], this.objectArray[1][4], this.elbowSize, this.elbowSize); // elboe

      fill(this.wristRed * this.shade, this.wristGrn * this.shade, this.wristBlu * this.shade);
      ellipse(this.objectArray[0][5], this.objectArray[1][5], this.wristSize, this.wristSize); // wrist

      fill(this.hipRed * this.shade, this.hipGrn * this.shade, this.hipBlu * this.shade);
      ellipse(this.objectArray[0][10], this.objectArray[1][10], this.hipSize, this.hipSize); // hip

      fill(this.kneeRed * this.shade, this.kneeGrn * this.shade, this.kneeBlu * this.shade);
      ellipse(this.objectArray[0][11], this.objectArray[1][11], this.kneeSize, this.kneeSize); // knee

      fill(this.ankleRed * this.shade, this.ankleGrn * this.shade, this.ankleBlu * this.shade);
      ellipse(this.objectArray[0][12], this.objectArray[1][12], this.ankleSize, this.ankleSize); // ankle

      fill(this.footRed * this.shade, this.footGrn * this.shade, this.footBlu * this.shade);
      ellipse(this.objectArray[0][13], this.objectArray[1][13], this.footSize, this.footSize); // foot

      fill(this.toeRed * this.shade, this.toeGrn * this.shade, this.toeBlu * this.shade);
      ellipse(this.objectArray[0][14], this.objectArray[1][14], this.toeSize, this.toeSize); // toe  
      //quads
      // point 1

      var QX1;
      var QY1;
      var QX2;
      var QY2;
      var QX3;
      var QY3;
      var QX4;
      var QY4;
      var joint1;
      var joint2;
      var size1;
      var size2;
      var pivit; // left upper leg

      joint1 = 10;
      joint2 = 11;
      size1 = this.hipSize;
      size2 = this.kneeSize;
      pivit = 7;
      QX1 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY1 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      QX2 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY2 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX3 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY3 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX4 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY4 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      noStroke();
      fill(this.upperLegRed * this.shade, this.upperLegGrn * this.shade, this.upperLegBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX4, QY4);
      line(QX2, QY2, QX3, QY3); //left lower leg

      joint1 = 11;
      joint2 = 12;
      size1 = this.kneeSize;
      size2 = this.ankleSize;
      pivit = 8;
      QX1 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY1 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      QX2 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY2 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX3 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY3 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX4 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY4 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      noStroke();
      fill(this.lowerLegRed * this.shade, this.lowerLegGrn * this.shade, this.lowerLegBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX4, QY4);
      line(QX2, QY2, QX3, QY3); //left foot

      joint1 = 12;
      joint2 = 13;
      size1 = this.ankleSize;
      size2 = this.footSize;
      pivit = 9;
      QX1 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY1 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      QX2 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY2 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX3 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY3 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX4 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY4 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      noStroke();
      fill(this.backFootRed * this.shade, this.backFootGrn * this.shade, this.backFootBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX4, QY4);
      line(QX2, QY2, QX3, QY3); //left toe

      joint1 = 13;
      joint2 = 14;
      size1 = this.footSize;
      size2 = this.toeSize;
      pivit = 10;
      QX1 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY1 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      QX2 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY2 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX3 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY3 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX4 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY4 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      noStroke();
      fill(this.frontFootRed * this.shade, this.frontFGrn * this.shade, this.frontFBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX4, QY4);
      line(QX2, QY2, QX3, QY3); //left upper arm

      joint1 = 3;
      joint2 = 4;
      size1 = this.shoulderSize;
      size2 = this.elbowSize;
      pivit = 5;
      QX1 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY1 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      QX2 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY2 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX3 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY3 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX4 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY4 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      noStroke();
      fill(this.upperArmRed * this.shade, this.upperArmGrn * this.shade, this.upperArmBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX4, QY4);
      line(QX2, QY2, QX3, QY3); //left lower arm

      joint1 = 4;
      joint2 = 5;
      size1 = this.elbowSize;
      size2 = this.wristSize;
      pivit = 6;
      QX1 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY1 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      QX2 = this.objectArray[0][joint1] + size1 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY2 = this.objectArray[1][joint1] + size1 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX3 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] - PI / 2);
      QY3 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] - PI / 2);
      QX4 = this.objectArray[0][joint2] + size2 / 2 * cos(this.pivitArray[pivit] + PI / 2);
      QY4 = this.objectArray[1][joint2] + size2 / 2 * sin(this.pivitArray[pivit] + PI / 2);
      noStroke();
      fill(this.upperArmRed * this.shade, this.upperArmGrn * this.shade, this.upperArmBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX4, QY4);
      line(QX2, QY2, QX3, QY3);
    }
  }, {
    key: "drawObjectCentre",
    value: function drawObjectCentre() {
      noStroke(); ///// DRAW THE CENTRE BODY PARTS
      //left lower arm

      var QX1;
      var QY1;
      var QX2;
      var QY2;
      var QX3;
      var QY3;
      var QX4;
      var QY4;
      this.chestXPos = this.objectArray[0][9] + this.dimensionArray[0][12] * cos(this.pivitArray[2]);
      this.chestYPos = this.objectArray[1][9] + (this.dimensionArray[0][12] - 10 * this.size) * sin(this.pivitArray[2]); // lower torso

      QX1 = this.chestXPos + this.chestSize / 2;
      QY1 = this.chestYPos, QX2 = this.objectArray[0][10] + this.hipSize / 2;
      QY2 = this.objectArray[1][10];
      QX3 = this.objectArray[0][15] - this.hipSize / 2;
      QY3 = this.objectArray[1][15];
      QX4 = this.chestXPos - this.chestSize / 2;
      QY4 = this.chestYPos;
      noStroke();
      fill(this.torsoRed * this.shade, this.torsoGrn * this.shade, this.torsoBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX2, QY2, QX3, QY3); // upper torso

      QX1 = this.chestXPos + this.chestSize / 2;
      QY1 = this.chestYPos, QX2 = this.objectArray[0][3] + this.shoulderSize / 2;
      QY2 = this.objectArray[1][3];
      QX3 = this.objectArray[0][6] - this.shoulderSize / 2;
      QY3 = this.objectArray[1][6];
      QX4 = this.chestXPos - this.chestSize / 2;
      QY4 = this.chestYPos;
      noStroke();
      fill(this.torsoRed * this.shade, this.torsoGrn * this.shade, this.torsoBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX2, QY2);
      line(QX3, QY3, QX4, QY4); // upper chest

      QX1 = this.objectArray[0][1] + this.neckSize / 2;
      QY1 = this.objectArray[1][1];
      QX2 = this.objectArray[0][3] + this.shoulderSize / 2;
      QY2 = this.objectArray[1][3];
      QX3 = this.objectArray[0][6] - this.shoulderSize / 2;
      QY3 = this.objectArray[1][6];
      QX4 = this.objectArray[0][1] - this.neckSize / 2;
      QY4 = this.objectArray[1][1];
      noStroke();
      fill(this.torsoRed * this.shade, this.torsoGrn * this.shade, this.torsoBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX1, QY1, QX2, QY2);
      line(QX3, QY3, QX4, QY4); // pelvis

      QX1 = this.objectArray[0][10];
      QY1 = this.objectArray[1][10] - this.hipSize / 2;
      QX2 = this.objectArray[0][10];
      QY2 = this.objectArray[1][10] + this.hipSize / 2;
      QX3 = this.objectArray[0][15];
      QY3 = this.objectArray[1][15] + this.hipSize / 2;
      QX4 = this.objectArray[0][15];
      QY4 = this.objectArray[1][15] - this.hipSize / 2;
      noStroke();
      fill(this.pelvisRed * this.shade, this.pelvisGrn * this.shade, this.pelvisBlu * this.shade);
      quad(QX1, QY1, QX2, QY2, QX3, QY3, QX4, QY4);
      stroke(100, 100, 100);
      line(QX2, QY2, QX3, QY3);
      noStroke();
      fill(this.neckRed * this.shade, this.neckGrn * this.shade, this.neckBlu * this.shade);
      ellipse(this.objectArray[0][1], this.objectArray[1][1], this.neckSize, this.neckSize); // neck

      fill(this.neckRed * this.shade, this.neckGrn * this.shade, this.neckBlu * this.shade);
      ellipse(this.objectArray[0][2], this.objectArray[1][1], this.neckSize, this.neckSize); // chest

      fill(this.torsoRed * this.shade, this.torsoGrn * this.shade, this.torsoBlu * this.shade);
      ellipse(this.chestXPos, this.chestYPos, this.chestSize, this.chestSize); // chest

      fill(this.faceRed * this.shade, this.faceGrn * this.shade, this.faceBlu * this.shade);
      ellipse(this.objectArray[0][0], this.objectArray[1][0], this.headSize, this.headSize * 1.2); // head   
    }
  }, {
    key: "moveObjectToRight",
    value: function moveObjectToRight() {
      for (var i = 0; i < this.objectArray[0].length; i++) {
        this.objectArray[0][i] = this.objectArray[0][i] + this.moveXrate;
      }
    }
  }, {
    key: "moveObjectToLeft",
    value: function moveObjectToLeft() {
      for (var i = 0; i < this.objectArray[0].length; i++) {
        this.objectArray[0][i] = this.objectArray[0][i] - this.moveXrate;
      }
    }
  }, {
    key: "elevatorDown",
    value: function elevatorDown(rate) {
      this.elirate = rate;

      for (var i = 0; i < this.objectArray[1].length; i++) {
        this.objectArray[1][i] = this.objectArray[1][i] + this.elirate;
      }
    }
  }, {
    key: "elevatorUp",
    value: function elevatorUp(rate) {
      this.elirate = rate;

      for (var i = 0; i < this.objectArray[1].length; i++) {
        this.objectArray[1][i] = this.objectArray[1][i] - this.elirate;
      }
    }
    /*
        
            ////////////////////// ARRAYS REFERENCE LISTS ////////////////////////
    
            /* ------------- OBJECT-ARRAY ELEMENT POSTIONS -------------------- */
    // Line O - X-axes
    // Line 1 - Y-axes

    /* ------------- OBJECT-ARRAY ELEMENT POSTIONS -------------------- */
    // 0 - this.head pos
    // 1 - this.head to this.neck point
    // 2 - this.neck to torso point
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

  }]);

  return HumanObject;
}();