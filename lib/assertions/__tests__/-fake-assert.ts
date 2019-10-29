import { HasIncludes, Maybe } from '../-type-helpers';

export class FakeAssert implements Assert {
  async(acceptCallCount?: number | undefined): () => void {
    throw new Error('Method not implemented.');
  }

  deepEqual<T>(actual: T, expected: T, message?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  equal(actual: any, expected: any, message?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  expect(amount: number): void {
    throw new Error('Method not implemented.');
  }
  notDeepEqual(actual: any, expected: any, message?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  notEqual(actual: any, expected: any, message?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  notOk(state: any, message?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  notPropEqual(actual: any, expected: any, message?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  notStrictEqual(actual: any, expected: any, message?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  ok(state: any, message?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  propEqual(actual: any, expected: any, message?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  strictEqual<T>(actual: T, expected: T, message?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  throws(block: () => void, expected?: any, message?: any): void {
    throw new Error('Method not implemented.');
  }
  raises(block: () => void, expected?: any, message?: any): void {
    throw new Error('Method not implemented.');
  }
  rejects(promise: Promise<any>, message?: string | undefined): void;
  rejects(promise: Promise<any>, expectedMatcher?: any, message?: string | undefined): void;
  rejects(promise: any, expectedMatcher?: any, message?: any) {
    throw new Error('Method not implemented.');
  }
  step(message: string): void {
    throw new Error('Method not implemented.');
  }
  verifySteps(steps: string[], message?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  contains<Actual extends HasIncludes<ExpectedItem>, ExpectedItem>(
    source?: Maybe<Actual>,
    sub?: Maybe<ExpectedItem>,
    message?: string | undefined
  ): void {
    throw new Error('Method not implemented.');
  }
  notContains<Actual extends HasIncludes<UnexpectedItem>, UnexpectedItem>(
    source?: Maybe<Actual>,
    sub?: Maybe<UnexpectedItem>,
    message?: string | undefined
  ): void {
    throw new Error('Method not implemented.');
  }
  matches(source?: Maybe<string>, regex?: Maybe<RegExp>, message?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  notMatches(source?: Maybe<string>, regex?: Maybe<RegExp>, message?: string | undefined): void {
    throw new Error('Method not implemented.');
  }
  results: Result[] = [];

  pushResult(result: Result) {
    this.results.push(result);
  }
}

interface Result {
  actual: any;
  expected: any;
  message: string;
  result: boolean;
}
