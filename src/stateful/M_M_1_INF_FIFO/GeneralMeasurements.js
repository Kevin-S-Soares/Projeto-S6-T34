class GeneralMeasurements {
    constructor(){
        this.occupationRate = 0;
    }
    getResult(values){
        return [
            {
                description: "Taxa de ocupação do sistema:",
                value: this.getOccupationRate(values).toFixed(2),
            },
            {
                description: "Número médio de usuários no sistema:",
                value: this.getAverageClientsNumber().toFixed(2),
            },
            {
                description: "Número médio de usuários na fila:",
                value: this.getAverageClientsOnQueue().toFixed(2),
            },
            {
                description: "Probabilidade do sistema estar vazio:",
                value: this.getEmptyQueueProbability().toFixed(2),
            },
            {
                description: "Tempo médio de espera de qualquer usuário na fila:",
                value: this.getAverageWaitingTimeOnQueue(values).toFixed(2),
            },
            {
                description: "Tempo médio de permanência de qualquer usuário no sistema:", 
                value: this.getWaitingTimeOnSystem(values).toFixed(2),
            }
        ]
    }

    getOccupationRate(values){
        this.occupationRate = values.arriveRate / values.processRate;
        return this.occupationRate;
    }

    getAverageClientsNumber(){
        return this.occupationRate / (1 - this.occupationRate);
    }

    getAverageClientsOnQueue(){
        return this.occupationRate * this.occupationRate / (1 - this.occupationRate);
    }

    getEmptyQueueProbability(){
        return 1 - this.occupationRate;
    }

    getAverageWaitingTimeOnQueue(values){
        return this.occupationRate / (values.processRate - values.arriveRate);
    }

    getWaitingTimeOnSystem(values){
        return 1 / (values.processRate - values.arriveRate);
    }
}

export default GeneralMeasurements;