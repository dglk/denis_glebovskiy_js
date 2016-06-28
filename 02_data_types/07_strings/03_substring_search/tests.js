var m = require('./index.js'),
    countSubstrings = m.countSubstrings;

function expect(desc, boolean) {
    console.log(desc+":", (boolean) ? "Yes" : "No");
};

expect("Substring of empty", countSubstrings('in', '') === 0);
expect("On empty key returns null", countSubstrings('', 'whatever') === null);
expect("Several occurences",
    countSubstrings('in', 'in the inn in Tallinn') === 4);
expect("Case insensitive",
    countSubstrings('in', 'livIng IN a yellow submariNe') === 3);
