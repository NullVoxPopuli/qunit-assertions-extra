// import { module, test } from 'qunit';
import QUnit from 'qunit';

import { buildAssert } from '../helpers.js';

import type { FakeAssert } from '../helpers.js';

type Scenario = [string, RegExp];

const { module, test } = QUnit;

let scenarios: Scenario[] = [
  ['hello', /there/],
  ['hello there', /hello$/],
];

module('notMatches', function () {
  for (let scenario of scenarios) {
    let [actual, expected] = scenario;

    module(`assert.notMatches("${actual}", ${expected})`, function () {
      test(`integration`, function (assert) {
        assert.notMatches(actual, expected);
      });

      module('result', function (hooks) {
        let fakeAssert: FakeAssert;

        hooks.beforeEach(function () {
          fakeAssert = buildAssert();
        });

        test(`does ${expected} not match ${actual}?`, function (assert) {
          fakeAssert.notMatches(actual, expected);

          assert.equal(fakeAssert.results.length, 1);
          assert.contains(fakeAssert.results?.[0]?.message, `${expected}`);
          assert.contains(fakeAssert.results?.[0]?.message, `${actual}`);
        });
      });
    });
  }
});
