const browserSync = require('browser-sync').create();
const { spawn } = require('child_process');

const server = spawn('nodemon', ['src/index.js']);

browserSync.init({
  proxy: "http://localhost:3000",
  files: ["public/**/*.*"],
  port: 3001,
  open: false
});

server.on('restart', () => {
  setTimeout(() => {
    browserSync.reload();
  }, 1000);
});

server.stdout.on('data', (data) => {
  console.log(data.toString());
});

server.stderr.on('data', (data) => {
  console.error(data.toString());
});
