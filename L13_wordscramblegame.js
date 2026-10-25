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

    rescramblebutton=createButton("display")
    rescramblebutton.position(250,160)
    rescramblebutton.size(100,30)
    rescramblebutton.style("font-size","16px")

    button.mousePressed(displaytext)

}
function draw(){
    text(displaytext,300,230)

}
function displaytext(){
    displaytext=textbox.value()
}