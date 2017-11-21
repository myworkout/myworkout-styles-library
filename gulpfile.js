// Load plugins
var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence'),
    $ = require('gulp-load-plugins')();


// Styles
gulp.task('styles', function() {
    return gulp.src(['./dev/main.scss'])
        .pipe($.sass())
        .pipe($.autoprefixer('last 6 version'))
        .pipe($.concatCss('bundle.css'))
        .pipe($.rename({ suffix: '.min' }))
        .pipe($.cssnano())
        .pipe(gulp.dest('./dist/'));
});

// Clean dist
gulp.task('clean', function(){
    return del('./dist/');
});

// Move files
gulp.task('files', function() {
    return gulp.src(['./dev/demo.html'])
        .pipe(gulp.dest('./dist/'));
});

// Default
gulp.task ('default', function (cb) {
    runSequence('clean', 'styles', 'files', cb);
});

// Watch
gulp.task('watch', function() {
    gulp.watch('./**/*.scss', ['styles']);
});