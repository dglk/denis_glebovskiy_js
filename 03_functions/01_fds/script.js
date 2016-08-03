(function() {
  var foo = cons("1", "1");
  var bar = cons(2, 2);

  // calls will work because the function definition is hoisted

  console.log(foo);
  console.log(bar);

  function cons(a, b) {
    return '' + a + b;
  };
})();
