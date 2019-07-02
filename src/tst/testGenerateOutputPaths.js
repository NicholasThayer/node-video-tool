const generateOutputPaths = require('../scripts/generateOutputPaths');

const inputName = '/pathTo/file.mp4';
const outPath1 = '/otherPath/toFile';
const outPath2 = '/otherPath/to/File.mp4';
const numFiles = 2;
generateOutputPaths(inputName, outPath1, numFiles, console.log.bind(null, 'testA'))
generateOutputPaths(inputName, outPath2, numFiles, console.log.bind(null, 'testB'))
generateOutputPaths(inputName, outPath1, 1, console.log.bind(null, 'testC'))
generateOutputPaths(inputName, outPath2, 1, console.log.bind(null, 'testD'))
