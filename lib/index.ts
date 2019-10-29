/* global QUnit */

import { install as contains } from './assertions/contains';
import { install as matches } from './assertions/matches';
import { HasIncludes } from './assertions/-type-helpers';

// required my ember-cli
export const name = 'qunit-assertions-extra';

declare global {
  interface Assert {
    contains<Actual extends HasIncludes<ExpectedItem>, ExpectedItem>(
      source: Actual,
      sub?: ExpectedItem,
      message?: string
    ): void;
    notContains<Actual extends HasIncludes<UnexpectedItem>, UnexpectedItem>(
      source: Actual,
      sub?: UnexpectedItem,
      message?: string
    ): void;

    matches(source?: string | null, regex?: RegExp, message?: string): void;
    notMatches(source?: string | null, regex?: RegExp, message?: string): void;
  }
}

export function install() {
  contains();
  matches();
}
