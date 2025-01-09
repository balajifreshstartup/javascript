"use strict";

// TDZ stands for Temporal Dead Zone in JavaScript. It refers to the time period during which a variable is declared using let, const, or class but cannot be accessed until its declaration is fully executed. The TDZ starts from the beginning of the block (or function) where the variable is declared and ends when the variable is initialized (assigned a value). Trying to access the variable during this period results in a ReferenceError.

// Example of TDZ:
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;

// In this example:

// The variable x is in the TDZ from the start of the code execution until the let x = 5; statement.
// Trying to access x before its declaration throws a ReferenceError because it is still in the TDZ.

// *** Why Does the TDZ Exist?
// The TDZ ensures that variables declared with let, const, or class are not accessed before they are properly initialized. This is different from var, which is hoisted and initialized to undefined right away, allowing you to use it before its declaration (although it's not a good practice).

// TDZ with let and const:

{
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 10;
}

{
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  const b = 20;
}

//   Both let and const are subject to the TDZ. You cannot use the variable until it has been declared and initialized.

// *** Example with class:
let instance = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization
class MyClass {}

// Classes also experience TDZ, meaning you cannot instantiate a class before its declaration is fully processed.

// Key Points:
// Temporal Dead Zone starts when the scope of a block begins and ends when the variable is initialized.
// Variables in the TDZ cannot be accessed and will throw a ReferenceError if accessed before declaration.
// TDZ applies to variables declared with let, const, and class, but not to var, which is hoisted and initialized with undefined.

// Global Variable
const name = "Lethin";

if (name === "Lethin") {
  console.log(`Lethin is a ${job}`);
  const job = "child";
  console.log(x);
}

firstFun();
