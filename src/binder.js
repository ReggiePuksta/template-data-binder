var helper = require('./helper.js');

var Binder = function(bindList, context) {
  this.bindList = [];
  this.context = {};
};
/**
 * @param {Array} binds list of objects containing target nodes
 * and it's key names
 *
 */
Binder.prototype.setBindList = function(binds) {
  this.bindList = binds;
};
Binder.prototype.setContext = function(context) {
  this.context = context;
};
Binder.prototype.setUpdateFunc = function(func) {
  this.updateFunc = func;
};
/* quick solution for an update function.
 * We might need to add update function for each object returned by
 * Scanner.
 */
var update = function(node, val) {
    if (node instanceof Attr) {
      node.value = val;
    }
    if (node instanceof Text) {
      node.textContent = val;
    }
};
/**
 * We call Object.defineProperty method on each context property 
 * that is in the bindings List
 */
Binder.prototype.run = function() {
  var binds = this.bindList;
  var context = this.context;
  // var updateFunc = this.updateFunc;
  for (var i = 0, len = binds.length; i < len; i++) {
    var bind = binds[i];
    var bindingsKey = binds[i].key;
    var currentValue = context[bindingsKey];
    defProperty(context, bind, currentValue, update);
    update(bind.target, currentValue);
  }
};
/* Private methods */
var defProperty = function(obj, prop, current, after) {
  Object.defineProperty(obj,prop.key, {
    get: function() {
      return current;
    },
    set: function(val) {
      current = val;
      if (after) {
        after(prop.target, val);
      }
    }
  });
};
module.exports = Binder;
