let x = 200;
let y = 200;
let soundEffect, bgMusic, staticImage
let staticImageX = 0;
let staticImageY = 0;
let staticSpeed = 3;
function preload(){
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    staticImage  = loadImage('assets/pico-a.png');
}
function setup(){
    createCanvas(400,400);
   
    bgMusic.loop();
}
function draw(){
     background(220);
    if(keyIsDown(LEFT_ARROW)){
        staticImageX-=staticSpeed;
    }
        if(keyIsDown(RIGHT_ARROW)){
        staticImageX+=staticSpeed;
    }
        if(keyIsDown(UP_ARROW)){
        staticImageY-=staticSpeed;
    }
        if(keyIsDown()){
        staticImageX-=staticSpeed
    }
    image(staticImage,staticImageX,staticImageY,50,50);
}
function keyPressed(){
if(keyCode===32){
        soundEffect.play();
    }
}