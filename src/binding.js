var helper = require('./helper.js');
var Binding = function(str, context) {
  this.str = str || '';
  this.context = context;
  this.frag = this.convertToFrag() || {};
  this.bindableNodes= [];
  this.scanner = {};
  this.binder = {};
};
Binding.prototype.convertToFrag = function() {
  if (!this.str) {
    return false;
  }
  this.frag = helper.parseStringToFrag(this.str);
};
Binding.prototype.setNewFragment = function(frag) {
  this.frag = frag;
};
Binding.prototype.setScanner = function(scanner) {
  this.scanner = scanner;
};
Binding.prototype.setBinder= function(binder) {
  this.binder = binder;
};
// Looks for bindable nodes inside the fragment
Binding.prototype.scan = function() {
  this.scanner.setFragment(this.frag);
  this.bindableNodes = scanner.run();
};
Binding.prototype.bind = function() {
  this.binder.setBindableNodes(this.bindableNodes);
  this.binder.setContext(this.context);
  this.binder.run();
};
Binding.prototype.run = function() {
  this.scan();
  this.bind();
};

module.exports = Binding;
