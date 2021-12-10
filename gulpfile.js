// Load plugins
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const concatCss = require('gulp-concat-css');
const cleanCss = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

function watch() {
    gulp.watch('./src/docs-assets/scripts.js', docsScript)
    gulp.watch('./src/**/*.scss', docsStyles)
}

//_____________________________________________________

// Build docs
//_____________________________________________________
function docsScript() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/browser-detect/dist/browser-detect.umd.js',
        './src/docs-assets/scripts.js'
    ])
        .pipe(concat('docs.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./src/docs-assets/'));
}

function docsStyles() {
    return gulp.src([
        './node_modules/normalize.css/normalize.css',
        './src/docs-assets/styles.scss'
    ])
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer())
        .pipe(concatCss('docs.css', { rebaseUrls: true, commonBase: 'src' }))
        .pipe(cleanCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./src/docs-assets/'));
}

exports.default = gulp.series(docsScript, docsStyles)
exports.watch = watch;
