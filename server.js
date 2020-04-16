require('dotenv').config()
   

const express = require('express')
const path = require('path')
const mongo = require('mongoose')

const routes = require('./routes')

const app = express();

const server = require('http').createServer(app)
const io = require('socket.io')(server)

mongo.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})



app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use(express.json())
app.use(routes)


let messages = []

io.on('connection', socket => {



    socket.emit('previousMessages', messages)

    socket.on('sendMessage', data => {
        messages.push(data)
        socket.broadcast.emit('receivedNewMessage', data)
    })

})



server.listen(process.env.PORT || 3000)