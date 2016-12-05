module.exports = ( gulp, $, dest ) => {
   let php = gulp.watch(['./src/**/*.php'], ['php']),
       images = gulp.watch(['./src/assets/media/**/*.*'], ['media']),
       css = gulp.watch(['./src/assets/stylus/**/*.*'], ['css']),
       js = gulp.watch(['./src/assets/js/*.js'], ['js']);

   let events = ( type, path ) => {
      console.log('Event type: ' + type);
      console.log('Event path: ' + path);

      $.browserSync.reload();
   }

   $.browserSync.init([dest], {
      browser: "Chrome",
      proxy: "http://127.0.0.1/"
   });

   php.on('change', ( file ) => {
      events( file.type, file.path );
   });
   images.on('change', ( file ) => {
      events( file.type, file.path );
   });
   css.on('change', ( file ) => {
      console.log('Event type: ' + file.type);
      console.log('Event path: ' + file.path);

      $.browserSync.reload();
   });
   js.on('change', ( file ) => {
      events( file.type, file.path );
   });
}
