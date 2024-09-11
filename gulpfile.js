//import dependencies
import { src, dest, watch, series } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

//connecting Gulp with SASS
const sass = gulpSass(dartSass);

//compiling js
export function js(done){

    src('./src/js/app.js')
        .pipe(dest('./build/js'));   

    done();
}

// compiling sass
export function css(done){

    src('./src/scss/app.scss', {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./build/css', {sourcemaps: true}));

    done();
};

// adding a watch for css function
export function dev(){
    watch('./src/scss/**/*.scss', css);
    watch('./src/js/**/*.js', js);
};

//export series function from Gulp
export default series(js, css, dev);

