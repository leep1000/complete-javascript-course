'use strict';

// Data
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsConverter = function (data) {
  const separateFlights = data.toLowerCase().split('+');
  for (let i = 0; i < separateFlights.length; i++) {
    let [status, fromLocation, toLocation, time] =
      separateFlights[i].split(';');
    if (status.includes('delayed') && status.includes('departure')) {
      console.log(
        `🔴 Delayed Departure from ${fromLocation
          .slice(0, 3)
          .toUpperCase()} to ${toLocation.slice(0, 3).toUpperCase()} (${time
          .slice(0, 5)
          .replace(':', 'h')})`
      );
    } else if (status.includes('delayed') && status.includes('arrival')) {
      console.log(
        `🔴 Delayed arrival from ${fromLocation
          .slice(0, 3)
          .toUpperCase()} to ${toLocation.slice(0, 3).toUpperCase()} (${time
          .slice(0, 5)
          .replace(':', 'h')})`
      );
    } else if (status.includes('arrival')) {
      console.log(
        `Arrival from ${fromLocation.slice(0, 3).toUpperCase()} to ${toLocation
          .slice(0, 3)
          .toUpperCase()} (${time.slice(0, 5).replace(':', 'h')})`
      );
    } else if (status.includes('departure')) {
      console.log(
        `Departure from ${fromLocation
          .slice(0, 3)
          .toUpperCase()} to ${toLocation.slice(0, 3).toUpperCase()} (${time
          .slice(0, 5)
          .replace(':', 'h')})`
      );
    }
  }
};
// flightsConverter(flights);

function location3Letters(flightLocation) {
  return flightLocation.slice(0, 3).toUpperCase();
}

function timeConverter(flightTime) {
  return flightTime.slice(0, 5).replace(':', 'h');
}

