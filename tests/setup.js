import QUnit from 'qunit';
import { setup } from 'qunit-assertions-extra';

setup(QUnit.assert);

await import('./unit/matches-test.js');
await import('./unit/not-matches-test.js');
await import('./unit/contains-test.js');
await import('./unit/not-contains-test.js');
