// createPerson
function createPerson(name, surname) {
    return {
        name: name,
        surname: surname,
        getFullName: function() {
            return `${this.name} ${this.surname}`;
        }
    };
}

const a = createPerson("Вася", "Пупкін");
const b = createPerson("Ганна", "Іванова");
const c = createPerson("Єлизавета", "Петрова");

console.log(a.getFullName()); 
a.fatherName = 'Іванович';    
console.log(a.getFullName()); 

console.log(b.getFullName());

//createPersonClosure
function createPersonClosure(name, surname) {
    let fatherName, age;

    return {
        getName: function() {
            return name;
        },
        getSurname: function() {
            return surname;
        },
        getFatherName: function() {
            return fatherName;
        },
        getAge: function() {
            return age;
        },
        getFullName: function() {
            return `${name} ${surname} ${fatherName}`;
        },
        setName: function(newName) {
            if (typeof newName === 'string' && newName.length > 0) {
                name = newName;
            }
            return name;
        },
        setSurname: function(newSurname) {
            if (typeof newSurname === 'string' && newSurname.length > 0) {
                surname = newSurname;
            }
            return surname;
        },
        setFatherName: function(newFatherName) {
            if (typeof newFatherName === 'string' && newFatherName.length > 0) {
                fatherName = newFatherName;
            }
            return fatherName;
        },
        setAge: function(newAge) {
            newAge = parseInt(newAge);
            if (!isNaN(newAge) && newAge >= 0 && newAge <= 100) {
                age = newAge;
            }
            return age;
        },
        setFullName: function(fullName) {
            const parts = fullName.split(' ');
            if (parts.length === 3) {
                [name, surname, fatherName] = parts;
            }
        }
    };
}

const aa = createPersonClosure("Вася", "Пупкін");
const bb = createPersonClosure("Ганна", "Іванова");
console.log(aa.getName());
aa.setAge(15);
aa.setAge(150); 
bb.setFullName("Петрова Ганна Миколаївна");
console.log(bb.getFatherName()); 

//createPersonClosureDestruct
function createPersonClosureDestruct({name, surname}) {
    let fatherName, age;

    return {
        getName() {
            return name;
        },
        getSurname() {
            return surname;
        },
        getFatherName() {
            return fatherName;
        },
        getAge() {
            return age;
        },
        getFullName() {
            return `${name} ${surname} ${fatherName}`;
        },
        setName(newName) {
            if (typeof newName === 'string' && newName.length > 0) {
                name = newName;
            }
            return name;
        },
        setSurname(newSurname) {
            if (typeof newSurname === 'string' && newSurname.length > 0) {
                surname = newSurname;
            }
            return surname;
        },
        setFatherName(newFatherName) {
            if (typeof newFatherName === 'string' && newFatherName.length > 0) {
                fatherName = newFatherName;
            }
            return fatherName;
        },
        setAge(newAge) {
            newAge = parseInt(newAge);
            if (!isNaN(newAge) && newAge >= 0 && newAge <= 100) {
                age = newAge;
            }
            return age;
        },
        setFullName(fullName) {
            const parts = fullName.split(' ');
            if (parts.length === 3) {
                [name, surname, fatherName] = parts;
            }
        }
    };
}

const aaa = createPersonClosureDestruct(createPerson("Вася", "Пупкін"));
const bbb = createPersonClosureDestruct({name: 'Миколай', age: 75});

//isSorted
function isSorted(...args) {
    for (let i = 1; i < args.length; i++) {
        if (typeof args[i] !== 'number' || args[i] <= args[i - 1]) {
            return false;
        }
    }
    return true;
}

const sorted = isSorted(1, 2, 3, 4, 5);
console.log(sorted); 


//personForm
function personForm(parent, person) {
    const inputs = {};

    for (const key in person) {
        if (key.startsWith('get')) {
            const prop = key.slice(3);
            const input = document.createElement('input');
            input.placeholder = prop;
            input.value = person[key]();
            input.oninput = () => {
                const value = input.value.trim();
                person[`set${prop}`](value);
                input.value = person[key]();
            };
            parent.appendChild(input);
            inputs[prop] = input;
        }
    }

    return inputs;
}

const person = createPersonClosure('John', 'Doe');
const inputs = personForm(document.body, person);

