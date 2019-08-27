const pdf2html = require('pdf2html')
let output
let pdfToText = async function(path) {
    let text = new Promise(function(resolve, reject)
    {
        pdf2html.text(path, function (err, text) {
            output = text
            resolve()
        })
    })
    await text
    return output
}
module.exports = pdfToText
