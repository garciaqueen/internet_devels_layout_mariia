const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Шлях до SCSS
const scssPath = './scss/**/*.scss';

function compileSCSS() {
  return gulp.src('./scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
}

function watchFiles() {
  gulp.watch(scssPath, compileSCSS);
}

exports.default = gulp.series(compileSCSS, watchFiles);
