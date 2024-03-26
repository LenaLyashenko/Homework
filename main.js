// Number: odd
let numberInput = prompt("Enter a number:");
let number = parseFloat(numberInput); 
if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert("The number is even.");
    } else {
        alert("The number is odd.");
    }
} else {
    alert("Invalid input. Please enter a valid number.");
}

// String: lexics
let textInput = prompt("Enter a text:");
let badWords = ["bad", "word"]; 

let hasBadWords = false;
for (let word of badWords) {
    if (textInput.toLowerCase().includes(word)) {
        hasBadWords = true;
        break;
    }
}

if (hasBadWords) {
    alert("The text contains one or more bad words.");
} else {
    alert("The text is clean.");
}

// Boolean
let questionBoolean = confirm("Do you like coding?");
let answerBoolean = questionBoolean ? "Yes" : "No";
console.log(answerBoolean);

if (questionBoolean) {
    alert("Great! Keep coding!");
} else {
    alert("That's okay. Coding is not for everyone.");
}

// Comparison: sizes
let sizeInput = prompt("Enter your size (our system):");

if (sizeInput === "XS") {
    alert("Your size in American system: 0-2");
} else if (sizeInput === "S") {
    alert("Your size in American system: 4-6");
} else if (sizeInput === "M") {
    alert("Your size in American system: 8-10");
} else if (sizeInput === "L") {
    alert("Your size in American system: 12-14");
} else if (sizeInput === "XL") {
    alert("Your size in American system: 16-18");
} else {
    alert("Your size is not available in American system.");
}

// Ternary
let gender = confirm("Are you male?") ? "You are male." : "You are female.";
alert(gender);

// Training
console.log(!!2); // true
console.log(!!0); // false
console.log(!!1); // true
console.log(2 || 1); // 2
console.log(2 || 0); // 2
console.log(2 && 1); // 1
console.log(1 && 2); // 2
console.log(0 && 2); // 0
console.log(0 || 1 || 2); // 1
console.log(0 && 1 && 2); // 0
console.log(2 || 1 || 0); // 2
console.log(2 && 1 && 0); // 0
console.log(confirm('left') || confirm('right')); // true if left or right
console.log(confirm('left') && confirm('right')); // true if both left and right
console.log(null || 2); // 2
console.log(undefined && 1); // undefined
console.log(alert("Hello") && confirm('Are you sexy?')); // Depends on the user's response
console.log(alert("Hello") || confirm('Are you drunk?')); // true if user confirms
console.log((undefined || 2) && (3 || "3.5") || (4 && 5)); // 3
console.log((2 && 1) || (null && 0)); // 1
console.log((2 > 1) && "greater"); // "greater"
console.log((2 < 1) && null); // false
console.log(null && (2 < 1)); // null
console.log(1 ? "one" : "not one"); // "one"
console.log(0 ? "zero" : "not zero"); // "not zero"
console.log("0" ? "\"zero\"" : "not `zero`"); // "\"zero\""
console.log(parseInt("0") ? 'true' : 'false'); // false
console.log(("" || 2) && (3 || "3.5") || (4 && 5)); // "3"
console.log((-1 + 1) && "zero"); // 0
console.log("-1" + 1 && "oups"); // "oups"
console.log(typeof null === 'object' ? "null is object" : "null is null"); // "null is object"
console.log(Math.random() < 0.5 && 'less' || 'more'); // "less" or "more"
console.log((a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a); // Depends on the value of 'a'
console.log([2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found'); // "prime"

// Prompt: or
let age = prompt("Enter your age:") || alert("Age not entered or cancelled.");

// Confirm: or this days
let shopping = confirm("Do you want to go shopping?") || alert("You are a coward.");

// Confirm: if this days
let shoppingif = confirm("Do you want to go shopping?");
if (!shoppingif) {
    alert("You are a coward.");
}

// Default: or
let firstName = prompt("Enter your first name:") || "John";
let middleName = prompt("Enter your middle name:") || "Doe";
let lastName = prompt("Enter your last name:") || "Smith";

// Default: if
let firstNameif = prompt("Enter your first name:");
if (!firstNameif) {
    firstNameif = "John";
}
let middleNameif = prompt("Enter your middle name:");
if (!middleNameif) {
    middleNameif = "Doe";
}
let lastNameif = prompt("Enter your last name:");
if (!lastNameif) {
    lastNameif = "Smith";
}

// Login and password
let login = prompt("Enter your login:");
if (login === "admin") {
    let password = prompt("Enter your password:");
    if (password === "qwerty") {
        alert("Welcome, admin!");
    } else {
        alert("Incorrect password!");
    }
} else {
    alert("Incorrect login!");
}

// Currency exchange
let currency = prompt("Enter the currency (e.g., USD, EUR):").toUpperCase();
let buy = confirm("Do you want to buy?");

let rate;
if (currency === "USD") {
    rate = buy ? 27.5 : 26.5;
} else if (currency === "EUR") {
    rate = buy ? 30 : 29;
}

let amount = parseFloat(prompt("Enter the amount:"));
let result = buy ? amount / rate : amount * rate;
alert(`You will get ${result.toFixed(2)} UAH.`);

// Scissors
let userChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
let computerChoice = Math.random();
if (computerChoice < 0.33) {
    computerChoice = "rock";
} else if (computerChoice < 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
alert(`Computer's choice: ${computerChoice}`);
if (userChoice === computerChoice) {
    alert("It's a tie!");
} else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
) {
    alert("You win!");
} else {
    alert("Computer wins!");
}
