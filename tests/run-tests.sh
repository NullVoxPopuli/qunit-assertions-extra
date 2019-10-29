#!/bin/bash

# -e  Exit immediately if a command exits with a non-zero status.
# -x  Print commands and their arguments as they are executed.
set -ex

yarn build
yarn link

(
  cd tests/fixtures/ember-3.14/test-app \
  && yarn \
  && yarn link qunit-assertions-extra \
  && yarn ember test
)
