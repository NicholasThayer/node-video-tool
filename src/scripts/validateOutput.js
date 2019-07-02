const _ = require('lodash')

const validateOutput = ( inputs, outputDir, callback ) => {
  const singleCheck = ( check, against ) => against.filter(agnst => agnst == check )
  const multiCheck = ( check, against ) => check.filter((chk) => singleCheck(chk, against).length > 0);

  if(_.isArray(inputs)){
    //console.log( 'multiCheck', multiCheck(inputs, outputDir));
    const isValid = !multiCheck( inputs, outputDir ).length > 0;
    return callback? callback( isValid ) : isValid
  } else {
    //console.log( 'singleCheck', singleCheck(inputs, outputDir));
    const isValid = !singleCheck( inputs, outputDir ).length > 0
    callback? callback( isValid ) : isValid
  }
}

module.exports = validateOutput;
