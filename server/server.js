const express = require("express")
const bodyParser = require("body-parser")
const port = 8080

const api = require('./routes/api')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '..', 'build')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', api)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || port, function () {
    console.log('listening on port ' + port)
  })