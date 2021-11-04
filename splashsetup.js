// ------------------ FUNCTION TO SETUP INTRO SCREEN ---------------------- //

function introScreenSetup(){
    // setup page
    createCanvas(window.innerWidth - 4 , window.innerHeight - 4);
    background(0,0,0);
    // create/clear a temporary array
    theta                 = []; 
    // fill theta array for all spinning things
    for(let i=0 ; i < 360 ; i++){   
      theta[i]            = i;  
    }
}