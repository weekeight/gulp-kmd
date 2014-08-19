var gulp = require('gulp'),
	gulpKmd = require('../../index'); 

gulp.task('default', function(){
	gulp.src('./src/**/*.js')
		.pipe(gulpKmd())
		.pipe(gulp.dest('build'));
});