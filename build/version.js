const fs = require('fs');

function getAureliaMdcVersion() {
  const package = getPackage();
  const version = package.jspm.dependencies['aurelia-mdc-bridge']
    .replace(
      'npm:aurelia-mdc-bridge@^',
      ''
    );
  return version;
}

function getPackageVersion() {
  return getPackage().version;
}

function getPackage() {
  return JSON.parse(fs.readFileSync('./package.json', 'utf-8'));
}

module.exports = {
  getAureliaMdcVersion: getAureliaMdcVersion,
  getPackageVersion: getPackageVersion
};