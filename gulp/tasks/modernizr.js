var gulp = require("gulp"),
	modernizr  = require("gulp-modernizr");

gulp.task("modernizr", function(){
	return gulp.src(["./public/assets/styles/**/*.css", "./app/assets/scripts/**/*.js"])
		.pipe(modernizr({
			"options": [
				"setClasses"
			]
		}))
		.pipe(gulp.dest("./public/temp/scripts/"));
});