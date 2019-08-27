const meanSummry = ['summary', 'ADDITIONAL INFORMATION', 'PROFILE']
class exploringAsText {
    constructor(text) {
        this.text = text
        let years = this.text.match(/[0-9]{4}/g)
        const today = new Date()
        years = years.map(y => { return parseInt(y) }).filter(y => y <= today.getFullYear() && y > 1980)
        this.years = years
    }
    countWord() {
        return this.text.split(" ").filter(t => t.length > 0).length
    }
    countSentece() {
        return this.text.split(".").filter(t => t.length > 0).length
    }
    haveEmail() {
        return /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/.test(this.text) ? 1 : -1
    }
    havePhone() {
        return /[0-9-]{10}/.test(this.text) ? 1 : -1
    }
    orderTime() {
        const sorted = this.years.sort((a, b) => {
            return b - a
        })
        return sorted === this.years ? 1 : -1
    }
    haveToOld() {
        const today = new Date()
        return (this.years.filter(y => y < today.getFullYear() - 15).length > 0) ? 1 : -1
    }
    haveSummry() {
        let summry = -1
        for (let word in meanSummry) {
            if (this.text.toLowerCase().includes(word.toLowerCase())) {
                summry = 1
            }
        }
        return summry
    }

}
module.exports = exploringAsText