// ----------CLASS TO CREATE A CHANGING COLOUR BANNER AT THE TOP OF THE PAGE ----------------------//
// colourBanner(px from top, px height)
// input px as if for full screen, function scale the input to the window size
class ColourBanner{
    constructor(fromTopY, bannerHeight){
        setPage();
        this.fromTopY               =   fromTopY;
        this.bannerHeight           =   bannerHeight;
        this.bannerArray            =   [];
        this.bannerFirstTime        =   0;
        let tempArray               =   [];
        // banner variables
        let redColour;
        let grnColour;
        let bluColour;
        let red;
        let grn;
        let blu;
        this.redC                    =   1 / scale;
        this.grnC                    =   2 / scale;
        this.bluC                    =   3 / scale

        this.topOfBanner            =   this.fromTopY * scale;
        this.bottomOfBanner         =   this.topOfBanner + this.bannerHeight * scale;
        let windowSize;
    
        // header banner
        if(this.bannerFirstTime == 0 || window.innerWidth != windowSize){
                redColour           =   255;
                grnColour           =   150;
                bluColour           =   50;
                red                 =   1 / scale;
                grn                 =   2 / scale;
                blu                 =   3 / scale;
                for(let i = 0 ; i < window.screen.width - 4; i++){
                // keep colour rage between 0and 255
                if(redColour > 254 || redColour < 0){
                    red = -red;
                }
                if(grnColour > 254 || grnColour < 0){
                    grn = -grn;
                }  
                if(bluColour > 254 || bluColour < 0){
                    blu = -blu;
                }    
                // step the colours
                redColour           =   redColour + red;
                grnColour           =   grnColour + grn;
                bluColour           =   bluColour + blu;
                // clear the tempArray
                tempArray           =   [];
                // add colours to tempArray 
                tempArray.push(redColour);
                tempArray.push(grnColour);
                tempArray.push(bluColour);
                // add tempArray content to the banner array
                this.bannerArray.push(tempArray);
            }   
            // set variable so to prevent the banner creation loop from running again
            this.bannerFirstTime    =   1;
            // variable to check the window size have changed
            // if the window size have changed the array will be re-created 
        }
    }
    drawBanner(){
       
        // draw banner
        for(let i = 0 ; i < this.bannerArray.length; i++){
            stroke(this.bannerArray[i][0], this.bannerArray[i][1], this.bannerArray[i][2],setBright);
            line(i, this.topOfBanner * scale, i, this.bottomOfBanner * scale)    
        }  
    }
    floatColours(){
        // add a new line to the end of the array and remove the first line from the array
        let bLength                  =   this.bannerArray.length - 1;
        let tempArray                =   [];
        if(this.bannerArray[bLength][0] + this.redC > 255 || this.bannerArray[bLength][0] + this.redC < 0 ){
            this.redC    = -this.redC; 
        }
        if(this.bannerArray[bLength][1] + this.grnC > 255 || this.bannerArray[bLength][1] + this.grnC < 0 ){
            this.grnC    = -this.grnC; 
        }
        if(this.bannerArray[bLength][2] + this.bluC > 255 || this.bannerArray[bLength][2] + this.bluC < 0 ){
            this.bluC    = -this.bluC; 
        }
        tempArray[0]                =   this.bannerArray[bLength][0] + this.redC;
        tempArray[1]                =   this.bannerArray[bLength][1] + this.grnC;
        tempArray[2]                =   this.bannerArray[bLength][2] + this.bluC;
        this.bannerArray.push(tempArray);
        this.bannerArray.shift();  
    }  
}

// ----------CLASS TO CREATE ADJUSTABLE HORISONTAL BARS ----------------------//
class SettingsBars{
    // barName, xPos, yPos are compulsory inputs
    // optional inputs = width, height, bgColour 'rgb(0,0,0)' , frameColour, barColour 'rgb(0,0,0)' , buttonSize, bgButtonColour 'rgb(0,0,0)', buttonColour 'rgb(0,0,0)', borderColour 'rgb(0,0,0)'
    constructor( barName, xPos, yPos, width, height, bgColour , barColour){
    this.name                   =   barName;   
    this.xPos                   =   xPos;
    this.yPos                   =   yPos;
    this.value                  =   255;

    if(width == true){ this.width = width;} else {this.width = 100;}
    if(height == true){ this.height = height;} else {this.height = 100;}
    if(bgColour == true){ this.bgColour = bgColour;} else {this.bgColour = color('rgba(255, 255, 255, '+setOpacity+')');}
    if(barColour == true){ this.barColour = barColour;} else {this.barColour = color('rgba(255, 0, 0,'+setOpacity+')');}
    if(borderColour == true){ this.borderColour = borderColour;} else {this.borderColour = color('rgba(255, 0, 0,'+setOpacity+')');}  

    }
    draw(){
        
    }
}
