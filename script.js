 function guessNumber() {
  var randomNum = Math.floor(Math.random() * 2);
 

  // output to the console for debugging
  console.log(randomNum);
  // declare a varible
  var guess;
  guess = prompt("Please enter a number between 1 to 2");
  console.log("Your guess is: " + guess);

  if (guess < randomNum) {
      window.alert("your guess is too low");
  } else if (guess > randomNum) {
      window.alert("Your guess is too high");
  } else if (guess == randomNum) {
      window.alert("You guessed it right. unto the next stage. You win a point!!!");
  }
};

// stage 2
var randomNum = Math.floor(Math.random() * 2 + 1);
 

  // output to the console for debugging
  console.log(randomNum);
  // declare a varible
  var guess;
  guess = prompt("Please enter a number between 1 to 3");
  console.log("Your guess is: " + guess);

  if (guess < randomNum) {
      window.alert("your guess is too low");
  } else if (guess > randomNum) {
      window.alert("Your guess is too high");
  } else if (guess == randomNum) {
      window.alert("You guessed it right. You win a point!!!");
  }
  