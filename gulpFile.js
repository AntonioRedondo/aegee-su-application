// Basics
const del = require("del");
const gulp = require("gulp");
const newer = require("gulp-newer");
const sourcemaps = require("gulp-sourcemaps");

// Lint
const esLint = require("gulp-eslint");
const htmlHint = require("gulp-htmlHint");
const cssLint = require("gulp-stylelint");

// Build
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const inline = require("gulp-inline");
const postCss = require("gulp-postcss");
const preCss = require("precss");
const autoprefixer = require("autoprefixer");
const atomizer = require("gulp-atomizer");
const assets = require("postcss-assets");

// Minify
const jsMin = require("gulp-uglify");
const htmlMin = require("gulp-htmlmin");




const SRC = "src";
const DEST = "docs";




gulp.task("watch", ["lint", "build"], () => {
	gulp.watch([`${SRC}/js/*.js`], ["esLint", "buildJs"]);
	gulp.watch([`${SRC}/**/*.htm`], ["htmlHint"/* , "buildHtml" */]);
	gulp.watch([`${SRC}/style/*.scss`, `${SRC}/**/*.htm`, `!${SRC}/style/_atoms.scss`, ".stylelintrc.json"], ["styleLint", "buildCss"]);
	gulp.watch([`${SRC}/img/**`], ["copyAssets"]);
});
gulp.task("lint", ["esLint", "htmlHint", "styleLint"]);
gulp.task("build", ["buildJs", /* "buildHtml",  */"buildCss", "copyAssets"]);
gulp.task("default", ["build"]);

gulp.task("clean", () => del(DEST));





// ---------- LINT ---------- //

gulp.task("esLint", () => {
	return gulp.src([`${SRC}/js/*.js`, "gulpfile.js", `!${SRC}/js/plygrnd.js`])
		.pipe(esLint())
		.pipe(esLint.format())
		.pipe(esLint.failAfterError());
});

gulp.task("htmlHint", () => {
	return gulp.src([`${SRC}/*.htm`])
		.pipe(htmlHint()); // https://github.com/htmllint/htmllint/wiki/Options
});

gulp.task("styleLint", () => {
	return gulp.src([`${SRC}/style/*.scss`, `!${SRC}/style/_atoms.scss`])
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

gulp.task("buildCssAtoms", ["buildHtml"], () => {
	return gulp.src([`${DEST}/index.htm`])
		.pipe(atomizer({
			outfile: "_atoms.scss",
			acssConfig: {
				breakPoints: {
					bi: "@media (min-width: 2000px)",
					me: "@media (max-width: 1470px)",
					sm: "@media (max-width: 1100px)",
					mo: "@media (max-width: 810px)"
				}
			}
		}))
		.pipe(gulp.dest(`${SRC}/style`));
});

gulp.task("buildCss", ["buildCssAtoms"], () => {
	return gulp.src(
		[
			`${SRC}/style/_variables.scss`,
			`${SRC}/style/!(_atoms)*.scss`,
			`${SRC}/style/_atoms.scss`
		])
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
		.pipe(newer(DEST))
		.pipe(gulp.dest(`${DEST}`));
	return gulp.src(
		[
			`${SRC}/img/*.jpg`,
			`${SRC}/img/*.png`,
		])
		.pipe(newer(DEST))
		.pipe(gulp.dest(`${DEST}/img`));
});





// ---------- MINIFY ---------- //

gulp.task("prod", ["build"], () => {
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
