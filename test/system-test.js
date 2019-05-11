var binding = require('../src/index.js');

var html = '<div>{{id}}</div>';
var context = {
  id: 5
};
describe('Binding', function() {
  it('Template should return with updated data automatically', function() {
    var fragment = binding.binder(html, context);
    console.log(fragment.children[0]);
    fragment.children[0].textContent.should.be.equal('5');
    context.id = 8;
    fragment.children[0].textContent.should.be.equal('8');
  });
});
