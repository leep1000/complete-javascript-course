'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your yummy pasta with ${ing1}, ${ing2} and ${ing3}!`);
  },

  openingHours: {
    thu: {
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
  },
};

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

/*

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
console.log(name, openingHours, categories); // Good for working with animationPlayState:

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
