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
import 'qunit-assertions-extra';
```

This will also enable the tsserver to provide intellisense for `assert`.

Note: with ember projects, you'll want [ember-auto-import](https://github.com/ef4/ember-auto-import) and add the above import to your `tests/test-helper.js` file.

Also, in



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
