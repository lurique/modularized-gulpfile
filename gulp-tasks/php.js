module.exports = ( gulp, $, dest ) => {
   gulp.src([
      'src/**/*.php'      
   ])
   .pipe($.changed(dest, {extension: '.php'}))
   .pipe($.filesize())
   .pipe(gulp.dest(dest));
}
