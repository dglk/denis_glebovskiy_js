var reverse = function(s) {
  var s = (typeof s === string) ? s : "";
  return s.split('').reverse().join('');
};

module.exports.reverse = reverse;
