"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//* 1
// ! method 1
/* const depositSum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((acc) => acc > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(depositSum,); */
// ! method 2
const depositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((acc) => acc > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(depositSum);

//* 2
// ! method 1
/* const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numDeposits1000); */

// ! method 2
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);
console.log(numDeposits1000);

//* 3
const { deposits, withdraw } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sum, cur) => {
      cur > 0 ? (sum.deposits += cur) : (sum.withdraw += cur);
      return sum;
    },
    { deposits: 0, withdraw: 0 }
  );

console.log(deposits, withdraw);
