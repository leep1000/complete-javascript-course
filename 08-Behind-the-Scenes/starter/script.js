'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Stella';

      const str = `Oh, and you're a millenial ${firstName}!`;
      console.log(str);

      function add(a, b) {
        return console.log(a + b);
      }
      add(2, 3);

      // reassign outer scope's variable, changes the value of that parent variable without issue
      output = `NEW OUTPUT`;
    }
    //console.log(str);
    console.log(millenial);
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Lee';
calcAge(1991);
// console.log(age);
// printAge();


//////////////////////////////////////
// Hoisting and TDZ in practice

// Variables

// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

// Functions
// addDecl(1, 2);
// addExpr(1, 2);
// addArrow(1, 2);

function addDecl(a, b) {
  console.log(a + b);
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;


//////////////////////////////
// this keywords

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

// method borrowing
const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f(); // Since f does not have a year, it tries to look for it in the global object, which returns undefined

///////////////////////////////
// Regular Functions vs Arrow Functions

// var firstname = `Matilda`;

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution #1 - pre-ES6
    //   const self = this; // self or that are most common
    //   const isMillenial = function () {
    //     console.log(self);
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //   isMillenial();
    // },

    // Solution #2 - Arrow function
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`hey ${this.firstname}`);
  },
};

jonas.greet(); // `hey undefined` as arrow function has no this keyword of its own

jonas.calcAge();

////////////////////////////
// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 1, 4); // Can have more arguments than parameters

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5); // arguments keyword does no exist in arrow functions

///////////////////////////////////////
// Objects vs Primitives

let age = 30;
let oldAge = age;
age = 31;
console.log(age, oldAge); // age = 31, oldAge = 30

const me = {
  name: `jonas`,
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(me.age, friend.age); // me.age = 27, friend.age = 27

*/

// Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

// Reference Types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica; // Actually copying the reference, which will point to the same object
marriedJessica.lastName = 'Davis';
// What needs to be const in const, is the value in the call stack

// marriedJessica = {}; // Won't work as it will point to a new address in the heap

// Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Object.assign merges two objects and returns a new one, creates a shallow copy
// Only copies the properties at the first level, and won't copy nested objects (e.g. arrays)
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

// For a true copy, use external libraries
