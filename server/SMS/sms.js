const Nexmo = require('nexmo')
class SmsSender {
    constructor() {
        this.nexmo = new Nexmo({
            // idialy, should be recieved from the env file, but the project is getting passed through several machines so...
            apiKey: 'undefined',
            apiSecret: 'undefined',
        });
    }
    sendSMS(companyName, phoneNum, text) {
        const from = companyName
        phoneNum = phoneNum.split('-').join('')
        phoneNum = phoneNum.split(' ').join('')
        let to
        ((phoneNum[0] == 0) ? to = '972' + phoneNum.slice(1) : to = phoneNum)
        console.log(to);
        this.nexmo.message.sendSms(from, to, text, { "type": 'unicode', "concat": 'true' }, function (err, res) {
            console.log(text.length)
            console.log(err)
        });
    }
}


module.exports = SmsSender
