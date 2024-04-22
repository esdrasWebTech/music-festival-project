//import dependencies
const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// compiling sass
function css(done){

    src('./src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('./build/css/app.css'));

    done();    
};

exports.css = css;