const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    // text: String,
    // required: [true, 'Please add a text value'],
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
},{
    timestamps: true,
})
// the timestamps object is to make mongo create createdAt and upatedAt fields it self

module.exports = mongoose.model('Goal', goalSchema)