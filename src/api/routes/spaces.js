
import express from 'express'

const router = express.Router()

router.get('/:id', (req, res) => res.send(`Asked for space with id ${req.params.id}`))

export default router
