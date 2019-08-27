const express = require("express")
const multer = require('multer')
const bodyParser = require("body-parser")
const port = 8080
const mongoose = require('mongoose')
const api = require('./routes/api')
const app = express()

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/resumes', {useNewUrlParser: true})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    
    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', api)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || port, function () {
    console.log('listening on port ' + port)
  })