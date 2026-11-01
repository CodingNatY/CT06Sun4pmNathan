// let list=["apple","hi","hello"]
// let word=random(list)
// function setup(){

// }
// function shuffleWord(word){
//     let arr=word.split(' ')
//     for(let i = arr.length-1;i>0;i--){
//         let j = floor(random(i+1));
//         [arr[i],arr[j]]=[arr[j],arr[i]]
//     }
// }
// function checkGuess(){

// }
let starX=[];
let starY=[];
let starSize=[];
let starSpeed=[];
let numStars=20;
let playerX=width/2;

function setup(){
    createCanvas(600,400);
    for(let i =0;i<numStars;i++){
        starX.push(random(width));
        starY.push(random(-300,-50));
        starSize.push(random(10,30));
        starSpeed.push(random(1,5));
    }
}
function draw(){
    background(0);

    for(let i = 0; i<numStars;i++){
        fill(255,255,0)
        ellipse(starX[i],starY[i],starSize[i]);
        starY[i] += starSpeed[i];

        if(starY[i]>height){
            starY[i]=random(-300,-50);
            starX[i]=random(width);
            starSpeed[i]=random(3,6);
        }
    }
    if (keyIsDown(LEFT_ARROW)){
        playerX
    }


}