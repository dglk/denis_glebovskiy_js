var m = require('./index.js'),
    isBalanced = m.isBalanced;

function expect(desc, boolean) {
    console.log(desc+":", (boolean) ? "Yes" : "No");
};

expect("Empty", isBalanced('') === true);
expect("Balanced expression", isBalanced('(a+b)*(a-b)') === true);
expect("Unbalanced expression 1", isBalanced('(a)(') === false);
expect("Unbalanced expression 2", isBalanced(')))a*4(((') === false);
