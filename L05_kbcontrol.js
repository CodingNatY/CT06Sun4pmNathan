// let size = 5;
// let colours;
let x = 100;
    let y = 100;
    let speed = 3;
function setup(){
    createCanvas(600,400);
    background(220);
}

// function mousePressed(){
//     colours = color(random(255), random(255), random(255));
//     size = 5;
// }

// function mouseDragged(){
//     fill(colours)
//     circle(mouseX,mouseY,size);
//     size += 0.5;
// }

function keyPressed(){
//     let numCircles = floor(random(5,21));
//     for(let i=0; i < numCircles; i++);
//         let x = random(width);
//         let y = random(height);
//         let size = random(5,40);
//         fill(random(255),random(255),random(255))
//         circle(x,y,size);

        console.log("key:",key)
        console.log("keycode:",keyCode)
 }
function keyReleased(){
    background(220);
}

function draw(){
//     if(key === 'c' || key === 'C'){
//          circle(100,100,80);
//     }
//     if(key === 's' || key === 'S'){
//          square(60,60,80);
//     }
//     if(key === 't' || key === 'T'){
//          triangle(100,50,50,150,150,150);
//     }
    // if(keyCode === 87 ){
    //     fill(255);
    //     circle(300,200,100);
    // }
    // else if(keyCode === 82){
    //     fill(255,0,0);
    //     circle(300,200,100)
    // }
    // else if(keyCode === 71){
    //     fill(0,255,0)
    //     circle(300,200,100)
    // }
    // else{
    //     fill(255,255,0)
    //     circle(300,200,100)
    // }
    
    if (keyIsDown(LEFT_ARROW)){
        x -= speed;
    }
    if(keyIsDown(RIGHT_ARROW)){
        x += speed;
    }
    if(keyIsDown(UP_ARROW)){
        y-=speed;
    }
    if(keyIsDown(DOWN_ARROW)){
        y+=speed
    }
    x = constrain(x,0,width);
    y = constrain(y,0,height);
    }

