word=random("apple")
function setup(){

}
function shuffleWord(word){
    let arr=word.split(' ')
    for(let i = arr.length-1;i>0;i--){
        let j = floor(random(i+1));
        [arr[i],arr[j]]=[arr[j],arr[i]]
    }
}
function checkGuess(){

}