import { HasIncludes, Maybe } from './-type-helpers';

export function contains<Actual extends HasIncludes<ExpectedItem>, ExpectedItem>(
  this: Assert,
  source?: Maybe<Actual>,
  sub?: Maybe<ExpectedItem>,
  message?: string
) {
  let result = false;
  let defaultMessage = `expected ${source} to contain ${sub}`;

  if (sub && source !== null && source !== undefined) {
    result = source.includes(sub);
  }

  let resultMessage = paramMessageBuilder(source, sub) || message || defaultMessage;

  this.pushResult({
    result,
    actual: source,
    expected: sub,
    message: resultMessage,
  });
}

export function notContains<Actual extends HasIncludes<UnexpectedItem>, UnexpectedItem>(
  this: Assert,
  source?: Maybe<Actual>,
  sub?: Maybe<UnexpectedItem>,
  message?: string
) {
  let result = false;
  let defaultMessage = `expected ${source} to not contain ${sub}`;

  if (sub && source !== null && source !== undefined) {
    result = !source.includes(sub);
  }

  let resultMessage = paramMessageBuilder(source, sub) || message || defaultMessage;

  this.pushResult({
    result,
    actual: source,
    expected: sub,
    message: resultMessage,
  });
}

function paramMessageBuilder<A, V>(source?: A, sub?: V): string {
  let resultMessage = '';

  if (!sub) {
    resultMessage = buildMissingElementMessage(sub);
  }

  if (!source) {
    resultMessage = buildMissingIterableMessage(source);
  }

  return resultMessage;
}

export function buildMissingElementMessage<T>(value: T): string {
  return `expected an element to check for inclusion. Received: ${value}`;
}

export function buildMissingIterableMessage<T>(value: T): string {
  return `expected an object that has an "includes" method. Received: ${value}`;
}
