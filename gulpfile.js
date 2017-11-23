// Load plugins
var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence'),
    $ = require('gulp-load-plugins')();


// Styles
gulp.task('styles', function() {
    return gulp.src(['./dev/sass/main.scss'])
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

// Build Docs
//_____________________________________________________

// Move docs.html
gulp.task('move-docs', function() {
    return gulp.src(['./dev/docs.html'])
        .pipe(gulp.dest('./dist/'));
});

// Docs scripts
gulp.task('docs-scripts', function() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './dev/docs-assets/scripts.js'
    ])
        .pipe($.concat('docs.js'))
        .pipe($.rename({ suffix: '.min' }))
        .pipe($.uglify())
        .pipe(gulp.dest('./dist/docs-assets/'));
});

// Docs styles
gulp.task('docs-styles', function() {
    return gulp.src(['./node_modules/normalize.css/normalize.css', './dev/docs-assets/styles.scss'])
        .pipe($.sass())
        .pipe($.autoprefixer('last 6 version'))
        .pipe($.concatCss('docs.css'))
        .pipe($.rename({ suffix: '.min' }))
        .pipe($.cssnano())
        .pipe(gulp.dest('./dist/docs-assets/'));
});

// Docs all
gulp.task ('docs', function (cb) {
    runSequence('move-docs', 'docs-scripts', 'docs-styles', cb);
});

//_____________________________________________________

// Default
gulp.task ('default', function (cb) {
    runSequence('clean', 'styles', 'docs', cb);
});

// Watch
gulp.task('watch', function() {
    gulp.watch('./dev/sass/**/*.scss', ['styles']);
    gulp.watch('./dev/docs-assets/scripts.js', ['docs-scripts']);
    gulp.watch('./dev/docs-assets/styles.scss', ['docs-styles']);
    gulp.watch('./dev/docs.html', ['move-docs']);
});