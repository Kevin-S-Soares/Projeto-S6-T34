class WaitingOnQueue{
    getName(){
        return "Probabilidade do tempo de espera na fila ser maior do que um tempo t";
    }

    getChartOptions(values){
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
                interval: 1,
                min: 1,
                max: 20,
                top: "2%",
            },
            yAxis: {
                type: 'value',
                name: 'Probabilidade',
                interval: 0.1, 
                min: 0,
                max: 1,
            },
            series: [{
                name: 'Tempo de espera',
                color: 'blue',
                data: this.getData(values),
                type: 'line',
                smooth: true
            }]
        });
    }

    getData(values){
        const result = [];
        let occupationRate = values.arriveRate / values.processRate;
        for(let i = 1; i <= 20; i++){
            let aux = occupationRate * Math.pow(Math.E, -(values.processRate - values.arriveRate) * i);
            result.push([i, aux.toFixed(8)]);
        }
        return result;
    }
}

export default WaitingOnQueue;