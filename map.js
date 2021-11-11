
// ------------------ FUNCTION TO SETUP MAP SCREEN ---------------------- //
function setupMap(){

const spriteHeight = 120;
const spriteWidth = 120;

// Main Map array set as empty Array
let maparray = new Array()

// Sprite Groups
allFloor = new Group;
allWall = new Group;
allLockedDoor =new Group;
allElevator = new Group;
allSelfOpeningingDoor = new Group;
allLockedLiftDoor = new Group;
allLadder = new Group;
allTexture1 = new Group;
allTexture2 = new Group;
allTexture3 = new Group;
allTexture4 = new Group;
allTexture5 = new Group;
allTexture6 = new Group;
allTexture7 = new Group;
allTexture8 = new Group;
allTexture9 = new Group;
allTexture10 = new Group;
allDoor = new Group;

for(let i = 0 ; i < mapLayoutTxt.length ; i++){    // takes strings from txt file and puts them into maparray array 
    maparray[i] = splitTokens(mapLayoutTxt[i] , '\t');
    }
    for(let j = 0 ; j < maparray.length ; j++){         // Uses the row and column index of the arrays to designate x and y pos. Then checks
        for(let i = 0 ; i < maparray[0].length ; i++){  //that against the recorded string in that cell, then does this with the all other nested sprites
            //that against the recorded string in that cell, then does this with the all other nested sprites
            if(maparray[j][i] == '1'){              
                floor = createSprite(spriteWidth / 2 + i * spriteWidth ,spriteHeight / 2 + j * spriteHeight);
                floor.addImage(floorImage);
                floorImage.resize(spriteWidth , spriteHeight);  // resizes image according to sprite sizes
                floor.setDefaultCollider();  // sets collider at the defualt size
                allFloor.add(floor);        // puts all floor sprites in 1 group for ease in collision detection
            }
            if(maparray[j][i] == '2'){
                wall = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                wall.addImage(wallImage);
                wallImage.resize(spriteWidth , spriteHeight);
                wall.setDefaultCollider()  
                allWall.add(wall);         

            }
            if(maparray[j][i] == '3'){
                lockedDoor = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                lockedDoor.addImage(lockDoorImage);
                lockDoorImage.resize(spriteWidth , spriteHeight);
                lockedDoor.setDefaultCollider();  
                allLockedDoor.add(lockedDoor); 
                
                doorL = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                doorL.addImage(doorLImage)
                doorLImage.resize(spriteWidth * 0.8 , 5 * spriteHeight)
                doorL.setDefaultCollider()
                allDoor.add(doorL)
            }            
            if(maparray[j][i] == '4'){
                elevator = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                elevator.addImage(elevatorImage);
                elevatorImage.resize(spriteWidth , spriteHeight);
                elevator.setDefaultCollider();  
                allElevator.add(elevator);
                
                elevatorCarriage1 = createSprite( 26 * spriteWidth , spriteHeight /2 + 15* spriteHeight)
                elevatorCarriage1.addImage(elevatorCarriageImage)
                elevatorCarriageImage.resize(2 * spriteWidth , 5 * spriteHeight)
                //elevatorCarriage1.setCollider(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight)

                elevatorCarriage2 = createSprite(55 * spriteWidth , spriteHeight /2 + 15 * spriteHeight)
                elevatorCarriage2.addImage(elevatorCarriageImage)
                elevatorCarriageImage.resize(2 * spriteWidth , 5 * spriteHeight)
                //elevatorCarriage2.setCollider(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight)
            }
            if(maparray[j][i] == '5'){
                selfOpeningDoor = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                selfOpeningDoor.addImage(selfOpeningDoorImage);
                selfOpeningDoorImage.resize(spriteWidth , spriteHeight);
                selfOpeningDoor.setDefaultCollider();  
                allSelfOpeningingDoor.add(selfOpeningDoor);
                
                door = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                door.addImage(doorImage);
                doorImage.resize(0.8 * spriteWidth , 5* spriteHeight);
                door.setDefaultCollider();
                allDoor.add(door);
            }
            if(maparray[j][i] == '6'){
                lockedElevatorDoor = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                lockedElevatorDoor.addImage(lockedLiftDoorImage);
                lockedLiftDoorImage.resize(spriteWidth , spriteHeight);
                lockedElevatorDoor.setDefaultCollider(); // 
                allLockedLiftDoor.add(lockedElevatorDoor);         
            }
            if(maparray[j][i] == '7'){
                ladder = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                ladder.addImage(ladderImage);
                ladderImage.resize(spriteWidth , spriteHeight);
                ladder.setDefaultCollider();  
                allLadder.add(ladder);        
            }
            if(maparray[j][i] == '8'){
                texture1 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                texture1.addImage(texture1Image);
                texture1Image.resize(spriteWidth , spriteHeight);
                allTexture1.add(texture1);         
            }
            if(maparray[j][i] == '9'){
                texture2 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                texture2.addImage(texture2Image);
                texture2Image.resize(spriteWidth , spriteHeight);
                allTexture2.add(texture2);         
            }
            if(maparray[j][i] == '10'){
                texture3 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                texture3.addImage(texture10Image);
                texture10Image.resize(spriteWidth , spriteHeight);
                allTexture3.add(texture3);         
            }
            if(maparray[j][i] == '11'){
                texture4 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                texture4.addImage(texture4Image);
                texture4Image.resize(spriteWidth , spriteHeight);
                allTexture4.add(texture4);         
            }
            if(maparray[j][i] == '12'){
                texture5 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                texture5.addImage(texture5Image);
                texture5Image.resize(spriteWidth , spriteHeight); 
                allTexture5.add(texture5);         
            }
            if(maparray[j][i] == '13'){
                texture6 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                texture6.addImage(texture6Image);
                texture6Image.resize(spriteWidth , spriteHeight); 
                allTexture6.add(texture6);         
            }
            if(maparray[j][i] == '14'){
                texture7 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                texture7.addImage(texture7Image);
                texture7Image.resize(spriteWidth , spriteHeight);  
                allTexture7.add(texture7);         
            }
            if(maparray[j][i] == '15'){
                texture8 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                texture8.addImage(texture8Image);
                texture8Image.resize(spriteWidth , spriteHeight);
                allTexture8.add(texture8);         
            }
            if(maparray[j][i] == '16'){
                texture9 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight / 2 + j * spriteHeight);
                texture9.addImage(texture9Image);
                texture9Image.resize(spriteWidth , spriteHeight); 
                allTexture9.add(texture9);       
            }
            if(maparray[j][i] == '17'){
                texture10 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                texture10.addImage(texture3Image);
                texture3Image.resize(17 * spriteWidth , 5 * spriteHeight);
                allTexture10.add(texture10);       
            }
        }
    }
