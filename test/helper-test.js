var helper = require('../src/helper.js');

describe('Converting string to the Document Fragment', function() {
  beforeEach(function() {
  });
  it('should create a document fragment', function() {
    helper.parseStringToFrag('<div></div>')
      .should.be.an.instanceof(DocumentFragment);
    helper.parseStringToFrag('<div></div>').nodeType
      .should.be.equal(11);
  });
});
