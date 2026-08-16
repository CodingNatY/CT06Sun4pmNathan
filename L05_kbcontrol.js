let size = 5;
function setup(){
    createCanvas(600,400);
    background(220);
}

function mousePressed(){
    let colours = colour(random(255), random(255), random(255));
    size = 5;
}

function mouse(){
    fill(colours)
    circle(mouseX,mouseY,size);
    size += 0.5
}