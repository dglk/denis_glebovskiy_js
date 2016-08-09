(function() {
  'use strict';

  var frequencyTable = function(list) {
    var table = {},
        i;
    for (i in list) {
      table[list[i]] = (list[i] in table) ? table[list[i]] + 1 : 1;
    }
    return table;
  }

  var normalize = function(table) {
      var min = Number.POSITIVE_INFINITY;
      var max = Number.NEGATIVE_INFINITY;
      for (var i in table) {
        min = (table[i] < min) ? table[i] : min;
        max = (table[i] > max) ? table[i] : max;
      }
      if (min === max) {
        for (var i in table) {
          table[i] = 0.5;
        }
      } else {
        for (var i in table) {
          table[i] = (table[i] - min) / (max - min);
        }
      }
      return table;
  }

  var lerp = function(min, max, value) {
    return min + (max - min) * value;
  }

  var tagCloud = function(minSize, maxSize, tagList) {
    var domElement = document.createElement('ul');
    domElement.className = 'tag-cloud';
    var tags = normalize(frequencyTable(tagList.map(String.toLowerCase
      .bind(null))));
    for (var i in tags) {
      var child = document.createElement('li');
      child.innerHTML = i;
      child.style['font-size'] = lerp(minSize, maxSize, tags[i]) + 'px';
      domElement.appendChild(child);
    }
    return domElement;
  }

  window.tagCloud = tagCloud;
})();
