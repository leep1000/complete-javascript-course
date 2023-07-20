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

*/

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
f();
