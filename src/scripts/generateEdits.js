const durationFromTimePair = require('./durationFromTimePair');
const generateOutputPaths = require('./generateOutputPaths');
const validateOutput = require('./validateOutput');
const path = require('path');
const fs = require('fs');

const generateEdits = ( tArray, edit ) => {
  //const inputPath, output, timePairs = ...item;
  const numEdits = edit.timePairs.length
  const outputPaths = generateOutputPaths( edit.input, edit.output, edit.timePairs.length ); // this should be singularized
  //const inTimes = timePairs.map( pair => return pair[0] )
  //const durrations = timePairs.map( durationFromTimePair );
  const outputDir = path.dirname(outputPaths[0])
  const isValid = validateOutput( outputPaths, fs.readdirSync(outputDir) );

  console.log(( isValid && 'Valid output' || 'invalid output, skipping' ));

  return !isValid? tArray : tArray.concat( edit.timePairs.map( ( timePair, index ) => {
    return {
      input: edit.input,
      output: outputPaths[ index ],
      timeIn: timePair[0],
      duration: durationFromTimePair( timePair )
  }}))
}

module.exports = generateEdits
