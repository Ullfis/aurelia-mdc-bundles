const gulp = require('gulp');
const replace = require('gulp-string-replace');
const rename = require('gulp-rename');
const versions = require('./version');

module.exports = () => {
  return new Promise(function(resolve, reject) {
    const version = versions.getPackageVersion();

    gulp.src('./config.js')
    .pipe(replace(
       new RegExp('paths: {' + '[^]+?' + '}', 'g'),
  
  `paths: {
    "github:*": "https://cdn.rawgit.com/ullfis/aurelia-mdc-bundles/${version}/jspm_packages/github/*",
    "npm:*": "https://cdn.rawgit.com/ullfis/aurelia-mdc-bundles/${version}/jspm_packages/npm/*",
    "bundles/bundle.js": "https://cdn.rawgit.com/ullfis/aurelia-mdc-bundles/${version}/bundles/bundle.js"
  }`

     ))
     .pipe(rename('config2.js'))
     .pipe(gulp.dest('.'))
     .on('end', resolve);
  });
}
