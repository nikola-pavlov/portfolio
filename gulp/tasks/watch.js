var gulp 		= require("gulp"),
	watch 		= require("gulp-watch");



gulp.task("watch", function() {
	watch("./public/assets/styles/**/*.css", function() {
		gulp.start("styles");
	});

	watch("./public/assets/scripts/**/*.js", function(){
		gulp.start("scripts");
	});
});