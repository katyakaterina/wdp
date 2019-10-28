'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var gulp = require('gulp');
var csso = require('gulp-csso');
var browserSync = require('browser-sync').create();

const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');


sass.compiler = require('node-sass');

gulp.task('style', function(){
    return gulp.src('src/style/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(csso())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
    
});

gulp.task('img', function(){
    // return gulp.src('src/img/*.jpg,png')
    (async () => {
       const files = await imagemin(['src/img/*.{jpg,png,svg}'], {
            destination: 'dist/img',
            plugins: [
                imageminJpegtran(),
                imageminPngquant(),
                imageminSvgo()
            ]
        });
     
        console.log(files);
    })();
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

// gulp.task('watch', function () {
//     gulp.watch('src/style/**/*.scss', ['style']);
// });