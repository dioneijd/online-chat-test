const express = require('express')
const routes = express.Router()

const messageController = require('./controllers/messageController')



routes.get('/', (req, res) => {
    res.render('index.html')
})

routes.get('/teste', (req, res) => {
    res.send('teste page')
})

routes.get('/messages', messageController.index)
routes.get('/messages/:id', messageController.show)
routes.post('/messages', messageController.store)
routes.put('/messages/:id', messageController.update)
routes.delete('/messages/:id', messageController.destroy)



module.exports = routes