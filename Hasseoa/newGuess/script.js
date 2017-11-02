//kod

var randomNumber = Math.floor(Math.random()*10)+1;
var numberOfGuess = 0;

var submitButton = document.getElementById("submitButton");
var guessField = document.getElementById("guessInput");
var resetButton = document.getElementById("reset");
var elem = document.getElementById("text");

var listener = function(){	
	console.log("facit: "+randomNumber);
	if(numberOfGuess === 2){
		elem.innerText = "You losted!";
		submitButton.classList.add("hidden");
		resetButton.classList.remove("hidden");
		
	}
	console.log(guessInput.value);
	if(guessInput.value == randomNumber){
		console.log("RIGHT!");
		submitButton.classList.add("hidden");
		resetButton.classList.remove("hidden");
		elem.innerText = "You won!";
	}
	else{
		console.log("WROOOOOONG!");
		numberOfGuess++;
		console.log("currentguess: "+numberOfGuess);
		elem.innerText = "Guess again!";
	}
	guessInput.value ="";
}
var reset = function(){
	window.location.reload();
}

submitButton.addEventListener("click",listener);
resetButton.addEventListener("click",reset);




