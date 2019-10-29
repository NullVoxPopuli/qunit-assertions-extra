import { HasIncludes } from './-type-helpers';

export function install() {
  QUnit.assert.contains = function<A extends HasIncludes<B>, B>(
    source: A,
    sub?: B,
    message?: string
  ) {
    let result = false;

    if (sub) {
      result = source.includes(sub);
    }

    this.pushResult({
      result,
      actual: source,
      expected: sub,
      message: message || `expected ${source} to contain ${sub}`,
    });
  };

  QUnit.assert.notContains = function<A extends HasIncludes<B>, B>(
    source: A,
    sub?: B,
    message?: string
  ) {
    let result = false;

    if (sub) {
      result = !source.includes(sub);
    }

    this.pushResult({
      result,
      actual: source,
      expected: sub,
      message: message || `expected ${source} to not contain ${sub}`,
    });
  };
}
