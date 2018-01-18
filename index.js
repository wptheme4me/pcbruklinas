// for production in nelify
var metalsmith = require('metalsmith')
var collections = require('metalsmith-collections')
var layouts = require('metalsmith-layouts')
var markdown = require('metalsmith-markdown')
var sass = require('metalsmith-sass')

metalsmith(__dirname)
  .metadata({
    sitename: 'PC Bruklinas',
    siteurl: 'https://brave-swartz-8e578a.netlify.com/'
  })
  .source('src')
  .destination('build')
  .clean(true)
  .use(markdown())
  .use(collections({
    akcijos: {
      pattern: 'akcijos/*.html'
    },
    naujienos: {
      pattern: 'naujienos/*.html'
    },
    renginys: {
      pattern: 'renginys/*.html'
    },
    paslaugos: {
      pattern: 'paslaugos/*.html'
    },
    restoranai: {
      pattern: 'restoranai/*.html'
    },
    pramogos: {
      pattern: 'pramogos/*.html'
    },
    parduotuves: {
      pattern: 'parduotuves/**/*.html',
      refer: false // previous next disabled
    }
  }))
  .use(layouts({
    engine: 'pug',
    directory: 'layouts',
    pretty: false // 'false' minifies HTML
  }))
  .use(sass({
    outputDir: 'css',
    outputStyle: 'expanded',
    includePaths: ['sass', 'sass/partials']
  }))
  .build(function (err) {
    if (err) throw err
  })
