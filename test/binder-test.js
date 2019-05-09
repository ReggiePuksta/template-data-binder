var Binder = require('../src/binder.js');
describe('Binder', function() {
  var binder, binds;
  before(function() {
    /* Nodes returned by the Scanner object can only be Attr or
     * Text. So we create mock object returned by Scanner
     */
    var url = document.createAttribute('url');
    var text = document.createTextNode('Text Inside');
    binds = [{
      target: url,
      key: 'Address'
    }, {
      target: text,
      key: 'name'
    }];
  });
  beforeEach(function() {
    binder = new Binder();
    binder.setBindList(binds);
  });
  it('should update current values in the nodes after binding',
    function() {
      var context = {
        'Address': 'localhost',
        'name': "Michael"
      };
      binder.setContext(context);
      binder.run();
      binds[0].target.value.should.be.equal('localhost');
      binds[1].target.textContent.should.be.equal('Michael');
    });
  it('should update node value after after context value changed', function() {
    var context = {
      'Address': 'localhost',
      'name': "Michael"
    };
    binder.setContext(context);
    binder.run();
    context.Address = 'another one';
    binds[0].target.value.should.be.equal('another one');
    context.name = 'Ocean';
    binds[1].target.textContent.should.be.equal('Ocean');
  });


});
