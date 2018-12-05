var express = require('express')
var router =  express.Router()
const queries = require('./queries/student_queries')

router.get('/', (req,res) => {
    queries.readAllStudents().then(students => res.status(200).send({students}))
})

module.exports = router