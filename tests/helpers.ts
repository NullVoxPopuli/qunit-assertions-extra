interface Result<Actual = any, Expected = any> {
  result: boolean;
  actual: Actual;
  expected: Expected;
  message: string;
}

export function assertFor(assertionFn: Function) {
  let assert = new BareBonesResultCollector();

  assert[assertionFn.name] = assertionFn;

  return (assert as any) as Assert & FakeAssert;
}

class BareBonesResultCollector {
  results: Result[] = [];

  pushResult(result: Result) {
    this.results.push(result);
  }
}

export type FakeAssert = Assert & BareBonesResultCollector;
