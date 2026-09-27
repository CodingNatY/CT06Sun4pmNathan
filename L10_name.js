// write your codes here  
let userinput;
let usertext = "ENTER NAME HERE";
let ageinput;
let agetext = "ENTER AGE HERE";
let bgcolorpicker;
let bgcolorpicker2;
function setup(){
    createCanvas(400,400);
    userinput = createInput();
    userinput.position(width/2 - 90 ,425);
    userinput.input(updateText);

    ageinput = createInput();
    ageinput.position(width/2 - 90 ,400);
    ageinput.input(updateAge);

    bgcolorpicker = createColorPicker(220);
    bgcolorpicker.position(width/2-90 , 365);

    bgcolorpicker2 = createColorPicker(220);
    bgcolorpicker2.position(width/2-90,340);
}

function draw(){
      
    background(bgcolorpicker.value());
    fill(bgcolorpicker2.value())
    fill(255)
    rect(50,100,300,150,50);
    fill(0);
    textSize(12);
    text("Pick color: ",50 , 300)
    textSize(24);
    textAlign(CENTER,CENTER);
    text(usertext,width/2,height/2-40); 
    textSize(24);
    textAlign(CENTER,CENTER);
    text(agetext,width/2,height/2);
    textSize(12);
    text("Enter name",50 , height-70)
    textSize(12);
    text("Enter age",50 , height-40)
}

function updateText(){
    usertext = this.value()
}
function updateAge(){
    agetext = this.value();
}