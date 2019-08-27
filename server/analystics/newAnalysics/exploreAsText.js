const meanSummry = ['summary' ,'ADDITIONAL INFORMATION' , 'PROFILE']
class exploringAsText
{
    constructor(text  , arr)
    {
        this.arr = arr ||[]
        this.text = text
        let years = this.text.match(/[^a-zA-z-/ /][0-9]{4}[ a-zA-z- ]/g) ||[]
        const today = new Date()
        years = years.map(y => {return parseInt(y)}).filter(y => y <= today.getFullYear() && y > 1980)
        this.years = years
    }
    countWord()
    {
        return this.text.split(" ").filter(t => t.length > 0).length || 0
    }
    countSentece()
    {
        return this.text.split(".").filter(t => t.length > 0).length || 0
    }
    orderTime()
    {
        const sorted = this.years.sort((a,b)=> {
            return b-a
        })
        return  sorted === this.years?1 :-1
    }
    haveToOld()
    {
        const today = new Date()
        console.log(this.years.filter(y => y < today.getFullYear()-15).length )
        return (this.years.filter(y => y < today.getFullYear()-15).length > 0)?1 :-1
    }
    haveSummry()
    {
        let summry = -1
        for(let word in meanSummry)
        {
            if (this.text.toLowerCase().includes(word.toLowerCase()))
            {
                summry = 1}
        }
        return summry
    }
    havePhone() {
        return this.text.match(/[0-9- ]{9,15}[0-9]/) || ['Phone not found']
    }
}
module.exports =  exploringAsText
