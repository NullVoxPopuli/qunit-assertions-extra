import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Assertions', function(hooks) {
  setupTest(hooks);

  test('contains', function(assert) {
    assert.contains('hello there', 'hello');
    assert.notContains('hello there', 'boop');
  });

  test('matches', function(assert) {
    assert.matches('hello there', /hello/);
    assert.notMatches('hello there', /boop/);
  });
});
