"use strict";

const diesroll = Array.from({ length: 100 }, (_, i) => ++i);
console.log(diesroll);

// object sort
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];

people.sort((a, b) => a.age - b.age);
console.log(people); //age Asecending

people.sort((a, b) => b.age - a.age);
console.log(people); //age Descending

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);

// creating array
// 1
const arr = [1, 2, 3, 4, 5];

// 2
const arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);

// 3 Empty arrays + fill method
// * The line of code const x = new Array(7); creates a new array x with a length of 7. However, it's important to note that this array is not initialized with any values; it will contain 7 empty slots (or "holes").
// ! You can check the length of the array using x.length, which will return 7. However, if you try to access any of the elements (e.g., x[0], x[1], etc.), they will return undefined because they are not initialized.

const x = new Array(7);

// * If you want to create an array with initialized values, you can do it like this:

const y = new Array(7).fill(0); // This will create an array: [0, 0, 0, 0, 0, 0, 0]

// * The method x.fill(1, 3, 6) is used to fill a portion of the array x with the value 1, starting from index 3 up to (but not including) index 6.

x.fill(1, 3, 6);
console.log(x); // Output: [empty × 3, 1, 1, 1, empty]

/*
! Explanation
* Initial Array: When you create const x = new Array(7);, x is an array with 7 empty slots: [empty × 7].
* Using fill: The fill method modifies the array in place. The parameters are:
* The first parameter (1) is the value to fill the array with.
* The second parameter (3) is the start index (inclusive).
* The third parameter (6) is the end index (exclusive).
* So, the fill method will fill the array with 1 starting from index 3 up to index 5 (index 6 is not included).
**/
