let x=200;
let y=200;
let speed=3;
let food=[x,y,speed]
function setup(){
    createCanvas(4000,400);
      background(220);
}
function draw(){
    
  

// //   square(x,y,40);
// //   x+=speed;
// //     if(x<0 || x>=width-40){
// //         speed = -speed;
// //         fill(random(255),random(255),random(255));
// //     }
textSize(32);
textAlign(RIGHT)
// text("nathan",50,50);
// text("9",50,100);
// text("minecraft",50,150);
for(let i=0 ; food.length ;i++ ){
    text(food[i],50,100+i*50);
}
}