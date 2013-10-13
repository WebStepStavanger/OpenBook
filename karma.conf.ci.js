// Karma configuration
// Generated on Sun Oct 13 2013 21:29:41 GMT+0200 (W. Europe Daylight Time)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [

      'source/client/vendor/javascript/requirejs/require.js',
      'source/client/vendor/javascript/angular/angular.js',
      'source/client/vendor/javascript/firebase/index.js',
      'source/client/vendor/javascript/angular-fire/*.js',
      'source/client/vendor/javascript/monocle/*.js',

      {pattern: 'source/client/app/books/**/*.js', watched: true, served: true, included: true},
      {pattern: 'source/client/app/users/**/*.js', watched: true, served: true, included: true},
      
      'source/client/specs/**/*.js'
    ],


    // list of files to exclude
    exclude: [

    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
