import { contains, notContains } from './assertions/contains.js';
import { matches, notMatches } from './assertions/matches.js';

import type { HasIncludes, Maybe } from './assertions/-type-helpers.js';

export function setup(assert: Assert) {
  assert.contains = contains;
  assert.notContains = notContains;
  assert.matches = matches;
  assert.notMatches = notMatches;
}

declare global {
  interface Assert {
    contains<Actual extends HasIncludes<ExpectedItem>, ExpectedItem>(
      source?: Maybe<Actual>,
      sub?: Maybe<ExpectedItem>,
      message?: string
    ): void;
    notContains<Actual extends HasIncludes<UnexpectedItem>, UnexpectedItem>(
      source?: Maybe<Actual>,
      sub?: UnexpectedItem,
      message?: string
    ): void;

    matches(source?: Maybe<string>, regex?: Maybe<RegExp>, message?: string): void;
    notMatches(source?: Maybe<string>, regex?: Maybe<RegExp>, message?: string): void;
  }
}
