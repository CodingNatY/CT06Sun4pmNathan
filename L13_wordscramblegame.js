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
    input.position(200,100)
    input.size(200,40)
    input.style("font-size","16px")

    rebutton=createButton("display")
    button.position(250,160)
    button.size(100,30)
    button.style("font-size","16px")

    button.mousePressed(displaytext)

}
function draw(){
    text(displaytext,300,230)

}
function displaytext(){
    displaytext=textbox.value()
}