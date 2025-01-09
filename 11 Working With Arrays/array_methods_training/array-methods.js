"use strict";

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/**
 * An array of lowercase alphabetic characters.
 *
 * The array contains a sequence of lowercase letters starting from "a" to "e".
 * This can be used for iterating over or accessing individual characters.
 *
 * @type {string[]}
 */
let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice()); //Shalow copy
console.log([...arr]); //Shalow copy

// SPLICE
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));

// REVERSE
/**
 * Reverses the elements of the given array.
 *
 * This function will mutate the original array. It does not create a new array but instead reverses the order of elements in the array that is passed to it.
 *
 * @param {Array} arr - The array to be reversed.
 * @returns {Array} The array with its elements reversed.
 */
arr = ["a", "b", "c", "d", "e"];
/**
 * An array containing a sequence of single-character strings in reverse alphabetical order.
 *
 * @type {string[]}
 */
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
s;

// CONCAT
let letters = arr.concat(arr2);
console.log(letters);

// We can join the array without concat using spread operator ...
console.log([...arr, ...arr2]);

// JOINs

console.log(letters.join(" - "));

// AT
// using at method to get the value of the array.
const arr3 = [23, 11, 64];

console.log(arr3.at(0));
console.log(arr3.at(-1));

//Other way to get the value of the array using the index.
console.log(arr3[0]);
console.log(arr3[arr3.length - 1]);
console.log(arr3.splice(-1)[0]);

// LOOP

const movements = [200, 450, -400, 3000, -650, -130, 70, 13000];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("-------forEach-----------");

movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// Map

const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["INR", "Rupees"],
]);

currencies.forEach((value, key, map) => {
  console.log(key);
});
