const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('hello London'))

app.get('/weather', (req, res) => res.send(req.params))

app.listen(port)