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
                max: values.capacity + 1,
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
        for(let i = 0; i <= values.capacity; i++)
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
        result.push([values.capacity + 1, 0]);
        return result;
    }

    getEmptyQueueProbability(values){
        let occupationRate = values.arriveRate / values.processRate;
        let rate = occupationRate / values.channels;

        let result = 0;
        let leftside = 0;
        for(let i = 0; i <= values.channels - 1; i++){
            leftside += Math.pow(rate, i) / Factorial.calculate(i);
        }
        let rightside = 0;
        if(occupationRate === 1){
            rightside = (Math.pow(rate, values.channels) * (values.capacity - values.channels + 1)) / Factorial.calculate(values.channels);

        }
        else{
            rightside = (Math.pow(rate, values.channels) * (1 - Math.pow(occupationRate, values.capacity - values.channels + 1))) / (Factorial.calculate(values.channels) * (1 - occupationRate));
        }
        let aux = leftside + rightside;
        result = Math.pow(aux, -1);
        return result
    }

    getElementQueueProbability(emptyQueueProbability, state, values){
        let rate = values.arriveRate / values.processRate / values.channels;
        if(state <= values.channels - 1){
            return Math.pow(rate, state) / Factorial.calculate(state) * emptyQueueProbability;
        }
        return Math.pow(rate, state) / (Factorial.calculate(values.channels) * Math.pow(values.channels, state - values.channels)) * emptyQueueProbability;
    }
}

export default ClientsOnSystem;