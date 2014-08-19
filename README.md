gulp-kmd
========

# kissy module compiler with gulp

## Usege

在 `gulpfile.js` 里面示例代码：

	//示例一
	var gulp = require('gulp'),
		gulpKmd = require('gulp-kmd');

	gulp.task('default', function(){
		gulp.src('./src/**/*.js')
			.pipe(gulpKmd())
			.pipe(gulp.dest('build'));
	});


	//示例二（结合gulp-kmc来使用）
	gulp.src('./lib/**/*.js')
        .pipe(gulpKmd())
        .pipe(kmc.convert({
             fixModuleName:true,
             minify : true,
             ext : {
                src : '-debug.js',
                min : '.js'
             }
        }))
        .pipe(gulp.dest('./build/lib'));