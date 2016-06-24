var wordSearch = function(word, string, ignoreCase) {
  var regex = new RegExp("\\b"+word+"\\b", (ignoreCase) ? 'ig' : 'g'),
      result = [],
      match = null;
  while ((match = regex.exec(string)) !== null) {
    result.push(match.index);
  }
  return result;
};

module.exports.wordSearch = wordSearch;
