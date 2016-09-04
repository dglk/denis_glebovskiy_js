(function() {
  'use strict';
  var ALLOWED_DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9],
      LENGTH = 4;

  var randomInt = function(upperBound) {
    return Math.floor(Math.random() * upperBound);
  };

  var shuffle = function(array) {
    var l = array.length,
        temp;
    for (var i = l - 1; i > 1; --i) {
      var j = randomInt(i + 1);
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
  };

  var game = function() {
    var tries = 0,
        secret = [0, 0, 0, 0];

    var countRams = function(guess) {
      var rams = 0;
      for (var i in guess) {
        if (secret[i] === guess[i]) {
          rams += 1;
        }
      }
      return rams;
    };

    var countSheep = function(guess) {
      var sheep = 0;
      for (var i in guess) {
        if (secret.includes(guess[i]) && (secret[i] !== guess[i])) {
          sheep += 1;
        }
      }
      return sheep;
    };

    return {
      reset: function() {
        tries = 0;
        shuffle(ALLOWED_DIGITS);
        secret = ALLOWED_DIGITS.slice(0, LENGTH);
      },
      getTries: function() {
        return tries;
      },
      guess: function(input) {
        tries += 1;
        return {
          sheep: countSheep(input),
          rams: countRams(input)
        }
      }
    }
  };

  window.game = game;
})();
