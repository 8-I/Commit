
import path from 'path'
import fs from 'fs'
import appModulePath from 'app-module-path'

appModulePath.addPath(path.resolve(__dirname, '../src'))

if (!process.argv[2]) {
  /* eslint-disable no-console */
  console.error('No migration specified.')
  /* eslint-enable no-console */
  process.exit()
}

fs.access(path.resolve(__dirname, `../src/api/db/migrations/${process.argv[2]}.js`), (err, ok) => {
  if (err) {
    /* eslint-disable no-console */
    return console.log(`${process.argv[2]}: Migration not found`)
    /* eslint-enable no-console */
  }
  require(`api/db/migrations/${process.argv[2]}.js`)
  return ok
})

/* eslint-disable no-console */
console.log('Migration achieved successfully.')
/* eslint-enable no-console */
