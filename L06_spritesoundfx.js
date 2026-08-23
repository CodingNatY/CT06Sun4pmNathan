let x = 200;
let y = 200;
let soundEffect, bgMusic, staticImage
function preload(){
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    loadImage = loadImage('assets/pico-a.png');
}
function setup(){
    createCanvas(400,400);
   
    bgMusic.loop();
}
function draw(){
     background(220);
    image(staticImage,0,0,50,50)
//     if(keyCode === 38){
//         y -= 5;
//     }
//     if(keyCode === 37){
//         x-=5;
//     }
//     if(keyCode === 39){
//         x+=5;
//     }
//     if(keyCode === 40){
//         y+=5;
//     }
//     circle(x,y,50);
}
function keyPressed(){
if(keyCode===32){
        soundEffect.play();
    }
}