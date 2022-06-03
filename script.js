 function guessNumber() {
  var randomNum = Math.floor(Math.random() *3);
 

  // output to the console for debugging
  console.log(randomNum);
  // declare a varible
  var guess;
  guess = prompt("Please enter a number between 1 and 2");
  console.log("Your guess is: " + guess);

  if (guess < random) {
      window.alert("your guess is too low");
  } else if (guess > randomNum) {
      window.alert("Your guess is too high");
  } else if (guess == randomNum) {
      window.alert("You guessed it. You win!!!");
  }
}
  