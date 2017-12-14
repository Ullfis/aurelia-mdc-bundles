const versions = require('./version');
const execSync = require('child_process').execSync;

module.exports = () => {
  return new Promise(function(resolve, reject) {
    const version = versions.getPackageVersion();
    execSync("git add .");
    execSync("git commit -m 'chore(all): bump to version " + version + ".'");
    execSync("git tag -m 'version " + version + "' " + version);
    execSync("git push --follow-tags");
    resolve();
  });
}
