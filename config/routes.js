const express = require('express')
const taskCtlr = require('../app/controllers/taskCtlr')
const router = express.Router()

router.get('/api/userdetails/:id',taskCtlr.extract)
router.post('/api/userdetails',taskCtlr.update)

module.exports = router