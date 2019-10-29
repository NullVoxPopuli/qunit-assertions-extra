/* global QUnit */

import './assertions/contains';
import './assertions/matches';
import { HasIncludes } from './assertions/-type-helpers';

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
