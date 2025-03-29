// DO-WHILE LOOP ACTIVITY

// Write a program that prompts the user to enter a password

let password = "jas123@dizon";
let user_guess; 

/* Use a do-while loop to keep asking for the password 
until it matches the correct one, then adda a message to the console*/

do{ 
  user_guess = prompt("Enter your password:"); 
  
  if (user_guess !== password){ 
     console.log("Incorrect, try again." ); 
  } 
}while (user_guess !== password); 

console.log("Access Granted!");
