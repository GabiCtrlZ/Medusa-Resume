const docxConverter = require('docx-pdf');
const pdf2html = require('pdf2html')
class convertor {
    constructor() {
        this.text = " "
    }
    wordToPdf(path, outPutPath) {

        docxConverter(path, outPutPath, function (err, result) {
            if (err) {
                console.log(err);
            }
            console.log('result' + result);
        });
    }
    pdfToHtml(path, callback) {
        pdf2html.html(path, callback)
    }
    async pdfToText(path, callBack) {
        await pdf2html.text(path, callBack)
    }
}
module.exports = convertor