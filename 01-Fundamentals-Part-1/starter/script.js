/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM"
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = 'Teacher';


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);


let age = 30;
age = 31;


// Math Operators
const now = 2023
const ageLee = now - 1991;
const ageStella = now - 1999;
console.log(ageLee, ageStella);

console.log(ageLee * 2, ageLee / 10, ageLee **2 );
// 2 ** 3 means 2 to the power of 3 or 2*2*2

const firstName = 'Lee';
const lastName = 'Palmer';
console.log(firstName + ' ' + lastName);
// Gives Lee Palmer

// Assignment Operators 
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 10; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x); // this will equal 99

// Comparison operators
console.log(ageLee > ageStella); // <, >, <=, >=

const now = 2023
const ageLee = now - 1991;
const ageStella = now - 1999;


const age = 15;
const isOldEnough = age >= 18;

if(age >= 18) {
    console.log(`Sarah can start her driving license 🚗`);
}   else {
    const yearsLeft = 18 - age;
    console.log(`Sarah can't start her driving license 😭. She has to wait another ${yearsLeft} years.`);
}


const inputYear = '1991';
console.log(Number(inputYear));
// the result below is 199118 as it concatenates the string and number variables
console.log(inputYear + 18);
// this gives 2009, as the number function conveerts inputYear
console.log(Number(inputYear) + 18);

//this gives NaN, as lee is not a number
console.log(Number(`Lee`));

//this function converts variables to strings
console.log(String(23));

// this convert to a boolean
console.log(Boolean);


// const money = 0;
// if (money) {
//     console.log(`don't spend it all ;)`);
// } else {
//     console.log(`you should get a job`);
// }
// // JavaScript converted money to a boolean. Since 0 = false, money === false.
// // Therefore, money === false, and 'you should get a job' is printed

// // can use it to test if a variable exists or not.

// let height;
// if (height) {
//     console.log(`YES. HEIGHT IS DEFINED`);
// } else {
//     console.log(`HEIGHT IS UNDEFINED`);
// }


// const age = 18; 
// if(age === 18) {
//     console.log(`you just became an adult!`);
// }

// // === strict equality operator, does not perform type coercion
// 18 === `18`; //is false
// // == loose equality operator, generally try not to use. Better to change the value mannually then use ===.
// 18 == `18`; // is true

// const favourite = Number (prompt(`What's your favourite number?`));
// console.log(favourite);
// console.log(typeof favourite); //The result is a string

// // if (favourite == 18) { // `23` == 23, 
// //     console.log(`cool! ${favourite} is an amazing number!`);
// // }

// if (favourite === 18) { // `23` which is then converted by Number () to 23 === 23, 
//     console.log(`cool! ${favourite} is an amazing number!`);
// } else if (favourite === 7) {
//     console.log(`cool! ${favourite} is also an amazing number!`);
// } else {
//     console.log(`Oh no! ${favourite} is also not an amazing number!`);
// }

// if(favourite !== 23) {
//     console.log(`Why not do 23?`);
// }

const hasDriversLicense = true; //variable A
const hasGoodvision = true; // variable B

console.log(hasDriversLicense && hasGoodvision);
console.log(hasDriversLicense || hasGoodvision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodvision;

// if(hasDriversLicense && hasGoodvision) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive...`);
// }

const isTired = true; // variable C
console.log(hasDriversLicense && hasGoodvision && isTired);

if(hasDriversLicense && hasGoodvision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive...`);
}



const day = `Blah`;

switch(day) {
    case `Monday`: // Is like writing day = `Monday`, if true then the code block below will be executed
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case `Tuesday`:
        console.log(`Prepare theory videos`);
        break;
    case `Wednesday`:
    case `Thursday` :
        console.log(`Write code examples`);
        break;
    case `Friday`:
        console.log(`Record Videos`);
        break;
    case `Saturday`:
    case `Sunday`:
        console.log(`Enjoy the weekend!`);
        break;
    default:
        console.log(`Not a valid day!`);
}

if (day === 'Monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === 'Tuesday') {
    console.log(`Prepare theory videos`);
} else if (day === 'Wednesday' || day === `Thursday`) {
    console.log(`Write code examples`);
} else if (day === 'Friday') {
    console.log(`Prepare theory videos`);
} else if (day === 'Saturday' || day === `Sunday`) {
    console.log(`Enjoy the weekend!`);
} else {
    console.log(`Not a valid day!`);
}
*/

const age = 23; // AKA the condition
// age >= 18 ? console.log(`I like to drink wine 🍷`) : // AKA the if statement
// console.log(`I like to drink water 🌊`); // AKA the else statement

const drink = age >= 18 ? 'wine 🍷' : 'water 🌊';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 🌊';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🌊'}`);