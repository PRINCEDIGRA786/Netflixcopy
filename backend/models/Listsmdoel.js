const mongoose = require('mongoose')
const { Schema } = mongoose;

const ListSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now
    }

});

module.exports = mongoose.model('list', ListSchema)