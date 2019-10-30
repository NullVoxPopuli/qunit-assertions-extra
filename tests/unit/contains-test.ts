import { module, test } from 'qunit';
import '../../lib/index';

import {
  buildMissingIterableMessage,
  buildMissingElementMessage,
} from '../../lib/assertions/contains';

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

module('(c|notC)ontains', function() {
  module('assert.contains', function() {
    module('results', function() {
      for (let scenario of scenarios) {
        let [actual, expected, result] = scenario;

        test(`is ${expected}${
          result ? ' ' : ' not '
        }contained in ${actual}?`, function(assert: any) {
          assert.contains(actual as any, expected);

          assert.equal(assert.results.length, 1);
          assert.contains(assert.results[0].message, expected);
          assert.contains(assert.results[0].message, actual);
        });
      }

      test('message clearly states what was compared', function(assert: any) {
        assert.contains('hello there', 'there');

        expect(assert.results[0].message).toEqual('expected hello there to contain there');
      });

      test('message clearly states that you should pass a result', function(assert: any) {
        assert.contains(null, 'there');

        assert.equal(assert.results[0].message, buildMissingIterableMessage(null));
      });

      test('message clearly states that you should pass something to check inclusion for', function(assert: any) {
        assert.contains('hello there' as any, null);

        assert.equal(assert.results[0].message, buildMissingElementMessage(null));
      });
    });
  });

  module('assert.notContains', function() {
    module('results', function() {
      for (let scenario of scenarios) {
        let [actual, expected, result] = scenario;
        // because notContains
        result = !result;

        test(`is ${expected}${
          result ? ' ' : ' not '
        }contained in ${actual}?`, function(assert: any) {
          assert.notContains(actual as any, expected);

          assert.equal(assert.results.length, 1);
          assert.contains(assert.results[0].message, expected);
          assert.contains(assert.results[0].message, actual);
        });
      }
    });
  });
});
