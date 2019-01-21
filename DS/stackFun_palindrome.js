//palandrome using inbuilt js-stack

var letters = [];
var word = "malayalam"

var rword= '';

//put letters of the word into the stack 

for (let i = 0; i < word.length; i++) {
     letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if(rword === word){
    console.log("The given word is palindrome");
}else{
    console.log("The given word is not a palindrome")
}












