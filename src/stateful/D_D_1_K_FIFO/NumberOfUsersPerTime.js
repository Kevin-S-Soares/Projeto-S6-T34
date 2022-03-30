class NumberOfUsersPerTime{
    constructor(){

        this.axisXInterval = 0;
        this.firstRejectedInstance = 0;
        this.maxXAxisInterval = 0;
        this.maxYAxisInterval = 0;
        this.queueFormation = null;
        this.systemCapacity = null;

        this.update = this.update.bind(this);
        this.getXAxisInterval = this.getXAxisInterval.bind(this);
        this.getFirstRejectedInstance = this.getFirstRejectedInstance.bind(this);
        this.getMaxXAxisInterval = this.getMaxXAxisInterval.bind(this);
        this.getMaxYAxisInterval = this.getMaxYAxisInterval.bind(this);
        this.getQueueFormation = this.getQueueFormation.bind(this);
        this.getSystemCapacity = this.getSystemCapacity.bind(this);
        this.getChartOptions = this.getChartOptions.bind(this);
    }

    update(values){
        this.axisXInterval = this.getXAxisInterval(values.arriveRate)
        this.firstRejectedInstance = this.getFirstRejectedInstance(values.arriveRate,
             values.processRate, values.capacity);
        this.maxXAxisInterval = this.getMaxXAxisInterval(values.arriveRate);
        this.maxYAxisInterval = this.getMaxYAxisInterval(values.capacity);
        this.queueFormation = this.getQueueFormation(values.arriveRate, values.processRate, values.capacity);
        this.systemCapacity = this.getSystemCapacity(values.capacity);
    }

    getXAxisInterval(arriveRate){
        return arriveRate;
    }

    getFirstRejectedInstance(arriveRate, processRate, capacity){
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

    getMaxXAxisInterval(arriveRate){
        return this.firstRejectedInstance + arriveRate * 6;
    }

    getMaxYAxisInterval(capacity){
        return capacity + 2;
    }

    getQueueFormation(arriveRate, processRate, capacity){
        const result = [];

        let nextCompleted = arriveRate + processRate;
      
        for (let i = 0; i < arriveRate; i++) {
          result.push([i, 0]);
        }
      
        let aux = 0;
        for (let i = arriveRate; i < this.firstRejectedInstance; i++) {
          if (i === nextCompleted) {
            aux--;
            nextCompleted += processRate;
          }
      
          if (i % arriveRate === 0) {
            aux++;
          }
          result.push([i, aux]);
        }
      
        aux = capacity;
        for (let i = this.firstRejectedInstance; i <= this.firstRejectedInstance + arriveRate * 6; i++) {
          if (i === nextCompleted) {
            aux--;
            nextCompleted += processRate;
          }
      
          if (i % arriveRate === 0 && aux < capacity) {
            aux++;
          }
          result.push([i, aux]);
        }

        return result;
    }

    getSystemCapacity(capacity){
        return [[0, capacity], [this.maxXAxisInterval, capacity]];
    }

    getChartOptions(values) {
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
                name: 'Tempo',
                interval: this.axisXInterval,
                min: 0,
                max: this.maxXAxisInterval,
                top: "2%",
            },
            yAxis: {
                type: 'value',
                name: 'Número de usuários',
                interval: 1,
                min: 0,
                max: this.maxYAxisInterval,
            },
            series: [
                {
                    name: 'Formação da fila',
                    color: 'blue',
                    data: this.queueFormation,
                    type: 'line',
                    smooth: true
                },
                {
                    name: 'Capacidade da fila',
                    color: 'red',
                    data: this.systemCapacity,
                    type: 'line',
                    smooth: true
                },
                /*
                {
                    name: 'Rejeitados',
                    data: [[35,6], [36, 7], [37, 6]],
                    color: 'purple',
                    type: 'line',
                    smooth: true
                }
                */
            ]
        });
    }

    getName(){
        return "Número de usuários em determinado tempo"
    }
}




export default NumberOfUsersPerTime;
