'use strict';

const Person = function (firstName, birthYear) {
  //   Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const t = {};
const j = new Person('Jonas', 1991);
const b = new Person('Balaji', 1989);
console.log(j, b);
// 1. New empty object {} is created.
// 2. function is called, this = {} (this keyword poin the new object)
// 3. New empty object {} linked with prototype.
// 4. function automaticalyy return {}

console.log(j instanceof Person);

// Prototype
Person.prototype.calcAge = function () {
  console.log(2035 - this.birthYear);
};

// construnction function for student.
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);

const mike = new Student('Mike', 2020, 'Computer Science');

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I stydy ${this.course}`);
};

mike.introduce();
mike.calcAge();
Student.prototype.constructor = Student;

console.log('Mike', mike.__proto__);

console.log('Person ++', Person.prototype);
console.log('Student ++', Student.prototype);

j.calcAge();

console.log(j.__proto__);
console.log(Person.prototype);

console.log(Array.prototype);

Person.prototype.species = 'Homo Sapiens';
console.log(j.species, b.species);

console.log(j.hasOwnProperty('firstName')); //ture
console.log(j.hasOwnProperty('species')); //false

const arr = [3, 6, 6, 5, 6, 9, 9];
console.log('array=', arr.__proto__);
console.log('array=', arr.__proto__.__proto__);
console.log('array=', arr.__proto__.__proto__.__proto__); // Top of the prototype chile : null

// for test
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
console.log(Array.prototype.__proto__.__proto__); // Top of the prototype chile : null

console.dir(
  document.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
);

console.dir(Person.prototype.constructor);

// Challenge #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
const bmw = new Car('BMW', 120);
bmw.accelerate();
bmw.break();
bmw.break();
bmw.accelerate();

// ES6 Class
// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const lethin = new PersonCl('Lethin Shri', 2019);
console.log(lethin, 'object');
lethin.calcAge();
lethin.greet();
console.dir(PersonCl.prototype);
console.log(lethin.__proto__ == PersonCl.prototype);
console.log(lethin.age, 'getter');
console.log(lethin.fullName, 'Setter');
// Getters and Setters
const account = {
  owner: 'Jonas',
  movement: [200, 500, 1000, 1500],
  get latest() {
    return this.movement.slice(-1).pop();
  },
  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);

account.latest = 300;
console.log(account.latest);

// inheritance
