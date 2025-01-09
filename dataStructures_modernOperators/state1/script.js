"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
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
  order: function (a, b) {
    Object.p;
  },
};

restaurant.order(1, 2, 3, 4, 5);
// destructure

// const [first, second] = restaurant.categories;
let [main, , secondary] = restaurant.categories;

// Switching variables
// Now going to switch the secondary value to main and main value to seconday in old method.
/*1 * const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); */

// another shorts way to switch  the values.
[main, secondary] = [secondary, main];

console.log(main, secondary);

// Nested destructuring
const nested = [5, 4, [3, 1]];
const [i, , [j, l]] = nested;

console.log(i, j, l);

// Default Value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Now we see how to rename the name the variable name to be different from the property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default value. When call undefiend propery from the object, we get undefined. eg: There is no menu property in the restaurant. in this senario, we can set the default value for the undefiend properties.
const { menu = [], starterMenu: starter } = restaurant;
console.log(menu, starter, "<=== Default Value");

// Mutating variable, while destructing object.
let a = 111;
let b = 222;
const obj = { a: 27, b: 19, c: 123 };
// { a, b } = obj /* *When we start a line, with a curly brace like this, then javascript expects a code block. We can't assign anything to a code block like we did here. then we get an error unexpected token. to slow this issue we have to wrap the code into parenthesis ( {a, b} = obj ) */

({ a, b } = obj);
console.log(a, b);

// Nested object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// SPREAD, because on RIGHT side of the =
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 array
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menus);

//Object
// Copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Tahi Restaurant";
console.log(restaurantCopy.name, restaurant.name);

// Iterables : array, string, map, sets. NOT Object.

// REST because on LEFT side of the =
const [x, y, ...other] = [1, 2, 3, 4];

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// object
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// function
function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(add(2, 3, 4, 5, 6, 7));

const z = [25, 25, 26];
console.log(add(...z));

// loop

for (const item of menus) console.log(item);

// old
for (const item of menus.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// using destructure

for (const [i, el] of menus.entries()) {
  console.log(`${i + 1}: ${el}`);
}
