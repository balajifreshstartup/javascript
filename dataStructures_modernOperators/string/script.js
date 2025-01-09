const airline = "TAB Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[2]);
console.log("B220"[0]);

console.log(airline.length);
console.log("B220".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("a"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(airline.indexOf(" "), airline.indexOf("P")));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
const arr = airline.length;
let newarry = [];
for (let i = 1; i <= arr; i++) {
  newarry.push(airline[arr - i]);
}
console.log(newarry.join(""));
console.log(airline);

console.log(airline.split("").reverse().join(""));

console.log(airline.slice(-5));

const middleSeat = function (seat) {
  let s = seat.slice(-1);
  if (s === "B" || s === "E") return "You got middle seat 👌";
  else return "You are lucky 😎";
};

console.log(middleSeat("11B"));
console.log(middleSeat("10A"));
console.log(middleSeat("21E"));

const passenger = "jOnAS";
console.log(passenger[0].toUpperCase() + passenger.slice(1).toLowerCase());

// replace

const priceUS = "285,98$";
const priceIN = priceUS.replace("$", "₹").replace(",", ".");
console.log(priceIN);

const announcement =
  "All the passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate")); //replace did not replace the all the match string. It will replace the first match string
console.log(announcement.replace(/door/g, "gate")); // to overcome the issue, we can use regular expression

// Boolean

const plane1 = "Airbus A320neo";
console.log(plane1.includes("A320"));
console.log(plane1.includes("A321"));
console.log(plane1.startsWith("Airb"));

if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("Part of new air bus family");
}

// Partice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun"))
    console.log("Not allowed for Bording");
  else console.log("Welcome to abording!");
};
checkBaggage("i'm having safty knife in my bag");
checkBaggage("i'm having food and toys");
checkBaggage("i'm having gun for my safty");

// split

console.log("a+very+nice+morning".split("+"));
console.log("Lethin shri".split(" +"));

// join

const arrName = ["Shri", "Mithran"];
console.log(arrName.join(" "));

const capitalizeName = function (name) {
  const names = name.split(" ");
  const arrName = [];
  for (n of names) {
    // arrName.push(n[0].toUpperCase() + n.slice(1)); // method 1
    arrName.push(n.replace(n[0], n[0].toUpperCase()));
  }
  return arrName.join(" ");
};

console.log(capitalizeName("a new fresh startup morning, good morning"));

// Padding
const message2 = "Go to gate 23 !";
console.log(message2.padStart("25", "*"));
console.log(message2.padEnd("25", "*"));

const maskCreditCard = function (number) {
  const str = number + "";
  const lastFourDigits = str.slice(-4);
  return lastFourDigits.padStart(str.length, "#");
};

console.log(maskCreditCard(457896655449584464));

// Repeat

const message3 = "Bad weather... All Departues Delayed...";

console.log(message3.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5);
