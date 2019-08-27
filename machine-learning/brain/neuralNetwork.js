class NeuralNet {
    constructor(num) {
        this.inputs = this.createConnections(num)
        this.layerTwo = this.createLayerTwo()
    }
    createConnections(num) {
        let arr = []
        for (let i = 0; i < 4; i++) {
            let obj = {}
            for (let i = 0; i < num; i++) {
                obj[i] = Math.random() * 2 - 1
            }
            arr.push(obj)
        }
        return arr
    }
    createLayerTwo(){
            let obj = {}
            for (let i = 0; i < 4; i++) {
                obj[i] = Math.random() * 2 - 1
            }
            return obj
    }
}

module.exports = NeuralNet