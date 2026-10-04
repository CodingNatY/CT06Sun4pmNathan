let textinput;
let button;
function setup(){
    createCanvas(700,800);
    textinput=createInput();
    textinput.position(width/2,100);
    button=createButton("click me");
    button.position(width/2,135);
    button.mousePressed(updatetext);
}
function draw(){
    background(220);
    textSize(24);
    textAlign(RIGHT,CENTER);
    text("give me your name",width/2-20,110);
}
function updatetext(){
    
}