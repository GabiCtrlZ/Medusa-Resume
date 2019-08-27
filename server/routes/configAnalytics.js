const analytics = require('../analystics/analytics')
let exploringAsText = require('../analystics/exploringAsText')

class Config extends analytics{
    constructor(path){
        super(path)
        this.analyzed
    }
    loadTextInfo() {
        this.test.pdfToText(this.pdf, this.ExploreText.bind(this))
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
            this.analyzed = obj
        }
    }
}

module.exports = Config