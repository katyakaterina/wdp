'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var gulp = require('gulp');
var csso = require('gulp-csso');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

gulp.task('style', function(){
    return gulp.src('src/style/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(csso())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
    
});
// gulp.task('serve', ['style'], function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//     gulp.watch('src/style/**/*.scss', ['style']);
//     gulp.watch("*.html").on('change', browserSync.reload);
// });
// gulp.task('watch', ['serve']);
gulp.task('watch', function () {
    gulp.watch('src/style/**/*.scss', ['style']);
});