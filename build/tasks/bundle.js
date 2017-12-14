const gulp = require('gulp');
const bundler = require('aurelia-bundler');
const bundles = require('../bundles.js');

const config = {
  force: true,
  packagePath: '.',
  configPath: './config.js',
  bundles: bundles.bundles
};

gulp.task('bundle', ['unbundle'], function() {
  return bundler.bundle(config);
});

gulp.task('unbundle', ['clean'], function() {
  return bundler.unbundle(config);
});
