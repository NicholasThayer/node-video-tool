
const validateInput = require('../scripts/validateOutput');

const testInput0 = ['/path/to/file1', '/path/to/file2', '/path/to/file3']
const testInput1 = ['/path/to/fileC', '/path/to/fileB', '/path/to/fileA']
const testInput2 = '/path/to/fileA'
const testOutputFolder = ['/path/to/file1','/path/to/file4','/path/to/file5']

validateInput( testInput2, testOutputFolder, console.log.bind(null, 'test C' ));
validateInput( testInput0, testOutputFolder, console.log.bind(null, 'test A' ));
validateInput( testInput1, testOutputFolder, console.log.bind(null, 'test B' ));
