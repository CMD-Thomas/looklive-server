var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var nodemon         = require('gulp-nodemon');
var stylus          = require('gulp-stylus');
var minifyCSS       = require('gulp-minify-css');
var uglify          = require('gulp-uglify');
var rename          = require('gulp-rename');
//Not using concat because we only have 1 js file
//var concat          = require('gulp-concat');
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
})

gulp.task('stylus', function () {
      gulp.src('build/stylesheets/style.styl')
      .pipe(stylus({compress: true, paths: ['public/stylesheets']}))
      .pipe(autoprefixer())
      .pipe(minifyCSS())
      .pipe(rename('style.css'))
      .pipe(gulp.dest('public/styles'))
      .pipe(browserSync.reload({stream:true}))
});



gulp.task('watch', function () {
   gulp.watch('build/stylesheets/imports/*.styl', ['stylus']);   
   gulp.watch('build/js/main.js', ['js']);
});


gulp.task('default', [ 'stylus', 'watch', 'js', 'browser-sync'],function () {
});