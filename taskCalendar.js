// SWITCH STATEMENT ACTIVITY 

// Create a program that prompts the user to enter a day of the week (e.g., "Monday", "Tuesday")

let day = prompt("Enter a day of the week:");
let message = "Your task for this day is:"

// Use a switch statement to map each day to a specific task. Include a default case for any unexpected inputs, then log the task for that day to the console

switch(day){
    case "Monday":
        console.log(message, "Finish your assignments.");
        break;
    case "Tuesday":
        console.log(message, "You have 7:30 AM class.");
        break;
    case "Wednesday":
        console.log(message, "You have an exam.");
        break;
    case "Thursday":
        console.log(message, "You need to review.");
        break;
    case "Friday":
        console.log(message, "Review the DSA module.");
        break;
    case "Saturday":
        console,log(message, "Work on your HCI system.");
        break;
    case "Sunday":
        console.log(message, "Check your GClass or Activities.");
        break;
    default:
        console.log("Wag kana mag-aral/pumasok.");
}
