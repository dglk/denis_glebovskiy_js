var m = require('./index.js');
var func = m.compare;

function expect(desc, boolean) {
  console.log(desc+":", (boolean) ? "Yes" : "No");
};

expect("Empty arrays?", func([], []) === 0);
expect("Equality?", func(['a', 'b', 'b', 'a'], ['a', 'b', 'b', 'a']) === 0);
expect("Greater than?", func(['a', 'c', 'a', 'b'], ['a', 'b', 'b', 'a']) === 1);
expect("Less than?", func("cat".split(''), "dog".split('')) === -1);
expect("Different sizes?",
  func("A very long string".split(''), "A cute string".split('')) == 1);
expect("Different sizes 2?",
    func("A very lo".split(''), "A very long string".split('')) == -1);
