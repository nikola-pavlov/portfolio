// require("./gulp/tasks/watch");

var gulp = require("gulp"),
	watch = require("gulp-watch"),
	postcss = require("gulp-postcss"),
	autoprefixer = require("autoprefixer"),
	cssvars = require("postcss-simple-vars"),
	nested = require("postcss-nested"),
	cssImport = require("postcss-import"),
	mixins = require("postcss-mixins"),
	hexrgba = require("postcss-hexrgba");




gulp.task("ejs", function() {
	console.log("some test message to prove that it works! EJS!");
});

gulp.task("styles", function() {
	return gulp.src("./public/styles/styles.css")
		.pipe(postcss([cssvars, nested, autoprefixer]))
		.pipe(gulp.dest("./temp/styles"));
});

gulp.task("watch", function() {
	watch("./views/landing.ejs", function(){
		gulp.start("ejs");
	});

	watch("./public/styles/**/*.css", function() {
		gulp.start("styles");
	});
});