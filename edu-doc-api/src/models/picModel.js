const mongoose = require('mongoose')

const picSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    keywords: {
        type: String
    },
    filename: {
        type: String,
        requred: true
    },
    mimetype: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    image: {
        type: Buffer
    },
    identifier: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    sequence: {
        type: Number     
    }
}, {
    timestamps: true
})

picSchema.methods.toJSON = function () {
    const pic = this
    const picObject = pic.toObject()
    // delete picObject.image
    picObject.image = '... ' + pic.image.length + ' bytes of data'
    return picObject
}

module.exports = mongoose.model('Pic', picSchema)