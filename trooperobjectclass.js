let trooperAnimation;
let trooperImage;
let trooperSprite;
let troopers = [];

function preload(){
    trooperImage = loadSpriteSheet('sprites/trooper.png',451,191,7);
    trooperAnimation = loadAnimation(trooperImage);
}

function setup(){
    createCanvas(500,500);
    // robotSprite               =   new RobotObject(200, 250); // create the mainCharacter using the HumanObject class
    // robots.push(robotSprite);

    // ghostSprite2               =   new GhostObject(100, 150); // create the mainCharacter using the HumanObject class
    // ghosts.push(ghostSprite2);
   
    for(let i = 0; i < 1; i++){
        let yPos = random(50,450);
        let minX =  random(50, 200);
        let maxX = random(250,450); 
        let xPos = (minX + 20);
        troopers.push(new TrooperObject(xPos,yPos,minX,maxX));
    }
}

function draw(){
    background(50,50,50);

    troopers.forEach(function (t){
        t.move();
    });

    drawSprites();
    
}

class TrooperObject{
    constructor(xPos,yPos,minX,maxX){

    this.xPos           =   xPos;
    this.yPos           =   yPos;
    this.minX           =   minX;  
    this.maxX           =   maxX;

    //option to invert direction within map

    
    this.trooperSprite = createSprite(xPos,yPos);
    this.trooperSprite.mirrorX(1);
    this.trooperSprite.velocity.x = 1;
    this.trooperSprite.addAnimation('hover', trooperAnimation);
    this.trooperSprite.scale = 1;
    this.trooperSprite.debug = true;
    this.trooperSprite.setCollider('circle',0,-20,30);
    }

    move(){

        if(this.trooperSprite.position.x < this.minX) {
            this.trooperSprite.mirrorX(1);
            this.trooperSprite.velocity.x = 1; 
        } 

        if(this.trooperSprite.position.x > this.maxX) { 
            this.trooperSprite.mirrorX(-1);
            this.trooperSprite.velocity.x = -1;
        }
    }
    //function to collide with ghost
}