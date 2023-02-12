// import { module, test } from 'qunit';
import QUnit from 'qunit';

import { buildAssert } from '../helpers.js';

import type { FakeAssert } from '../helpers.js';

type Scenario = [string, RegExp];

const { module, test } = QUnit;

let scenarios: Scenario[] = [
  ['hello', /hel/],
  ['hello', /^he/],
  ['hello there', /\w there/],
];

module('matches', function () {
  for (let scenario of scenarios) {
    let [actual, expected] = scenario;

    module(`assert.matches("${actual}", ${expected})`, function () {
      test(`integration`, function (assert) {
        assert.matches(actual, expected);
      });

      module('result', function (hooks) {
        let fakeAssert: FakeAssert;

        hooks.beforeEach(function () {
          fakeAssert = buildAssert();
        });

        test(`does ${expected} match ${actual}?`, function (assert) {
          fakeAssert.matches(actual, expected);

          assert.equal(fakeAssert.results.length, 1);
          assert.contains(fakeAssert.results?.[0]?.message, `${expected}`);
          assert.contains(fakeAssert.results?.[0]?.message, `${actual}`);
        });
      });
    });
  }
});
