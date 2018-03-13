var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync');

gulp.task('less', function(){ 
    return gulp.src('app/less/application.less') 
        .pipe(less({
          paths: ['app/less/']
        }
        )) 
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
          stream: true
        }))
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('watch', ['browserSync', 'less'], function() {
    gulp.watch('app/less/**/*.less', ['less']); 
      
});
