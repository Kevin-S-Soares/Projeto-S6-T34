import Factorial from "../../math/Factorial";

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
        let rate = values.arriveRate / values.processRate;
        let occupationRate = rate / values.channels;
        let emptyQueueProbability = this.getEmptyQueueProbability(values, rate);
        for(let i = 1; i <= 20; i++){
            let aux = emptyQueueProbability * Math.pow(rate, values.channels) / (Factorial.calculate(values.channels) * (1 - occupationRate)) * Math.pow(Math.E, -(values.channels * values.processRate - values.arriveRate) * i) ;
            result.push([i, aux.toFixed(8)]);
        }
        return result;
    }

    getEmptyQueueProbability(values, rate){
        let leftside = 0;
        for(let i = 0; i <= values.channels - 1; i++){
            let aux = Math.pow(rate, i) / Factorial.calculate(i);
            leftside += aux;
        }
        let rightside = (values.channels * Math.pow(rate, values.channels)) / (Factorial.calculate(values.channels) * (values.channels - rate)) ;
        return Math.pow(leftside + rightside, -1);

    }
}

export default WaitingOnQueue;