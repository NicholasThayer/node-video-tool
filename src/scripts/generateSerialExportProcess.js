const streamEditToOutput = require('./streamEditToOutput');
const curry = require('lodash/curry');
const partial = require('lodash/partial');

const runNextFunc = (func, arr, ind, cb) => {
  const doRecur = !!arr[ ind ]
  //console.log('doRecur', doRecur, ind, ind + 1);
  doRecur? func(arr[ ind ], partial(cb, func, arr, ind + 1, cb )).run() :
    console.log( 'finished exporting all edits' )
}

const generateSerialExportProcess = ( optsArray ) => {
  runNextFunc( streamEditToOutput, optsArray, 0, runNextFunc)
}

module.exports = generateSerialExportProcess

/*
const generateSerialExportProcess = ( optsArray ) => {
  console.log(optsArray);
  const logDone = partial( console.log, 'finished exporting all edits' );
  const nextFunc = ( func, ind, arr ) => {

    return arr[ ind+1 ] ? func( arr[ ind + 1 ] ) : func( logDone )
  }
  const ret = optsArray.map( opts => curry( streamEditToOutput )(  opts ))
    .map(( func, ind, arr) => {
      return arr[ ind +1 ] ? func( partial( runNextFunc, ret, ind + 1 )) :
        func( logDone )
    }
  )[0];

  return ret
}

module.exports = generateSerialExportProcess;
*/
