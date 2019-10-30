import { module, test } from 'qunit';

let scenarios = [
  // successes
  ['hello', /hel/, true],
  ['hello', /^he/, true],
  // failures
  ['hello', /there/, false],
  ['hello there', /hello$/, false],
];

module('(c|notC)ontains', function() {
  module('assert.matches', function() {
    module('results', function() {
      for (let scenario of scenarios) {
        let [actual, expected, result] = scenario;

        test(`does ${expected}${result ? ' ' : ' not '}match ${actual}?`, function(assert) {
          assert.matches(actual as string, expected as RegExp);

          assert.equal(assert.results.length, 1);
          assert.contains(assert.results[0].message, expected);
          assert.contains(assert.results[0].message, actual);
        });
      }
    });
  });

  module('assert.notMatches', function() {
    module('results', function() {
      for (let scenario of scenarios) {
        let [actual, expected, result] = scenario;
        // because notMatches
        result = !result;

        test(`does ${expected}${result ? ' ' : ' not '}match ${actual}?`, function(assert) {
          assert.notMatches(actual as string, expected as RegExp);

          assert.equal(assert.results.length, 1);
          assert.contains(assert.results[0].message, expected);
          assert.contains(assert.results[0].message, actual);
        });
      }
    });
  });
});
