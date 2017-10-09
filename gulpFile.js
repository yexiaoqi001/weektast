var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('minjs', function () {
    gulp.src('./delete.js')
        .pipe(uglify())
        .pipe(gulp.dest('./minjs/'))
})
gulp.task('default', ['minjs']);