const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())  // Metodo para agregar plugins a nuestro servidor
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('*', (req, res) => {
    res.send('Hola Mundo')
})

module.exports = app