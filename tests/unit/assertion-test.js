import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Assertions', function(hooks) {
  setupTest(hooks);

  test('contains', function(assert) {
    assert.contains('contains', 'con');
    assert.notContains('not contains', 'not included in string');
  });

  test('matches', function(assert) {
    assert.matches('assert matches', /assert ma/);
    assert.notMatches('assert not matches', /not match/);
  });
});
