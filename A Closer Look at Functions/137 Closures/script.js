'use strict';

const secureBooking = function () {
  let passangerCount = 0;
  return function () {
    passangerCount++;
    console.log(`passangerCount ${passangerCount}`);
  };
};

const booking = secureBooking();
booking();
booking();
console.dir(secureBooking());
