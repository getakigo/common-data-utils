/* eslint no-unused-expressions: 0 */
require('harmonize')();

'use strict';

const _ = require('lodash');

const gulp = require('gulp');
const plugin = require('gulp-load-plugins')({
  pattern: [ 'gulp-*', 'gulp.*', '@*/gulp{-,.}*' ],
  rename: {
    'gulp-lint-filepath': 'filepathlint'
  }
});

// Configs
const filePathLintConfig = require('./config/filepath-lint');

// ---

gulp.task('filepathlint', function() {
  return gulp.src([ './**/*.*', '!./node_modules/**/*' ])
             .pipe(plugin.filepathlint(filePathLintConfig))
             .pipe(plugin.filepathlint.reporter())
             .pipe(plugin.filepathlint.reporter('fail'));
});

gulp.task('eslint', function() {
  return gulp.src([ './*.js', './src/**/*.js' ])
             .pipe(plugin.eslint({ configFile: './config/eslint.json' }))
              // Binding a function on data event is a workaround to gulp-eslint issue #36
             .pipe(plugin.eslint.format().on('data', _.noop));
});

// ---

gulp.task('lint', [ 'filepathlint', 'eslint' ]);

gulp.task('default', [ 'lint' ]);
