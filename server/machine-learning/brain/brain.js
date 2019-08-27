const Population = require('./population')

class Brain {
    constructor(inputs, popSize = 100 , gens = 100, net = null) {
        this.population = new Population(popSize, inputs, net)
        this.gens = gens
        this.best
    }
    train(data){
        let genBest
        let genFitness = 0
        while (genFitness < data.length - 5){
            this.population.bestOfPopulation(data)
            genBest = this.population.bestArr[0].bestIndev
            this.best = genBest
            genFitness = genBest.fitness
            console.log(genFitness)
            this.population.modifyPopulation()
        }
    }
    test(testData){
        let score = this.best.test(testData)
        console.log(this.numarlScore(score))
    }
    numarlScore(score){
        return score
    }
    testPrettify(testData){
        let score = this.best.test(testData)
        let niceNum = Math.floor(this.numarlScore(score)*100)
        console.log(niceNum)
    }
}

module.exports = Brain
