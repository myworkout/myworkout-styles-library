// Load plugins
var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    $ = require('gulp-load-plugins')();

// Default
gulp.task ('default', function (cb) {
    runSequence('docs', cb);
});

// Watch
gulp.task('watch', function() {
    gulp.watch('./src/**/*.scss', ['docs-styles']);
    gulp.watch('./src/docs-assets/scripts.js', ['docs-scripts']);
});

//_____________________________________________________

// Build docs
//_____________________________________________________

// Docs scripts
gulp.task('docs-scripts', function() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/browser-detect/dist/browser-detect.min.js',
        './src/docs-assets/scripts.js'
    ])
        .pipe($.concat('docs.js'))
        .pipe($.rename({ suffix: '.min' }))
        .pipe($.uglify())
        .pipe($.header('/* This file is generated. Edit ./scripts.js instead. */'))
        .pipe(gulp.dest('./src/docs-assets/'));
});

// Docs styles
gulp.task('docs-styles', function() {
    return gulp.src([
        './node_modules/normalize.css/normalize.css',
        './src/docs-assets/styles.scss'
    ])
        .pipe($.sass())
        .pipe($.autoprefixer('last 6 version'))
        .pipe($.concatCss('docs.css'))
        .pipe($.rename({ suffix: '.min' }))
        .pipe($.cssnano())
        .pipe($.header('/* This file is generated. Edit ./styles.scss instead. */'))
        .pipe(gulp.dest('./src/docs-assets/'));
});

// Docs all
gulp.task ('docs', function (cb) {
    runSequence('docs-scripts', 'docs-styles', cb);
});
