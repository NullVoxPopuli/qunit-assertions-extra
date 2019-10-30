import { module, test } from 'qunit';
import '../../lib/index';
import { assertFor, FakeAssert } from '../helpers';
import {
  buildMissingIterableMessage,
  buildMissingElementMessage,
  notContains,
} from '../../lib/assertions/contains';

type Scenario = [string | string[] | number[], string | number];

let scenarios: Scenario[] = [
  ['hello', 'there'],
  [['hello'], 'there'],
  [['hello', 'there'], 'general'],
  [[1, 4], 5],
];

module('notContains', function() {
  for (let scenario of scenarios) {
    let [actual, expected] = scenario;

    module(`assert.notContains("${actual}", "${expected}")`, function() {
      test(`integration`, function(assert) {
        assert.notContains(actual, expected);
      });

      module('result', function(hooks) {
        let fakeAssert: FakeAssert;

        hooks.beforeEach(function() {
          fakeAssert = assertFor(notContains);
        });

        test(`is ${expected} not contained in ${actual}?`, function(assert: Assert) {
          fakeAssert.notContains(actual, expected);

          assert.equal(fakeAssert.results.length, 1);
          assert.contains(fakeAssert.results[0].message, expected);
          assert.contains(fakeAssert.results[0].message, actual);
        });
      });
    });
  }

  module('messaging', function(hooks) {
    let fakeAssert: FakeAssert;

    hooks.beforeEach(function() {
      fakeAssert = assertFor(notContains);
    });

    test('message clearly states what was compared', function(assert) {
      fakeAssert.notContains('hello there', '1111');

      assert.equal(fakeAssert.results[0].message, 'expected hello there to not contain 1111');
    });

    test('message clearly states that you should pass a result', function(assert) {
      fakeAssert.notContains(null, 'there');

      assert.equal(fakeAssert.results[0].message, buildMissingIterableMessage(null));
    });

    test('message clearly states that you should pass something to check inclusion for', function(assert) {
      fakeAssert.notContains('hello there' as any, null);

      assert.equal(fakeAssert.results[0].message, buildMissingElementMessage(null));
    });
  });
});
