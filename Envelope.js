// ----------------- FUNCTION THAT IS EXECUTED WHEN THE ENVEOPE IS OPENED ---------------------------//
function openenvelope(){   

  image(prison, 0-width*0.5, 0-height*0.5 , 2.*width , 2*height)  //Prison background
  image(note , 0 , 0 , width , height)                            // The note and fingers
  
  textFont(scribble) //text font
  
  fill('black') //Text colour 

  // Each text is a new line on the note
  // The margin and spacing is dictated by the width and height respectively
  margin = width*0.1
  textSize(20)
      text('Commander,' , margin , height*0.15)
      text('You may not remember much, they did real good job on your memory. We need you back in the resistance.', margin , height*0.2)
      text('I have infiltrated the enemy ship and managed to get this note in to your cell through the vents. The cell door is unlocked.' , margin , height*0.25)
      text('I would recommend to wait until the guard is close to the door. Storm the door, it will swing open and knock the guard over.' , margin , height*0.3)
      text('If you are quick you should be able to get to his weapon. I have included an ear piece in this envelope.' , margin , height*0.35)
      text('I am monitoring your movement through the ship. Press R if you want to make contact with me' , margin , height*0.4)
      text('Unfortunately you will not be able to communicate with me but if possible I can give you some guidance to help you.' , margin , height*0.45)
      text('Find your way to the flight deck. I will be waiting for you there. An escape ship is fueled and ready for our escape.' , margin , height*0.5)
      text('You be a bit stiff after the long sleep. I recommend that you have look at the information page to loosen your legs ' , margin , height*0.55)
      text('and arms before you leave the cell.' , margin , height*0.6)
      text(' Good luck. ' , margin , height*0.65)
  
      
  }


