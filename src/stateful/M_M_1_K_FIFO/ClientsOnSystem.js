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
        let occupationRate = values.arriveRate / values.processRate;
        let formula;
        if(occupationRate === 1){
            formula = (state) => (values.capacity + 1 - state) / (values.capacity + 1);
        }
        else{
            formula = (state) => Math.pow(occupationRate, state) * (1 - Math.pow(occupationRate, values.capacity - state + 1)) / (1 - Math.pow(occupationRate, values.capacity + 1));
        }
        for(let i = 0; i <= values.capacity + 1; i++)
        {
            let aux = formula(i);
            result.push([i, aux]);
        }
        return result;
    }
}

export default ClientsOnSystem;