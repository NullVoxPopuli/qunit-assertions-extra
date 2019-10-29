import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

// TypeScript users will need this
import 'qunit-assertions-extra';

setApplication(Application.create(config.APP));

start();
