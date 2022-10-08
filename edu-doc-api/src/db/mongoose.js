const mongoose = require('mongoose')
const colors = require('colors')

mongoose.connect(process.env.MONGODB_URL).then((conn) => {
    console.log(`Established mongoose connection to:  ${conn.connection.host}`.cyan.underline)
})