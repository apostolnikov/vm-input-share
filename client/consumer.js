// const watch = require('node-watch');
const exec = require('child_process').execFile;

exec('scripts.ahk', (err, data) => {
  console.log(err)
  console.log(data.toString());
});

// watch('../server/scripts.ahk', { recursive: true }, (evt, name) => {
//   if (evt == 'update') {
//     console.log('changed');
//     // run here
//   }
// });