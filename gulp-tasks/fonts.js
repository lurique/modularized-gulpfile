module.exports = ( gulp, $, dest ) => {
  gulp.src([
    'node_modules/font-awesome/fonts/**',
    'src/assets/fonts/**'
  ])
  .pipe($.changed(dest + 'fonts'))
  .pipe($.filesize())
  .pipe(gulp.dest(dest + 'fonts'));
}
