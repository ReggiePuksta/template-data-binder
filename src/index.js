var Scanner = require('./scanner.js');
var NodeBinder = require('./binder.js');
var Binder = {};

var scanner = new Scanner();
var nodeBinder  = new NodeBinder();
// TODO We probably do not need to create classes just to use it
// once. So I will have to redo Scanner and NodeBinder
Binder.binder = function(frag, context) {
  var setFrag = scanner.setFragment(frag);
  var binds= scanner.run();
  nodeBinder.setContext(context);
  nodeBinder.setBindList(binds);
  nodeBinder.run();
  return setFrag;
};

module.exports = Binder;
