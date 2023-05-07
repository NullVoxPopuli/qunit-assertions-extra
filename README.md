qunit-assertions-extra
==============================================================================

A Collection of helpful assertions for use with qunit.

```ts
assert.contains('Hello there!', 'Hello');
assert.contains([1, 3], 3);

assert.matches('Hello there!', /Hello/);
```


Installation
------------------------------------------------------------------------------

```
yarn add --dev qunit-assertions-extra
npm install --save-dev qunit-assertions-extra
```

Then, wherever qunit tests are initialized, add
```ts
import * as QUnit from 'qunit';
import { setup } from 'qunit-assertions-extra';

setup(QUnit.assert);
```

This will also enable the tsserver to provide intellisense for `assert`.

## Ember Projects

Requirements: [ember-auto-import](https://github.com/ef4/ember-auto-import) and add the above import to your `tests/test-helper.js` file.

Example:
```js
import Application from '../app';
import * as QUnit from 'qunit';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import { setup } from 'qunit-assertions-extra';

setup(QUnit.assert);

setApplication(Application.create(config.APP));

start();
```



Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


Prior Art
------------------------------------------------------------------------------
- [qunit-dom](https://github.com/simplabs/qunit-dom)
  much of the config for this repo was taken from qunit-dom.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
