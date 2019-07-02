const streamEditToOutput = require('../scripts/streamEditToOutput');

const input = './tVid0.webm';
const output1 = './tVid1.mp4';
const timeIn1 = '00:00:00';
const duration1 = '00:05:05';
const output2 = './tVid2.mp4';
const timeIn2 = '00:03:00';
const duration2 = '00:08:05';
const callback = console.log;

//streamEditToOutput(input, output1, timeIn1, duration1, callback);
streamEditToOutput({input:input, output:output2, timeIn:timeIn2, duration:duration2}, callback);
