

var randomNumber = Math.floor(Math.random()*10)+1;
console.log(randomNumber);
do {
prompt("Wanna play a game?")
var times = 1;
while (times < 4){
var answer = parseInt(prompt("Guess a number between 1 and 10!"));

if (answer === randomNumber){
    alert("Congratulations you guessed the correct number")
    break;
}else{
alert("You guessed the wrong number please try again!");
}
times++;
}

if (answer !== randomNumber){
    alert("You guessed 3 times and the game is over!")
}
}while (true);