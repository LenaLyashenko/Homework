//confirm
const answers = [
    confirm("What does FAQ mean for?"),
    confirm("What does the FAQ refer to?"),
    confirm("What do the letters FAQ mean?"),
    confirm("What is an example of a FAQ question?"),
];
//Prompts
const answersprompt = [];

answersprompt[0] = prompt("What is your name?");
answersprompt[1] = prompt("How old are you?");
answersprompt[2] = prompt("Where do you live?");

console.log(answersprompt);

//Item access
const array = ["apple", "banana", "orange", "grape"];
const index = prompt("Enter an index:");
if (index === "length") {
    alert(array.length);
} else {
    alert(array[index]);
}
// Item change
const arr = []; 
const indexnumber = prompt("Enter the index where you want to assign a value:");
const valuenumber = prompt("Enter the value to assign:");

arr[indexnumber] = valuenumber; 

console.log(arr); 

//Multiply table
const multiplicationTable = [];
for (let i = 1; i <= 5; i++) {
    const row = [];
    for (let j = 1; j <= 5; j++) {
        row.push(i * j); 
    }
    multiplicationTable.push(row); 
}

console.log(multiplicationTable);

//Multiply table slice
const multiplicationTableslice = [];

for (let i = 1; i <= 5; i++) {
    const row = [];
    for (let j = 1; j <= 5; j++) {
        row.push(i * j); 
    }
    const nonZeroRow = row.slice(0, i); 
    multiplicationTableslice.push(nonZeroRow); 
}

console.log(multiplicationTableslice);

//IndexOf Word
const sentence = prompt("Enter a sentence with multiple words:");
const targetWord = prompt("Enter the word you're searching for:");

const words = sentence.split(" "); 
const indexwords = words.indexOf(targetWord); 

if (indexwords !== -1) {
    console.log(`The word "${targetWord}" is at position ${indexwords + 1} in the sentence.`);
} else {
    console.log(`The word "${targetWord}" is not found in the sentence.`);
}

//Reverse
const originalArray = [];

for (let i = 0; i < 5; i++) {
    const userInput = prompt(`Enter element ${i + 1}:`);
    originalArray.push(userInput);
}
const reversedArray = [];
while (originalArray.length > 0) {
    reversedArray.push(originalArray.pop()); 
}
console.log("Original array:", originalArray);
console.log("Reversed array:", reversedArray);

//shift та unshift
const reversedAgainArray = [];
while (reversedArray.length > 0) {
    reversedAgainArray.unshift(reversedArray.shift());}
console.log("Reversed again array:", reversedAgainArray);

//Copy
const originalArraycopy = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
];

const copiedArray = originalArraycopy.slice();
console.log("Copied array:", copiedArray);

//DeepCopy

const originalArrayDeepCopy = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
];

const copiedArrayDeepCopy = originalArrayDeepCopy.slice();
for (let i = 0; i < copiedArrayDeepCopy.length; i++) {
    copiedArrayDeepCopy[i] = copiedArrayDeepCopy[i].slice();
}

console.log("Deep copied array:", copiedArrayDeepCopy);

//Array Equals
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

const areEqual = arr1 === arr2;

console.log(areEqual); 

//Flat
const multiplyTable = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
];

const flattenedArray = multiplyTable.flat();
console.log(flattenedArray); 
console.log(flattenedArray.length); 

//Destruct
const userInput = prompt("Enter sentence:");

const [firstLetter, , , , fifthLetter, , , , ninthLetter] = userInput;

console.log(`First letter: ${firstLetter}`);
console.log(`Fifth letter: ${fifthLetter}`);
console.log(`Ninth letter: ${ninthLetter}`);

//Destruct default
const userInput2= prompt("Enter sentence:");

const [secondLetter = '!', , fourthLetter = '!', fifthLetterr = '!'] = userInput2;

console.log(`Second Letter: ${secondLetter}`);
console.log(`Fourth Letter: ${fourthLetter}`);
console.log(`Fifth Letter: ${fifthLetterr}`);

//Multiply table rest
const multiplyTable5 = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
];

const [
    [, ...firstRow],
    [, ...secondRow],
    [, ...thirdRow],
    [, ...fourthRow],
    [, ...fifthRow]
] = multiplyTable;

const resultArray = [...firstRow, ...secondRow, ...thirdRow, ...fourthRow, ...fifthRow].filter(num => num !== 0);

console.log(resultArray);

//For Select Option
const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<select>";

for (const currency of currencies) {
    str += `<option value="${currency}">${currency}</option>`;
}

str += "</select>";
document.write(str);

//For Table Horizontal
const names = ["John", "Paul", "George", "Ringo"];
let TableHorizontal = "<table>";

