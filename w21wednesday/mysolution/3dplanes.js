"use strict";

document.querySelector("#stage").addEventListener("mousemove", mouseMove);


function mouseMove(e) {
    // Find the x and y coordinates of the mouse, relative to the stage (upper left corner is 0,0)

    /* Gets the position of where you have scrolled:
    let yOffset = window.pageYOffset;
    console.log(window.pageYOffset);
    console.log(window.pageXOffset);*/

    /* get the mouse position, but from the top of the page
    let x = event.clientX;     // Get the horizontal coordinate
    let y = event.clientY;     // Get the vertical coordinate
    let coor = "X coords: " + x + ", Y coords: " + y;

    console.log(coor);*/
    let distanceBE;
    let x;
    let y;
    let centerX;
    let centerY;
    let distX;
    let distY;
    let relativeX;
    let positionX;
    let relativeY;
    let positionY;
    let positionX2;
    let positionY2;
    let positionX3;
    let positionY3;
    let factor;
    let factor2;
    let factor3;

    let stage = document.querySelector("#stage");


    let bounds = stage.getBoundingClientRect();
    x = event.clientX - bounds.left;
    y = event.clientY - bounds.top;
        

    console.log("Mouse coordinates: "+x+" "+y);

    // Find the center of the stage (relative to the stage) (centerX and centerY)

    console.log(stage.getBoundingClientRect());
    let wd = stage.getBoundingClientRect().right - stage.getBoundingClientRect().left;
    let hg = stage.getBoundingClientRect().bottom - stage.getBoundingClientRect().top;

    console.log(wd+" "+hg);

    centerX = wd/2;
    centerY = hg/2;

    console.log("Center of the page coordinates: "+centerX.toFixed(2)+" "+centerY.toFixed(2));

    // Calculate the horisontal (distX) and vertical (distY) distance from the mouse to the center of the stage


    /*distanceBE = Math.sqrt(
        Math.pow(x.toFixed(2) - centerX.toFixed(2), 2) + 
        Math.pow(y.toFixed(2) - centerY.toFixed(2), 2) 
    );

    console.log("Distance: "+distanceBE);*/

    distX = x - centerX;
    distY = y - centerY;

    console.log("DistX: " + distX + " DistY: " + distY);


    // Calculate the relativistic distance, using this formula
    // relativeX = ( centerX + distX ) / centerX;

    relativeX = ( centerX + distX ) / centerX;
    relativeY = ( centerY + distY ) / centerY;

    console.log("Relativistic distance X: "+relativeX);
    console.log("Relativistic distance Y: "+relativeY);

    // This gives you a value from -1 when the mouse is at the very left, 
    //                           to 0 when the mouse is in the center, 
    //                           to 1 when the mouse is at the very right
    // Try it out before continuing - just for horisontal (x) movement

    /* THIS IS POSSIBLY THE POINT WHERE IT ALL GOES WRONG
    I GET VALUES FROM 0 to 2 INSTEAD OF FROM -1 TO 1*/


    // Then position the foreground using the relativeX (you might need to calculate the center of the foreground!), by
    // trying these things in order, let each one replace the former, so you end up with just the last:
    // 1. Let the foreground follow the mouse - calculate the position like this
    //        position = centerX + stage.width/2 * relativeX
    // experiment with other formulas. Why does this one work best?
    // 2. Let the foreground move opposite the mouse, change something to be negative. Experiment!
    // 3. Let the foreground move opposite the mouse, but not as much as the mouse.
    //  you are going to need a factor, a value that it max should be moved by. Then try:
    //        position = centerX - factor * relativeX

    //position = centerX/100 + wd/2 * relativeX;
    factor = 100;
    positionX = centerX - factor * relativeX;
    
    console.log("PossitionX: " + positionX + " Position Y: " + positionY);
    document.querySelector("#foreground").style.left = positionX+"px";
    


    // When done, get it working for the vertical (y) movement as well - use the same formulas, but with different values almost everywhere

    positionY = centerY - factor * relativeY;
    document.querySelector("#foreground").style.top = positionY+"px";

    // When that is done, do the same for the background, but get it to move opposite the foreground.
    
    factor2 = -100;
    positionX2 = centerX*(-0.005) - factor2 * relativeX*2;
    positionY2 = centerY*(-0.008) - factor2 * relativeY*2;
    document.querySelector("#background").style.left = positionX2+"px";
    document.querySelector("#background").style.top = positionY2+"px";

    // Congratulate yourself, and then test the same code on graphics.html!
}