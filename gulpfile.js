    // tell node to bring in the gulp library with a require statement
    // npm install sudo npm install --save-dev gulp
var gulp = require('gulp'),
    // npm install sudo npm install --save-dev gulp-util
    gutil = require('gulp-util'),
    // npm install sudo npm install --save-dev gulp-coffee
    coffee = require('gulp-coffee');

var coffeeSources = ['components/coffee/tagline.coffee'];
//var coffeeSources = ['*.coffee'];

// add method with arbitrary name for gulp to perform
// enter gulp log in terminal at project root to execute
gulp.task('log', function () {
    gutil.log("hello workflow world");
});

// transpile, copy over and rename coffee script file to js
gulp.task('coffee', function () {
    gulp.src(coffeeSources)
        .pipe(coffee({ bare: true })
            .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
});

/*
result:
dmcclelland0ML:workflows Mac$ gulp log
[21:37:04] Using gulpfile /workspaces/davidjmcclelland/workflows/gulpfile.js
[21:37:04] Starting 'log'...
[21:37:04] hello workflow world
[21:37:04] Finished 'log' after 4.11 ms
 */