TableHorizontal += "<tr>";
for (const name of names) {
    TableHorizontal += `<td>${name}</td>`;
}
TableHorizontal += "</tr>";

TableHorizontal += "</table>";

document.write(TableHorizontal);

//For Table Vertical

const nameslist = ["John", "Paul", "George", "Ringo"];
let TableVertical = "<table>";

for (const name of nameslist) {
    TableVertical += "<tr>";
    TableVertical += `<td>${name}</td>`;
    TableVertical += "</tr>";
}

TableVertical += "</table>";

document.write(TableVertical);


// For TableLetters
const currencieslist = ["USD", "EUR", "GBP", "UAH"];
let TableLetters = "<table>";

for (let i = 0; i < currencieslist.length; i += 4) {
    TableLetters += "<tr>";

    for (let j = 0; j < 4; j++) {
        const currency = currencieslist[i + j];
        TableLetters += "<td>";

        for (const letter of currency) {
            TableLetters += `<div>${letter}</div>`;
        }

        TableLetters += "</td>";
    }

    TableLetters += "</tr>";
}

TableLetters += "</table>";
document.write(TableLetters);


//For Multiply Table
const colors = ['#FFFFFF', '#ECECEC']; 
let MultiplyTable = '<table>';

for (let i = 0; i <= 5; i++) {
    MultiplyTable += '<tr>';

    for (let j = 0; j <= 5; j++) {
        const result = i * j;
        MultiplyTable += `<td style="background-color:${colors[i % 2]};">${result}</td>`;
    }

    MultiplyTable += '</tr>';
}

MultiplyTable += '</table>';
document.write(MultiplyTable);

//capitalize
const capitalize = strcapitalize => {
    return strcapitalize.charAt(0).toUpperCase() + strcapitalize.slice(1).toLowerCase();
}

console.log(capitalize("cANBerRa")); 

//MapCapitalize
const MapCapitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const userMapCapitalize = "hello world";

const wordsArray = userMapCapitalize.split(" ");

const capitalizedWordsArray = wordsArray.map(MapCapitalize);

const resultString = capitalizedWordsArray.join(" ");

console.log(resultString); 


//FilterLexics

const forbiddenWords = ["bad", "ugly", "horrible"];

const isAllowedWord = word => {
    return !forbiddenWords.includes(word.toLowerCase());
}

const userInputFilterLexics = "good nice bad great";

const wordsArrayFilterLexics = userInputFilterLexics.split(" ");

const allowedWordsArray = wordsArrayFilterLexics.filter(isAllowedWord);

const resultStringFilterLexics = allowedWordsArray.join(" ");

console.log(resultStringFilterLexics);


//BeepLexics
const forbiddenWordsBeepLexics = ["bad", "ugly", "horrible"];

const replaceWord = word => {
    return forbiddenWords.includes(word.toLowerCase()) ? "BEEP" : word;
}

const userInputBeepLexics = "good nice bad great ugly";

const wordsArrayBeepLexics = userInputBeepLexics.split(" ");

const replacedWordsArray = wordsArrayBeepLexics.map(replaceWord);

const resultStringBeepLexics = replacedWordsArray.join(" ");

console.log(resultStringBeepLexics); 

//ReduceHTML
const currenciesReduceHTML = ["USD", "EUR", "GBP", "UAH"];

const selectOptions = currenciesReduceHTML.reduce((accumulator, currency) => {
    return accumulator + `<option>${currency}</option>`;
}, "");

const selectElement = `<select>${selectOptions}</select>`;

console.log(selectElement); 

//For Brackets Hell Check
const line = prompt();
const bracketsStack = [];
let i = 0;
let errorIndex = -1;

for (const character of line) {
    if (character === '[' || character === '{' || character === '(') {
        bracketsStack.push({ character, index: i });
    } else if (character === ']' || character === '}' || character === ')') {
        if (bracketsStack.length === 0) {
            errorIndex = i;
            break;
        }
        const lastBracket = bracketsStack.pop();
        if (
            (character === ']' && lastBracket.character !== '[') ||
            (character === '}' && lastBracket.character !== '{') ||
            (character === ')' && lastBracket.character !== '(')
        ) {
            errorIndex = i;
            break;
        }
    }
    i++;
}

if (bracketsStack.length === 0 && errorIndex === -1) {
    console.log("Успішно! Дужки розставлені правильно.");
} else {
    if (errorIndex === -1) {
        errorIndex = bracketsStack[bracketsStack.length - 1].index;
    }
    console.log(`Помилка у позиції ${errorIndex}: Дужка не має відповідної пари.`);
}

