/* Modules */

var test = require('tape');
var dom  = require('domify');
var ment = require('../');

/* Tests */

test('ment()', function(assert) {
  var frag = ment();
  frag
    .append('h1', 'Hello!')
    .attach(document.body);
  var head = (document.body).querySelector('h1');
  assert.equal(head.textContent, 'Hello!');
  assert.end();
});

test('ment()', function(assert) {
  var base = dom('<ul></ul>');
  document.body.appendChild(base);
  var list = document.querySelector('ul');
  var frag = ment();
  frag
    .append('li', 'One')
    .append('li', 'Two')
    .append('li', 'Three')
    .attach(list);
  var items = list.querySelectorAll('li');
  assert.equal(items.length, 3);
  assert.end();
});
