
const ffmpeg = require('fluent-ffmpeg');

const streamEditToOutput = ( options, callback ) => {
  //(input, output, timeIn, duration, callback) => {

  //const {input, output, timeIn, duration} = ...options;
  //console.log(options);

  const command = ffmpeg(options.input, {logger: console})
  .seekInput(options.timeIn)
  .duration(options.duration)
  .audioCodec('aac')
  .videoCodec('nvenc_hevc') //('mpeg4')
  .format('mp4')
  .output(options.output)
  .on('error', error => {throw error})
  .on('end', () => {
    console.log('finished exporting edits'
    //, 'run cb?'
    //, callback
    );
    callback? callback() : false;
  }).on('progress', (prog) => console.log(options.output, 'progress:', prog.percent))
  //.run;
  //console.log(command);
  return command;
}

module.exports = streamEditToOutput;
