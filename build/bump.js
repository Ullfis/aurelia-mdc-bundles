const gulp = require('gulp');
const bump = require('gulp-bump');
const versions = require('./version');
const execSync = require('child_process').execSync;

// return false if version is equal
module.exports = async () => {
  const ambVersion = versions.getAureliaMdcVersion();
  const version = versions.getPackageVersion();
  if (ambVersion !== version) {
    await BumpIt();
    return true;
  }
  return false;
}

function BumpIt() {
  return new Promise(function(resolve, reject) {
    const version = versions.getAureliaMdcVersion();  
    gulp.src(['./package.json', './package-lock.json'])
      .pipe(bump({version: version}))
      .pipe(gulp.dest('./'))
      .on('end', resolve);
  });
}