let startX = (spriteWidth / 2 + 3 * spriteWidth);  // Hero Start Point
let startY = (spriteHeight /2 + 16 * spriteHeight);

anchor = spriteHeight;

hero = createSprite(startX,startY)
hero.addImage(heroImage)
heroImage.resize(120 , 360)

//hero  =   new HumanObject(startX, startY, 3*spriteHeight)
}

// ------------------ FUNCTION TO DRAW MAP SCREEN ---------------------- //

function drawMap(){
background('white');   // This is to be replaced by stars

let distX1 = -2500;  // The camera will draw the sprites up to 1600 px to the left of the hero
let distX2 = 2500;  // The camera will draw the sprites up to 1600 px to the right of the hero
let distY1 = -2000;  // The camera will draw the sprites up to 1200 px to the above of the hero
let distY2 = 2000;  // The camera will draw the sprites up to 1600 px to the below of the hero

// This code is just for exploring the map , just uncomment it 

if(keyIsDown('65')){   // a key  ---- hero  left
    hero.setSpeed(50,180)
}else if(keyIsDown('68')){   // d key ------hero  right
    hero.setSpeed(50,0)
}else if(keyIsDown('87')){  // w key  ------hero up
    hero.setSpeed(50,270)       
}else if(keyIsDown('83')){   //s key  ------ hero down
    hero.setSpeed(50,90)
}else{
    hero.setSpeed(0,0)
}

camera.zoom = 1.1;                   // Use this to set the zoomcamera.position.x = hero.position.x; // This line and the next line set the camera to hero position
camera.position.x = hero.position.x;
camera.position.y = hero.position.y - width * 0.0379; 

// These if statements check whether each of the spite groups are within the desired draw distance then draw them if they are

for(i = 0 ; i < allLockedDoor.length ; i++){
    if(allLockedDoor[i].position.x > camera.position.x + distX1 && allLockedDoor[i].position.x < camera.position.x + distX2){
        if(allLockedDoor[i].position.y > camera.position.y + distY1 && allLockedDoor[i].position.y < camera.position.y + distY2){
            drawSprite(allLockedDoor[i]);
        }
    }
}
for(i = 0 ; i < allSelfOpeningingDoor.length ; i++){
    if(allSelfOpeningingDoor[i].position.x > camera.position.x + distX1 && allSelfOpeningingDoor[i].position.x < camera.position.x + distX2){
        if(allSelfOpeningingDoor[i].position.y > camera.position.y + distY1 && allSelfOpeningingDoor[i].position.y < camera.position.y + distY2){
            drawSprite(allSelfOpeningingDoor[i]);
        }
    }
}
for(i=0 ; i<allDoor.length ; i++){
    if(allDoor[i].position.x > camera.position.x + distX1 && allDoor[i].position.x < camera.position.x + distX2){
        if(allDoor[i].position.y > camera.position.y + distY1 && allDoor[i].position.y < camera.position.y + distY2){
            drawSprite(allDoor[i]);
        }
    }
}
for(i = 0 ; i < allFloor.length ; i++){   
    if(allFloor[i].position.x > camera.position.x + distX1 && allFloor[i].position.x < camera.position.x + distX2){
        if(allFloor[i].position.y > camera.position.y + distY1 && allFloor[i].position.y < camera.position.y + distY2){
            drawSprite(allFloor[i]);    
        }                               
    }
}
for(i = 0 ; i < allWall.length ; i++){
    if(allWall[i].position.x > camera.position.x + distX1 && allWall[i].position.x < camera.position.x + distX2){
        if(allWall[i].position.y > camera.position.y + distY1 && allWall[i].position.y < camera.position.y + distY2){
            drawSprite(allWall[i]);
        }
    }
}

for(i = 0 ; i < allElevator.length ; i++){
    if(allElevator[i].position.x > camera.position.x + distX1 && allElevator[i].position.x < camera.position.x + distX2){
        if(allElevator[i].position.y > camera.position.y + distY1 && allElevator[i].position.y < camera.position.y + distY2){
            drawSprite(allElevator[i]);
        }
    }
}
for(i = 0 ; i < allSelfOpeningingDoor.length ; i++){
    if(allSelfOpeningingDoor[i].position.x > camera.position.x + distX1 && allSelfOpeningingDoor[i].position.x < camera.position.x + distX2){
        if(allSelfOpeningingDoor[i].position.y > camera.position.y + distY1 && allSelfOpeningingDoor[i].position.y < camera.position.y + distY2){
            drawSprite(allSelfOpeningingDoor[i]);
        }
    }
}
for(i = 0 ; i < allLockedLiftDoor.length ; i++){
    if(allLockedLiftDoor[i].position.x > camera.position.x + distX1 && allLockedLiftDoor[i].position.x < camera.position.x + distX2){
        if(allLockedLiftDoor[i].position.y > camera.position.y + distY1 && allLockedLiftDoor[i].position.y < camera.position.y + distY2){
            drawSprite(allLockedLiftDoor[i]);
        }
    }
}
for(i = 0 ; i < allLadder.length ; i++){
    if(allLadder[i].position.x > camera.position.x + distX1 && allLadder[i].position.x < camera.position.x + distX2){
        if(allLadder[i].position.y > camera.position.y + distY1 && allLadder[i].position.y < camera.position.y + distY2){
            drawSprite(allLadder[i]);
        }
    }
}
for(i = 0 ; i < allTexture1.length ; i++){
    if(allTexture1[i].position.x > camera.position.x  + distX1 && allTexture1[i].position.x < camera.position.x + distX2){
        if(allTexture1[i].position.y > camera.position.y + distY1 && allTexture1[i].position.y < camera.position.y + distY2){
            drawSprite(allTexture1[i]);
        }
    }
}
for(i = 0 ; i < allTexture2.length ; i++){
    if(allTexture2[i].position.x > camera.position.x + distX1 && allTexture2[i].position.x < camera.position.x + distX2){
        if(allTexture2[i].position.y > camera.position.y + distY1 && allTexture2[i].position.y < camera.position.y + distY2){
            drawSprite(allTexture2[i]);
        }
    }
}
for(i = 0 ; i < allTexture3.length ; i++){
    if(allTexture3[i].position.x > camera.position.x + distX1 && allTexture3[i].position.x < camera.position.x + distX2){
        if(allTexture3[i].position.y > camera.position.y + distY1 && allTexture3[i].position.y < camera.position.y + distY2){
            drawSprite(allTexture3[i]);
        }
    }
}
for(i = 0 ; i < allTexture4.length ; i++){
    if(allTexture4[i].position.x > camera.position.x + distX1 && allTexture4[i].position.x < camera.position.x + distX2){
        if(allTexture4[i].position.y > camera.position.y + distY1 && allTexture4[i].position.y < camera.position.y + distY2){
            drawSprite(allTexture4[i]);
        }
    }
}
for(i = 0 ; i < allTexture5.length ; i++){
    if(allTexture5[i].position.x > camera.position.x + distX1 && allTexture5[i].position.x < camera.position.x + distX2){
        if(allTexture5[i].position.y > camera.position.y + distY1 && allTexture5[i].position.y < camera.position.y + distY2){
            drawSprite(allTexture5[i]);
        }
    }
}
for(i = 0 ; i < allTexture6.length ; i++){
    if(allTexture6[i].position.x > camera.position.x + distX1 && allTexture6[i].position.x < camera.position.x + distX2){
        if(allTexture6[i].position.y > camera.position.y + distY1 && allTexture6[i].position.y < camera.position.y + distY2){
            drawSprite(allTexture6[i]);
        }
    }
}
for(i = 0 ; i < allTexture7.length ; i++){
    if(allTexture7[i].position.x > camera.position.x + distX1 && allTexture7[i].position.x < camera.position.x + distX2){
        if(allTexture7[i].position.y > camera.position.y + distY1 && allTexture7[i].position.y < camera.position.y + distY2){
            drawSprite(allTexture7[i]);
        }
    }
}
for(i = 0 ; i < allTexture8.length ; i++){
    if(allTexture8[i].position.x > camera.position.x + distX1 && allTexture8[i].position.x < camera.position.x + distX2){
        if(allTexture8[i].position.y > camera.position.y + distY1 && allTexture8[i].position.y < camera.position.y + distY2){
            drawSprite(allTexture8[i]);
        }
    }
}
for(i = 0 ; i < allTexture9.length ; i++){
    if(allTexture9[i].position.x > camera.position.x + distX1 && allTexture9[i].position.x < camera.position.x + distX2){
        if(allTexture9[i].position.y > camera.position.y + distY1 && allTexture9[i].position.y < camera.position.y + distY2){
            drawSprite(allTexture9[i]);
        }
    }
}
for(i=0 ; i<allTexture10.length ; i++){
    if(allTexture10[i].position.x > camera.position.x + distX1 && allTexture10[i].position.x < camera.position.x + distX2){
        if(allTexture10[i].position.y > camera.position.y + distY1 && allTexture10[i].position.y < camera.position.y + distY2){
            drawSprite(allTexture10[i]);
        }
    }
}

drawSprite(elevatorCarriage1);
drawSprite(elevatorCarriage2);

drawSprite(hero)

//hero.draw()

//This code moves the door up as the hero approaches it, it doesnt move it back down yet
for(i=0 ; i < allDoor.length ; i++){
    if(hero.position.x < allDoor[i].position.x + 100 && hero.position.x > allDoor[i].position.x - 100 && hero.position.y < allDoor[i].position.y + 200 && hero.position.y > allDoor[i].position.y - 200){
    allDoor[i].setSpeed(5,270);
    }else if(allDoor[i].position.y < (hero.position.y - 5 * anchor)){
        allDoor[i].setSpeed(0,270); 
    }else if(allDoor[i].position.y > (hero.position.y)  && hero.position.x > allDoor[i].position.x + 100 && hero.position.x < allDoor[i].position.x - 100){
        allDoor[i].setSpeed(5,90);
    }
}

if(hero.position.x < elevatorCarriage1.position.x + 200 && hero.position.x > elevatorCarriage1.position.x - 200 ){  //These were going to be buttons but I ran out of time
    textSize(30);
    stroke('yellow');
    fill('yellow');
    text("Up = u button" , elevatorCarriage1.position.x-anchor , elevatorCarriage1.position.y - 260);
    text("Down = j button", elevatorCarriage1.position.x-anchor , elevatorCarriage1.position.y - 230);
}
if(hero.position.x < elevatorCarriage2.position.x + 200 && hero.position.x > elevatorCarriage2.position.x - 200 ){  //These were going to be buttons but I ran out of time
    textSize(30);
    stroke('yellow');
    fill('yellow');
    text("Up = i button" , elevatorCarriage2.position.x-120 , elevatorCarriage2.position.y - 260);
    text("Down = k button", elevatorCarriage2.position.x-120 , elevatorCarriage2.position.y - 230);
}

if(keyDown(74) && elevatorCarriage1.position.y < 39 * anchor){ // If on bottom floor, the elevator wont try to go any further
    elevatorCarriage1.setSpeed(5,90);                            // Go Down  "j"
}else if(keyDown(85) && elevatorCarriage1.position.y > 17 * anchor){  // If on top floor, the elevator wont try to go any further
    elevatorCarriage1.setSpeed(5,270);                           // Go Up    "u"
}else if(elevatorCarriage1.position.y == 21.5*anchor){  // Stop at 4th floor
    elevatorCarriage1.setSpeed(0,90);
}else if(elevatorCarriage1.position.y == 27.5*anchor){  // Stop at 3rd floor
    elevatorCarriage1.setSpeed(0,90);
}else if(elevatorCarriage1.position.y == 33.5*anchor){  // Stop at 2nd floor
    elevatorCarriage1.setSpeed(0,90);
}else if(elevatorCarriage1.collide(allFloor)){                   // Stops at Bottom and Top Floor
    elevatorCarriage1.setSpeed(0,0);
}
if(keyDown(75) && elevatorCarriage2.position.y < 33 * anchor){ // If on bottom floor, the elevator wont try to go any further    
    elevatorCarriage2.setSpeed(5,90);                            // Go Down  "i"
}else if(keyDown(73)&& elevatorCarriage2.position.y > 17 * anchor){  // If on top floor, the elevator wont try to go any further
    elevatorCarriage2.setSpeed(5,270);                           // Go Up  "k"
}else if(elevatorCarriage2.position.y == 21.5*anchor){  // Stop at 4th floor
    elevatorCarriage2.setSpeed(0,90);
}else if(elevatorCarriage2.position.y == 27.5*anchor){  // Stop at 3rd floor
    elevatorCarriage2.setSpeed(0,90);
}else if(elevatorCarriage2.collide(allFloor)){                   // Stops at Bottom and Top Floor
    elevatorCarriage2.setSpeed(0,0);
}
}