var findYoungest = function(people) {
  var i,
      length = people.length,
      youngest;
  if (length === 0) {
    return null;
  };
  youngest = people[0];
  for (i = 1; length = people.length; ++length) {
    if (people[i].age < youngest.age) {
      youngest = people[i];
    }
  };
  return youngest;
};

var fullName = function(person) {
  return '' + person.firstName + ' ' + person.lastName;
};

module.exports.findYoungest = findYoungest;
module.exports.fullName = fullName;
