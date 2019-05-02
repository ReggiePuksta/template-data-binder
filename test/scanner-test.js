var Scanner = require('../src/scanner.js');
  var scanner = new Scanner();
var helper = require('../src/helper.js');
var frag1 = helper.parseStringToFrag('<div><p>{{user}}</p><b>{{login}}</b></div>');

describe('Scanner', function() {
 it('should return all bindable nodes', function() {
   scanner.setFragment(frag1);
   var bindable = scanner.run();
 });
  
});

