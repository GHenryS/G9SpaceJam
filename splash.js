

function introScreen(){
  theta                 = []; 
  for(let i=0 ; i < 360 ; i++){   // fill theta array for all spinning things
    theta[i]            = i;  
  }
  
  
  image(introImage, 0, 0, width,height)
  
  r                     = width * 0.55;
  r1                    = height * 0.45;
  
  
  for(i=0; i < 1 ; i++){
  let xpos              = r * cos(theta[i] + 1.5 * PI) + width * 0.2;
  let ypos              = 1 * sin(theta[i] + 1.5 * PI) + height * 1;
  
  rocketship            = reateSprite(xpos,ypos);
  rocketship.addImage(rocketImage);
  rocketship.rotation   = ((tan(xpos/ypos))*3*PI+90);
  theta[i] += 0.005;
  
  }
  
  
  drawSprite(rocketship)
  
}