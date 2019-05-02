var binding = require('../src/binding.js');

var html = '<div>{{ID}}</div>';
var context = {
  id: 5
};
describe('Bindings', function() {
  beforeEach(function() {
  });
  it('Template should return with updated data automatically', function() {
    binding(html, context).textContent.should.be.equal(5);
  });
});
