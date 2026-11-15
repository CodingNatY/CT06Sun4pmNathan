// let circlex = [200,200,200];
// let circley = [50,150,250];
// let circlespeed = [];
// let circlecolour = []
// let numcircle = 3;
// let circlesize = 50;
let playerX=100;
let playerY;
let playersize=30;
let velocity=0;
let isgrounded = false;

let spikesX=[];
let spikeWidth = 20;
let spikeHeight=50;
let spikeSpeed=25;
function setup(){
    createCanvas(600,400);

//     circleColour = [color(255,0,0),color(0,255,0),color(0,0,255)];

//     for(let i = 0; i<numcircle;i++){
//         circlespeed.push(random(1,3));
//     }
    textAlign(CENTER,CENTER);
    playerY=height - playersize;

    for(let i =0; i<3;i++){
        spikesX.push(width + i*300);
    }
}
function draw(){
//     for(i=0;i<numcircle;i++){
//         circle()
//     }
    background(0);

    velocity += 0.8;
    playerY+=velocity;

    if(playerY>= height-playersize){
        playerY = height-playersize;
        isgrounded=true;
        velocity=0;
    }else{
        isgrounded=false;
    }

    fill(0,255,0);
    rect(playerX,playerY,playersize+30,playersize);

    fill(255);
    textSize(20);
    text("press space to jump",width/2,30);

    fill(255,0,0);
    for(let i = 0; i<spikesX.length; i++){
        spikesX[i]-=spikeSpeed;

        if(spikesX[i]< -spikeSpeed){
            spikesX[i]=width + random(100,300);
        }
        triangle(spikesX[i],height,spikes)
    }
}
function keyPressed(){
    if(key === ' '&& isgrounded){
        velocity=-100;
    }
}
