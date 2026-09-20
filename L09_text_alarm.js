// let speed = 3;
// let x=50;
// let y=200;
let countdown = 5;
let interval;
function preload(){
    let bgmusic=loadSound('assets/bossaNova.mp3');
}
function setup(){
    createCanvas(600,400);
}
function draw(){
    background(220);
    // fill(0);
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
}
function mousePressed(){
    interval = setInterval(updateCountdown,1000);
}
function updateCountdown(){
    if(countdown>0){
        countdown-=1;
    }else{
        clearInterval(interval);
        setInterval(alarm,500);
    }
}
function alarm(){
        background(random(255),random(255),random(255));
        bgmusic.play()
}
 
