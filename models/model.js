const mongoose = require('mongoose')
const Schema = mongoose.Schema

const modelSchema = new Schema({
    words: Number,
    sentence: Number,
    summery: Number,
    grammar: Number,
    numOfPages: Number,
    email: Number,
    phone: Number,
    notLabeledSections: Number,
    chronOrder: Number,
    oldDates: Number,
    simpleFonts: Number,
    constFonts: Number
})

const neuralNetSchema = new Schema({
    inputs: Object,
    layerTwo: Object,
})

const model = mongoose.model('analytics', modelSchema)
const model2 = mongoose.model('analyticsBad', modelSchema)
const neuralModel = mongoose.model('neuralNet', neuralNetSchema)
module.exports = {goodResume: model, badResume: model2, neuralModel}