(function() {
  'use strict';

  var helpButton = document.getElementById('help-button'),
      leaderboardButton = document.getElementById('leaderboard-button'),
      checkButton = document.getElementById('game-button-submit'),
      help = document.getElementById('help'),
      victory = document.getElementById('victory'),
      victoryMessage = document.getElementById('victory-message'),
      victoryButton = document.getElementById('victory-button'),
      leaderboard = document.getElementById('leaderboard'),
      leaders = document.getElementById('leaders'),
      numberInput = document.getElementById('game-input'),
      sheep = document.getElementById('game-field-sheep'),
      rams = document.getElementById('game-field-rams'),
      moves = document.getElementById('game-field-moves'),
      gameLogic = game();

  gameLogic.reset();

  numberInput.addEventListener('click', function(event) {
    var oTarget = event.originalTarget;
    if (oTarget.classList.contains('game-button')) {
      var number = oTarget.parentNode.getElementsByClassName('game-field')[0];
      if (oTarget.classList.contains('game-button-up')) {
        number.value = (number.value < 9) ? (+number.value + 1) : 1;
      }
      if (oTarget.classList.contains('game-button-down')) {
        number.value = (number.value > 1) ? (+number.value - 1) : 9;
      }
    }
  });

  checkButton.addEventListener('click', function() {
    var combination = [],
        numbers = numberInput.getElementsByClassName('game-field');
    for (var i = 0; i < numbers.length; ++i) {
      combination.push(+numbers[i].value);
    }
    var result = gameLogic.guess(combination);
    if (result.rams === 4) {
      victoryMessage.innerHTML = "You won the game in " + gameLogic.getTries() + " move(s)";
      show(victory)();
    } else {
      sheep.value = result.sheep;
      rams.value = result.rams;
      moves.value = gameLogic.getTries();
    }
  });

  victoryButton.addEventListener('click', function() {
    var victoryName = document.getElementById('victory-name');
    if (victoryName.value) {
      leaderboardStorage.add(victoryName.value, gameLogic.getTries());
    }
    gameLogic.reset();
    sheep.value = 0;
    rams.value = 0;
    moves.value = 0;
    hide(victory)();
  });

  var show = function(domElement) {
    return function() {
      domElement.classList.toggle('visible');
    }
  };

  var hide = function(domElement) {
    return function() {
      domElement.classList.remove('visible');
    }
  };

  leaderboardButton.addEventListener('click', function() {
    leaders.innerHTML = "";
    var fragment = document.createDocumentFragment(),
        topTen = leaderboardStorage.topTen();
    for (var i in topTen) {
      var element = document.createElement('li');
      element.innerText = topTen[i].name + " - " + topTen[i].tries + " moves";
      fragment.appendChild(element);
    }
    leaders.appendChild(fragment);
    show(leaderboard)();
  });
  leaderboard.addEventListener('click', hide(leaderboard));
  helpButton.addEventListener('click', show(help));
  help.addEventListener('click', hide(help))

})();
