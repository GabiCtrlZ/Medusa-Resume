const unirest = require("unirest");

class WebCrawler {
    constructor() {
        this.baseUrl = 'https://il.indeed.com'
        this.jobs
        this.location
        this.generalJobsUrl
    }
    setJobNLocation(job, location) {
        this.jobs = job
        this.location = location
        this.generalJobsUrl = `${this.baseUrl}/jobs?q=${this.jobs}&l=${this.location}`

    }
    async getJobs() {
        const req = await unirest("GET", this.generalJobsUrl);
        const str = req.body
        if (str.length === 0){
            return 'invalid request'
        }
        let res = str.match(/\/rc\/clk[^"]*"/g);
        if (!res){
            return 'invalid request'
        }
        let addrArr = []
        for (let link of res) {
            const a = await this.attempt2(this.baseUrl + link.slice(0, link.length - 1))
            if (a){
                addrArr.push(a)
            }
        }
        return addrArr
    }
    async attempt2(link) {
        const req = await unirest("GET", link);
        const str = req.body
        let res = str.match(/https:\/\/il.indeed.com\/rc\/clk[^"]*"/g);
        if (!res){
            return
        }
        const urlToJob = res[0].slice(0, res[0].length - 6)
        const companyName = this.checkCompanyName(str)
        const description = this.checkDescription(str)
        return { url: urlToJob, name: companyName, description }
    }
    checkCompanyName(str){
        let companyNameUgly = str.match(/class="icl-u-lg-mr--sm icl-u-xs-mr--xs">[a-zA-Z0-9]*<\/div>/g)
        if (companyNameUgly != null){
            let companyName = companyNameUgly[0].slice(40)
            companyName = companyName.slice(0, companyName.length - 6)
            return companyName
        }
        companyNameUgly = str.match(/class="icl-u-lg-mr--sm icl-u-xs-mr--xs">[\s\S]*<\/div>/g)
        if (companyNameUgly != null){
            let companyName = companyNameUgly[0].split('<')[0].slice(40)
            companyName = companyName.replace(/&#39;/g, `'`).replace(/&quot;/g, `"`)
            return companyName
        }
        return 'company name not found'
    }
    checkDescription(str) {
        let companyDescription = str.match(/<p>[\s\S]*<\/p>/g)
        if (companyDescription != null){
            companyDescription = companyDescription[0].split('<')
            return companyDescription[1].slice(2)
        }
        companyDescription = str.match(/class="jobsearch-jobDescriptionText">[\s\S]*<br>/g)
        if(companyDescription != null){
            return (companyDescription[0].slice(37, companyDescription[0].length-8)).replace(/<div>|<b>|<\/b>|<br>|<i>|<\/i>|<\/div>|<li>|<ul>|<\/li>|<\/ul>|<h2 class="jobSectionHeader">|<\/h2>/g, ' ')
        }
        return 'description not found'
    }

}
module.exports = WebCrawler