(function() {
  var selectDivsByQuery = function() {
    return Array.prototype.slice.call(document.querySelectorAll('div > div'));
  };

  var selectDivsByTagName = function() {
    var output = [];
    var divs = document.getElementsByTagName('div');
    for (var i in divs) {
      if (divs[i].parentNode && divs[i].parentNode.tagName === 'DIV') {
        output.push(divs[i]);
      }
    }
    return output;
  }

  window.selectDivsByQuery = selectDivsByQuery;
  window.selectDivsByTagName = selectDivsByTagName;
})();
