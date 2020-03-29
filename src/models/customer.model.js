let mongoose = require('mongoose')

const server = 'localhost:27017'
const database = 'nodeRestApi'
const user = 'adinodeRestApi'
const password = 'abc123'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)