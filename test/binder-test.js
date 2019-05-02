var Binder = require('../src/binder.js');
var binder = new Binder();
var helper = require('../src/helper.js');
var frag1 = helper.parseStringToFrag('<div>{{user}}</div>');


describe('Binder', function() {
 it('should bind context object with bindable nodes', function() {
   // scanner.setFragment(frag1);
   // var bindable = scanner.run();
 });
  
});

