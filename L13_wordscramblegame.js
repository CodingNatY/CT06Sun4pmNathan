// let textbox,button
// let displaytext
let word=["nathan","nathan2","nathan3"]
let currentword, scrambleword,input,rescramblebutton,submitbutton

let score=0
let streak=0
let maxstreak=0
let message=""
function setup(){
    createCanvas(600,400)
    input=createInput("enter text here")
    input.position(245,175)
    input.size(110,30)
    input.style("font-size","16px")

    rescramblebutton=createButton("rescramble")
    rescramblebutton.position(120,175)
    rescramblebutton.size(110,35)
    rescramblebutton.style("font-size","16px")
    button.mousePressed(rescrambleWord)

    submitbutton = createButton("submit")
    submitbutton.position(375,175)
    submitbutton.size(100,35)
    submitbutton.style("font-size","16px")
    button.mousePressed(checkAnswer)

}
function draw(){
    background(220)
}
function rescrambleWord(){
    
}