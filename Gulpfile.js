var gulp = require('gulp'),
	nunjucksRender = require('gulp-nunjucks-render'),
	data = require('gulp-data'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	bourbon = require("node-bourbon").includePaths,
	neat = require('node-neat').includePaths,
	browserSync = require('browser-sync').create();

//Sass + Autoprefixer Task
var sassInput = 'app/sass/**/*.sass',
	sassOutput = 'app/css/',
	sassOptions = {
		errLogToConsole: true,
		outputStyle: 'expanded',
		includePaths: bourbon,
		includePaths: neat
	},
	autoprefixerOptions = {
		browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
	};

gulp.task('sass', function() {
	return gulp
		.src(sassInput)
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer(autoprefixerOptions))
		.pipe(gulp.dest(sassOutput))
		.pipe(browserSync.stream());
});

//Nunjucks Task
gulp.task('nunjucks', function() {
	return gulp.src('app/pages/**/*.+(html|nunjucks)')
		.pipe(data(function() {
			return require('./app/data.json')
		}))
		.pipe(nunjucksRender({
			path: ['app/templates']
		}))
		.pipe(gulp.dest('app'))
});


//Browsersync Server Task
gulp.task("browser-sync", function() {
  browserSync.init({
    server: "./app/"
  })
});

//Default Watch Task -- need to manually restart gulp after changes to json files
gulp.task("default", ["nunjucks", "browser-sync", "sass"], function() {
	gulp.watch("app/templates/**/*.nunjucks", ['nunjucks']);
	gulp.watch("app/pages/*.nunjucks", ['nunjucks']);
	gulp.watch(sassInput, ["sass"]);
	gulp.watch("app/*.html").on("change", browserSync.reload);

});
