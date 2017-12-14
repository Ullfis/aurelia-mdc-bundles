const gulp = require('gulp');
const copy = require('../copy');
const bump = require('../bump');
const git = require('../git');

gulp.task('release', ['bundle'], async () => {
  await copy();
  if (await bump()) {
    await git();
  }
});
