import { Router } from 'express'

const router = new Router()

router.get('/', (req, res, next) => { res.json({ hello: 'api' }) })

export default router
