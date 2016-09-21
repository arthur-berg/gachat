var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');
    browserSync = require('browser-sync').create();


gulp.task('serve', ['styles'], function() {

    browserSync.init({
        server: "./server.js"
    });

    gulp.watch("public/sass/*.scss", ['styles']);
    gulp.watch("public/*.html").on('change', browserSync.reload);
    gulp.watch("public/templates/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
  	return sass('public/sass', { style: 'expanded' })
    .pipe(gulp.dest('public/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve'], function() {

});