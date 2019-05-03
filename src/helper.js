exports.parseStringToFrag = function(html) {
  // We check if Template tag api is available on the browser
  // Then we can create a fragment out of it.
  var template = document.createElement('template');
  if ('content' in template) {
    template.innerHTML = html;
    return document.importNode(template.content, true);
  }
  // If do not, we have to manually push html elements to the 
  // fragment.
  var frag = document.createDocumentFragment();
  var div = document.createElement('div');
  div.innerHTML = html;
  while (div.firstChild) {
    frag.appendChild(div.firstChild);
  }
};

exports.defaultFor = function(arg, val) {
  return typeof arg !== 'undefined' ? arg : val;
};
exports.combine = function(arr1, arr2) {
  Array.prototype.push.apply(arr1, arr2);
};
