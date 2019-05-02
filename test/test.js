function requireAll(r) {
  r.keys().forEach(r);
}
// Load should function globaly
var should = require('chai').should();
requireAll(require.context('./', true, /\-test\.js$/));
