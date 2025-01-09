'use strict';

const createEle = function (
  ele,
  innertxt = '',
  clsName = '',
  eleId = '',
  callback = null
) {
  if (!ele) return false;
  const newEle = document.createElement(ele);
  const classArray = clsName.split(' ');
  const newClasses = [...new Set(classArray)];
  if (clsName) newEle.classList.add(...newClasses);
  if (innertxt) newEle.innerText = innertxt;
  return newEle;
};
/*
 * createEle()
 * 1st arrgument element name eg : 'h1'
 * 2nd arrgument element inner text eg: 'Hi !'
 * 3rd arrgument element className eg: 'class1 class2'
 * 4rd arrgument element id eg: 'class1 class2' */
const CreateElements = [
  {
    name: 'h1',
    text: 'A Closer Look at Functions',
    class: 'title h1title',
    id: 'title',
  },
  {
    name: 'button',
    text: 'Buy new plane 🛩',
    class: 'buy',
    id: 'btn buy',
    callback: 'handleBuy()',
  },
  {
    name: 'button',
    text: 'Answer poll ⁉️',
    class: 'poll',
    id: 'btn poll',
  },
];

const h1 = createEle('h1', 'A Closer Look at Functions', 'title');
const btn1 = createEle('button', 'Buy new plane 🛩', 'buy');
const btn2 = createEle('button', 'Answer poll ⁉️', 'poll');

const elements = { h1, btn1, btn2 };

for (const element of Object.values(elements)) {
  document.body.append(element);
}

// ** call and apply method

const spiceJet = {
  airline: 'Spice Jet',
  iataCode: 'SJ',
  bookings: [],
  book(flighNum, name) {
    console.log(
      `${name} booked a sets on ${this.airline} flight ${this.iataCode}${flighNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flighNum}`,
      name: `${name}`,
    });
  },
};

spiceJet.book(289, 'Lethin Shri');
spiceJet.book(290, 'Shri Mithran');
console.log(spiceJet.bookings);

const airIndia = {
  airline: 'Air India',
  iataCode: 'AI',
  bookings: [],
};

const jetAirways = {
  airline: 'Jet Airways',
  iataCode: 'JA',
  bookings: [],
};
// call method
const airIndiaBook = spiceJet.book;
airIndiaBook.call(airIndia, 303, 'Bhavatharini');
console.log(airIndia.bookings);

// apply method
const jetAirBooking = spiceJet.book;
const bookingDetails = [333, 'Balaji'];
jetAirBooking.apply(jetAirways, bookingDetails);

// ! instead of apply method, we can use call method using modern javascript
const jetAirBookCall = spiceJet.book;
const bookingDetails2 = [323, 'Jonash'];
jetAirBookCall.call(jetAirways, ...bookingDetails2);
console.log(jetAirways.bookings);

// *** bind method
const airBind = spiceJet.book.bind(airIndia);
console.log(airBind(143, 'James Bond'));

// TODO Chalange
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Partial application
const addVat = addTax.bind(null, 0.23);
console.log(addVat(1000));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

// console.log(addTaxRate(0.1)(200));
const addVat2 = addTaxRate(0.2);
console.log(addVat2(20));

// With Event Listeners

spiceJet.planes = 300;
spiceJet.buyflight = function () {
  this.planes++;

  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', spiceJet.buyflight.bind(spiceJet));
