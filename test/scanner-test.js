var Scanner = require('../src/scanner.js');
var scanner = new Scanner();
var helper = require('../src/helper.js');
var frag1 = helper.parseStringToFrag('<div><p>{{user}}</p><b>{{login}}</b></div>');
var frag2 = helper.parseStringToFrag('<div><p>{{user}}</p><a href="{{url}}"><b> {{ login }} </b></a></div>');
// var frag3 = helper.parseStringToFrag('<ul><li>{{id}}</li></ul>' +
// '');

describe('Scanner', function() {
  it('should return bindable nodes if we input more complex fragment',
    function() {
      scanner.setFragment(frag1);
      var bindableNodes = scanner.run();
      bindableNodes.should.be.an('array');
      bindableNodes.should.have.lengthOf(2);
      bindableNodes[0].target.should.be.a('text');
      bindableNodes[0].should.have.property('key', 'user');
      bindableNodes[1].should.have.property('key', 'login');
    });
  it('should return all bindable nodes with attribute input', function() {
    scanner.setFragment(frag2);
    var bindableNodes = scanner.run();
      bindableNodes.should.be.an('array');
      bindableNodes.should.have.lengthOf(3);
      bindableNodes[1].should.have.property('key', 'url');
      bindableNodes[1].target.should.be.an('attr');
  });

});
