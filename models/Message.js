const mongo = require('mongoose')

const MessageSchema = new mongo.Schema({
    socket_id: String,
    author: String,
    message: String,
}, {
    timestamps: true,
})

module.exports = mongo.model('Messages', MessageSchema)