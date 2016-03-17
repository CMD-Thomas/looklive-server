var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var nodemon         = require('gulp-nodemon');
var stylus          = require('gulp-stylus');
var minifyCSS       = require('gulp-minify-css');
var uglify          = require('gulp-uglify');
var rename          = require('gulp-rename');
var webp            = require('gulp-webp');
var concat          = require('gulp-concat');
var autoprefixer    = require('gulp-autoprefixer');

gulp.task('browser-sync', ['stylus'], function() {
  browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: ["js/main.js"],
        browser: "google chrome",
        port: 4000,
        online: "true"
  });
});

gulp.task('js', function(){
  gulp.src("build/js/main.js")
  .pipe(concat('output.min.js'))
  .pipe(uglify()) 
  .pipe(gulp.dest('public/js'))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task('sw', function(){
  gulp.src("build/js/StyleSW.js")
  .pipe(concat('StyleSW.js'))
  .pipe(uglify()) 
  .pipe(gulp.dest('public'))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task('stylus', function () {
      gulp.src('build/stylesheets/style.styl')
      .pipe(stylus({compress: true, paths: ['public/stylesheets']}))
      .pipe(autoprefixer())
      .pipe(minifyCSS())
      .pipe(rename('style.css'))
      .pipe(gulp.dest('public/styles'))
      .pipe(browserSync.reload({stream:true}))
});

gulp.task('webp', function(){
  gulp.src('build/images/*.*')
  .pipe(webp())
  .pipe(gulp.dest('public/images'))
})

gulp.task('watch', function () {
  gulp.watch('build/stylesheets/imports/*.styl', ['stylus']);   
  gulp.watch('build/js/main.js', ['js']);
  gulp.watch('build/js/StyleSW.js', ['sw']);
});


gulp.task('default', [ 'stylus', 'watch', 'js', 'browser-sync', 'sw' ],function () {
});