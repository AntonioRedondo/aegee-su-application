// Basics
const del = require("del");
const runSequence = require("run-sequence");
const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");

// Lint
const esLint = require("gulp-eslint");
const htmlLint = require("gulp-htmllint");
const cssLint = require("gulp-stylelint");

// Build
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const inline = require("gulp-inline");
const postCss = require("gulp-postcss");
const preCss = require("precss");
const autoprefixer = require("autoprefixer");
const assets = require("postcss-assets");

// Minify
const jsMin = require("gulp-uglify");
const htmlMin = require("gulp-htmlmin");




const SRC = "src";
const DEST = "docs";




gulp.task("watch", ["lint", "build"], () => {
	gulp.watch([`${SRC}/**`], ["lint", "build"]);
});
gulp.task("default", ["watch"]);
gulp.task("lint", ["esLint", "htmlLint", "cssLint"]);
gulp.task("build", ["buildJs", "buildHtml", "buildCss"/*, "copyAssets"*/]);

gulp.task("clean", () => del([`${DEST}`]));





// ---------- LINT ---------- //

gulp.task("esLint", () => {
	return gulp.src([`${SRC}/js/*.js`, "gulpfile.js", `!${SRC}/js/plygrnd.js`])
		.pipe(esLint())
		.pipe(esLint.format())
		.pipe(esLint.failAfterError());
});

gulp.task("htmlLint", () => {
	return gulp.src([`${SRC}/*.htm`])
		.pipe(htmlLint()); // https://github.com/htmllint/htmllint/wiki/Options
});

gulp.task("cssLint", () => {
	return gulp.src([`${SRC}/style/*.scss`])
		.pipe(cssLint({ // http://stylelint.io/user-guide/rules
			failAfterError: false,
			reporters: [{ formatter: "string", console: true }]
		}));
});





// ---------- BUILD ---------- //

gulp.task("buildJs", () => {
	return gulp.src(
		[
			"node_modules/webfontloader/webfontloader.js",
			`${SRC}/js/plygrnd.js`,
			`${SRC}/js/DOMTools.js`,
			`${SRC}/js/initIntro.js`,
			`${SRC}/js/index.js`
		])
		.pipe(sourcemaps.init())
		.pipe(concat("app.js"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(`${DEST}`));
});

gulp.task("buildHtml", () => {
	return gulp.src([`${SRC}/index.htm`])
		.pipe(inline({
			disabledTypes: ["img", "js", "css"/*, "svg"*/]
		}))
		.pipe(gulp.dest(`${DEST}`));
});

gulp.task("buildCss", () => {
	return gulp.src([`${SRC}/style/_variables.scss`, `${SRC}/style/*.scss`])
		.pipe(sourcemaps.init())
		.pipe(concat("style.css"))
		.pipe(postCss([
			preCss({ extension: "scss" }),
			autoprefixer({ browsers: ["safari 8", "ie 10"] }), // https://github.com/ai/browserslist
			assets({ loadPaths: [`${SRC}`] })
		]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(`${DEST}`));
});

gulp.task("copyAssets", () => {
	gulp.src([`${SRC}/favicon.ico`])
		.pipe(gulp.dest(`${DEST}`));
	return gulp.src(
		[
			`${SRC}/img/bgs.jpg`,
			`${SRC}/img/moreInfo.jpg`,
			`${SRC}/img/preview.jpg`,
			`${SRC}/img/testimonials.jpg`,
			`${SRC}/img/descBg.png`,
			`${SRC}/img/logos.png`,
			`${SRC}/img/profiles.png`
		])
		.pipe(gulp.dest(`${DEST}/img`));
});





// ---------- MINIFY ---------- //

gulp.task("min", () => {
	runSequence("build", () => {
		return gulp.src([`${DEST}/index.htm`])
			.pipe(replace(/(<!-- buildDev:start -->)[\s\S]+(<!-- buildDev:end -->)/, "")) // Removes Dev code on Production
			.pipe(inline({
				// base: `${DEST}`,
				// ignore: [""],
				disabledTypes: ["img"/*, "svg", "js", "css"*/],
				js: () => jsMin({ mangle: true })
			}))
			.pipe(htmlMin({
				collapseWhitespace: true,
				minifyCSS: true,
				removeAttributeQuotes: true,
				removeComments: true,
				removeRedundantAttributes: true
			}))
			.pipe(gulp.dest(`${DEST}`));
	});
});
