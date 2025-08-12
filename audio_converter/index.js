var fs = require("fs");
var ffmpeg = require("fluent-ffmpeg");

var outStream = fs.createWriteStream("./output.mp4");

console.log(" ==> Starting converting");

ffmpeg(fs.createReadStream("./sample_1920x1080.webm"))
  .on("start", function (commandLine) {
    console.log("Spawned Ffmpeg with command: " + commandLine);
  })
  .on('codecData', function(data) {
    console.log(data);
  })
  .on('error', function(err) {
    console.log('An error occurred: ' + err.message);
  })
  .videoCodec("libx264")
  // .withAudioCodec('libmp3lame')
  // .withSize('320x240')
  .fromFormat('webm')
  .format('wav')
  .toFormat('mp4')
  // .withStrictExperimental()
  // .output('./convertido.mp4')
  // .output(stream, { end: true})
  .pipe(outStream, { end: true });

