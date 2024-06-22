const express = require('express')
const app = express()

const log = require('../log');

// we can use this middleware to use any static files we need to share to the request.
// app.use(express.static(files that need to be shared))

app.get('/', (req, res) => {
  console.log('user hit the resource')
  log.Info('user hit the resource');
  res.status(200).send('Home Page')

})

app.get('/about', (req, res) => {
  log.Info('user hit the about page');
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  log.Info('user hit the wrong address');
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// app.get  
// app.post 
// app.put
// app.delete
// app.all for all the requests which comes from the client
// app.use for middlewares
// app.listen
