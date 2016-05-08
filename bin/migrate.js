
require('babel-register')
require('babel-polyfill')

const path = require('path')
const fs = require('fs')
const appModulePath = require('app-module-path')

appModulePath.addPath(path.resolve(__dirname, '../src'))

if (!process.argv[2]) {
	console.error('No migration specified.');
	process.exit()
}

try {
	fs.accessSync(path.resolve(__dirname, '../src/api/db/migrations/' + process.argv[2] + '.js'));
	require('api/db/migrations/' + process.argv[2] + '.js')
} catch(e) {
	console.log(`${process.argv[2]}: Migration not found`);
}

console.log('Migration achieved successfully.');
process.exit()