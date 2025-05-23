// importing module

import { addToCart, totalPrice, tq } from './shopingCart';
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import cloneDeep from 'lodash-es';

console.log('Importing Module');
addToCart('bread', 5);

console.log(tq, totalPrice);

const state = {
  cart: [
    { product: 'breed', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;

console.log('Clone', stateClone);
console.log('Deep Clone', stateDeepClone);

// // CommonJS
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };

if (module.hot) {
  module.hot.accept();
}
