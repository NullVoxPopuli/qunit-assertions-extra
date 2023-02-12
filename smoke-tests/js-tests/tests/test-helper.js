import Application from '../app';
import * as QUnit from 'qunit';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

import { setup } from 'qunit-assertions-extra';

setup(QUnit.assert);

setApplication(Application.create(config.APP));

start();
