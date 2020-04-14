const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.render('index.html')
})

routes.get('/teste', (req, res) => {
    res.send('teste page')
})



module.exports = routes