// tell node to bring in the gulp library with a require statement
var gulp = require('gulp');
// npm install sudo npm install --save-dev gulp-util
var gutil = require('gulp-util');

// add method with arbitrary name for gulp to perform
// enter gulp log in terminal at project root to execute
gulp.task('log', function () {
    gutil.log("hello workflow world");
});

/*
result:
dmcclelland0ML:workflows Mac$ gulp log
[21:37:04] Using gulpfile /workspaces/davidjmcclelland/workflows/gulpfile.js
[21:37:04] Starting 'log'...
[21:37:04] hello workflow world
[21:37:04] Finished 'log' after 4.11 ms
 */