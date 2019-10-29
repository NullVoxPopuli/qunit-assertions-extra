import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Assertions', function(hooks) {
  setupTest(hooks);

  test('contains', function(assert) {
    assert.contains('contains', 'con');
    assert.contains([1, 2], 1);
    assert.notContains('not contains', 'not included in string');
    assert.notContains([1, 2], 3);
  });

  test('matches', function(assert) {
    assert.matches('assert matches', /assert ma/);
    assert.notMatches('assert not matches', /not m@tch/);
  });
});
