import { contains, notContains } from '../contains';
import { FakeAssert } from './-fake-assert';

let scenarios = [
  // successes
  ['hello', 'ello', true],
  ['hello', 'he', true],
  [['hello'], 'hello', true],
  [['hello', 'there'], 'hello', true],
  [[1, 4], 4, true],
  // failures
  ['hello', 'there', false],
  [['hello'], 'there', false],
  [['hello', 'there'], 'general', false],
  [[1, 4], 5, false],
];

describe('(c|notC)ontains', () => {
  let assert: FakeAssert;

  beforeEach(() => {
    assert = new FakeAssert();
    assert.contains = contains as any;
    assert.notContains = notContains as any;
  });

  describe('assert.contains', () => {
    describe('results', () => {
      for (let scenario of scenarios) {
        let [actual, expected, result] = scenario;

        test(`is ${expected}${result ? ' ' : ' not '}contained in ${actual}?`, () => {
          assert.contains(actual as any, expected);

          expect(assert.results.length).toEqual(1);
          expect(assert.results[0].result).toEqual(result);
          expect(assert.results[0].message).toContain(expected);
          expect(assert.results[0].message).toContain(actual);
        });
      }
    });
  });

  describe('assert.notContains', () => {
    describe('results', () => {
      for (let scenario of scenarios) {
        let [actual, expected, result] = scenario;
        // because notContains
        result = !result;

        test(`is ${expected}${result ? ' ' : ' not '}contained in ${actual}?`, () => {
          assert.notContains(actual as any, expected);

          expect(assert.results.length).toEqual(1);
          expect(assert.results[0].result).toEqual(result);
          expect(assert.results[0].message).toContain(expected);
          expect(assert.results[0].message).toContain(actual);
        });
      }
    });
  });
});
