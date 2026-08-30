// let pico;
// let popSound;
let ballx = 300;
let bally = 200;
let ballsize = 30;
let ballspeedx = 20;
let ballspeedy = 20;
// let picowidth = 100;
function setup(){
    createCanvas(400,400);}
// function preload(){
//     let soundEffect = loadSound('assets/pop.mp3');
//     let staticImage  = loadImage('assets/pico-a.png');  
// }

function draw(){
     background(220);
     noStroke();
//     if(keyIsDown(LEFT_ARROW)){
//         x -= 3;
//     }
//     if(keyIsDown(RIGHT_ARROW)){
//         x += 3;
//     }
//     if(keyIsDown(UP_ARROW)){
//         y-=3;
//     }
//     if(keyIsDown(DOWN_ARROW)){
//         y+=3;
//     }
//     Image(pico,x,y,picowidth,100);
// }
// function keyPressed(){
//     if(key === " "){
//         picowidth/=2;
//         popSound.loop();
createCanvas
    circle(ballx,bally,ballsize);
    ballx += ballspeedx;
    bally += ballspeedy;
}