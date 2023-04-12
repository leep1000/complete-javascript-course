'use strict';
/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive`);

// const interface = 'Audio';
const private = 4;

function logger() {
    console.log(`My name is Jonas`);
}

// calling / running / invoking the function
logger ();
logger ();
logger ();

function fruitProcessor(apples, oranges) {//(inside here is the input data AKA parameter) - However, these are just placeholder values
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); //5 apples and 0 oranges, these are called arguments
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number(`23`);

//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1996);

//function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear; 
}

const age2 = calcAge2(1996);

console.log(age1, age2);




//Arrow function
const calcAg3 = birthYear => 2037 - birthYear;
age3 = calcAg3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
 //   return retirement;
 return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1991, `Lee`));
console.log(yearsUntilRetirement(1980, `Bob`));



function cutFruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {//(inside here is the input data AKA parameter) - However, these are just placeholder values
    console.log(apples, oranges);

const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function(birthYear) {
    return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        return -1;
    }
 //   return retirement;
//  return `${firstName} retires in ${retirement} years.`
}

yearsUntilRetirement(1991, `Lee`);


const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = `Jay`;
console.log(friends);

const jonas = [`Jonas`, 'Schmedtmann', 2037-1991, friends] ;
console.log(jonas);

//exercise

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[4]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[4])];


const friends = [`Michael`, `Steven`, `Peter`];
const newLength = friends.push(`Jay`);
console.log(friends);
console.log(newLength);

// To add to beginning of array

friends.shift('John');
console.log(friends);

// To remove elements from arrays
friends.pop();
const popped = friends.pop(); // remove last
console.log(popped);
console.log(friends);

friends.shift(); //removes first 
console.log(friends);

console.log(friends.indexOf(`Steven`)); // returns index number
console.log(friends.indexOf(`Bob`)); // returns -1, as Bob is not in the index

console.log(friends.includes(`Steven`)); // returns true
console.log(friends.includes(`Bob`)); // returns false 

if (friends.includes(`Steven`)) {
    console.log(`You have a friend called Peter`);
}


const jonas = {
    // these curly braces define a new object 
    firstName: 'Jonas', 
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`]
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas[`firstName`]);

const nameKey = `Name`;
console.log(jonas[`first` + nameKey]);
console.log(jonas[`last` + nameKey]);

const interestedIn = prompt(`What do you want to know about Jonas? Choose between firstName, lastname, age, job or friends`);
// console.log(jonas.interestedIn); // This returns undefined

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]); //dynamically accesses the interestedIn property
} else {
    console.log(`Wrong request! Choose between firstName, lastname, age, job or friends`);   
}

// These add properties and values to the object
jonas.location = `Portugal`;
jonas[`twitter`] = `@jonasschmedtman`;

jonas.bestFriend = `Michael`;

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.bestFriend[0]}`);



const jonas = {
    // these curly braces define a new object 
    firstName: 'Jonas', 
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    birthYear: 1991,
    job: `teacher`,
    friends: [`Michael`, `Peter`, `Steven`],
    hasDriversLicense: true,
    //function value
    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    //     }
    //     // this keyword refers to the object that the method is called on
    //     //In this case, this refers to the jonas object

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`
    }
};

console.log(jonas.calcAge(1991));
// what appears before .calcAge() is the object that the method is called on

 console.log(jonas.getSummary());

console.log(`Lifting weights repetitions 1`);

// for loop keeping running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


const jonas = [
    'Jonas', 
    'Schmedtmann',
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
];

let types = [];
for( let i=0;i<jonas.length ; i++) {
    // reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [
    1991,
    2007,
    1969,
    2020
];

const ages = [];

for(let i=0; i<years.length; i++) {
    ages.push(2037 - years[i]);
    console.log(ages);
}

// continue and break 
console.log(`---only strings---`);
for( let i=0;i<jonas.length ; i++) {
// we skip everything that is not a string
    if(typeof jonas[i] !== `string`) continue;

    console.log(jonas[i], typeof jonas[i]);
    // this only prints strings
}

console.log(`---BREAK WITH NUMBER---`);
for(let i=0;i<jonas.length ; i++) {
// we skip everything that is not a string
    if(typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
    // this only prints strings
}

const jonas = [
    'Jonas', 
    'Schmedtmann',
    2037 - 1991,
    `teacher`,
    [`Michael`, `Peter`, `Steven`]
];

//previously we looped from the beginning to the end of the array

for(let i= jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
};

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`--------------- Starting exercise ${exercise}`);

    for(let rep=1; rep < 6; rep++){
        console.log(`Lifting weight repetition ${rep}`);
    }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// };

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
};

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
}
