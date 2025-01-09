// Prototypal Inheritance and the Prototype Chain

// ES6 introduced classes which is the modern way to construct objects

// That said, prototypal inheritance and the prototype chain are:
// 1) "under the hood", (ES6 Classes are considered "syntactic sugar")

// Object literals

const person = {
    alive: true
}

const musician =  {
    plays: true
}

musician.__proto__ = person;

//* console.log(musician.plays);
//* console.log(musician.alive);
//* console.log(musicia);

// Extending the prototype chain => general to specific to more specific
const guitarist = {
    string: 6,
    __proto__: musician
}

//* console.log(guitarist.plays);
//* console.log(guitarist.alive);
//* console.log(guitarist.string);

// console.log(guitarist);

// JS now has getPrototypeOf and setPrototypeOf methods instead of using __proto__

// 1) No circular references allowed (person.__proto__ can't be guitarist)
// 2) The _proto__ value must be an object or null.
// 3) An object can only directly inherit frome one object.

// Object with getter and setter methods
const car = {
    doors: 2,
    seats: "vinyl",
    get seatMaterial(){
        return this.seates;
    },
    set seatMaterial(material){
        this.seats = material;
    }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = 'leather';
console.log(luxuryCar);
console.log(luxuryCar.seats);
console.log(luxuryCar.doors);
console.log(car);

// Walking up the chain - props and methods are not copied.
console.log('valueOf() = ',luxuryCar.valueOf());

// Getting the keys of an object
console.log(Object.keys(luxuryCar));
Object.keys(luxuryCar).forEach(key => {
    console.log(key);
});

// But a for..in loop incudes inherited props.
for(let key in luxuryCar) {
    console.log(key);
}

// Reference : Prototype is a bucket if you will of methods that can be inherited and remember there are some methods that could not be inherited that were in the constructor of the object

// Object Constructor
function Animal(species){
    this.species = species;
    this.eat = true;
}
Animal.prototype.walk = function(){
    return `A ${this.species} is walking`;
}

const Bear = new Animal('bear');
console.log(Bear.species);
console.log(Bear.eat);
console.log(Bear.walk());

// Now an ES6 Classes example of inheritance.
class Vehicle {
    constructor(){
        this.wheels = 4;
        this.motorized = true;
    }
    ready(){
        return 'Ready to go...!';
    }
}

class MoterCycle extends Vehicle{
    constructor(){
        super();
        this.wheels = 2;
    }
    wheelie(){
        return 'On one wheel now!';
    }
}

const myBike = new MoterCycle();
console.log('Wheels = ',myBike.wheels);
console.log('Motorized = ', myBike.motorized);
console.log(myBike.ready());
console.log(myBike.wheelie());