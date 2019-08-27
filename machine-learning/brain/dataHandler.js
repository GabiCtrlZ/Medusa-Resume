class DataHandler{
    convertObjToArr(obj){
        let arr = []
        arr.push(obj.words)
        arr.push(obj.sentence)
        arr.push(obj.email)
        arr.push(obj.chronOrder)
        arr.push(obj.oldDates)
        arr.push(obj.summery)
        arr.push(obj.numOfPages)
        return arr
    }
}

module.exports = DataHandler