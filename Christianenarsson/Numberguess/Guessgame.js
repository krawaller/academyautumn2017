
while(loop){
	var randomNumber = Math.floor(Math.random()*10)+1;
	var counter = 0;

	while(counter<3){
		var guess = parseInt(prompt("Enter your guess"));
		if (guess === randomNumber) {
			alert("Correct xD XD");
			counter=counter+4;
		}
		else if (guess > randomNumber){
			alert("Too High!!!!");
			counter++;
		}
		else {
			alert("Too Low!!!");
			counter++;
		}
	}
	if (counter===3){
		alert ("Ok, you lost :((");
	}
	var again = prompt("Type q to quit");
	if (again === "q") {
		loop = false
	}
}
