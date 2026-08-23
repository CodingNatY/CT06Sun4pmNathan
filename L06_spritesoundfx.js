let x = 200;
let y = 200;
function setup(){
    createCanvas(400,400);
    background(220);
}
let soundeffect
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