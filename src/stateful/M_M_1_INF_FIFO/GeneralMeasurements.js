class GeneralMeasurements {
    constructor(){
        this.ocupationRate = 0;
    }
    getResult(values){
        return [
            {
                description: "Taxa de ocupação do sistema:",
                value: this.getOcupationRate(values).toFixed(2),
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

    getOcupationRate(values){
        this.ocupationRate = values.arriveRate / values.processRate;
        return this.ocupationRate;
    }

    getAverageClientsNumber(){
        return this.ocupationRate / (1 - this.ocupationRate);
    }

    getAverageClientsOnQueue(){
        return this.ocupationRate * this.ocupationRate / (1 - this.ocupationRate);
    }

    getEmptyQueueProbability(){
        return 1 - this.ocupationRate;
    }

    getAverageWaitingTimeOnQueue(values){
        return this.ocupationRate / (values.processRate - values.arriveRate);
    }

    getWaitingTimeOnSystem(values){
        return 1 / (values.processRate - values.arriveRate);
    }
}

export default GeneralMeasurements;