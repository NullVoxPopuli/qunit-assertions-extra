export async function runsWithinMs(
  this: Assert,
  fn: Function,
  ms: number = -1,
  message?: string
): Promise<void> {
  let successMsg;
  let failureMsg = `The function did not run`;
  let duration = 0;
  let result = false;

  let runner = async () => {
    let startedAt = performance.now();

    try {
      await fn();
    } catch (e) {
      failureMsg = `The function passed to runsWithinMs errored. Get the function running to see duration.`;
    }

    let endedAt = performance.now();

    duration = endedAt - startedAt;
  };

  await runner();

  if (!failureMsg) {
    if (duration <= ms) {
      successMsg = `The passed function took ${duration}ms to execute, which is less than the max: ${ms}ms`;
    } else {
      failureMsg = `The passed function took longer than ${ms}ms to execute. Took ${duration}ms.`;
    }
  }

  this.pushResult({
    result,
    actual: `took ${duration}ms to execute`,
    expected: `took < ${ms}ms to execute`,
    message: message || successMsg || failureMsg,
  });
}
