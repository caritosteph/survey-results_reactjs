import browserSync from 'browser-sync';

browserSync({
  port: 4000,
  ui: {
    port: 4001
  },
  server: {
    baseDir: 'client/dist/'
  },

  files: [
    'client/src/*.html'
  ]
});
