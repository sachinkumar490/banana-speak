// how to take input in js
// var username = prompt("give me username")

// processing
// var welcomeMessage = "this is script works" +  username;

// output
// alert(welcomeMessage);

var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
console.log(txtInput)

function clickHandler(){
    console.log("clicked");
    console.log("input",txtInput.value)
};
// syntax to click button function work  
btntranslate.addEventListener("click",clickHandler)
    
