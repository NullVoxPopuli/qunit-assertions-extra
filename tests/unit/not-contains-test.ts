import '../../src/index.js';

import { module, test } from 'qunit';

import { buildMissingIterableMessage, notContains } from '../../src/assertions/contains.js';
import { assertFor } from '../helpers.js';

import type { FakeAssert } from '../helpers.js';

type Scenario = [string | string[] | number[], string | number];

let scenarios: Scenario[] = [
  ['hello', 'there'],
  [['hello'], 'there'],
  [['hello', 'there'], 'general'],
  [[1, 4], 5],
  [['hello', 'there'], ''],
];

module('notContains', function () {
  for (let scenario of scenarios) {
    let [actual, expected] = scenario;

    module(`assert.notContains("${actual}", "${expected}")`, function () {
      test(`integration`, function (assert) {
        assert.notContains(actual, expected);
      });

      module('result', function (hooks) {
        let fakeAssert: FakeAssert;

        hooks.beforeEach(function () {
          fakeAssert = assertFor(notContains);
        });

        test(`is ${expected} not contained in ${actual}?`, function (assert: Assert) {
          fakeAssert.notContains(actual, expected);

          assert.equal(fakeAssert.results.length, 1);
          assert.contains(fakeAssert.results[0].message, expected);
          assert.contains(fakeAssert.results[0].message, actual);
        });
      });
    });
  }

  module('messaging', function (hooks) {
    let fakeAssert: FakeAssert;

    hooks.beforeEach(function () {
      fakeAssert = assertFor(notContains);
    });

    test('message clearly states what was compared', function (assert) {
      fakeAssert.notContains('hello there', '1111');

      assert.equal(fakeAssert.results[0].message, 'expected hello there to not contain 1111');
    });

    test('message clearly states that you should pass a result', function (assert) {
      fakeAssert.notContains(null, 'there');

      assert.equal(fakeAssert.results[0].message, buildMissingIterableMessage(null));
    });
  });
});
