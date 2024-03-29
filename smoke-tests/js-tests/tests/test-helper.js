import { setApplication } from '@ember/test-helpers';
import * as QUnit from 'qunit';
import { setup as setupExtras } from 'qunit-assertions-extra';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

import Application from 'js-tests/app';
import config from 'js-tests/config/environment';

setApplication(Application.create(config.APP));

setup(QUnit.assert);
setupExtras(QUnit.assert);

start();
