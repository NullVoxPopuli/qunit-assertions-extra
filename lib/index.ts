/* global QUnit */

import { contains, notContains } from './assertions/contains';
import { matches, notMatches } from './assertions/matches';

import type { HasIncludes, Maybe } from './assertions/-type-helpers';

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

QUnit.assert.contains = contains;
QUnit.assert.notContains = notContains;
QUnit.assert.matches = matches;
QUnit.assert.notMatches = notMatches;
