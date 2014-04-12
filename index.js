/* ment */

function ment() {
  if (!(this instanceof ment)) { return new ment(); }
  this.frag = document.createDocumentFragment();
  return this;
}

ment.prototype.append = function(el, str) {
  var node = document.createElement(el);
  if (str) { node.textContent = str; }
  (this.frag).appendChild(node);
  return this;
};

ment.prototype.attach = function(el) {
  el.appendChild(this.frag);
  return this;
};

/* Exports */

module.exports = ment;
