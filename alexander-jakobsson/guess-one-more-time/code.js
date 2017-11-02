var randomNumber = Math.floor(Math.random() * 10) + 1;
var playAgainButton = document.getElementById("playagainbutton");
var playAgainDiv = document.getElementById("playagain");
var enterGuessDiv = document.getElementById("enterguess");
var winnerSpan = document.getElementById("winner");
var loserSpan = document.getElementById("loser")
var buttonList = {
    button1: document.getElementById("button1"),
    button2: document.getElementById("button2"),
    button3: document.getElementById("button3"),
    button4: document.getElementById("button4"),
    button5: document.getElementById("button5"),
    button6: document.getElementById("button6"),
    button7: document.getElementById("button7"),
    button8: document.getElementById("button8"),
    button9: document.getElementById("button9"),
    button10: document.getElementById("button10"),
};
var numberOfGuesses = 0;

var enterGuess = function(buttonValue) {
    var guessValue = buttonValue;
    numberOfGuesses++;
    console.log(numberOfGuesses);
    var elem = document.querySelector("#guess" + numberOfGuesses);
    elem.innerText = guessValue;
        console.log(randomNumber, guessValue, numberOfGuesses);
    if (guessValue == randomNumber) {
        winnerSpan.classList.remove("hidden");
        loserSpan.classList.add("hidden");
        enterGuessDiv.classList.add("hidden");
        playAgainDiv.classList.remove("hidden")
        console.log("You win!");
    } else if (numberOfGuesses >= 3) {
        console.log("Im in here!");
        loserSpan.classList.remove("hidden");
        winnerSpan.classList.add("hidden");
        enterGuessDiv.classList.add("hidden");
        playAgainDiv.classList.remove("hidden")
    } else {
        console.log("That's wrong!");
    }


}

var playAgain = function() {
    playAgainDiv.classList.add("hidden");
    winnerSpan.classList.add("hidden");
    loserSpan.classList.add("hidden");
    numberOfGuesses = 0;
    randomNumber = Math.floor(Math.random() * 10) + 1;
    for(var i = 1; i < 4; i++) {
     var elem = document.querySelector("#guess" + i);
     elem.innerText = "X";
    }
    var enterGuessDiv = document.getElementById("enterguess");
    enterGuessDiv.classList.remove("hidden");

}

// Som ett djur.
function pressButton1(){
    enterGuess(buttonList.button1.value);
}
function pressButton2(){
    enterGuess(buttonList.button2.value);
}
function pressButton3(){
    enterGuess(buttonList.button3.value);
}
function pressButton4(){
    enterGuess(buttonList.button4.value);
}
function pressButton5(){
    enterGuess(buttonList.button5.value);
}
function pressButton6(){
    enterGuess(buttonList.button6.value);
}
function pressButton7(){
    enterGuess(buttonList.button7.value);
}
function pressButton8(){
    enterGuess(buttonList.button8.value);
}
function pressButton9(){
    enterGuess(buttonList.button9.value);
}
function pressButton10(){
    enterGuess(buttonList.button10.value);
}

playAgain();
buttonList.button1.addEventListener("click", pressButton1);
buttonList.button2.addEventListener("click", pressButton2);
buttonList.button3.addEventListener("click", pressButton3);
buttonList.button4.addEventListener("click", pressButton4);
buttonList.button5.addEventListener("click", pressButton5);
buttonList.button6.addEventListener("click", pressButton6);
buttonList.button7.addEventListener("click", pressButton7);
buttonList.button8.addEventListener("click", pressButton8);
buttonList.button9.addEventListener("click", pressButton9);
buttonList.button10.addEventListener("click", pressButton10);
//submitButton.addEventListener("click", enterGuess);
playAgainButton.addEventListener("click", playAgain);