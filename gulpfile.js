'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();


// Sass
const sassInit = () => {
	 return gulp
			    .src('./scss/**/*.scss')
			    .pipe(sass.sync({
			    	outputStyle: 'compressed',
			    	sourceComments: false
			    }).on('error', sass.logError))
			    .pipe(autoprefixer({ cascade: false }))
			    .pipe(gulp.dest('./stylesheets'))
			    .pipe(browserSync.stream());
}

// Watch Sass
const sassWatch = () => {
	gulp.watch('./scss/**/*.scss', sassInit);
}

// Js
const jsInit = () => {
	return gulp
		.src('./javascript/dev/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./javascript/prod/'));
    
}

// Watch Js
const jsWatch = () => {
	gulp.watch('./javascript/dev/**/*.js', jsInit);
}


// Watch Browser

const watchBrowser = () => {
	browserSync.init({
	    server: {
	      baseDir: './'
	    },
	    port: 3000
	  });
	gulp.watch('./scss/**/*.scss', sassInit);
	gulp.watch('./javascript/dev/**/*.js', jsInit);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./javascript/dev/**/*.js').on('change', browserSync.reload);
}

const watchBrowserServer = () => {
	browserSync.init({
      proxy: 'http://localhost/wakapichallenge'
  });
	gulp.watch('./sass/**/*.scss', sassInit);
	gulp.watch('./javascript/dev/**/*.js', jsInit);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./javascript/dev/**/*.js').on('change', browserSync.reload);
}

exports.watchBrowser = watchBrowser;
exports.watchBrowserServer = watchBrowserServer;
exports.sassWatch = sassWatch;
