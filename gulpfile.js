var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  connect = require('gulp-connect'),
  open = require('gulp-open'),
  jsdoc = require('gulp-jsdoc'),
  ngAnnotate = require('gulp-ng-annotate'),
  diff = require('gulp-diff'),
  sass = require('gulp-sass');

/**
 * preview changes from ng-annotate
 * @todo add into the build process
 */
gulp.task('build-annotate', function() {
  gulp.src(['!./app/bower_components/**', './app/*.js', './app/**/*.js'])
    .pipe(ngAnnotate())
    .pipe(diff())
    .pipe(diff.reporter({
      fail: true
    }));
});

/* force live reload to refresh browser */
gulp.task('force-reload', function() {
  gulp.src('./**/*.html')
    .pipe(livereload());
});

/* generate documentation */
gulp.task('jsdoc', function() {
  gulp.src(['!./app/bower_components/**', './app/*.js', './app/**/*.js']).pipe(jsdoc('./documentation'));
});

/* start the web server and open a browser */
gulp.task('startdev', function() {
  gulp.src('./app/index.html')
    .pipe(open('', {
      url: 'http://localhost:8999',
      app: 'chrome'
    }));
});

/* compile sass files */
gulp.task('css', function() {
  gulp.src('./app/content/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/content/css'));
});

/* start watching files to trigger a reload */
gulp.task('watch', function() {
  connect.server({
    port: 8999,
    root: 'app/'
  });
  livereload.listen({
    quiet: false
  });
  gulp.watch([
    '!./app/bower_components/**', // ignore bower components
    './app/app.*.js', //core application files
    './app/index.html', //root html file
    './app/**/*.js', //all js files
    './app/content/**/*.scss', //all sass files
    './app/**/*.html', //all html files
    './app/portal/*.*'
  ], ['jsdoc', 'css', 'force-reload']);
});

/* task definitions */
gulp.task('default', ['watch', 'startdev']);
gulp.task('restart', ['watch']);
gulp.task('doc', ['jsdoc']);
