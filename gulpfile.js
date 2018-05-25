// tell node to bring in the gulp library with a require statement
// npm install sudo npm install --save-dev gulp
var gulp = require('gulp'),
    // sudo npm install --save-dev gulp
    // sudo npm install --save-dev gulp-util
    gutil = require('gulp-util'),
    // sudo npm install --save-dev gulp-coffee
    coffee = require('gulp-coffee'),
    // sudo npm install --save-dev gulp-concat
    concat = require('gulp-concat'),
    // sudo npm install --save-dev karma
    testRunner = require('karma').Server;
    // sudo npm i --save-dev jasmine-core karma-jasmine karma-chrome-launcher
    // sudo npm install -g karma-cli
    //browserRunner = require('jasmine').Server;

var coffeeSources = ['components/coffee/tagline.coffee'];
//var coffeeSources = ['*.coffee'];

var jsSources = [
    'components/scripts/rclick.js',
    'components/scripts/pixgrid.js',
    'components/scripts/tagline.js',
    'components/scripts/template.js'
];

// add method with arbitrary name for gulp to perform
// enter gulp log in terminal at project root to execute
gulp.task('log', function () {
    gutil.log("hello workflow world");
});

// transpile, copy over and rename coffee script file to js
gulp.task('coffee', function () {
    gulp.src(coffeeSources)
        .pipe(coffee({bare: true})
            .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
});

// transpile, copy over and rename coffee script file to js
gulp.task('concat', function () {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
            .pipe(gulp.dest('builds/development/js'))
});

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    new testRunner({
        configFile:  __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    new testRunner({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('default', ['tdd']);

/*
result:
dmcclelland0ML:workflows Mac$ gulp log
[21:37:04] Using gulpfile /workspaces/davidjmcclelland/workflows/gulpfile.js
[21:37:04] Starting 'log'...
[21:37:04] hello workflow world
[21:37:04] Finished 'log' after 4.11 ms
 */