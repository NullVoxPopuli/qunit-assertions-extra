QUnit.assert.contains = function(source: string | string[], sub?: string, message?: string) {
  let result = false;

  if (typeof source === 'string') {
    source = source.trim();
  }

  if (sub) {
    result = source.includes(sub);
  }

  this.pushResult({
    result,
    actual: source,
    expected: sub,
    message: message || `expected ${source} to contain ${sub}`,
  });
};

QUnit.assert.notContains = function(source: string | string[], sub?: string, message?: string) {
  let result = false;

  if (typeof source === 'string') {
    source = source.trim();
  }

  if (sub) {
    result = !source.includes(sub);
  }

  this.pushResult({
    result,
    actual: source,
    expected: sub,
    message: message || `expected ${source} to not contain ${sub}`,
  });
};
