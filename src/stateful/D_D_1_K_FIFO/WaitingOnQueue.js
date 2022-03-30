class WaitingOnQueue{
    constructor(){

        this.firstRejectedIstance = 0;
        this.firstRejectedPlace = 0;
        this.maxXAxisInterval = 0;
        this.yAxisInterval = 0;
        this.maxYAxisInterval = 0;
        this.maxQueueTime = 0;
        this.waitingTimes = [];

        this.getFirstRejectedIstance = this.getFirstRejectedIstance.bind(this);
        this.getFirstRejectedPlace = this.getFirstRejectedPlace.bind(this);
        this.getMaxXAxisInterval = this.getMaxXAxisInterval.bind(this);
        this.getYAxisInterval = this.getYAxisInterval.bind(this);
        this.getMaxYAxisInterval = this.getMaxYAxisInterval.bind(this);
        this.getMaxQueueTime = this.getMaxQueueTime.bind(this);
        this.getWaitingTimes = this.getWaitingTimes.bind(this);
    }

    update(values){
        this.firstRejectedIstance = this.getFirstRejectedIstance(values.arriveRate, values.processRate, values.capacity);
        this.firstRejectedPlace = this.getFirstRejectedPlace(values.arriveRate);
        this.maxXAxisInterval = this.getMaxXAxisInterval();
        this.yAxisInterval = this.getYAxisInterval(values.arriveRate);
        this.maxYAxisInterval = this.getMaxYAxisInterval(values.arriveRate, values.processRate, values.capacity);
        this.maxQueueTime = this.getMaxQueueTime(values.arriveRate, values.processRate, values.capacity);
        this.waitingTimes = this.getWaitingTimes(values.arriveRate, values.processRate);
    }

    getFirstRejectedPlace(arriveRate){
        return this.firstRejectedIstance / arriveRate;
    }

    getFirstRejectedIstance(arriveRate, processRate, capacity){
        if(arriveRate >= processRate){
            return -1;
        }
        
        let aux = 0;
        let result = 0;

        for(let i = arriveRate; aux < capacity + 1; i += arriveRate){
            aux = Math.floor(i / arriveRate) - Math.floor((i - arriveRate) / processRate);
            result = i;
        }

        return result;
    }

    getMaxXAxisInterval(){
        return this.firstRejectedPlace - 1;
    }

    getYAxisInterval(arriveRate){
        return arriveRate;
    }

    getMaxYAxisInterval(arriveRate, processRate, capacity){
        return Math.ceil((capacity - 1) * processRate / arriveRate) * arriveRate + arriveRate;
    }

    getMaxQueueTime(arriveRate, processRate){
        let aux = (processRate - arriveRate) * (this.firstRejectedPlace - 2);
        return [[0, aux], [this.maxYAxisInterval, aux]];
    }

    getWaitingTimes(arriveRate, processRate){
        const result = [];
        for(let i = 1; i <= this.firstRejectedPlace - 1; i++){
            let aux = (processRate - arriveRate) * (i - 1);
            result.push([i, aux])
        }
        console.log(result);
        return result;
    }

    getName(){
        return "Tempo de espera do k-ésimo usuário da fila"
    }

    getChartOptions(values){
        this.update(values);
        return ({
            legend: {
                show: true,
                align: 'right',
                top: "2%"
            },
            tooltip: {
                trigger: 'axis',
            },
            xAxis: {
                type: 'value',
                name: 'Ordem do usuário',
                interval: 1,
                min: 1,
                max: this.maxXAxisInterval, // ok
                top: "2%",
            },
            yAxis: {
                type: 'value',
                name: 'Tempo de espera',
                interval: this.yAxisInterval, // ok
                min: 0,
                max: this.maxYAxisInterval, // ok
            },
            series: [
                {
                    name: 'Tempo máximo na fila',
                    color: 'red',
                    data: this.maxQueueTime, // ok
                    type: 'line',
                    smooth: true
                },
                {
                    name: 'K-ésimo usuário da fila',
                    color: 'blue',
                    data: this.waitingTimes, //
                    type: 'line',
                    smooth: true
                },
            ]
        });
    }

    /*
        function wq(arriveRate, processRate, capacity, n, firstRejectedPlace){
            if(n < firstRejectedPlace){
                return (processRate - arriveRate) * (n - 1);
            }
            return (capacity - 1) * mu;
        }
    */
}

export default WaitingOnQueue;