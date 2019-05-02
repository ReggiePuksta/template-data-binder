var helper = require('./helper.js');
/* 
 * Why we create this class instead of making a single scan
 * function? We might want to change the way we parse our
 * DOM fragment in the future. Ex.: Placeholders, we might add
 * functionality that would enable placeholders in different places.
 * This Scanner class Aims to extract DOM nodes that contain
 * placeholders.
 * It enables different options, extensions and improvements for 
 * this specific task in the future.
 */
var Scanner = function(frag) {
  this.frag = helper.defaultFor(frag, {});
  this.results = [];
};
Scanner.prototype.setFragment = function(frag) {
  this.frag = frag;
};

/**
 * scan(): inputs DOM fragment and outputs
 * a list of nodes that contain {{}} inside their value
 * @param {DocumentFragment} DOM element or fragment
 * @return {Array} List of Nodes
 */
Scanner.prototype.run = function(parentNode) {
  var nodes = (parentNode && parentNode.childNodes)|| this.frag.childNodes;
  for (var i = 0, len = nodes.length; i < len; i++) {
    var node = nodes[i];
    // console.log(node);
    switch (node.nodeType) {
      case 1:
        this.results.push(parseAttr(node));
        this.results.push(this.run(node));
        break;
      case 3:
        this.results.push(parseText(node));
        break;
    }
  }
  return this.results;
};
/* Private Methods */
var parseAttr = function(node) {
  // 1) We have to check all attributes in the element node
  var attributes = node.attributes;
  var attributeNodes = [];
  for (var i = 0, len = attributes.length; i < len; i++) {
    var attr = attributes[i];
    var key = parse(attr.value);
    if (key === undefined) {
      return;
    }
    return {
      target: node,
      key: key
    };
  }
  return attributeNodes;
};
var parseText = function(node) {
  // 1) We check if this node's value contains the placeholder
  // 2) We need to create multiple child text nodes in case there
  // are multiple placeholders in the text

  // There might be empty text nodes
  var unparsedTxt = node.textContent;
  var tokens = parse(unparsedTxt);
  if (tokens === undefined) {
    return;
  }
  return {
    target: node,
    key: tokens,
  };
};
/**
 * parse()
 * @return {array} returned bindable and unbindable text nodes
 *
 */
var parse = function(text) {
  // Text has to be a string
  //if (typeof text !== 'string') {
  //  //TODO Error handling
  //  console.error("parse(): Accepts only strings");
  //  return;
  //}
  return text.match(/{{\s*([a-zA-Z0-9\.]+)\s*}}/)[1];
};
Scanner.prototype.getResults = function() {
  return this.results;
};
module.exports = Scanner;
