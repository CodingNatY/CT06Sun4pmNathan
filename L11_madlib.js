let nouninput;
let verbinput;
let adjinput;
let adverbinput;
let placeinput
let button;
function setup(){
    createCanvas(700,800);
    nouninput=createInput();
    nouninput.position(width/2,100);
    verbinput=createInput();
    verbinput.position(width/2,100);
    adjinput=createInput();
    nouninput.position(width/2,100);
    button=createButton("update story");
    button.position(width/2,135);
    button.mousePressed(updatetext);
}
function draw(){
    background(220);
    textSize(24);
    textAlign(RIGHT,CENTER);
    text("give me a noun",width/2-20,110);
}
function updatetext(){
    console.log("hello, "+textinput.value());
}