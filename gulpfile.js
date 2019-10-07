'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('style', function(){
    return gulp.src('./style/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))

    .pipe(gulp.dest('dist/*.css'));
    
});

gulp.task('watch', function () {
    gulp.watch('./style/**/*.scss', ['style']);
});