module.exports = ( gulp, $, dest ) => {
  gulp.src('./src/assets/js/main.js')
    .pipe($.browserify({
      transform: ['babelify'],
    }))
    .pipe(gulp.dest(dest + '/js'));
}
