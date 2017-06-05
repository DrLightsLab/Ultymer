const  gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

var paths = {
    scripts : ['.app/ultymer/js/*.js'],
    css : ['.app/ultymer/scss/*.scss'],
    image : ['./app/ultymer/img/*.img']
}

gulp.task('lint', () =>{
    gulp.src('app/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format('table'));
});

gulp.task('default', () => {
    gulp.watch('app/**/*.js', ['lint']);
    return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/js/'));
});
