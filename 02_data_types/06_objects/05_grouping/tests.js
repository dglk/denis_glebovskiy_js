var m = require('./index.js');

var sample = [
  {firstName: "Gosha", lastName: "Orlov", age: 31},
  {firstName: "Ivan", lastName: "Bay", age: 47},
  {firstName: "Vasya", lastName: "Pupkin", age: 14},
  {firstName: "Vasya", lastName: "Sidorov", age: 15},
  {firstName: "Ivan", lastName: "Ivanov", age: 14}
];

console.log('Sample:', sample);
console.log('Grouping by first name', m.group(sample, 'firstName'));
console.log('Grouping by last name', m.group(sample, 'lastName'));
console.log('Grouping by age', m.group(sample, 'age'));
