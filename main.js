// Literals, Literals expand, Literals copy
const cat = {
    name: "Whiskers",
    age: 3,
    color: "grey"
};

const catWithPrompt = {
    name: prompt("Enter cat's name:"),
    age: prompt("Enter cat's age:"),
    color: prompt("Enter cat's color:")
};

const copiedCat = {...catWithPrompt};

//Html tree:
const htmlTree = {
    tagName: 'body',
    children: [
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'span',
                    children: ["Enter a data please:"]
                },
                {
                    tagName: 'br'
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: 'name'
                    }
                },
                {
                    tagName: 'input',
                    attrs: {
                        type: 'text',
                        id: 'surname'
                    }
                }
            ]
        },
        {
            tagName: 'div',
            children: [
                {
                    tagName: 'button',
                    attrs: {
                        id: 'ok'
                    },
                    children: ["OK"]
                },
                {
                    tagName: 'button',
                    attrs: {
                        id: 'cancel'
                    },
                    children: ["Cancel"]
                }
            ]
        }
    ]
};


//parent
htmlTree.children[0].children.forEach(child => child.parent = htmlTree.children[0]);
htmlTree.children[1].children.forEach(child => child.parent = htmlTree.children[1]);


//Change OK
const newId = prompt("Enter new id for OK button:");
htmlTree.children[1].children[0].attrs.id = newId;

//Destructure
const { 
    children: [
        { children: [{ children: [spanText] }] },
        ,
        { children: [button2] }
    ]
} = htmlTree;

const { attrs: { id: inputId } } = button2.children.find(child => child.tagName === 'input');

console.log(spanText);
console.log(button2.children[1].children[0]);
console.log(inputId);

//Destruct array
let arr = [1,2,3,4,5, "a", "b", "c"];
const [odd1, even1, odd2, even2, odd3, ...letters] = arr;

console.log(even1, even2);
console.log(odd1, odd2, odd3);
console.log(letters);

//Destruct string
let arrstring = [1, "abc"];
const [number, s1, s2, s3] = arrstring[1];

console.log(number);
console.log(s1);
console.log(s2);
console.log(s3);

//Destruct 2
let obj = {
    name: 'Ivan',
    surname: 'Petrov',
    children: [{ name: 'Maria' }, { name: 'Nikolay' }]
};
const { children: [{ name: name1 }, { name: name2 }] } = obj;

console.log(name1, name2);

//Destruct 3
let arr3 = [1,2,3,4,5,6,7,10];
const [a, b, ...rest] = arr3;
console.log(a, b, rest.length);

//Copy delete
const { [userKey]: excluded, ...copiedCat } = catWithPrompt;
console.log(copiedCat);


//Currency real rate
const fromCurrency = prompt('Enter the input currency:');
const toCurrency = prompt('Enter the output currency:');
const amount = parseFloat(prompt('Enter the amount:'));
const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency.toUpperCase()}`;

fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        const exchangeRate = data.rates[toCurrency.toUpperCase()];
        if (exchangeRate) {
            const convertedAmount = amount * exchangeRate;
            console.log(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
        } else {
            console.log('Invalid currency entered.');
        }
    })
    .catch(error => console.log('Error fetching exchange rates:', error));



