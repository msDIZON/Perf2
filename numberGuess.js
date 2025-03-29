// WHILE LOOP ACTIVITY

// Write a program that asks the user to guess a number between 1 and 10

let num = 5; 
let user_guess; 

/* Use a while loop to keep asking until the user guesses the correct number, then log messages to the 
console if the user guess is too high, too low, or correct*/

while (user_guess !== num) { 
  user_guess parseInt(prompt("Guess a = number between 1 to 10:")); 
  
  if (user_guess < num) {
    console.log("Too low!")
  } else if (user_guess > num) { 
    console.log("Too high!"); 
  } else { 
    console.log("Correct!"); 
  } 
}

