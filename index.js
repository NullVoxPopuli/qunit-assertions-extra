'use strict';

const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/qunit-assertions-extra.js', { type: 'test' });
    this.import('vendor/define-dummy-module.js', { type: 'test' });
  },

  treeForVendor(vendorTree) {
    let qunitPluginTree = new Funnel(`${__dirname}/dist`, {
      files: ['qunit-assertions-extra.js', 'qunit-assertions-extra.js.map'],
    });

    return new MergeTrees([vendorTree, qunitPluginTree]);
  },
};
