const Indev = require('./individual')

class Population {
    constructor(popSize, numInputs, net = null) {
        this.population = this.createPopulation(popSize, numInputs, net)
        this.popSize = popSize
        this.numInputs = numInputs
        this.bestArr = []
    }
    createPopulation(popSize, numInputs, net) {
        let population = []
        for (let i = 0; i < popSize; i++) {
            population.push(new Indev(numInputs, net))
        }
        return population
    }
    trainAll(testData){
        for (let indev of this.population){
            indev.getFitness(testData)
        }
    }
    bestOfPopulation(testData) {
        this.trainAll(testData)
        let bestFitness = this.population[0].fitness
        let bestIndev = this.population[0]
        let bestArr = [{bestFitness, bestIndev}, {bestFitness, bestIndev}, {bestFitness, bestIndev}, {bestFitness, bestIndev}]
        for (let indev of this.population){
            let fitness = indev.fitness
            if (fitness > bestFitness){
                bestFitness = fitness
                bestIndev = indev
                bestArr[2] = bestArr[1]
                bestArr[3] = bestArr[2]
                bestArr[1] = bestArr[0]
                bestArr[0] = {bestFitness, bestIndev}
            }
            else if (fitness > bestArr[1].bestFitness){
                bestArr[3] = bestArr[2]
                bestArr[2] = bestArr[1]
                bestArr[1] = {bestFitness: fitness, bestIndev: indev}
            }
            else if (fitness > bestArr[2].bestFitness){
                bestArr[3] = bestArr[2]
                bestArr[2] = {bestFitness: fitness, bestIndev: indev}
            }
            else if (fitness > bestArr[3].bestFitness){
                bestArr[3] = {bestFitness: fitness, bestIndev: indev}
            }
        }
        this.bestArr = bestArr
        return this.bestArr
    }
    modifyPopulation(){
        if (!this.bestArr.length){
            return 'cant modify, you have not trained the population'
        }
        let population = []
        let i = 0
        while (i < this.popSize) {
            population.push(new Indev(this.numInputs, this.bestArr[i % 4].bestIndev.neuralNet))
            i ++
        }
        this.population = population
        this.bestArr = []
        return 'modified successfully'
    }
}

module.exports = Population