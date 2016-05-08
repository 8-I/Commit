
import { r } from 'api/db'
import express from 'express'

import SpacesRouter from './routes/spaces'

const router = express.Router()

router.use('/spaces', SpacesRouter)
router.get('/', (req, res) => res.send('[ API UP ]'))

export default router
