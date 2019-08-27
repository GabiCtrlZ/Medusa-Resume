const dummyTest = [320, 22, 1, 1, 1, -1, 1]
const dummyTest2 = [612, 31, 1, -1, 1, 1, -1]
const mongoose = require('mongoose')
const Brain = require('./brain')
const Config = require('../../analystics/newAnalysics/newAnalistics')
const path = require('path')
const DataHandler = require('./dataHandler')


mongoose.connect('mongodb://localhost/resumes', { useNewUrlParser: true })
const dataHandler = new DataHandler()
const model = require('../../models/model')

async function loadBad() {
    for (let i = 1; i < 24; i++) {
        let analitics = new Config(path.join(__dirname, '..', '..', `analystics/Bad-Place/cv${i}.pdf`))
        let analyzedObj = await analitics.toCustomar()
        const a = new model.badResume(analyzedObj)
        console.log(analyzedObj)
        await a.save()
    }
    console.log('done with bad')
}

async function loadGood() {
    for (let i = 1; i < 22; i++) {
        let analitics = new Config(path.join(__dirname, '..', '..', `analystics/Good-Place/cv${i}.pdf`))
        let analyzedObj = await analitics.toCustomar()
        const a = new model.goodResume(analyzedObj)
        console.log(analyzedObj)
        await a.save()
    }
    console.log('done with good')
}

async function trainJelly() {
    const badObjs = await model.badResume.find({}, { _id: 0, __v: 0 })
    const goodObjs = await model.goodResume.find({}, { _id: 0, __v: 0 })
    const neural = await model.neuralModel.find({}, { _id: 0, __v: 0 })
    console.log(neural)
    const badArr = []
    for (let badResume of badObjs) {
        badArr.push({data: dataHandler.convertObjToArr(badResume), result: 0})
    }
    const goodArr = []
    for (let goodResume of goodObjs) {
        goodArr.push({data: dataHandler.convertObjToArr(goodResume), result: 1})
    }
    const data = goodArr.concat(badArr)
    const b = new Brain(8, 100, 100, neural[2])
    b.train(data)
    console.log(b.best)
    console.log(b.best.neuralNet)
    const a = new model.neuralModel(b.best.neuralNet)
    a.save()
    console.log('finished all')
}

trainJelly()