let textinput;
let button;
function setup(){
    createCanvas(700,800);
}
function draw(){
    background(220);
    textinput=createInput();
    textinput.position(width/2,100);
    button=createButton("click me for no reson")
}