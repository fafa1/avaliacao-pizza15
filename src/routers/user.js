const express = require('express')
const User = require('../models/Users')
const cors = require('cors')

const router = express.Router()

router.use(cors())

router.get('/teste', (req, res) => {
  res.send('teste') 
})

router.post('/home', async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).send({ user })
  } catch (error) {
    res.send(400).send("error " + error) 
  }
})

router.post('/avaliacao', async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).send({ user })
  } catch (error) {
    res.send(400).send("error " + error)
  }
})

module.exports = router