
function ghostSetup(){
    
    for(let i = 0; i < 10; i++){
        let yPos = random(4350,4900);
        let minX =  random(1100,1500);
        let maxX = random(1500,2080); 
        let xPos = (minX + 20);
        ghosts.push(new GhostObject(xPos,yPos,minX,maxX));
    }
}
class GhostObject{
    constructor(xPos,yPos,minX,maxX){

    this.xPos           =   xPos;
    this.yPos           =   yPos;
    this.minX           =   minX;  
    this.maxX           =   maxX;

    //option to invert direction within map

    
    this.ghostSprite = createSprite(xPos,yPos);
    this.ghostSprite.mirrorX(1);
    this.ghostSprite.velocity.x = -1;
    this.ghostSprite.addAnimation('hover', ghostImage);
    this.ghostSprite.scale = 20;
    this.ghostSprite.debug = true;
    this.ghostSprite.setCollider('circle',0,-10,50)
    }

    move(){

        if(this.ghostSprite.position.x < this.minX) {
            this.ghostSprite.mirrorX(-1);
            this.ghostSprite.velocity.x = 1;
        } 

        if(this.ghostSprite.position.x > this.maxX) { 
            this.ghostSprite.mirrorX(1);
            this.ghostSprite.velocity.x = -1;
        }
    }
    //function to collide with ghost
}