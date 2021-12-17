'use strict';

const { task, series } = require('gulp');


const watchCB = (cb) => {
  return series(
    'vendorScript:watch',
    'vendorStyle:watch',
    'iconfont:watch',
    'fonts:watch',
    'spriteSVG:watch',
    'scss:watch',
    'js:watch',
    'pug:watch',
    'list-pages:watch'
  )(cb);
};


task('watch', watchCB);
