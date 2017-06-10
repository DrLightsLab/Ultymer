const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const eslint = require('gulp-eslint');
const del = require('del');

var paths = {
    scripts : ['./src/ultymer/js/*.js'],
    css : ['./src/ultymer/scss/*.scss'],
    image : ['./src/ultymer/img/*.img']
}

gulp.task('lint', () => {
    gulp.src('app/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format('table'));
});

gulp.task('build', () => {
    gulp.start('lint');
});

gulp.task('default', () => {
    gulp.start('build');
    gulp.watch('src/**/*.js', ['lint']);
    return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('ultymer.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./app/ultymer/js/'));
});
