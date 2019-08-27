const NeuralNet = require('./neuralNetwork')

class Indev {
    constructor(num, net = null, modifiyZero = false) {
        if (net == null) {
            this.neuralNet = new NeuralNet(num)
            this.fitness = 0
        }
        else if (modifiyZero == false) {
            this.neuralNet = this.mutatNeuralNet(net)
            this.fitness = 0
        }
        else {
            this.neuralNet = net
        }
    }
    mutatNeuralNet(net) {
        let modified = { inputs: [], layerTwo: {} }
        let counter = 0
        for (let input of net.inputs) {
            modified.inputs[counter] = {}
            for (let key in input) {
                const ran = Math.random()
                let maxKey = input[key] + (Math.random() * ran - ran / 2)
                modified.inputs[counter][key] = maxKey
            }
            counter++
        }
        for (let key in net.layerTwo) {
            const ran = 0.2
            let maxKey = net.layerTwo[key] + (Math.random() * ran - ran / 2)
            modified.layerTwo[key] = maxKey
        }
        return modified
    }
    testHelper(dataArr, place) {
        let weightedSum = 0
        for (let i = 0; i < dataArr.length; i++) {
            weightedSum += dataArr[i] * this.neuralNet.inputs[place][i]
        }
        if (weightedSum > 4) {
            weightedSum = (Math.cbrt(weightedSum))
        }
        else if (weightedSum < -4) {
            weightedSum = -(Math.cbrt(-weightedSum))
        }
        return (1 / (1 + Math.pow(Math.E, -weightedSum)))
    }
    test(dataArr) {
        let weightedSum = 0
        for (let i = 0; i < this.neuralNet.inputs.length; i++) {
            const activeFun = this.testHelper(dataArr, i)
            if (activeFun > 0.6) {
                weightedSum += activeFun * this.neuralNet.layerTwo[i]
            }
        }
        return (1 / (1 + Math.pow(Math.E, -weightedSum)))
    }
    getFitness(allData) {
        let fitness = 0
        for (let dataObj of allData) {
            let weightedSum = this.test(dataObj.data)
            if (Math.abs(dataObj.result - weightedSum) < 0.25) {
                fitness++
            }
        }
        this.fitness = fitness
        return this.fitness
    }
    getNiceScore(dataArr) {
        const uglyScore = this.test(dataArr)
        if (uglyScore <= 0.2) {
            return (60 / 0.2) * uglyScore
        }
        else if (uglyScore <= 0.97) {
            return ((10 / 0.77) * uglyScore + 70 - (9.7 / 0.77))
        }
        else if (uglyScore <= 0.995) {
            return ((30 / 0.025) * uglyScore + 100 - ((30 * 0.995) / 0.025))
        }
    }
    getSuperNiceScore(dataArr) {
        const uglyScore = this.getNiceScore(dataArr)
        if (uglyScore <= 37) {
            return ((30 / 37) * uglyScore + 30)
        }
        else if (uglyScore < 78) {
            return 60
        }
        else if (uglyScore <= 83) {
            return (2 * uglyScore - 96)
        }
        else if (uglyScore <= 89) {
            return (5 * uglyScore - 345)
        }
        else{
            return 101
        }
    }
}

module.exports = Indev