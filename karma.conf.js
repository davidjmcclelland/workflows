module.exports = function (config) {
    config.set({

        frameworks: ['jasmine'],
        files: [
            'builds/src/**/*.js',
            'builds/test/**/*.spec.js'
        ],
        // list of files to exclude
        exclude: [],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            //'/myproject/src/main/**/*.js' : ['coverage']
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter

        reporters: ['progress', 'junit', 'coverage'],

        // the default configuration
        junitReporter: {
            outputDir: '', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'test_jasmine_js.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true, // add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {} // key value pair of properties to add to the section of the report
        },

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-html-reporter',
            'karma-junit-reporter',
            'karma-coverage'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};