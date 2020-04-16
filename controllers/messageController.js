const mongo = require('mongoose')
const Message = require('../models/Message')

const Messages = {
    async index (req, res) {
        const messages = await Message.find()

        return res.json(messages)
    },

    async show (req, res) {
        return res.send('To be implemented')
    },

    async store (req, res) {
        const message = await Message.create(req.body)

        if (message) {
            return res.json(message)
        } 
        
        return res.json({error: "erro to create"})

    },

    async update (req, res) {
        return res.send('To be implemented')
    },

    async destroy (req, res) {
        return res.send('To be implemented')
    }


}

module.exports = Messages