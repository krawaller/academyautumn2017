// By Thommy, Rickard and Jesper
if(!confirm("Wanna play you gameu?")) {
    window.location = "poo.html";
}
var name = prompt("What is your name?");
while(true) {
    var randomNumber = Math.floor(Math.random()*10)+1;
    var guesses = 0;
    while(guesses < 3) {
    var guess = parseInt(prompt("Enter your guess"));
        if(randomNumber=== guess) {
            alert("Correct!")
            break;
            }
            else {
            alert("WRONG!")
            alert(randomNumber)
            guesses++;
            }
    }
    if(!confirm("Wanna play you againu? (Yes/No)")) {
        break;
    }

}