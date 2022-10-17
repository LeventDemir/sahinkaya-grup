const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const admin = require('./routes/admin')
const reference = require('./routes/reference')


mongoose.connect(process.env.DB || 'mongodb+srv://sahinkayagrup:sahinkayagrup@cluster0.1l1jbo2.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("open", () => console.log("✔ Connected to mongodb"));
mongoose.connection.on("error", err => console.log({ mongooseError: err }));


app.use(bodyParser.json())
app.use('/admin', admin)
app.use('/reference', reference)


module.exports = app