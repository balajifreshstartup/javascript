'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

// pure Function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const clearUser = user.toLowerCase();

  return value <= getLimit(limits, clearUser)
    ? [...state, { value: -value, description, user: clearUser }]
    : state;
};
const newBuget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBuget2 = addExpense(
  newBuget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBuget3 = addExpense(newBuget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpense = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBuget = checkExpense(newBuget3, spendingLimits);

const logBigExpenses = function (state, bigLimit) {
  const output = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join('/');
  console.log(output);
};

logBigExpenses(finalBuget, 1000);
console.log(finalBuget);
