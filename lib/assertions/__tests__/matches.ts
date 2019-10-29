import { matches, notMatches } from '../matches';
import { FakeAssert } from './-fake-assert';

let scenarios = [
  // successes
  ['hello', /hel/, true],
  ['hello', /^he/, true],
  // failures
  ['hello', /there/, false],
  ['hello there', /hello$/, false],
];

describe('(c|notC)ontains', () => {
  let assert: FakeAssert;

  beforeEach(() => {
    assert = new FakeAssert();
    assert.matches = matches as any;
    assert.notMatches = notMatches as any;
  });

  describe('assert.matches', () => {
    describe('results', () => {
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

  describe('assert.notMatches', () => {
    describe('results', () => {
      for (let scenario of scenarios) {
        let [actual, expected, result] = scenario;
        // because notMatches
        result = !result;

        test(`does ${expected}${result ? ' ' : ' not '}match ${actual}?`, () => {
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
