import Factorial from "../../math/Factorial";

class GeneralMeasurements {
    constructor(){
        this.rate = 0;
        this.ocupationRate = 0;
        this.emptyQueueProbability = 0;
    }
    getResult(values){
        return [
            {
                description: "Taxa de ocupação do sistema:",
                value: this.getOcupationRate(values).toFixed(3),
            },
            {
                description: "Probabilidade do sistema estar vazio:",
                value: this.getEmptyQueueProbability(values).toFixed(3),
            },
            {
                description: "Número médio de usuários na fila:",
                value: this.getAverageClientsOnQueue(values).toFixed(3),
            },
            {
                description: "Número médio de usuários no sistema:",
                value: this.getAverageClientsNumber(values).toFixed(3),
            },
            {
                description: "Tempo médio de espera de qualquer usuário na fila:",
                value: this.getAverageWaitingTimeOnQueue(values).toFixed(3),
            },
            {
                description: "Tempo médio de permanência de qualquer usuário no sistema:", 
                value: this.getWaitingTimeOnSystem(values).toFixed(3),
            }
        ]
    }

    getOcupationRate(values){
        this.rate = values.arriveRate / values.processRate;
        this.ocupationRate = this.rate / values.channels;
        return this.ocupationRate;
    }

    getEmptyQueueProbability(values){
        let leftside = 0;
        for(let i = 0; i < values.channels; i++){
            let aux = Math.pow(this.rate, i) / Factorial.calculate(i);
            leftside += aux;
        }
        let rightside = (values.channels * Math.pow(this.rate, values.channels)) / (Factorial.calculate(values.channels) * (values.channels - this.rate)) ;
        this.emptyQueueProbability = Math.pow(leftside + rightside, -1);
        return this.emptyQueueProbability;
    }

    getAverageClientsNumber(values){
        return this.rate + ((Math.pow(this.rate, values.channels + 1) * values.channels) / (Factorial.calculate(values.channels) * Math.pow(values.channels - this.rate, 2))) * this.emptyQueueProbability;
    }

    getAverageClientsOnQueue(values){
        return (this.emptyQueueProbability * values.channels * Math.pow(this.rate, values.channels + 1)) / (Factorial.calculate(values.channels) * Math.pow(values.channels - this.rate, 2));
    }



    getAverageWaitingTimeOnQueue(values){
        return (Math.pow(this.rate, values.channels) * values.processRate) / (Factorial.calculate(values.channels - 1) * Math.pow(values.channels * values.processRate - values.arriveRate, 2)) * this.emptyQueueProbability;
    }

    getWaitingTimeOnSystem(values){
        return (1 / values.processRate) + ((Math.pow(this.rate, values.channels) * values.processRate) / (Factorial.calculate(values.channels - 1) * Math.pow(values.channels * values.processRate - values.arriveRate, 2))) * this.emptyQueueProbability;
    }
}

export default GeneralMeasurements;