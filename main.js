//Temperature
const convertTemperature = (temp, fromUnit, toUnit) => {
  if (fromUnit.toLowerCase() === 'celsius' && toUnit.toLowerCase() === 'fahrenheit') {
    return (temp * 9/5) + 32;
  } else if (fromUnit.toLowerCase() === 'fahrenheit' && toUnit.toLowerCase() === 'celsius') {
    return (temp - 32) * (5/9);
  } else {
    return 'Invalid conversion';
  }
};

const celsiusTemperature = parseFloat(prompt("Enter the temperature in Celsius:"));
const convertedTemperature = convertTemperature(celsiusTemperature, 'celsius', 'fahrenheit');
alert(`Temperature in Fahrenheit: ${convertedTemperature}`);


//RGB
const RGB = (r, g, b) => {
  const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };
  
  const red = toHex(Math.max(0, Math.min(255, r))); 
  const green = toHex(Math.max(0, Math.min(255, g))); 
  const blue = toHex(Math.max(0, Math.min(255, b))); 
  
  return `#${red}${green}${blue}`;
};

const red = parseInt(prompt("Enter the value of red component (0-255):"));
const green = parseInt(prompt("Enter the value of green component (0-255):"));
const blue = parseInt(prompt("Enter the value of blue component (0-255):"));

const colorCode = RGB(red, green, blue);
alert(`CSS color code: ${colorCode}`);

//Flats
const findApartmentLocation = () => {
  const floors = parseInt(prompt("Enter the number of floors in the building:"));
  const apartmentsPerFloor = parseInt(prompt("Enter the number of apartments per floor:"));
  const apartmentNumber = parseInt(prompt("Enter the apartment number:"));

  const totalApartments = floors * apartmentsPerFloor;
  const entrance = Math.ceil(apartmentNumber / totalApartments);
  const floor = Math.ceil((apartmentNumber % totalApartments) / apartmentsPerFloor);

  return { entrance, floor };
};

const apartmentLocation = findApartmentLocation();
alert(`Entrance: ${apartmentLocation.entrance}, Floor: ${apartmentLocation.floor}`);


//Full name
const capitalize = (str) => {
  return str.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

const getCredentials = () => {
  const name = prompt("Enter your name:").trim();
  const surname = prompt("Enter your surname:").trim();
  const fatherName = prompt("Enter your father's name:").trim();

  const fullName = `${capitalize(name)} ${capitalize(surname)} ${capitalize(fatherName)}`;

  return { name, surname, fatherName, fullName };
};

const credentials = getCredentials();
console.log(credentials);

//New line 
const convertToMultiline = (str) => {
  return str.split("\\n").join("\n");
};

const userInput = prompt("Enter a string with \\n as a newline marker:");
const multilineString = convertToMultiline(userInput);
console.log(multilineString);


//Prompt OR
const promptOrDefault = (promptText, defaultValue) => prompt(promptText) || defaultValue;

const age = promptOrDefault("Enter your age:", "Not provided");

if (age) {
  console.log("Age entered:", age);
} else {
  alert("Please enter your age!");
}

//Login And Password
const loginAndPassword = (correctLogin, correctPassword) => {
  const enteredLogin = prompt("Enter your login:");
  
  if (enteredLogin === correctLogin) {
      const enteredPassword = prompt("Enter your password:");
      
      if (enteredPassword === correctPassword) {
          alert("Welcome!");
          return true;
      } else {
          alert("Incorrect password!");
          return false;
      }
  } else {
      alert("Incorrect login!");
      return false;
  }
};

const correctLogin = "admin";
const correctPassword = "qwerty";

loginAndPassword(correctLogin, correctPassword);


//generateMultiplicationTable
function generateMultiplicationTable() {
  document.write("<table border='1'>");

  for (let i = 0; i <= 5; i++) {
      document.write("<tr>");

      for (let j = 0; j <= 5; j++) {
          let result = i * j;
          let backgroundColor = (i % 2 === 0) ? "lightblue" : "lightgreen";

          document.write(`<td style='background-color: ${backgroundColor}'>${result}</td>`);
      }

      document.write("</tr>");
  }

  document.write("</table>");
}

generateMultiplicationTable();


//
function filterLexics(inputString, forbiddenWords) {
  let words = inputString.split(" ");
  
  let filteredWords = words.filter(word => !forbiddenWords.includes(word));

  let resultString = filteredWords.join(" ");
  
  return resultString;
}

let inputString = "Це речення містить слова, які потрібно видалити: бляха, муха, пляшка, шабля";
let forbiddenWords = ['бляха', 'муха', "пляшка", "шабля"];
let result = filterLexics(inputString, forbiddenWords);
console.log(result); 

//Currency
function generateCurrencyTable(currencyRates) {
  let html = '<table border="1">';
  
  html += '<tr><th></th>';
  for (let i = 0; i < currencyRates.length; i++) {
      html += `<th>${currencyRates[i][0]}</th>`; 
  }
  html += '</tr>'; 
  
  for (let i = 0; i < currencyRates.length; i++) {
      html += '<tr>'; 
      html += `<td>${currencyRates[i][0]}</td>`; 
      for (let j = 1; j < currencyRates[i].length; j++) {
          let crossRate = 1 / currencyRates[i][j];
          html += `<td>${crossRate.toFixed(2)}</td>`; 
      }
      html += '</tr>'; 
  }
  
  html += '</table>'; 
  
  return html;
}

let currencyRates = [
  ['USD', 1, 1.03, 36.82, 4.94],
  ['EUR', 0.97, 1, 35.80, 4.81],
  ['UAH', 0.027, 0.028, 1, 0.13],
  ['PLN', 0.2, 0.21, 7.45, 1]
];

let tableHtml = generateCurrencyTable(currencyRates);
console.log(tableHtml);


//Form
function createFormFromObject(obj) {
  let formHtml = '<form>';
  
  for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
          let inputType = typeof obj[key] === 'number' ? 'number' : (typeof obj[key] === 'boolean' ? 'checkbox' : 'text');
          let inputValue = inputType === 'checkbox' ? '' : ` value="${obj[key]}"`;
          let checkboxChecked = inputType === 'checkbox' && obj[key] ? ' checked' : '';
          
          formHtml += `<label>${key}: <input type="${inputType}"${inputValue}${checkboxChecked}/></label><br>`;
      }
  }
  
  formHtml += '</form>';
  
  return formHtml;
}

const car = {
  "Name": "chevrolet chevelle malibu",
  "Cylinders": 8,
  "Displacement": 307,
  "Horsepower": 130,
  "Weight_in_lbs": 3504,
  "Origin": "USA",
  "in_production": false
};

const formHtml = createFormFromObject(car);
console.log(formHtml);
