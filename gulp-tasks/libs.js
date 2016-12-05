module.exports = ( gulp, $, dest ) => {
  $.delete.promise([
    dest + 'css/libs.min.css'    
  ], {force: true}).then(() => {
    gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css',
      'node_modules/font-awesome/css/font-awesome.css'
    ])
    .pipe($.changed(dest + 'libs', {extension: '.css'}))
    .pipe($.cssnano())
    .pipe($.minifyCss())
    .pipe($.concat('libs.min.css'))
    .pipe($.filesize())
    .pipe(gulp.dest(dest + 'css'));
  });
}
