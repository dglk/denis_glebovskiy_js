(function() {
  'use strict';
  var leaderboard = {
    topTen: function() {
      var leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
      leaderboard.sort(function(arg0, arg1) {
        return arg0.tries - arg1.tries;
      });
      return leaderboard.slice(0, 10);
    },
    add: function(name, tries) {
      var leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
      leaderboard.push({
        'name': name,
        'tries': tries
      });
      localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    }
  };

  window.leaderboardStorage = leaderboard;
})();
