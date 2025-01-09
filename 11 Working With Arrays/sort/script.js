"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Sort
const fruits = ["Kevi", "Orange", "Apple", "Graphs", "Banana"];
fruits.sort(); // Ascending order.
console.log(fruits, "Ascending");
fruits.sort().reverse(); // Descending order.
console.log(fruits, "Descending");

// Nope Positive value switch the position. Negative value keep the position.
movements.sort((a, b) => a - b);
console.log(movements);
