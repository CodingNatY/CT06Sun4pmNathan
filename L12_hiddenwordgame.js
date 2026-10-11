// let utext;
// let button;
let userinput;
let submitbutton;
let word=["bingbing","lingling","xingxing"]
let selected;
let typedword;
let hint;
let correctletter=""
function setup(){
    createCanvas(600,400);
    // utext=createInput();
    // utext.position(200,100);
    // button=createButton();
    let selected=random(word);
    hint=selected.charAt(0).toUpperCase();
    for (let i=1;i<selected.length;i++){
        hint=hint+"_"
    }
    userinput=createInput();
    userinput.position(220,260);
    userinput.size(80,30);
    submitbutton=createButton("guess");
    submitbutton.position(335,260);
    submitbutton.size(80,30)
}
function draw(){
    background(220);
    fill(0);
    textAlign(CENTER);
     textSize(18);
     text("guess da hiddan ward",width,100);
     textSize(16);
     text("attemps:0",width/2,130);
     text("hint: "+hint,width/2,160);
     text(typedword,width/2,320);
    text()
}
