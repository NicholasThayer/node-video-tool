#!/usr/bin/env node

const processEditFile = require('../src/scripts/processEditFile');
const path = require('path');

console.log( process.argv );
console.log( 'processing edit file', path.resolve(process.argv[2]));
processEditFile( process.argv[2] )
