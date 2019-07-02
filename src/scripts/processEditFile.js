const fs = require('fs');
const generateEdits = require('./generateEdits');
const generateSerialExportProcess = require('./generateSerialExportProcess');

const generateOptionsList = ( list, listProcess ) => {
  return list.reduce( listProcess, [] )
}

const processList = (err, list) => {
  err? console.log(err) : false
  const parsed = JSON.parse(list)
  generateSerialExportProcess( generateOptionsList( parsed, generateEdits))
}

const processEditFile = ( filePath ) => {
  fs.readFile( filePath, processList )
}
module.exports = processEditFile
