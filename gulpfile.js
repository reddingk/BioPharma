// gulpfile.js

var gulp = require('gulp');
var gutil = require('gulp-util');
//var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');


/*gulp.task('lint', function(){
  gulp.src('./app/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});*/

gulp.task('js', function(){
  gulp.src(['public/js/**/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('views', function() {
  gulp.src('public/index.html')
    .pipe(gulp.dest('dist/'));

  gulp.src('public/views/**/*')
    .pipe(gulp.dest('dist/views/'));
});

gulp.task('watch', [/*'lint'*/], function() {
  // Watch our scripts
  gulp.watch(['public/js/*.js','public/js/**/*.js'],['lint','browserify']);
  gulp.watch(['public/index.html', 'public/views/**/*.html'], ['views']);
});
