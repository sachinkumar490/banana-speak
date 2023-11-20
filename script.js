// how to take input in js
// var username = prompt("give me username")

// processing
// var welcomeMessage = "this is script works" +  username;

// output
// alert(welcomeMessage);

var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL (text) {
    return serverURL + "?" + "text=" + text
}
// when an error occurs
function errorHandler(error){
    console.log("error occured", error)
}
// when click happens
function clickHandler(){
    var inputText = txtInput.value;

    // calling server for processing
    fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)

};
// syntax to click button function work  
btntranslate.addEventListener("click",clickHandler)
    
