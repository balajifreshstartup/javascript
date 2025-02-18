'use strict';

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const tata = new Car('Tata', 80);
// tata.accelerate();
// tata.accelerate();
// tata.accelerate();
// tata.brake();
tata.speedUS = 50;
console.log(tata);

// #2 Coding Challenge
