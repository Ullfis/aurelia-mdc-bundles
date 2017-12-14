const gulp = require('gulp');
const copy = require('../copy');
const bump = require('../bump');
const git = require('../git');

gulp.task('release', ['bundle'], async () => {
  const isBumped = await bump();
  await copy();
  if (isBumped) {
    await git();
  }
});

gulp.task('prepare', async () => {
  const isBumped = await bump();
  await copy();
  if (isBumped) {
    await git();
  }
});