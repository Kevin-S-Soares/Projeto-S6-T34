class GeneralMeasurements {
    constructor(){
        this.ocupationRate = 0;
        this.emptyQueueProbability = 0;
        this.averageClientsNumber = 0;
        this.averageClientsOnQueue = 0;
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
                description: "Número médio de usuários no sistema:",
                value: this.getAverageClientsNumber(values).toFixed(3),
            },
            {
                description: "Número médio de usuários na fila:",
                value: this.getAverageClientsOnQueue().toFixed(3),
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
        this.occupationRate = values.arriveRate / values.processRate;
        return values.arriveRate / values.processRate;
    }

    getEmptyQueueProbability(values){
        if(this.ocupationRate === 1){
            this.emptyQueueProbability = 1 / (values.capacity + 1);
        }
        else{
            this.emptyQueueProbability = (1 - this.occupationRate) / (1 - Math.pow(this.occupationRate, values.capacity + 1));
        }
        return this.emptyQueueProbability;
    }

    getAverageClientsNumber(values){
        if(this.occupationRate === 1){
            this.averageClientsNumber = values.capacity / 2;
        }
        else{
            this.averageClientsNumber = this.occupationRate * (1 + values.capacity * Math.pow(this.occupationRate, values.capacity + 1) - Math.pow(this.occupationRate, values.capacity) * (values.capacity + 1)) / ((1 - this.occupationRate) * (1 - Math.pow(this.occupationRate, values.capacity + 1)));
        }
        return this.averageClientsNumber;
    }

    getAverageClientsOnQueue(){
        this.averageClientsOnQueue = this.averageClientsNumber - 1 + this.emptyQueueProbability;
        return this.averageClientsOnQueue;
    }



    getAverageWaitingTimeOnQueue(values){
        return this.averageClientsOnQueue / (values.arriveRate * (1 - this.getProbabilityOfChangingState(values, values.capacity)));
    }

    getWaitingTimeOnSystem(values){
        return this.averageClientsNumber / (values.arriveRate * (1 - this.getProbabilityOfChangingState(values, values.capacity))) ; 
    }

    getProbabilityOfChangingState(values, state){
        if(this.occupationRate === 1){
            return 1 / (values.capacity + 1);
        }
        return ((1 - this.occupationRate) * Math.pow(this.occupationRate, state))/ (1 - Math.pow(this.occupationRate, values.capacity + 1));
    }
}

export default GeneralMeasurements;