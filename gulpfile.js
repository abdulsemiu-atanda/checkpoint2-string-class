const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('watch', () => {
  gulp.watch('src/*.js', ['reload']);
});

gulp.task('scripts', () => gulp.src(['src/*.js',
  'test/**/*.js', 'app/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format()));

gulp.task('default', ['watch', 'scripts']);
