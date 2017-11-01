var streak = 0;
var name = prompt("Enter name")
var hint = "";
var maxTries = 3;
alert("Hello " + name + "\nLets Play!\nGuess what number I am thinking of")
play();

function play(){
    var randomNumber = Math.floor(Math.random()*10) + 1;
    var guess = "";
    for(var x = 0;x < maxTries;x = x + 1){
        guess = parseInt(prompt(hint + "\nEnter Guess (1-10)\nTries left: " + (maxTries - x).toString()));
        if(guess < randomNumber && guess > 0){
            hint = "Wrong! Higher"
        }        
        else if(guess > randomNumber && guess < 11){
            hint = "Wrong! Lower"
        }
        else if(guess == randomNumber)
        {
            break;
        }
        else{
            hint = "Not a valid number!"
        }
    }
    if(guess == randomNumber){
        streak= streak + 1;
        alert("Number " + randomNumber + " is correct\nStreak: " + streak)
    }
    else{
        alert("Wrong!\nThe correct number is: " + randomNumber);
        streak = 0;
    }
    hint = "";
    askReplay();
}
function askReplay(){
    var response = prompt(hint + "\nDo you want to play again?\nEnter yes or no")
    if(response.toLowerCase() == "yes" || response.toLowerCase() == "y"){
        play();
    }
    else if(response.toLowerCase() == "no" || response.toLowerCase() == "n" || !response){
        alert("Okay :(\nBye Bye!")
        close();
    }
    else{
        hint = "Not a valid answer!"
        askReplay();
    }
}
