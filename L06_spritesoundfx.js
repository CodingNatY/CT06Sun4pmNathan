let x = 200;
let y = 200;

function setup(){
    createCanvas(400,400);
    background(220);
}
let soundEffect, bgMusic, staticImage
function preload(){
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound(assets/bossNova.mp3);
    loadImage = 'assets/pico-a.png'
}
function draw(){
    if(keyCode === 38){
        y -= 5;
    }
    if(keyCode === 37){
        x-=5;
    }
    if(keyCode === 39){
        x+=5;
    }
    if(keyCode === 40){
        y+=5;
    }
    circle(x,y,50);

}