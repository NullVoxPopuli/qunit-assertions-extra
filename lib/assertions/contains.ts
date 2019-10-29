import { HasIncludes, Maybe } from './-type-helpers';

export function contains<Actual extends HasIncludes<ExpectedItem>, ExpectedItem>(
  this: Assert,
  source?: Maybe<Actual>,
  sub?: Maybe<ExpectedItem>,
  message?: string
) {
  let result = false;

  if (sub && source !== null && source !== undefined) {
    result = source.includes(sub);
  }

  this.pushResult({
    result,
    actual: source,
    expected: sub,
    message: message || `expected ${source} to contain ${sub}`,
  });
}

export function notContains<A extends HasIncludes<B>, B>(
  this: Assert,
  source?: Maybe<A>,
  sub?: Maybe<B>,
  message?: string
) {
  let result = false;

  if (sub && source !== null && source !== undefined) {
    result = !source.includes(sub);
  }

  this.pushResult({
    result,
    actual: source,
    expected: sub,
    message: message || `expected ${source} to not contain ${sub}`,
  });
}
