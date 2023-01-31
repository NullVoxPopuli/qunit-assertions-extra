import { setup } from 'qunit-assertions-extra';

interface Result<Actual = unknown, Expected = unknown> {
  result: boolean;
  actual: Actual;
  expected: Expected;
  message: string;
}

export function buildAssert() {
  let assert = new BareBonesResultCollector() as unknown as Assert;

  setup(assert);

  return assert as unknown as Assert & FakeAssert;
}

class BareBonesResultCollector {
  results: Result[] = [];

  pushResult(result: Result) {
    this.results.push(result);
  }
}

export type FakeAssert = Assert & BareBonesResultCollector;
