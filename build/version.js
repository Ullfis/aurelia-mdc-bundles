const fs = require('fs');

function getAureliaMdcVersion() {
  const package = require('../package.json');
  const version = package.jspm.dependencies['aurelia-mdc-bridge']
    .replace(
      'npm:aurelia-mdc-bridge@^',
      ''
    );
  return version;
}

function getPackageVersion() {
  const package = require('../package.json');
  return package.version;
}

module.exports = {
  getAureliaMdcVersion: getAureliaMdcVersion,
  getPackageVersion: getPackageVersion
};