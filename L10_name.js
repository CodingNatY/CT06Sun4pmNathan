let inputText;
let inputText2;
let userText = "name"
let userText2 = "age"
function setup(){
    createCanvas(600,400);

inputText = createInput();
inputText.position(200, height - 90);
inputText.input(updateText);
inputText2 = createInput();
inputText2.position(200, height - 70);
inputText2.input(updateText2)
}
function draw(){
    background(220);
    fill(0);
    textSize(28);
    textAlign(CENTER,CENTER);
    text(userText,width/2,170);
    text(userText2,width/2,190);
}
function updateText(){
    userText = this.value();
}
function updateText2(){
    userText2 = this.value();
}