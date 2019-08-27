const express = require("express")
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const upload = multer()
const model = require('../models/model')
const Indev = require('../machine-learning/brain/individual')
const Config = require('../analystics/newAnalysics/newAnalistics')
const DataHandler = require("../machine-learning/brain/dataHandler")
const WebCrawler = require('../web-crawler/webCrawler')
const SmsSender = require('../SMS/sms')
const sender = new SmsSender()
const staticNet = require('../machine-learning/brain/jellyHome')

//getting best bud (aka the A.I jellyFish) out of the database so he will work a bit
let jellyFish
let dataHandler = new DataHandler()

async function getBest() {
    jellyFish = new Indev(0, staticNet, true)
}
getBest()

//server routes
router.post('/file', upload.any(), async function (req, res, next) {
    console.log('uploded file')
    fs.writeFileSync('./user-files/temp.pdf', req.files[0].buffer)
    let analitics = new Config('./user-files/temp.pdf')
    let analyzedObj = await analitics.toCustomar()
    let dataArr = dataHandler.convertObjToArr(analyzedObj)
    analyzedObj['resumeScore'] = Math.floor(jellyFish.getSuperNiceScore(dataArr)) 
    res.send(analyzedObj)
    fs.unlinkSync('./user-files/temp.pdf')
})

router.post('/filebusiness', upload.any(), async function (req, res, next) {
    console.log('uploded files')
    let data = []
    for (let file of req.files) {
        fs.writeFileSync('./business-files/temp.pdf', file.buffer)
        let analitics = new Config('./business-files/temp.pdf')
        let analyzedObj = await analitics.toComapny()
        data.push(analyzedObj)
        fs.unlinkSync('./business-files/temp.pdf')
    }
    res.send(data)
})

router.post('/sendsms', function (req, res, next) {
    const body = req.body
    sender.sendSMS(body.company, body.phoneNum, body.text)
    res.end()
})

router.get('/jellyFish', function (req, res, next) {
    console.log(jellyFish)
    res.end()
})

router.get('/findjobs', async function (req, res, next) {
    const query = req.query
    query.q = query.q.split(' ').join('+')
    query.l = query.l.split(' ').join('+')
    console.log(query)
    const webCrawler = new WebCrawler()
    webCrawler.setJobNLocation(query.q, query.l)
    const obj = await webCrawler.getJobs()
    res.send(obj)
})

module.exports = router