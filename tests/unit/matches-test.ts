import { module, test } from 'qunit';

let scenarios = [
  // successes
  ['hello', /hel/, true],
  ['hello', /^he/, true],
  // failures
  ['hello', /there/, false],
  ['hello there', /hello$/, false],
];

module('(c|notC)ontains', () => {
  module('assert.matches', () => {
    module('results', () => {
      for (let scenario of scenarios) {
        let [actual, expected, result] = scenario;

        test(`does ${expected}${result ? ' ' : ' not '}match ${actual}?`, () => {
          assert.matches(actual as string, expected as RegExp);

          expect(assert.results.length).toEqual(1);
          expect(assert.results[0].result).toEqual(result);
          expect(assert.results[0].message).toContain(expected);
          expect(assert.results[0].message).toContain(actual);
        });
      }
    });
  });

  module('assert.notMatches', () => {
    module('results', () => {
      for (let scenario of scenarios) {
        let [actual, expected, result] = scenario;
        // because notMatches
        result = !result;

        test(`does ${expected}${result ? ' ' : ' not '}match ${actual}?`, assert => {
          assert.notMatches(actual as string, expected as RegExp);

          expect(assert.results.length).toEqual(1);
          expect(assert.results[0].result).toEqual(result);
          expect(assert.results[0].message).toContain(expected);
          expect(assert.results[0].message).toContain(actual);
        });
      }
    });
  });
});
