'use strict';

const person1 = 'Balaji';
const person2 = 'Hema';

let person1NameToLowerCase = person1.toLowerCase();
let person2NameToLowerCase = person2.toLowerCase();

const person1Val = person1NameToLowerCase.replace(/\s/g, '');
const person2Val = person2NameToLowerCase.replace(/\s/g, '');

const uniqueLetters = new Set([...person1Val].filter(x => !person2Array(x)));
console.log(uniqueLetters);
const letterCount = uniqueLetters.length;
const flames = [...'FLAMES'];
let index = 0;
while (flames.length > 1) {
  index = (index + letterCount - 1) % flames.length;
  flames.splice(index, 1);
}
console.log(`The final letter in FLAMES is: ${flames[0]}`);
