//import dependencies
import { src, dest, watch } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

//connecting Gulp with SASS
const sass = gulpSass(dartSass);

// compiling sass
export function css(done){

    src('./src/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./build/css'));

    done();
};

// adding a watch for css function
export function dev(){
    watch('./src/scss/app.scss', css);
};

