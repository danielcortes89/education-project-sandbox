const mongoose = require('mongoose')
const Pic = require('../../src/models/picModel')

/*
  The fields of the current mongoose schema are:
    id:             Generated
    desc:           Used for searching by description
    keywords:       Used for searching by keywords, example: subject=math|grade=9|
    filename:       Filename of image, could come in handy for tracing
    mimetype:       Used for rendering image
    size:           Stores size of uploaded image, or "text" property?
    image:          Used for rendering image
    identifier:     "image" or "description"
    text:           "This goes 3rd"    - could this be html?
    sequence:       1,2,3,4            - used for sorting
*/

// TODO: attach images to the test docs, if needed for testing

const doc001Id = new mongoose.Types.ObjectId()
const doc001 = {
    _id: doc001Id,
    desc: 'Istanbul Airport',
    keywords: '|country=turkey|airport|',
    filename: 'profile-pic.jpg',
    mimetype: 'image/jpeg',
    size: 100,
    identifier: "image",
    text: "This goes 1st",
    sequence: 1
}

const doc002Id = new mongoose.Types.ObjectId()
const doc002 = {
    _id: doc002Id,
    desc: 'map of texas',
    keywords: '|country=usa|state=texas|',
    filename: 'profile-pic.jpg',
    mimetype: 'image/jpeg',
    size: 200,
    identifier: "image",
    text: "This goes 3rd",
    sequence: 3
}

const doc003Id = new mongoose.Types.ObjectId()
const doc003 = {
    _id: doc003Id,
    desc: 'Descripton of Istanbul Airport',
    keywords: '|country=turkey|airport|',
    filename: null,
    mimetype: "officedocument.wordprocessingml.document",
    size: 0,
    identifier: "description",
    text: "This goes 2nd",
    sequence: 2
}
const doc004Id = new mongoose.Types.ObjectId()
const doc004 = {
    _id: doc004Id,
    desc: 'Description of Texas',
    keywords: '|country=usa|state=texas|',
    filename: null,
    mimetype: "officedocument.wordprocessingml.document",
    size: 0,
    identifier: "description",
    text: "This goes 4th",
    sequence: 4
}

const setupDatabase = async () => {
    await Pic.deleteMany()
    await new Pic(doc001).save()
    await new Pic(doc002).save()
    await new Pic(doc003).save()
    await new Pic(doc004).save()
}

module.exports = {
    doc001Id,
    doc001,
    doc002Id,
    doc002,
    doc003Id,
    doc003,
    doc004Id,
    doc004,
    setupDatabase
}