const express = require('express')
const app  = express()
const bodyparser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3003
const students = require('./students')

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use('/students', students)

app.listen(port, () => {
    console.log("running")
})
