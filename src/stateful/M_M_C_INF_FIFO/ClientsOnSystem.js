import Factorial from "../../math/Factorial";

class ClientsOnSystem{
    getName(){
        return "Probabilidade de haver pelo menos k elementos no sistema";
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
                name: 'Número de clientes no sistema',
                interval: 1,
                min: 0,
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
                name: 'Número de clientes no sistema',
                color: 'blue',
                data: this.getData(values),
                type: 'line',
                smooth: true
            }]
        });
    }
    getData(values){
        const result = [];
        let emptyQueueProbability = this.getEmptyQueueProbability(values);
        let amount = 0;
        let aux = 0;
        for(let i = 0; i <= 20; i++)
        {
            if(i === 0){
                aux = 1;
                amount += emptyQueueProbability;
            }
            else{
                aux = 1 - amount;
                amount += this.getElementQueueProbability(emptyQueueProbability, i, values);
            }
            result.push([i, aux])
        }
        return result;
    }

    getEmptyQueueProbability(values){
        let rate = values.arriveRate / values.processRate;
        let leftside = 0;
        for(let i = 0; i < values.channels; i++){
            let aux = Math.pow(rate, i) / Factorial.calculate(i);
            leftside += aux;
        }
        let rightside = (values.channels * Math.pow(rate, values.channels)) / (Factorial.calculate(values.channels) * (values.channels - rate));
        return Math.pow(leftside + rightside, -1);
    }

    getElementQueueProbability(emptyQueueProbability, state, values){
        let rate = values.arriveRate / values.processRate;
        if(state < values.channels){
            return emptyQueueProbability * Math.pow(rate, state) / Factorial.calculate(state);
        }
        return emptyQueueProbability * Math.pow(rate, state) / (Math.pow(values.channels, state - values.channels) * Factorial.calculate(values.channels));
    }
}

export default ClientsOnSystem;