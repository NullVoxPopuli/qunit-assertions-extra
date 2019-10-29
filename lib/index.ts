import 'qunit';
import './assertions/contains';
import './assertions/matches';

declare global {
  interface Assert {
    contains(source?: string[] | string, sub?: string, message?: string): void;
    notContains(source?: string[] | string, sub?: string, message?: string): void;
    matches(source?: string | null, regex?: RegExp, message?: string): void;
    notMatches(source?: string | null, regex?: RegExp, message?: string): void;
  }
}
