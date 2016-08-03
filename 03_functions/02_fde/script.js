(function() {
  try {
    var result = equal(1, 1);

    var comp = function (a, b) {
      return (a === b) ? 1 : -1;
  	};
  } catch(e) {
    console.log("Function call failed; FDE is not hoisted");
  };
})();