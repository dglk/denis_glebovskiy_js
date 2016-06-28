Array.prototype.remove = function(e) {
  for (var i = 0, length = this.length; i < length; ++i) {
      if (this[i] === e) {
        this.splice(i, 1);
      }
  }
};
