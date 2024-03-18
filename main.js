//Variable Declarations and Operations:
var a = 5;
var b, c;

b = (a * 5);
b = ((c = b) / 2);

//Age Calculation:

var age = prompt("How old are you?");

var currentYear = new Date().getFullYear();
var birthYear = currentYear - age;

alert("Year of birth " + birthYear);

//Temperature Conversion:
var celsiusTemperature = prompt("Enter temperature in degrees Celsius:");

var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

alert("Temperature in Fahrenheit degrees :" + fahrenheitTemperature);

//Integer Division:
var dividend = prompt("Enter dividend:");
var divisor = prompt("Enter divisor:");

dividend = parseInt(dividend);
divisor = parseInt(divisor);

var result = Math.floor(dividend / divisor);

alert("Result of integer division: " + result);

//Currency Exchange:
var amountInCurrency = prompt("Enter the dollar amount to exchange:")

const rate = 28.5; 
amountInCurrency = parseFloat(amountInCurrency);

var exchangedAmount = amountInCurrency / rate;
exchangedAmount = exchangedAmount.toFixed(2);

alert("Amount in exchange at UAN: " + exchangedAmount);

//Color Conversion to CSS Format:
var red = parseInt(prompt("Enter the value of red color (from 0 to 255):"));
var green = parseInt(prompt("Enter the value of green color (from 0 to 255):"));
var blue = parseInt(prompt("Enter the value of blue color (from 0 to 255):"));

if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255 || isNaN(red) || isNaN(green) || isNaN(blue)) {
    alert("Invalid values! Please enter numbers from 0 to 255.");
} else {
    var hexRed = red.toString(16).padStart(2, '0');
    var hexGreen = green.toString(16).padStart(2, '0');
    var hexBlue = blue.toString(16).padStart(2, '0');
    var hexColor = '#' + hexRed + hexGreen + hexBlue;

    alert("CSS color in  #RRGGBB: " + hexColor);
}

//Apartment Locator:
var totalfloors = parseInt(prompt("Enter the number of floors in the building:"));
var apartmentsperfloor = parseInt(prompt("Enter the number of apartments per floor:"));
var apartmentnumber = parseInt(prompt("Enter apartment number:"));

var totalApartments = totalfloors * apartmentsperfloor;
if (apartmentnumber <= 0 || apartmentnumber > totalApartments || isNaN(apartmentnumber)) {
    alert("Invalid apartment number! Please enter a number between 1 and " + totalApartments + ".");
} else {
    var entrance = Math.ceil(apartmentnumber / (apartmentsperfloor * 4));
    var floor = Math.ceil((apartmentnumber % (apartmentsperfloor * 4)) / apartmentsperfloor);

    alert("Entrance: " + entrance + ", Floor: " + floor);
}