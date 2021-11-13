function robotSetup(){
    for(let i = 0; i < 1; i++){
        let yPos = random(50,450);
        let minX =  random(50, 200);
        let maxX = random(250,450); 
        let xPos = (minX + 20);
        robots.push(new RobotObject(xPos,yPos,minX,maxX));
    }
}

class RobotObject{
    constructor(xPos,yPos,minX,maxX){

    this.xPos           =   xPos;
    this.yPos           =   yPos;
    this.minX           =   minX;  
    this.maxX           =   maxX;

    //option to invert direction within map

    
    this.robotSprite = createSprite(xPos,yPos);
    this.robotSprite.mirrorX(1);
    this.robotSprite.velocity.x = -1;
    this.robotSprite.addAnimation('hover', robotAnimation);
    this.robotSprite.scale = 1;
    this.robotSprite.debug = true;
    this.robotSprite.setCollider('circle',0,-20,30);
    }

    move(){

        if(this.robotSprite.position.x < this.minX) {
            this.robotSprite.mirrorX(1);
            this.robotSprite.velocity.x = 1;
        } 

        if(this.robotSprite.position.x > this.maxX) { 
            this.robotSprite.mirrorX(-1);
            this.robotSprite.velocity.x = -1;
        }
    }
    //function to collide with ghost
}