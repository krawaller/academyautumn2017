do {
  // gives random number 1-10
  var randomNumber = Math.floor(Math.random()*10)+1;
  console.log(randomNumber);

  var answer = 0;
  var correct = false;
  var nGuesses = 0;
  do {
    answer = parseInt(prompt("Guess the number (1-10)?"));
    if (isNaN(answer)) {
      alert("That's not a number. Try again!");
      continue; //skips incrementing nGuesses
    }
    if (answer > 10 || answer < 1) {
      alert("That's not between 1 and 10. Try again!");
      continue; //skips incrementing nGuesses
    }
    if (answer === randomNumber) {
      correct = true;
    }
    else {
      alert("Wrong!");
    }
    nGuesses++;
  } while (!correct && nGuesses < 3)

  if (correct) {
    alert("Correct!");
  }
  else {
    alert("Too many guesses!");
  }

  var playAgain = confirm("Play again?");
} while(playAgain)
