// blocks
let a = 10;
{
    let b = 20;
    {
        let c = 30;
        b++;
        a *= 10;
    }
    {
        let c = 50;
        b += 500;
    }
    {
        const a = 100500;
        const d = "value";
        {
            let a = -50;
            b = 1000;
        }
    }
}


// comparison if
let age = +prompt("Скільки вам років?", "");
if (age < 0) 
    alert("негативний вік");
else if (age < 18) 
    alert("школяр");
else if (age < 30) 
    alert("молодь");
else if (age < 45) 
    alert("зрілість");
else if (age < 60) 
    alert("захід сонця");
else if (age >= 60) 
    alert("як пенсія?");
else 
    alert("чи кіборг, чи KERNESS");

// switch: sizes
let size = "M";
switch (size) {
    case "S":
        console.log("Small");
        break;
    case "M":
        console.log("Medium");
        break;
    case "L":
        console.log("Large");
        break;
    default:
        console.log("Unknown size");
}

// switch: if
let color = prompt("Введіть колір", "");
if (color === "red") 
    console.log("<div style='background-color: red;'>червоний</div>");
else if (color === "black") 
    console.log("<div style='background-color: black; color: white;'>чорний</div>");
else if (color === "blue") 
    console.log("<div style='background-color: blue;'>синій</div>");
else if (color === "green") 
    console.log("<div style='background-color: green;'>зелений</div>");
else 
    console.log("<div style='background-color: gray;'>Я не зрозумів</div>");

// noswitch
const noSwitch = (key, cases, defaultKey = 'default') => {
    if (cases.hasOwnProperty(key)) 
        return cases[key]();
    else 
        return cases[defaultKey]();
};

const drink = prompt("Що ви любите пити");
noSwitch(drink, {
    воду: () => console.log('Найздоровіший вибір!'),
    чай: () => console.log('Смачна та корисна штука. Не перестарайтеся з цукром'),
    "пиво": () => console.log('Добре влітку, та в міру'),
    віскі: () => console.log('Та ви, батечку, естет! Не забудьте лід і сигару'),
    default: () => console.log('шото я не зрозумів')
});

// closure calc
fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        console.log(data); 
        for (let currency in data.rates) {
            let button = document.createElement('button');
            button.innerText = currency;
            button.onclick = () => {
                let amount = parseFloat(prompt(`Enter amount in ${currency}:`));
                console.log(amount * data.rates[currency]);
            };
            document.body.appendChild(button);
        }
    });

// closure calc 2
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');

fetch('https://open.er-api.com/v6/latest/USD')
    .then(res => res.json())
    .then(data => {
        for (let currency in data.rates) {
            let option1 = document.createElement('option');
            let option2 = document.createElement('option');
            option1.innerText = option2.innerText = currency;
            fromSelect.appendChild(option1);
            toSelect.appendChild(option2);
        }
    });

fromSelect.onchange = toSelect.onchange = () => {
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    document.getElementById('rate').innerText = `Exchange rate: ${data.rates[toCurrency] / data.rates[fromCurrency]}`;
};

document.getElementById('amount').oninput = () => {
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    const amount = parseFloat(document.getElementById('amount').value);
    document.getElementById('result').innerText = `Result: ${amount * (data.rates[toCurrency] / data.rates[fromCurrency])}`;
};

// countries and cities
fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json')
    .then(res => res.json())
    .then(data => {
        console.log(data); 
        const countriesSelect = document.getElementById('countries');
        const citiesSelect = document.getElementById('cities');

        for (let country in data) {
            let option = document.createElement('option');
            option.innerText = country;
            countriesSelect.appendChild(option);
        }

        countriesSelect.onchange = () => {
            citiesSelect.innerHTML = ''; 
            const selectedCountry = countriesSelect.value;
            data[selectedCountry].forEach(city => {
                let option = document.createElement('option');
                option.innerText = city;
                citiesSelect.appendChild(option);
            });
        };
    });
