const _ = require('lodash');
const path = require('path')

const generateOutputPaths = ( inputPath, output, numFiles, callback ) => {


  //inputPath without the filename
  const inputName = inputPath.slice(inputPath.lastIndexOf('/'), inputPath.length);

  //if output doesn't have a file extension return true
  const useInputName = output.lastIndexOf('/') > output.lastIndexOf('.');

  //use output if useInputName is true else split off the path
  const outputFilePath = (useInputName && output ) ||
                          output.slice( 0, output.lastIndexOf('/') );

  //if useInputName, inputName else split off the file path
  const outputFileName = useInputName && inputName ||
    output.slice( output.lastIndexOf('/'), output.length
  );

  const ret = new Array(numFiles);
  const len = ret.length;

  if(numFiles == 1){
    ret[0] = outputFilePath + outputFileName.replace( /(?<=\.)[^.]*$/, 'mp4' );
  } else {
    for(var i = 0; i < len; i++){
      ret[i] = path.resolve(outputFilePath + outputFileName
        .replace( /\.(?=[^.]*$)/, `(${i}).` )
        .replace( /(?<=\.)[^.]*$/, 'mp4' )
      )
    }
  }
  return callback? callback(ret) : ret;
}

module.exports = generateOutputPaths;

/*

module.exports = ( inputPath, numOutputs, callback ) => {
  if(numOutputs == 1){
    console.log('numOutputs == 1', numOutputs == 1);
    callback( inputName );

  } if(numOutputs > 1) {
    const ret = new Array( numOutputs );
    for ( var i = 0; i < numOutputs; i++ ){
      ret[i] = inputName.replace(
        /\.(?=[^.]*$)/, `(${i}).` );
    }
    callback( ret );
  }
}
*/
