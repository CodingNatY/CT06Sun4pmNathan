let x = 200;
let y = 200;
let soundEffect, bgMusic, staticImage
let staticImageX = 0;
let staticImageY = 0;
let staticImageS
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
    image(staticImage,0,0,50,50);
}
function keyPressed(){
if(keyCode===32){
        soundEffect.loop();
    }
}