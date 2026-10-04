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
    verbinput.position(width/2,130);
    adjinput=createInput();
    adjinput.position(width/2,160);
    adverbinput=createInput();
    adverbinput.position(width/2,190);
    placeinput=createInput();
    placeinput.position(width/2,220);
    button=createButton("update story");
    button.position(width/2,250);
    button.mousePressed(updatetext);
}
function draw(){
    background(220);
    textSize(24);
    textAlign(RIGHT,CENTER);
    text("give me a noun",width/2-20,110);
    text("give me a verb",width/2-20,110);
    
}
function updatetext(){
    console.log("hello, "+textinput.value());
}