const flightsConverter2 = function (data) {
  const separateFlights = data.toLowerCase().split('+');
  for (const flight of separateFlights) {
    const [status, fromLocation, toLocation, time] = flight.split(';');
    const output = `${status.includes('delayed') ? `🔴 Delayed ` : ``}${
      status.includes('arrival') ? `Arrival` : `Departure`
    } from ${location3Letters(fromLocation)} to ${location3Letters(
      toLocation
    )} (${timeConverter(time)})`;
    console.log(output);
  }
};
flightsConverter2(flights);

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced Object Literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your yummy pasta with ${ing1}, ${ing2} and ${ing3}!`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    const otherIngredientsStr = otherIngredients
      .map((ingredient, i, otherIngredients) => {
        if (
          i === otherIngredients.length - 1 &&
          otherIngredients.length === 1
        ) {
          return `${ingredient}`;
        } else if (i === otherIngredients.length - 1) {
          return ` and ${ingredient}`;
        } else if (
          i === otherIngredients.length - 2 &&
          otherIngredients.length > 1
        ) {
          return `${ingredient}`;
        }
        return `${ingredient}, `;
      })
      .join('');
    console.log(
      `Your pizza is ready! The main ingredient is ${mainIngredient}${
        otherIngredients.length === 0
          ? `.`
          : ` but it also has ${otherIngredientsStr}.`
      }`
    );
  },
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');

button.addEventListener('click', converter);

function converter() {
  const textArea = document.querySelector('textarea').value;
  const rows = textArea.split('\n');
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    let newText = row.trim().toLowerCase().split('_');
    const [first, second] = newText;
    const joinedText = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    // const secondStr = newText[1];
    // newText[1] = secondStr[0].toUpperCase() + secondStr.slice(1);
    // const joinedText = newText.join('');

    // now for the ticks
    const paddedText = joinedText.padEnd(20, ' ');
    const textWithTicks = paddedText + `${'✅'.repeat(i + 1)}`;
    console.log(textWithTicks);
  }
}

/*

// Working With Strings - Part 3
// Split and Join
console.log('a+very+nice+string'.split('+')); // ["a","very","nice","string"]
console.log('Jonas Schmedtmann'.split(' ')); // ['Jonas', 'Schmedtmann']

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName); // Jonas
console.log(lastName); // Schmedtmann

console.log(['Mr.', firstName, lastName.toUpperCase()].join(' ')); // Mr. Jonas SCHMEDTMANN

const passenger = 'jessica ann smith davis';
const passengerSplit = passenger.split(' ');
const passengerCapitalised = [];
for (const name of passengerSplit) {
  passengerCapitalised.push(name[0].toUpperCase() + name.slice(1));
}
const passengerComplete = passengerCapitalised.join(' ');
console.log(passengerComplete); // Jessica Ann Smith Davis

// Alternative way
const capitaliseNames = function (name) {
  const splitNames = name.split(' ');
  const newPassengerArr = [];

  for (const name of splitNames) {
    newPassengerArr.push(name.replace(name[0], name[0].toUpperCase()));
  }
  console.log(newPassengerArr.join(' '));
};

capitaliseNames('lee palmer'); // Lee Palmer

// Padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23!
console.log('Lee'.padStart(25, '+')); // ++++++++++++++++++++++Lee

console.log(message.padStart(25, '+').padEnd(35, '+')); // +++++++++++Go to gate 23!++++++++++ // Added ten more +

const maskCreditCard = function (number) {
  const numberStr = number + '';
  const lastFourDigits = numberStr.slice(-4);
  const hiddenCard = lastFourDigits.padStart(numberStr.length, '*');
  console.log(hiddenCard);
};

maskCreditCard(4369741); // ***9741
maskCreditCard(7532147852369741); // ************9741
maskCreditCard('75321478523697417856'); // ****************7856

// Repeat
const weatherMessage = 'Bad weather... All Departures Delayed... ';
console.log(weatherMessage.repeat(5)); // Bad weather... All Departures Delayed... (x5)

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5); // There are 5 planes in line ✈✈✈✈✈
planesInLine(12); // There are 12 planes in line ✈✈✈✈✈✈✈✈✈✈✈✈

// Working With Strings - Part 2
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// Fix capitalisation in name
const passenger = 'jOnAS';

const fixNames = function (name) {
  const nameLower = name.toLowerCase();
  const nameFixed = nameLower[0].toUpperCase() + nameLower.slice(1);
  console.log(nameFixed);
};
fixNames(passenger);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); // hello@jonas.io

const normalisedEmaiL = loginEmail.toLowerCase().trim();
console.log(normalisedEmaiL); // hello@jonas.io
console.log(email === normalisedEmaiL); // true

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23!`;
console.log(announcement.replace('door', 'gate')); // All passengers come to boarding gate 23. Boarding door 23!
console.log(announcement.replaceAll('door', 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!
console.log(announcement.replace(/door/g, 'gate')); // All passengers come to boarding gate 23. Boarding gate 23!

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('neo')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); // true
console.log(plane.startsWith('Aib')); // false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family!'); // Part of the NEW Airbus family!
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log(`You are not allowed on board!`);
  } else {
    console.log(`Welcome on board!`);
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife'); // You are not allowed on board!
checkBaggage('I have socks and a camera'); // Welcome on board!
checkBaggage('Got some snacks and a gun for protection'); // You are not allowed on board!

// Working with Strings - Part 1
const airline = 'TAP Air England';
const plane = 'A320';

console.log(plane[0]); // 'A'
console.log('B737'[0]); // 'B'
console.log(airline.length); // 15

console.log(airline.indexOf('i')); // 5
console.log(airline.lastIndexOf('A')); // 4
console.log(airline.indexOf('England')); // 8
console.log(airline.indexOf('england')); // -1, as it cannot be found

console.log(airline.slice(4)); // 'Air England'
console.log(airline.slice(4, 7)); // 'Air'

// What if we do not know what the string is?
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // England

console.log(airline.slice(-2)); // 'nd' (last two characters of England)
console.log(airline.slice(1, -1)); // 'AP Air Englan'

const checkMiddleSeat = function (seat) {
  // B and E are middle
  seat.slice(-1) === 'E' || seat.slice(-1) === 'B'
    ? console.log(`You have a middle seat`)
    : console.log(`You do NOT have a middle seat`);
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Jonas')); // "Jonas"
console.log(typeof new String('Jonas')); // object
console.log(typeof new String('Jonas').slice(1)); // string

// Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'London, England');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :)')
  .set(false, 'We are closed :(');
console.log(rest);

console.log(rest.get('name')); // 'Classico Italiano'
console.log(rest.get(2)); // 'London, England'
console.log(rest.get('2')); // undefined

const time = 21;
// The below works as it works out as true && true, which results in true, which is a key in our dataset
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // 'We are open :)'

console.log(rest.has('categories'));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, 'test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);
// console.log(rest.clear);

console.log(rest.get(arr));

// Maps iterables
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 😊'],
  [false, 'Try Again 😭'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = Number(prompt('Your answer'));

if (answer === question.get('correct')) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}
// ANother way of doing the same as above
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]); // Array which has an array for each key/value item
// console.log([question.entries()]);
console.log([...question.keys()]); // Array of all the keys
console.log([...question.values()]); // Array of all values

// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet); // {'Pasta', 'Pizza, 'Risotto'}

console.log(new Set('Jonas')); // {J, o, n, a, s}
console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet); // {'Pasta', 'Pizza, 'Garlic Bread'}
// ordersSet.clear(); // EMPTIES SET

// Loop over a set
for (const order of ordersSet) {
  console.log(order);
}

// EXAMPLE
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique); // {'Waiter', 'Chef', 'Manager'}
// Convert a set to an array using iterables
const staffUnique2 = [...new Set(staff)];
console.log(staffUnique2); // ['Waiter', 'Chef', 'Manager']

// Check size of unique item in an array
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // 3

// To count unique characters in a string
console.log(new Set('leepalmer').size); // 6


// Loop over objects

// Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days.`;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values

const values = Object.values(openingHours);
console.log(values);

// Entries (entire object)
const entries = Object.entries(openingHours);
// console.log(entries); // An array of three arrays

// [Key/Value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}


// Optional Chaining (?.)
if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// EXAMPLE
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(
    `On ${day}, we ${open === 'closed' ? 'are closed.' : `open at ${open}.`}`
  );
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.orderChicken?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Lee', email: 'lee@gmail.com' }];

