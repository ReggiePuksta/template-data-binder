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
    defProperty(context, bind, currentValue, bind.update.bind(bind));
    bind.update(currentValue);
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
        after(val);
      }
    }
  });
};
module.exports = Binder;
