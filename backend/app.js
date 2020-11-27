const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/crud')
    .then(result => {
        console.log('Mongodb Connected...')
    })
    .catch(error => {
        console.log('Mongodb Connection Failed...')
    })

app.use('/user', userRoutes)

const port = process.env.PORT || 4000;

app.listen(port, () =>{
    console.log(`Server is up at ${port}...`)
})