var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var mincss = require('gulp-clean-css');

gulp.task('minjs', function () {
    gulp.src(['./delete.js', './againD.js'])
        .pipe(concat('add.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./minjs/'))
})
gulp.task('mincss', function () {
    gulp.src('./style.css')
        .pipe(mincss())
        .pipe(gulp.dest('./mincss/'))
})
gulp.task('default', ['minjs', 'mincss']);