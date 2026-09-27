// let inputText;
// let inputText2;
// let userText = "name"
// let userText2 = "age"
// function setup(){
//     createCanvas(600,400);

// inputText = createInput();
// inputText.position(200, height - 90);
// inputText.input(updateText);
// inputText2 = createInput();
// inputText2.position(200, height - 70);
// inputText2.input(updateText2)
// }
// function draw(){
//     background(220);
//     fill(0);
//     textSize(28);
//     textAlign(CENTER,CENTER);
//     text(userText,width/2,170);
//     text(userText2,width/2,190);
// }
// function updateText(){
//     userText = this.value();
// }
// function updateText2(){
//     userText2 = this.value();
// }
// let r=220;
// let g=220;
// let b=220;
// let countdownnum;
// let countdowntimer=60;
let userinput;
let usertext = "enter text here";
let userinput2;
let usertext2;
function setup(){
    createCanvas(400,400);
    userinput=createInput();
    userinput.position(100,350);
    userinput2=createInput();
    userinput2.position(100,375);

}
function draw(){
    // background(r,g,b);
    // countdownnum=setInterval(countdown,1000);
    // textSize(24);
    // textAglign(CENTER,CENTER);
    // text(countdowntimer,width/2,height/2);
    background(220);
    textSize(24);
    textAlign(CENTER,CENTER);
    // text(usertext,width/2,height/2);
    // textSize(12);
    // text("enter name",50,height-70)
    text(usertext,100,150);
    

}
function updateText(){
    usertext = this.value;
}
// function countdown(){
//     if(countdowntimer>0){
//         countdown-=1
//         r=random(0,255);
//         g=random(0,255);
//         b=random(0,255);
//     }else{
//         clearInterval(countdownnum);
//     }

// }