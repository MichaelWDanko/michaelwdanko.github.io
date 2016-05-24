var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['css']);

gulp.task('css', function () {
    return gulp.src('./*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./*.scss', ['css']);
});

