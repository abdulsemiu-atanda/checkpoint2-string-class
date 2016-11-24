const gulp = require('gulp');
const eslint = require('gulp-eslint');
const source = require('vinyl-source-stream');
const run = require('gulp-run');
const browserify = require('browserify');

gulp.task('watch', () => {
  gulp.watch('src/*.js', ['reload']);
});

gulp.task('scripts', () => gulp.src(['src/*.js',
  'test/**/*.js', 'app/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format()));

gulp.task('test', () => {
  run('node_modules/karma/bin/karma start karma.conf.js --single-run').exec();
});

gulp.task('default', ['watch', 'scripts']);
