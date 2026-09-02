function setup(){
    createCanvas(800,600);
    background(220);
}
function draw(){
    // task 1
    fill(0);
    triangle(100,100,50,500,150,500);
    circle(300,300,200);
    square(500,150,200);
    stroke(255,0,0);
    strokeWeight(10);
    // task 2
     for(let i = 0; i<10 ; i++){
        fill(0 + i * 25);
        circle(50 + i * 30,50 + i * 30,20)
    }
}

/*
css -> cascading style sheet
heading in HTML -> h1 - h7
must have in HTML -> body, title, HTML, head
declare a variable -> let variable name = value
must have functions in p5js -> setup()and draw()
in for loop be very careful of the initial variable declaration
for loop syntax -> for(let i = 0; i<5; i++)
for loop syntax for(declareation;condition;increment)
to create canvas -> createCanvas(width,height)
coordinate system top left 0,0 move right x inc y same | move down x same y inc | don't use negative
function run once -> function setup()
function run multiple -> function draw()
*/