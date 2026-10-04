let nouninput;
let verbinput;
let adjinput;
let adverbinput;
let placeinput;
let button;
let storytext="";
let storytemplates;
function setup(){
    storytemplates[
        "The {adj} {noun} {verb} {adv} at {place}.",
        "One day, a {adj} {noun} "
    ]
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
    text("give me a verb",width/2-20,140);
    text("give me an adjective",width/2-20,170);
    text("give me an adverb",width/2-20,200);
    text("give me a place",width/2-20,230);
}
function updatetext(){
    console.log("noun: "+nouninput.value());
    console.log("verb: "+verbinput.value());
    console.log("adjective: "+adjinput.value());
    console.log("adverb: "+adverbinput.value());
    console.log("place: "+placeinput.value());
}