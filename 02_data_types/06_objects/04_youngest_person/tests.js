var m = require('./index.js');
var findYoungest = m.findYoungest;
var fullName = m.fullName;

var sample = [
  {firstName: "Gosha", lastName: "Orlov", age: 31},
  {firstName: "Ivan", lastName: "Bay", age: 47},
  {firstName: "Vasya", lastName: "Pupkin", age: 14}
];

function expect(desc, boolean) {
    console.log(desc+":", (boolean) ? "Yes" : "No");
};

expect("Name of the youngest", function() {
  return fullName(findYoungest(sample)) === "Vasya Pupkin";
});
