const john = {
  'name': 'John',
  'age' : 27,
  'family' : ['Sam','ana']
}

// object before copy

// const james = john;
// james.age = 30;
// console.log(john,'john===');
// console.log(james,'james===');

// object copy

const susan = Object.assign({}, john); //shallow copy
susan.age = 25;

susan.family.push('ruby');
susan.family.push('james');

console.log(susan, 'Susan======')
console.log(john, 'john======')