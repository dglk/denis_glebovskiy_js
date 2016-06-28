function deepCopy(obj) {
  var result,
      i,
      length;

  if (obj == null || typeof obj !== "object") {
    return obj;
  };

  if (obj instanceof Array) {
    result = [];
    for (i = 0, length = obj.length; i < length; ++i) {
      result[i] = deepCopy(obj[i]);
    };
    return result;
  };

  if (obj instanceof Object) {
    result = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        result[i] = deepCopy(obj[i]);
      }
    }
  };

  throw new Error("Type not supported");
};

module.exports.deepCopy = deepCopy;
