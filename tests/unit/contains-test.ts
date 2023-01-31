// import { module, test } from 'qunit';
import QUnit from 'qunit';

import { buildAssert } from '../helpers.js';

import type { FakeAssert } from '../helpers.js';

type Scenario = [string | string[] | number[], string | number];

const { module, test } = QUnit;

let scenarios: Scenario[] = [
  ['hello', 'ello'],
  ['hello', 'he'],
  [['hello'], 'hello'],
  [['hello', 'there'], 'hello'],
  [[1, 4], 4],
  [['', 'hello'], ''],
];

module('contains', function () {
  for (let scenario of scenarios) {
    let [actual, expected] = scenario;

    module(`assert.contains("${actual}", "${expected}")`, function () {
      test(`integration`, function (assert) {
        assert.contains(actual, expected);
      });

      module('result', function (hooks) {
        let fakeAssert: FakeAssert;

        hooks.beforeEach(function () {
          fakeAssert = buildAssert();
        });

        test(`is ${expected} contained in ${actual}?`, function (assert: Assert) {
          fakeAssert.contains(actual, expected);

          assert.equal(fakeAssert.results.length, 1);
          assert.contains(fakeAssert.results?.[0]?.message, expected);
          assert.contains(fakeAssert.results?.[0]?.message, actual);
        });
      });
    });
  }

  module('messaging', function (hooks) {
    let fakeAssert: FakeAssert;

    hooks.beforeEach(function () {
      fakeAssert = buildAssert();
    });

    test('message clearly states what was compared', function (assert) {
      fakeAssert.contains('hello there', 'there');

      assert.equal(fakeAssert.results?.[0]?.message, 'expected hello there to contain there');
    });

    test('message clearly states that you should pass a result', function (assert) {
      fakeAssert.contains(null, 'there');

      assert.equal(
        fakeAssert.results?.[0]?.message,
        `expected an object that has an "includes" method. Received: null`
      );
    });
  });
});
