var gulp 		= require("gulp"),
	watch 		= require("gulp-watch");



gulp.task("watch", function() {
	watch("./public/assets/styles/**/*.css", function() {
		gulp.start("styles");
	});
});