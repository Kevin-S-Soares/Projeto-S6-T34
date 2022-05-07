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
        let leftside = 0;
        let n = 0;
        for(; n <= values.capacity - 2; n++){
            leftside += this.getConstant(values, n + 1);
        }
        for(let t = 1; t <= 20; t++){
            let rightside = 0;
            for(let i = 0; i <= n; i++){
                rightside += Math.pow(values.processRate * t, i) / Factorial.calculate(i);
            }
            let aux = leftside * rightside * Math.pow(Math.E, -values.processRate * t);
            result.push([t, aux.toFixed(8)]);
        }
        return result;
    }

    getConstant(values, state){
        return this.getProbabilityOfChangingState(values, state) / (1 - this.getProbabilityOfChangingState(values, values.capacity));
    }

    getProbabilityOfChangingState(values, state){
        let arriveRate = state < values.capacity? values.arriveRate : 0;
        let occupationRate = arriveRate / values.processRate;
        if(occupationRate === 1){
            return 1 / (values.capacity + 1);
        }
        return ((1 - occupationRate) * Math.pow(occupationRate, state)) / (1 - Math.pow(occupationRate, values.capacity + 1));
    }
}

export default WaitingOnQueue;