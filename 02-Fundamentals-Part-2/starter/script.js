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
*/

const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);