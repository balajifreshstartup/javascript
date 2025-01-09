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

// Creating a Map
const rest = new Map();

// Adding entires to a Map using set method. 1st argument key, 2nd argument value.
rest.set("name", "Josh");
rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Libon, Portugal"));

//  chain set
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open 😁")
  .set(false, "We are closed 😒");

// get the value using key.
// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

const time = 24;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// has method to check the key exist in the Map
console.log(rest.has("categories"));

// delete method: using key, we can delete the value from the Map.
rest.delete(2);
console.log(rest);

// size property
console.log(rest.size);

// clear method: We can remove the all elements for the Map.
//**** rest.clear(); */
const arr1 = [1, 2];
rest.set(arr1, "Test");
// console.log(rest);

// console.log(rest.get(arr1));

rest.set(document.querySelector("h1"), "Heading");

console.log(rest);

/*** There is actually another way of populating a new Map without having to use the set method. And I perfer that  because the set method is a bit cumbersome(complecate), where there are a lot of value to set. So instead we can create a new map like below. */

const question = new Map([
  ["question", "what is the best programming language in the world ?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "correct 🎉"],
  [false, "Try again 😊"],
]);

console.log(question);
// convert object to Map
const hoursMap = new Map([Object.entries(restaurant.openingHours)]);
console.log(hoursMap);

// Iteration
for (const [key, value] of question) {
  if (key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// Convert map to array
const questionArray = [...question];
console.log(questionArray);
console.log([...question.keys()]);
console.log([...question.values()]);
