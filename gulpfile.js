// Load plugins
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const concatCss = require('gulp-concat-css');
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
async function docsScript() {
    return await gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/browser-detect/dist/browser-detect.umd.js',
        './src/docs-assets/scripts.js'
    ])
        .pipe(concat('docs.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./src/docs-assets/'));
}

async function docsStyles() {
    return await gulp.src([
        './node_modules/normalize.css/normalize.css',
        './src/docs-assets/styles.scss'
    ])
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(concatCss('docs.css', { rebaseUrls: true, commonBase: 'src' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./src/docs-assets/'));
}


exports.default = gulp.series(docsScript, docsStyles)
exports.watch = watch;
