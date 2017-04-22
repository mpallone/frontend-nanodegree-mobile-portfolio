var gulp     = require('gulp');
var minify   = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('printDone', function() {
    console.log("Done!!!");
});

gulp.task('compressJs', function() {
    gulp.src('src/**/*.js') // todo - test that this works on all JS files, in different locations
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.min.js'
            }
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
  return gulp.src('src/**/*.css') // todo - test that this works on all JS files, in different locations
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch('src/**', ['compressJs', 'minify-css', 'printDone']);
});
