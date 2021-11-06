function maplayout(){

        //Sprite Width
        const spriteHeight = 20;
        const spriteWidth = 20;
        
        // Varibles declared for function 
        let nothing;
        let floor;
        let wall;
        let lockedDoor;
        let elevator;
        let selfOpeningDoor;
        let lockedElevatorDoor;
        let ladder;
        let texture1;
        let texture2;
        let texture3;
        let texture4;
        let texture5;
        let texture6;
        let texture7;
        let texture8;
        let texture9;
        
        // Varibles declared for groups of sprites
        let allNothing;
        let allFloor;
        let allWall;
        let allLockedDoor;
        let allElevator;
        let allSelfOpeningingDoor;
        let allLockedLiftDoor;
        let allLadder;
        let allTexture1;
        let allTexture2;
        let allTexture3;
        let allTexture4;
        let allTexture5;
        let allTexture6;
        let allTexture7;
        let allTexture8;
        let allTexture9;
        
        // Map array set as empty Array
        let maparray = new Array();

        // Declare all Sprite Groups
        allNothing = new Group;
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
    
    
    for(let i = 0 ; i < mapLayoutTxt.length ; i++){    // takes strings from txt file and puts them into maparray array 
        maparray[i] = splitTokens(maplayouttxt[i] , '\t'); //Sepearates String using tab
        }
        for(let j = 0 ; j < maparray.length ; j++){
            for(let i = 0 ; i < maparray[0].length ; i++){ // Uses the row and column index of the arrays to designate x and y pos. Then checks 
                if(maparray[j][i] == '0'){             //that against the recorded string in that cell, then does this with the all other nested sprites 
                    nothing = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    nothing.addImage(nothingImage);
                    nothingImage.resize(spriteWidth , spriteHeight);
                    nothing.setDefaultCollider(); // sets collider at the defualt size
                    allNothing.add(nothing);         // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '1'){             //that against the recorded string in that cell, then does this with the all other nested sprites 
                    floor = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    floor.addImage(floorImage);
                    floorImage.resize(spriteWidth , spriteHeight);
                    floor.setDefaultCollider()  // sets collider at the defualt size
                    allFloor.add(floor);         // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '2'){
                    wall = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    wall.addImage(wallImage);
                    wallImage.resize(spriteWidth , spriteHeight);
                    wall.setDefaultCollider();  // sets collider at the defualt size
                    allWall.add(wall);         // puts all wall sprites in 1 group for ease in collision detection
    
                }
                if(maparray[j][i] == '3'){
                    elevator = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    elevator.addImage(elevatorImage);
                    elevatorImage.resize(spriteWidth , spriteHeight);
                    elevator.setDefaultCollider();  // sets collider at the defualt size
                    allElevator.add(elevator);         // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '4'){
                    lockedDoor = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    lockedDoor.addImage(lockDoorImage);
                    lockDoorImage.resize(spriteWidth , spriteHeight);
                    lockedDoor.setDefaultCollider();  // sets collider at the defualt size
                    allLockedDoor.add(lockedDoor);         // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '5'){
                    selfOpeningDoor = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    selfOpeningDoor.addImage(selfOpeningDoorImage);
                    selfOpeningDoorImage.resize(spriteWidth , spriteHeight);
                    selfOpeningDoor.setDefaultCollider();  // sets collider at the defualt size
                    allSelfOpeningingDoor.add(selfOpeningDoor);         // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '6'){
                    lockedElevatorDoor = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    lockedElevatorDoor.addImage(lockedLiftDoorImage);
                    lockedLiftDoorImage.resize(spriteWidth , spriteHeight);
                    lockedElevatorDoor.setDefaultCollider();  // sets collider at the defualt size
                    allLockedLiftDoor.add(lockedElevatorDoor);        // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '7'){
                    ladder = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    ladder.addImage(ladderImage);
                    ladderImage.resize(spriteWidth , spriteHeight);
                    ladder.setDefaultCollider();  // sets collider at the defualt size
                    allLadder.add(ladder);         // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '8'){
                    texture1 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    texture1.addImage(texture1Image);
                    texture1Image.resize(spriteWidth , spriteHeight);
                    texture1.setDefaultCollider();  // sets collider at the defualt size
                    allTexture1.add(texture1);         // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '9'){
                    texture2 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    texture2.addImage(texture2Image);
                    texture2Image.resize(spriteWidth , spriteHeight);
                    texture2.setDefaultCollider();  // sets collider at the defualt size
                    allTexture2.add(texture2);         // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '10'){
                    texture3 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    texture3.addImage(texture3Image);
                    texture3Image.resize(spriteWidth , spriteHeight);
                    texture3.setDefaultCollider();  // sets collider at the defualt size
                    allTexture3.add(texture3);         // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '11'){
                    texture4 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    texture4.addImage(texture4Image);
                    texture4Image.resize(spriteWidth , spriteHeight);
                    texture4.setDefaultCollider();  // sets collider at the defualt size
                    allTexture4.add(texture4);         // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '12'){
                    texture5 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    texture5.addImage(texture5Image);
                    texture5Image.resize(spriteWidth , spriteHeight);
                    texture5.setDefaultCollider();  // sets collider at the defualt size
                    allTexture5.add(texture5);         // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '13'){
                    texture6 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    texture6.addImage(texture6Image);
                    texture6Image.resize(spriteWidth , spriteHeight);
                    texture6.setDefaultCollider();  // sets collider at the defualt size
                    allTexture6.add(texture6);         // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '14'){
                    texture7 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    texture7.addImage(texture7Image);
                    texture7Image.resize(spriteWidth , spriteHeight);
                    texture7.setDefaultCollider();  // sets collider at the defualt size
                    allTexture7.add(texture7);         // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '15'){
                    texture8 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    texture8.addImage(texture8Image);
                    texture8Image.resize(spriteWidth , spriteHeight);
                    texture8.setDefaultCollider(); // sets collider at the defualt size
                    allTexture8.add(texture8);        // puts all floor sprites in 1 group for ease in collision detection
                }
                if(maparray[j][i] == '16'){
                    texture9 = createSprite(spriteWidth / 2 + i * spriteWidth , spriteHeight /2 +j * spriteHeight);
                    texture9.addImage(texture9Image);
                    texture9Image.resize(spriteWidth , spriteHeight);
                    texture9.setDefaultCollider();  // sets collider at the defualt size
                    allTexture9.add(texture9);         // puts all floor sprites in 1 group for ease in collision detection
                }
            }
        }
drawSprites();
}