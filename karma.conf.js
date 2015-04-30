// Karma configuration
// Generated on Mon Apr 27 2015 16:08:54 GMT+0100 (BST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'www/lib/angular/angular.js',
            'www/lib/ionic/js/ionic.js',
            'www/lib/angular-animate/angular-animate.js',
            'www/lib/angular-sanitize/angular-sanitize.js',
            'www/lib/ionic/js/ionic-angular.js',
            'www/lib/angular-ui-router/release/angular-ui-router.js',
            'www/lib/angular-mocks/angular-mocks.js',
            'www/js/**/app.js',
            'www/js/**/controllers.js',
            'www/js/**/services.js',
            'www/js/**/menu.ctrl.js',
            'www/js/**/menu.svc.js',
            'www/js/**/menu.dir.js',
            'www/js/login/login.ctrl.js',
            'www/js/cart/*.js',
            'www/js/test/*.js',
            'www/js/**/*Spec.js',
            'www/templates/**/*.html'

            //,
            // if you wanna load template files in nested directories, you must use this
            //'www/js/**/*.html'
            //'www/js/menu/menu.html',
            //'www/tpl/**.html'

        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "www/**/*.html": ["ng-html2js"]
        },

        ngHtml2JsPreprocessor: {
            // If your build process changes the path to your templates,
            // use stripPrefix and prependPrefix to adjust it.
            // TODO will have to do if we use a build script later and so alter the path of the templates
            //stripPrefix: "www/js/menu/",
            //prependPrefix: "web/path/to/templates/",

            // the name of the Angular module to create
            moduleName: "templates"
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
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


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
