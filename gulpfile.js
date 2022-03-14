'use strict';

const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass(done) {
    src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
   done();
  }

  exports.compileSass = compileSass
  
  function watchSass() {
    watch('./sass/*.scss', compileSass);
 }
 
  exports.watchSass = watchSass