(function() {
  var a = "1",
      b = "1";
  // using an immediately invoking function expression
  console.log((function(x, y) {
    return '' + x + y;
  })(a, b));
})();
