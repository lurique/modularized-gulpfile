/* Author: Lucas Henrique || LHenrique / Keep this line if you liked my work :D */

/* Dependencies */
import gulp from 'gulp';
import config from './gulp-config';

/* Custom tasks */
function requireTask( task ) {
  return require('./gulp-tasks/' + task)(gulp, config.plugins, config.dest);
}

gulp.task('css', () => requireTask('css'));
gulp.task('js', () => requireTask('js'));
gulp.task('fonts', () => requireTask('fonts'));
gulp.task('libs', () => requireTask('libs'));
gulp.task('media', () => requireTask('media'));
gulp.task('php', () => requireTask('php'));
gulp.task('fonts', () => requireTask('fonts'));

/* Watch task */
gulp.task('watch', () => requireTask('watch'));

/* Default task */
gulp.task('default', ['css', 'js', 'libs', 'media', 'fonts', 'php']);
