QUnit.assert.matches = function(source: string, regex?: RegExp, message?: string) {
  let result = regex ? regex.test(source) : false;

  this.pushResult({
    result,
    actual: source,
    expected: `${regex}`,
    message: message || `expected ${source} to match ${regex}`,
  });
};

QUnit.assert.notMatches = function(source: string, regex?: RegExp, message?: string) {
  let result = regex ? !regex.test(source) : false;

  this.pushResult({
    result,
    actual: source,
    expected: `${regex}`,
    message: message || `expected ${source} to match ${regex}`,
  });
};
