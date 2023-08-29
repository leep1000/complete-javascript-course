'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // has to be done in this order,
  // or else it will error as numPassengers would not be defined
) {
  //   numPassengers = numPassengers || 1; // Old version (ES5)
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking(`LH123`); // {flightNum: 'LH123', numPassengers: 1, price: 199}
createBooking('LH123', 2, 1200); // {flightNum: 'LH123', numPassengers: 2, price: 1200}
createBooking('LH123', 4); // {flightNum: 'LH123', numPassengers: 4, price: 796}
// to keep a middle parameter's default value
createBooking('LH123', undefined, 1000); // {flightNum: 'LH123', numPassengers: 1, price: 1000}

const flight = 'LH234';
const jonas = { name: 'Jonas Palmer', passport: 22148979346 };

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 22148979346) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight); // LH234 // unchanged bc it is a primitive type and flightNum is just a copy of flight
console.log(jonas); // {name: 'Mr. Jonas Palmer', passport: 22148979346} // is a reference type so changes in the heap

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas); // Wrong passport alert

// Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
// Original String: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord

transformer('JavaScript is the best!', oneWord);
// Original String: JavaScript is the best!
// Transformed string: javascriptisthebest!
// Transformed by: oneWord

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5); // 3x 👋

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Lee'); // Hey Lee
greeterHey('Jonas'); // Hey Jonas

greet('Hello')('Steve'); // Hello Steve

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hi')('Steve'); // Hi Steve
*/

const lufthanse = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthanse.book(1234, 'Lee Field'); // Lee Field booked a seat on Lufthansa flight LH1234.
lufthanse.book(635, 'Mike SMith'); // Mike SMith booked a seat on Lufthansa flight LH635.
console.log(lufthanse); // {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(2) -See above-, book: ƒ}

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthanse.book;

// Doesn't Work
// book(23, 'Sarah Williams'); // Uncaught TypeError: Cannot read properties of undefined (reading 'airline')

book.call(eurowings, 23, 'Sarah Williams'); // Sarah Williams booked a seat on Eurowings flight EW23.
console.log(eurowings); // {name: 'Eurowings', iataCode: 'EW', bookings: Array(1)}

book.call(lufthanse, 239, 'Mark Cobin'); // Mark Cobin booked a seat on Lufthansa flight LH239.
console.log(lufthanse); // {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(3), book: ƒ}

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss); // {airline: 'Swiss', iataCode: 'LX', bookings: Array(1)}

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss); // {airline: 'Swiss', iataCode: 'LX', bookings: Array(2)}
// Alternative way using call
book.call(swiss, ...flightData);

// The bind method
//book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLX = book.bind(swiss);
const bookLH = book.bind(lufthanse);

bookEW(23, 'Steven Williams'); // Steven Williams booked a seat on Eurowings flight EW23.

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Martha Cooper'); // Martha Cooper booked a seat on Eurowings flight EW23.][]

// With Event listener
lufthanse.planes = 300;
lufthanse.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthanse.buyPlane);
// We get NaN as this = 'buy' button element

lufthanse.buyPlane(); // 301

document
  .querySelector('.buy')
  .addEventListener('click', lufthanse.buyPlane.bind(lufthanse)); // 302

// Parial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

// null to set as this keyword, then other arguments after
// order of arguments after bind is important - must match original
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + (value * 0.23)
console.log(addVAT(120)); // 147.6

// Challenge
const addTax2 = function (value) {
  return function (rate) {
    console.log(`${value + value * rate}`);
    return value + value * rate;
  };
};
addTax2(100)(0.5); // 150

const addVAT2 = addTax2(0.23);
console.log(addVAT(120)); // 147.6
