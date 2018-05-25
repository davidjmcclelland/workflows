module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
            'builds/src/**/*.js',
            'builds/test/**/*.spec.js'
        ]
    });
};