var gulp = require('gulp'),
		runSequence = require('run-sequence'),
    less = require('gulp-less'),
    bs = require('browser-sync').create(),
    concat = require('gulp-concat'),
    depsOrder = require('gulp-deps-order'),
    cache = require('gulp-cached'),
    include = require('gulp-file-include'),
    babel = require('gulp-babel');

gulp.task('sync', function() {
  bs.init({
		server: {
		  baseDir: "./dist"
		}
  })
});

gulp.task('html', function() {
  return gulp.src( './src/index.html' )
  .pipe(include({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(gulp.dest( './dist' ))
  .pipe(bs.stream())
});

gulp.task('less', function() {
	return gulp.src('./src/assets/less/*.less')
  .pipe(less())
  .pipe(concat('bundle.css'))
	.pipe(gulp.dest('./dist/css/'))
	.pipe(bs.stream())
});

gulp.task('js', function() {
  return gulp.src('./src/assets/js/**/*')
  .pipe(babel({
    plugins: ["transform-object-rest-spread"]
  }))
  .pipe(depsOrder())
  .pipe(gulp.dest('./dist/js'))
  .pipe(bs.stream())
});

gulp.task('images', function() {
  gulp.src( './src/assets/images/**/*' )
  .pipe(gulp.dest( './dist/images' ))
  .pipe(bs.stream())
});

gulp.task('fonts', function() {
  gulp.src( './src/assets/fonts/**/*' )
  .pipe(cache('fonts'))
  .pipe(gulp.dest( './dist/fonts' ))
  .pipe(bs.stream())
});

gulp.task('pdf', function() {
  gulp.src( './src/assets/pdf/**/*' )
  .pipe(gulp.dest( './dist/pdf' ))
  .pipe(bs.stream())
});

gulp.task('watch', function() {
  gulp.watch('./src/*.html', function() {
		gulp.start('html')
  });
  gulp.watch('./src/assets/less/*.less', function() {
		gulp.start('less')
  });
  gulp.watch('./src/assets/js/**/*', function() {
		gulp.start('js')
  });
  gulp.watch('./src/assets/images/*', function() {
		gulp.start('images')
  });
  gulp.watch('./src/assets/pdf/*', function() {
		gulp.start('pdf')
  });
});

gulp.task('webserver', ['sync', 'watch'])
gulp.task('build', ['html', 'less', 'js', 'images', 'fonts', 'pdf'])
gulp.task('default', function() {
 	runSequence('build', 'webserver')
});
