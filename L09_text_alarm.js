// let speed = 3;
// let x=50;
// let y=200;
let colourr=0;
let colourg=0
let colourb=0
let countdown = 5;
let interval;
let bgmusic;
let alarminterval;
function preload(){
    bgmusic=loadSound('assets/bossaNova.mp3');
}
function setup(){
    createCanvas(600,400);
}
function draw(){
    background(colourr,colourg,colourb);
    fill(220);
    textSize(100);
    
    // text("bounce",x,y);
    // x+=speed;
    // if(x<0 || x>600-60){
    //     speed = -speed;
    // let h=hour();
    // let m=minute();
    // let s=second();
    // let string=nf(h,2)+":"+nf(m,2)+":"+nf(s,2);
    // text(string,100,200);
    text(countdown,width/2,height/2);
    textSize(32);
    text("click to start the timer",100,300);
    text("press space to restart timer",100,350);
    if(key===' '){
        countdown=5;
        bgsound.stop();
        colourr=0;
        colourg=0;
        colourb=0
        clearInterval(alarminterval)
    }
}

function mousePressed(){
    interval = setInterval(updateCountdown,1000);
}
function updateCountdown(){
    if(countdown>0){
        countdown-=1;
    }else{
        clearInterval(interval);
        alarminterval=setInterval(alarm,500);
    }
}
function alarm(){
        colourr=random(255);
        colourg=random(255);
        colourb=random(255);
        bgmusic.play()
}
 
