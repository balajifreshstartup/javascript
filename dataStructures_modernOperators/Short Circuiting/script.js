// Short Circuiting in JavaScript:
// Short-circuiting occurs when logical operators (|| or &&) evaluate expressions and stop as soon as the result is determined. The operator will return the first value that allows the operation to complete.

// Falsy Values in JavaScript:
// The following are considered falsy values:

// 0
// '' (empty string)
// undefined
// null
// NaN
// false
// Everything else is considered truthy.

// Using the OR (||) Operator:
// The || operator returns the first truthy value it encounters, or the last value if all are falsy.

// Examples:
console.log(3 || "Jonas"); // 3
// 3 is truthy, so it returns 3. The second value is not evaluated (short-circuited).

console.log("" || "Jonas"); // Jonas
// '' is falsy, so it evaluates the next value and returns 'Jonas'.

console.log(true || 0); // true
// true is truthy, so it returns true. The second value (0) is not evaluated.

console.log(undefined || null); // null
// undefined is falsy, so it evaluates the next value (null) and returns it (since null is also falsy but the last value).

console.log(undefined || 0 || "" || "Hello" || 23 || null); // Hello
// The first three values are falsy (undefined, 0, ''), so it continues until it finds 'Hello', which is truthy, and returns it.

// Summary:
// OR (||) returns the first truthy value or the last falsy value if none are truthy.
// The evaluation stops (short-circuits) as soon as a truthy value is found.

// _______________________________

// Using the AND (&&) Operator:
// The && operator returns the first falsy value it encounters or the last truthy value if all are truthy. It evaluates from left to right and stops (short-circuits) as soon as a falsy value is found.

// Examples:

console.log(0 && "Jonas"); // 0
// 0 is falsy, so it returns 0 immediately without checking the second value.

console.log(1 && "Jonas"); // Jonas
// 1 is truthy, so it evaluates the next value and returns 'Jonas' since no falsy value was found.

console.log("Hello" && 23 && null && "Jonas"); // null
// Hello and 23 are truthy, so it evaluates until it reaches null, which is falsy, and returns null.

console.log("Hello" && 23 && true && "Jonas"); // Jonas
// All values ('Hello', 23, true) are truthy, so it evaluates and returns the last truthy value ('Jonas').

// Summary:
// AND (&&) returns the first falsy value it finds. If all values are truthy, it returns the last truthy value.
// The evaluation stops (short-circuits) as soon as a falsy value is encountered.
