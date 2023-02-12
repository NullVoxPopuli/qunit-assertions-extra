const QUnit = require('qunit');

QUnit.config.autostart = false;
QUnit.config.noglobals = true;

(async () => {
  await import('./setup.js');
})();
