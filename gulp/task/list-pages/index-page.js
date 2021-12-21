'use strict';

const { task, src, dest, watch, series } = require('gulp');

const consolidate = require('gulp-consolidate'),
  yaml = require('require-yaml');

const configPath  = require('../../config/configPath');

task('list-pages', (cb) => {
  // delete require.cache[require.resolve('../../../src/index.yaml')];
  
  let pages = require('../../../src/index.yaml');
  
  console.log(__dirname + '/listPages.html');
  console.log(pages);
  for(let k of pages) {
    console.log(k);
  }
  
  src(__dirname + '/listPages.html')
    .pipe(consolidate('lodash', {
      pages: pages
    }))
    .pipe(dest(configPath.dest.root));
  
  return cb();
});

task('list-pages:watch', function() {
  watch('src/index.yaml', ['list-pages']);
});
