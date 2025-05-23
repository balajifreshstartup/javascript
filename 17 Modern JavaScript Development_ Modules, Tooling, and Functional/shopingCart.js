// exporting module
console.log('Export Module!');

const shopingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalQuantity = 235;
const totalPrice = 23;
console.log(cart);
export { totalQuantity as tq, totalPrice };
