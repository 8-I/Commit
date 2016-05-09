
import { r, DATABASE } from 'api/db'

r
  .tableCreate('spaces')
  .run()
  /* eslint-disable no-console */
  .then(() => console.log(`Table \`spaces\` got created in DB ${DATABASE}`))
  /* eslint-enable no-console */
