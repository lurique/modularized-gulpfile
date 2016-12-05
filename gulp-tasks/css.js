module.exports = ( gulp, $, dest ) => {
  gulp.src('./src/assets/stylus/style.styl')
    .pipe($.changed(dest + 'css', {extension: '.css'}))
    .pipe($.stylus({compress: false}))
    .pipe($.cssnano())
    .pipe($.minifyCss())
    .pipe($.concat('style.min.css'))
    .pipe($.filesize())
    .pipe(gulp.dest(dest + 'css'));

  gulp.src('./src/style.css')
    .pipe($.changed(dest), {extension: '.css'})
    .pipe($.concat('style.css'))
    .pipe(gulp.dest(dest));
}
