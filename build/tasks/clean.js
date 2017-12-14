const gulp = require('gulp');
const paths = require('../paths');
const del = require('del');
const vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', () => {
  return gulp.src(['./bundles/bundle.js'])
    .pipe(vinylPaths(del));
});
