var gulp = require('gulp');
var rsync = require('gulp-rsync');

gulp.task('sync', function() {
  gulp.src('.')
    .pipe(rsync({
      root: '.',
      hostname: 'grommet.usa.hp.com',
      username: 'ligo',
      destination: '/var/www/html/server',
      recursive: true,
      relative: true,
      progress: true,
      incremental: true,
      clean: true,
      silent: false,
      emptyDirectories: true,
      exclude: ['.DS_Store'],
    }));
});
