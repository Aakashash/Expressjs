const express = require('express')

const router = express.Router()

router.post('', (req, res) => {

  const user= "test";
  const pass="test";

  const { username, password } = req.body
  if (username === user && password === pass) {
   return res.status(200).send({"username": username});
   // return res.status(200).send(`Welcome ${username}`);

  }

  res.status(401).send('Please Provide Credentials')
})

module.exports = router
