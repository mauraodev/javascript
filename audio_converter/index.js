var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();

console.log(' ==> Starting converting');

ffmpeg('./ogg_example.ogg')
  .output('./convertido.mp3')
  .run();
