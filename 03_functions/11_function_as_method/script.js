(function() {
  var Employee = {
    'name': 'Ann',
    'work': function() {
      console.log('I am ' + this.name +'. I am working...');
    }
  };

  Employee.work();
})();