console.log(users[1]?.name ?? `user array empty`);

// if (restaurant.openingHours.fri.open) {
//   console.log(restaurant.openingHours.fri.open);
// }


// For-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(...menu.entries()); // An array iterator, apparently

// Enhanced object literals


// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  //   numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  Owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.Owner = rest1.Owner && `<ANONYMOUS>`;
// rest2.Owner = rest2.Owner && `<ANONYMOUS>`;

rest1.Owner &&= `<ANONYMOUS>`; // first operand was falsy, but still returned nothing (as opposed to undefined)
rest2.Owner &&= `<ANONYMOUS>`;

console.log(rest1);
console.log(rest2);


// Nullish Coalescing Operator

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


console.log('---- OR ----');

console.log(3 || 'Lee');
console.log('' || 'Lee');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Easier method of setting default values, but doesnt work if guests are 0
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');

console.log(0 && 'Lee');
console.log(7 && 'Lee');

console.log('Hello' && 23 && null && 'Lee');

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// use AND to avoid if statement
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Rest Operator

// 1) Destructuring

// Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// Rest syntax because it is on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // others is an array of the remaining elements

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // note that 'Pasta' is not logged, as it was skipped between pizza and risotto

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // now contains fri and thu objects;
console.log(sat);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(5, 1, 9, 5, 3, 11);
const x = [23, 5, 7];
add(...x); // Using the spread operator is more flexible

restaurant.orderPizza('pepperoni', 'onions', 'bbq sauce');
restaurant.orderPizza('pepperoni', 'onions');
restaurant.orderPizza('pepperoni', 'onions', 'bbq sauce', 'chicken');
restaurant.orderPizza('mushrooms');

// Spread Operator

const arr = [7, 8, 9];
// What if we wanted to make a copy of the above array, but add some new elemnts at the beginning?
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr);
//It's like taking all of the lements out of the array, then adding them manually

console.log(...arr); // 7 8 9
console.log(...newArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocci']; // Creating a new array, not mainpulating the original
console.log(newMenu);

// Create shallow copies (copy)
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

// Iterables example
const str = 'Lee';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// The below doesn't work because it is not valid JS syntax
// console.log(`${...str} Palmer`);
// It would be like doing ${'H', 'e', 'l', 'l', 'o'}, which is not valid

// Real-World Example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt(`Ingredient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {
  ...restaurant,
  founder: 'Antonio Delise',
  foundIn: 1918,
};
console.log(newRestaurant);

// Make a shallow Copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = `Big Chippy`;
console.log(restaurantCopy.name, restaurant.name);

// Destructuring a function call
restaurant.orderDelivery({
  time: '22:30',
  address: 'Tipton',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Tipton',
});

// Destructuring Objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); // Good for working with APIs:

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // menu is empty array, but starters contains the starterMenu array
// if it was like this: const { menu, starterMenu: starters = [] } = restaurant, then menu would be undefined

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // Have to wrap it in smooth brackets or else JS reads it as a codeblock
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Destructuring Arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

let [main, , secondary] = restaurant.categories;

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

// Receive two return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Setting default values for destructuring
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // r is undefined
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // Now p is 8, q is 9 and r is 1
*/

/*
// CODING CHALLENGE #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = game.players[0];

// Both below do the same thing
const allPlayers = [...game.players[0], ...game.players[1]];
const allPlayers2 = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

function printGoals(...names) {
  console.log(...names, `${names.length} goals were scored in the final!`);
}

function printGoals2(...names) {
  for (let i = 0; i < names.length; i++) {
    let count = 0;
    for (let j = 0; j < game.scored.length; j++) {
      if (names[i] === game.scored[j]) count++;
    }
    console.log(`${names[i]}: ${count} goal(s)`);
  }
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

printGoals2(...game.scored);

team1 < team2 && console.log(`Team 1 is more likely to win`);
team2 < team1 && console.log(`Team 2 is more likely to win`);

team1 < team2 || console.log(`Team 2 is more likely to win`);
team2 < team1 || console.log(`Team 1 is more likely to win`);

*/

// function BMFieldPlayers() {
//   let fieldPlayer = [];
//   for (let i = 1; i < game.players[0].length; i++) {
//     fieldPlayer.push(game.players[0][i]);
//   }
//   return fieldPlayer;
// }

// function BorrussiaDortmundFieldPlayers() {
//   let fieldPlayer = [];
//   for (let i = 1; i < game.players[1].length; i++) {
//     fieldPlayer.push(game.players[1][i]);
//   }
//   return fieldPlayer;
// }

// const player1 = {
//   gk: [game.players[0][0]],
//   fieldPlayers: BMFieldPlayers(),
// };

// const player2 = {
//   gk: [game.players[0][1]],
//   fieldPlayers: [BorrussiaDortmundFieldPlayers()],
// };

// const allPlayers = {
//   ...player1.gk,
//   ...player1.fieldPlayers,
//   ...player2.gk,
//   ...player2.fieldPlayers,
// };

// const players1Final = [...]

// Coding challenge #2
