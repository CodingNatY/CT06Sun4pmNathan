// let textbox,button
// let displaytext
let word=["nathan","nathan2","nathan3"]
let currentword, scrambleword,input,rescramblebutton,submitbutton

let score=0
let streak=0
let maxstreak=0
let message=""
function setup(){
    currentword=random(word)
    scrambleword=shuffleWord(currentword)
    createCanvas(600,400)

    input=createInput("enter text here")
    input.position(245,175)
    input.size(110,30)
    input.style("font-size","16px")

    rescramblebutton=createButton("rescramble")
    rescramblebutton.position(120,175)
    rescramblebutton.size(110,35)
    rescramblebutton.style("font-size","16px")
    rescramblebutton.mousePressed(rescrambleWord)

    submitbutton = createButton("submit")
    submitbutton.position(375,175)
    submitbutton.size(100,35)
    submitbutton.style("font-size","16px")
    submitbutton.mousePressed(checkAnswer)

}
function draw(){
    background(220)
    text("word scramble game",300,60)
    textSize(18)
    text("random word: " + currentword,300,125)
    textSize(16)
    text("score: "+ score,300,250)
    text("streak: "+streak + "MAX: "+ maxstreak,300,275)
    text(message,300,315)
}
function shuffleWord(){
    let arr
}