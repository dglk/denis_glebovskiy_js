var rl = require('readline');
var i = rl.createInterface(process.stdin, process.stdout, null);

i.question("Enter the first number: ", function(a) {
  i.question("Enter the second number: ", function(b) {
    var sum = 0;
    a = parseInt(a);
    b = parseInt(b);

    i.write('Odd numbers in [' + a + ',' + b + ']: ')
    for (var j = a; j <= b; ++j) {
      if (j % 2) {
        i.write(j + ' ');
      }
      sum += j;
    }
    i.write('\n');

    i.write('Sum of numbers in [' + a + ',' + b +']: ' + sum + '\n');

    i.close();
    process.stdin.destroy();
  });
});
