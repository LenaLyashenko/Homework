// while confirm
while (confirm("Press OK to continue or Cancel to stop")) {}

// array fill
let arr = [];
let userInput;
while ((userInput = prompt("Enter an element:")) !== null) {
    arr.push(userInput);
}

// array fill nopush
let arrfill = [];
let userInputfill;
let index = 0;
while ((userInputfill = prompt("Enter an element:")) !== null) {
    arrfill[index] = userInputfill;
    index++;
}

// infinite probability
let iterations = 0;
while (true) {
    iterations++;
    if (Math.random() > 0.9) break;
}
alert(`Number of iterations: ${iterations}`);

// empty loop
while (prompt("Press OK to continue or Cancel to stop")) {}

// progression sum
let sum = 0;
for (let i = 1; i <= N; i += 3) {
    sum += i;
}

// chess one line
let size = 10; // change the size here
let row = "";
for (let i = 0; i < size; i++) {
    if (i % 2 === 0) row += "#";
    else row += ".";
}
console.log(row);

// numbers
let result = "";
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        result += j;
    }
    result += "\n";
}
console.log(result);

// chess
let sizechess = 10; // change the size here
let board = "";
for (let i = 0; i < sizchesse; i++) {
    for (let j = 0; j < sizechess; j++) {
        if ((i + j) % 2 === 0) board += ".";
        else board += "#";
    }
    board += "\n";
}
console.log(board);

// cubes
let N = parseInt(prompt("Enter the number of elements:"));
let cubes = [];
for (let i = 0; i < N; i++) {
    cubes.push(i ** 3);
}

// multiply table
let table = [];
for (let i = 0; i <= 10; i++) {
    table[i] = [];
    for (let j = 0; j <= 10; j++) {
        table[i][j] = i * j;
    }
}

// read array of objects
function readArrayOfObjects() {
    let objects = [];
    while (true) {
        let obj = {};
        while (true) {
            let key = prompt("Enter a key:");
            if (!key) break;
            let value = prompt(`Enter a value for ${key}:`);
            obj[key] = value;
        }
        objects.push(obj);
        if (!confirm("Continue?")) break;
    }
    return objects;
}

// ромбік
let sizesize = 5; // change the size here
let diamond = "";
for (let i = 0; i < sizesize; i++) {
    for (let j = 0; j < sizesize - i - 1; j++) {
        diamond += ".";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        diamond += "#";
    }
    for (let j = 0; j < sizesize - i - 1; j++) {
        diamond += ".";
    }
    diamond += "\n";
}
for (let i = sizesize - 2; i >= 0; i--) {
    for (let j = 0; j < sizesize - i - 1; j++) {
        diamond += ".";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        diamond += "#";
    }
    for (let j = 0; j < size - i - 1; j++) {
        diamond += ".";
    }
    diamond += "\n";
}
console.log(diamond);

// DOM: multiply table
const tabletable = document.createElement("tabletable");
for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement("td");
        cell.innerText = i * j;
        row.appendChild(cell);
    }
    table.appendChild(row);
}
document.body.appendChild(tabletable);

// DOM: highlight cell
const tablecell = document.createElement("table");
for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement("td");
        cell.innerText = i * j;
        cell.onmouseover = () => {
            cell.style.backgroundColor = "yellow";
        };
        cell.onmouseout = () => {
            cell.style.backgroundColor = "";
        };
        row.appendChild(cell);
    }
    tablecell.appendChild(row);
}
document.body.appendChild(tablecell);

// DOM: Highlight cross
const tablecross = document.createElement("table");
for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
        const cell = document.createElement("td");
        cell.innerText = i * j;
        cell.onmouseover = () => {
            cell.style.backgroundColor = "yellow";
            for (let k = 0; k < 10; k++) {
                table.rows[k].cells[j - 1].style.backgroundColor = "lightblue";
            }
            for (let k = 0; k < 10; k++) {
                table.rows[i - 1].cells[k].style.backgroundColor = "lightblue";
            }
        };
        cell.onmouseout = () => {
            cell.style.backgroundColor = "";
            for (let k = 0; k < 10; k++) {
                tablecross.rows[k].cells[j - 1].style.backgroundColor = "";
            }
            for (let k = 0; k < 10; k++) {
                tablecross.rows[i - 1].cells[k].style.backgroundColor = "";
            }
        };
        row.appendChild(cell);
    }
    tablecross.appendChild(row);
}
document.body.appendChild(tablecross);
