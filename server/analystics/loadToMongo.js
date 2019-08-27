const model = require('../models/model')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/resumes', { useNewUrlParser: true })
const analytics = require('./analytics')

i = 0
setInterval(function () {
    if (data.length > i) {
        for (let i = 0; i < data.length; i++) {

            let o = new model.goodResume(data[i])
            o.save()
            console.log(o)
        }
    }
}, 3000);

for (let i = 1; i < 16; i++) {
    console.log('in first loop')
    const anl = new analytics('./example/bad/cv' + i + '.pdf')
    anl.loadTextInfo()
}
for( let i =1 ; i < 16 ;i++)
{
    console.log('in first loop')
    const anl = new analytics('./example/good/cv'+ i + '.pdf')
    anl.loadTextInfo()
}
