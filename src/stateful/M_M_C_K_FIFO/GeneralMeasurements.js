import Factorial from "../../math/Factorial";

class GeneralMeasurements {
    constructor(){
        this.rate = 0;
        this.occupationRate = 0;
        this.emptyQueueProbability = 0;
        this.averageClientsOnQueue = 0;
        this.averageClientsOnSystem = 0;
    }

    getResult(values){
        return [
            {
                description: "Taxa de ocupação do sistema:",
                value: this.getOccupationRate(values).toFixed(3),
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

    getOccupationRate(values){
        this.rate = values.arriveRate / values.processRate;
        this.occupationRate = this.rate / values.channels;
        return this.occupationRate;
    }

    getEmptyQueueProbability(values){
        let result = 0;
        let leftside = 0;
        for(let i = 0; i <= values.channels - 1; i++){
            leftside += Math.pow(this.rate, i) / Factorial.calculate(i);
        }
        let rightside = 0;
        if(this.occupationRate === 1){
            rightside = (Math.pow(this.rate, values.channels) * (values.capacity - values.channels + 1)) / Factorial.calculate(values.channels);

        }
        else{
            rightside = (Math.pow(this.rate, values.channels) * (1 - Math.pow(this.occupationRate, values.capacity - values.channels + 1))) / (Factorial.calculate(values.channels) * (1 - this.occupationRate));
        }
        let aux = leftside + rightside;
        result = Math.pow(aux, -1);
        this.emptyQueueProbability = result;
        return this.emptyQueueProbability;
    }

    getAverageClientsNumber(values){
        let rightside = 0;
        for(let i = 0; i <= values.channels - 1; i++){
            rightside += (i - values.channels) * this.getProbabilityOfChangingState(values, i);
        }
        this.averageClientsOnSystem = this.averageClientsOnQueue + values.channels + rightside;
        return this.averageClientsOnSystem;
    }

    getAverageClientsOnQueue(values){
        let result = 0;
        if(this.occupationRate === 1){
            let leftside = (this.emptyQueueProbability * Math.pow(this.rate, values.channels)) / (Factorial.calculate(values.channels) * values.channels);
            let rightside = ((values.capacity - values.channels + 1) * (values.capacity - values.channels)) / 2;
            result = leftside * rightside;
        }
        else{
            let leftside = (this.emptyQueueProbability * Math.pow(this.rate, values.channels + 1)) / (Factorial.calculate(values.channels) * values.channels);
            let rightside = ((this.occupationRate - 1) * (values.capacity - values.channels + 1) * Math.pow(this.occupationRate, values.capacity - values.channels) + 1 - Math.pow(this.occupationRate, values.capacity - values.channels + 1)) / Math.pow(1 - this.occupationRate, 2);
            result = leftside * rightside;
        }

        this.averageClientsOnQueue = result;
        return this.averageClientsOnQueue;
    }



    getAverageWaitingTimeOnQueue(values){
        return this.averageClientsOnQueue / ( values.arriveRate * (1 - this.getProbabilityOfChangingState(values, values.capacity)));
    }

    getWaitingTimeOnSystem(values){
        return this.averageClientsOnSystem / ( values.arriveRate * (1 - this.getProbabilityOfChangingState(values, values.capacity)));
    }

    getProbabilityOfChangingState(values, state){
        if(state <= values.channels - 1){
            return Math.pow(this.rate, state) / Factorial.calculate(state) * this.emptyQueueProbability;
        }
        return Math.pow(this.rate, state) / (Factorial.calculate(values.channels) * Math.pow(values.channels, state - values.channels)) * this.emptyQueueProbability;
    }
}

export default GeneralMeasurements;