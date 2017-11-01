var streak = 0;
var name = prompt("Enter name")
alert("Hello " + name + "\nLets Play!\nGuess what number I am thinking of")
play();

function play(){
    var hint = "";
    var maxTries = 3;
    var result = "";
    var lastGuess = -4711;
    var obvious = false;
    var guess = -1;
    var randomNumber = Math.floor(Math.random()*10) + 1;
    console.log("Hidden number is: " + randomNumber);
    for(var i = 0;i < maxTries;i = i + 1){
        console.log("isObvious: " + obvious);
        guess = parseInt(prompt(result + " " + hint + "\nEnter Guess (1-10)\nTries left: " + (maxTries - i).toString()));
        if(guess < randomNumber && guess > 0){
            result = "Wrong!"
            if (hint == "Higher" && lastGuess > guess){
                hint = "I said HIGHER dumbass!"
            }
            else{
                hint = "Higher"
            }
        }        
        else if(guess > randomNumber && guess < 11){
            result = "Wrong!"
            if (hint == "Lower" && lastGuess < guess){
                hint = "I said LOWER dumbass!"
            }
            else{
                hint = "Lower"
            }
        }
        else if(guess == randomNumber)
        {
            if(obvious){
             alert("Wrong!")   
            }
            break;
        }
        else{
            hint = "Not a valid number!"
        }
        if (guess == 2 && randomNumber == 1 || guess == 9 && randomNumber == 10 || Math.abs(guess - lastGuess) == 2 ){
            if(i < 2){
                obvious = true;
            }
        }
        lastGuess = guess;
    }
    if(guess == randomNumber){
        streak = streak + 1;
        if(obvious){
            alert("Just kidding, not even you could've guessed that wrong\nNumber " + randomNumber + " is correct\nStreak: " + streak)
        }
        else{
            alert("Number " + randomNumber + " is correct\nStreak: " + streak)
        }
    }
    else{
        if(obvious){
            alert("How could you get that wrong, it was so obvious!\nThe correct answer was: " + randomNumber)
        }
        else{
            alert("Wrong!\nThe correct number was: " + randomNumber);
        }
        streak = 0;
    }
    askReplay();
}
function askReplay(){
    var response = confirm("Do you want to play again?");
    if(response){
        play();
    }
    else{
        alert("Okay :(\nBye Bye!")
        close();
    }
}
