module.exports = ( gulp, $, dest ) => {
   gulp.src('./src/assets/media/img/*.*')
      .pipe($.changed(dest+'media/img'))
      .pipe($.imagemin())
      .pipe($.filesize())
      .pipe(gulp.dest(dest+'media/img'));

   gulp.src('./src/assets/media/video/*.*')
      .pipe($.changed(dest+'media/video'))
      .pipe($.filesize())
      .pipe(gulp.dest('../../dist/media/video'));

   gulp.src('./src/assets/media/svg/*.svg')
      .pipe($.changed(dest+'media/svg'))
      .pipe($.svgmin({
         plugins: [{
            removeDoctype: true,
            removeComments: true,
            cleanupIDs: {
               minify: true
            },
            cleanupNumericValues: {
               floatPrecision: 2
            },
            convertColors: {
               names2hex: true
            }
         }]
      }))
      .pipe($.filesize())
      .pipe(gulp.dest(dest+'media/svg'));
}
