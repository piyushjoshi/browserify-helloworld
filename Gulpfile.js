"use strict";

var gulp = require("gulp"),
	jshint = require("gulp-jshint");

// JSHint task
gulp.task('lint', function() {
  gulp.src(['./main.js', './modules/**/*.js'])
  .pipe(jshint())
  // You can look into pretty reporters as well, but that's another story
  .pipe(jshint.reporter('default'));
});
