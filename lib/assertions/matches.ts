import { Maybe } from './-type-helpers';

export function matches(
  this: Assert,
  source?: Maybe<string>,
  regex?: Maybe<RegExp>,
  message?: string
) {
  let result = false;

  if (source !== undefined && source !== null && regex) {
    result = regex.test(source);
  }

  this.pushResult({
    result,
    actual: source,
    expected: `${regex}`,
    message: message || `expected ${source} to match ${regex}`,
  });
}

export function notMatches(
  this: Assert,
  source: Maybe<string>,
  regex?: Maybe<RegExp>,
  message?: string
) {
  let result = false;

  if (source !== undefined && source !== null && regex) {
    result = !regex.test(source);
  }

  this.pushResult({
    result,
    actual: source,
    expected: `${regex}`,
    message: message || `expected ${source} to match ${regex}`,
  });
}
