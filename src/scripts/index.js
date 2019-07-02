const processEditFile = require('./processEditFile');
const path = require('path');

console.log( process.argv );
console.log( 'processing edit file', path.resolve(process.argv[2]));
processEditFile( process.argv[2] )

/*
const moment = require('moment');
const durationFromTimePair = require('./durationFromTimePair');
const streamEditToOutput = require('./streamEditToOutput');
const generateOutputPaths = require('./generateOutputPaths');
const generateEdits = require('./generateEdits');
const generateSerialExportProcess = require('./generateSerialExportProcess');
const validateOutput = require('./validateOutput');
const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const _ = require('lodash');

const readList = _.partial( fs.readFile, 'tlist.json' );

//const parseList = ( list ) => {
//  //feed the parsed json object to the callback
//  else{ return JSON.parse(list) }
//}

const generateOptionsList = ( list, listProcess ) => {
  return list.reduce( listProcess, [] )
}

const processList = (err, list) => {
  err? console.log(err) : false
  const parsed = JSON.parse(list)
  generateSerialExportProcess( generateOptionsList( parsed, generateEdits))
}

fs.readFile('./tList.json', processList)


/*
const editList = (list, callback) => {

  list.forEach((item) => {
    const inputPath, output, timePairs = ...item;
    const inputName = inputPath.slice(inputPath.lastIndexOf('/'), inputPath.length);
    const useInputName = output.lastIndexOf('/') > output.lastIndexOf('.');

    const outputFilePath = (useInputName && output ) ||
                           output.slice( 0, output.lastIndexOf('/') );

    const outputFileName = useInputName && inputName ||
      output.slice(output.lastIndexOf('/'), output.length);

    const fileOutputNames = timePairs.length > 1 && timePairs.map(
      (val, index) => return outputFileName.replace(
        /\.(?=[^.]*$)/, `(${index}).` ));

    fs.readdir(outputFilePath, (err, outputDir) => {
      if(err){ throw err }
      if(!validOutputName(fileOutputNames || outputFileName)){
        console.log('duplicate files', fileOutputNames || outputFileName)
        return
      }

      timePairs.forEach( (timePair, index) => {
        ffmpeg(inputPath, {logger: console})
          .seekInput( formatTime( timePair[0] ))
          .durration( durationFromTimePair( timePair ))
          //.output( fileOutputNames && fileOutputNames[index] || outputFileName)
      })
    })
  })
}
*/
