import 'qunit';

declare global {
  interface Assert {
    contains: (source?: string | null, sub?: string, message?: string) => void;
    notContains: (source?: string | null, sub?: string, message?: string) => void;
    matches: (source?: string | null, regex?: RegExp, message?: string) => void;
    notMatches: (source?: string | null, regex?: RegExp, message?: string) => void;
  }
}

QUnit.assert.contains = function(source: string, sub?: string, message?: string) {
  let trimmedSource = source.trim();
  this.pushResult({
    result: trimmedSource.includes(sub),
    actual: trimmedSource,
    expected: sub,
    message: message || `expected ${trimmedSource} to contain ${sub}`,
  });
};

QUnit.assert.notContains = function(source: string, sub?: string, message?: string) {
  let trimmedSource = source.trim();
  this.pushResult({
    result: !trimmedSource.includes(sub),
    actual: trimmedSource,
    expected: sub,
    message: message || `expected ${trimmedSource} to not contain ${sub}`,
  });
};

QUnit.assert.matches = function(source: string, regex?: RegExp, message?: string) {
  this.pushResult({
    result: regex.test(source),
    actual: source,
    expected: `${regex}`,
    message: message || `expected ${source} to match ${regex}`,
  });
};

QUnit.assert.notMatches = function(source: string, regex?: RegExp, message?: string) {
  this.pushResult({
    result: regex.test(source),
    actual: source,
    expected: `${regex}`,
    message: message || `expected ${source} to match ${regex}`,
  });
};
