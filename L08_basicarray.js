// let x=200;
// let y=200;
// let speed=3;
let ypos = height;
let food=["AAAAAAA","aaaaaaa","AaAaAa"];
function setup(){
    createCanvas(2000,2000);
    background(220)
}
function draw(){
    
  

//   square(x,y,40);

//   x+=speed;
//     if(x<0 || x>=width-40){
//         speed = -speed;
//         fill(random(255),random(255),random(255));
 //    }
textSize(32);
fill(0)
textAlign(LEFT);
// text("nathan",50,50);
// text("9",50,100);
// text("minecraft",50,150);
// for(let i=0 ; i<food.length ;i++ ){
//     text(food[i],50,100+i*50);
// }

for(let i = 0 ; i < food.length ; i++){
    text(food[i],100,ypos);
}
ypos-=1
}