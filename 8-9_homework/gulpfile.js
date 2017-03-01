var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({ browsers: ['last 5 versions'] });
    //  browsers: ["iOS >= 7", "Chrome >= 30", "Explorer >= 9", "last 2 Edge versions", "Firefox >= 20
var browserSync = require('browser-sync').create();

gulp.task('less', function () {
    return gulp.src('./less/*main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ],
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        files: ['./css/**/*.css', './*.html', './js/**/*.js']
    });
});

gulp.task('default', ['less', 'browser-sync'], function() {
    console.log('run default task');
});

var watcher = gulp.watch('./less/**/*.less', [], 'default');
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
