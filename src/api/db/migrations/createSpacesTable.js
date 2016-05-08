
import { r, DATABASE } from 'api/db'

r.tableCreate('spaces').run().then(() => console.log(`Table \`spaces\` got created in DB ${DATABASE}`))