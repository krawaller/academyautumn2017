window.addEventListener("load", startGame);
var feedbackElem = document.querySelector("#feedback");

var UIelem = document.querySelector("#replay");
UIelem.classList.add("hidden"); 
var UIelem2 = document.querySelector("#submitGuess");

var field = document.querySelector("#guess");
var value = 0;
var random = 600;
var guesses = 0;

var button1 = document.querySelector("#submitGuess");
button1.addEventListener("click", submit);

var button2 = document.querySelector("#replay");
button2.addEventListener("click", startGame);

function startGame(){
    random = Math.floor(Math.random()* 10) +1;
    guesses = 0;
    UIelem2.classList.remove("hidden");
    UIelem.classList.add("hidden");
    console.log(random);
    feedbackElem.innerText="";
}


function submit() {
    value = field.value;
    if(value==random){
        UIelem.classList.remove("hidden");
        UIelem2.classList.add("hidden");
        feedbackElem.innerText = "So much blood, nice...";   
        console.log(value);
        
    }else{
        feedbackElem.innerText = "Not enough violence... Hit harder";
        guesses++;
        console.log(value);
        
    }
    if(guesses == 3){
        feedbackElem.innerText = "Yo' dead son'";
        UIelem.classList.remove("hidden");
        UIelem2.classList.add("hidden");
    }
}