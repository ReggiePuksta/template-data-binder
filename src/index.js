var Binding = require('./binding.js');
var Scanner = require('./scanner.js');
var NodeBinder = require('./binder.js');

var scanner = new Scanner();
var nodeBinder  = new NodeBinder();
var obj  = {
  name: "Johnson"
};
var binding = new Binding('<div>{{name}}</div>', obj);
var binding2 = new Binding('', obj);
binding.setNewFragment('<p>Hello my name is {{name}}</p>');
binding.setScanner(scanner);
binding.setBinder(binder);
var dom = binding.run();

