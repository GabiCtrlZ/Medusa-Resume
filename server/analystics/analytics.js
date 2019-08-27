let convertor = require('./convertor')
let exploringAsText = require('./exploringAsText')

class analytics {
    constructor(path) {
        this.pdf = path
        this.test = new convertor()
    }
    loadTextInfo() {
        this.test.pdfToText(this.pdf, this.ExploreText)
    }
    ExploreText(err, text, res) {
        console.log(res)
        if (err) {
            console.error('Conversion error: ' + err)
        } else {
            console.log("text are ready")
            let firstText = new exploringAsText(text)
            let obj = {
                words: firstText.countWord(),
                sentence: firstText.countSentece(),
                email: firstText.haveEmail(),
                phone: firstText.havePhone(),
                chronOrder: firstText.orderTime(),
                oldDates: firstText.haveToOld(),
                summery: firstText.haveSummry()
            }
            return obj
        }
    }
}
module.exports = analytics