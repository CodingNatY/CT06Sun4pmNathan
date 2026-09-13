let x=200;
let y=200;
let speed=3;
function setup(){
    createCanvas(400,400);
  
}
function draw(){
    
  
    background(220);
  square(x,y,40);
  x+=3;
    if(x<0 || x>=width-40){
        speed = -speed;
        fill(random(255),random(255),random(255));
    }
}