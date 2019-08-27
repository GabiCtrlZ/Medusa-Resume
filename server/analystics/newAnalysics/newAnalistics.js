let exploringAsText = require('./exploreAsText')
let pdfToText = require('./pdfToText')
let cvParse = require('./usePyresparser')
class analytics {
    constructor(path) {
        this.pdf = path
    }
    async toCustomar() {
        let text =  await pdfToText(this.pdf)
        console.log('this is the text' + text)
        let info = JSON.parse(await cvParse(this.pdf))
        let firstText = new exploringAsText(text)
        let obj = {
            words: firstText.countWord(),
            sentence: firstText.countSentece(),
            chronOrder: firstText.orderTime(),
            oldDates: firstText.haveToOld(),
            summery: firstText.haveSummry(),
            email : info.email? 1 :-1,
            phone : (firstText.havePhone()[0] !== 'Phone not found')? 1 :-1,
            numOfPages : info.no_of_pages

            }
            return obj
        }
        async toComapny()
        {
            let text =  await pdfToText(this.pdf)
            let firstText = new exploringAsText(text)
            let info = JSON.parse(await cvParse(this.pdf))
            let obj =
                {
                    name : info.name,
                    email : info.email,
                    phone: firstText.havePhone()[0],
                    skills : info.skills,
                    exp :  info.total_experience
                }
                return obj

        }
}
module.exports = analytics